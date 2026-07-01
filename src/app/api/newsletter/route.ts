import { NextResponse } from "next/server";
import {
  formatZodErrors,
  newsletterSchema,
  roomSizeLabels,
  type NewsletterResponse,
} from "@/lib/newsletter";

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json<NewsletterResponse>(
      {
        ok: false,
        message: "Dữ liệu gửi lên không đúng định dạng JSON.",
      },
      { status: 400 },
    );
  }

  const parsed = newsletterSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json<NewsletterResponse>(
      {
        ok: false,
        message: "Vui lòng kiểm tra lại thông tin.",
        errors: formatZodErrors(parsed.error),
      },
      { status: 422 },
    );
  }

  const payload = {
    ...parsed.data,
    roomSizeLabel: roomSizeLabels[parsed.data.roomSize],
    source: "pure-flow-landing-page",
    submittedAt: new Date().toISOString(),
  };

  const webhookUrl = process.env.WEBHOOK_URL;

  if (webhookUrl) {
    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        return NextResponse.json<NewsletterResponse>(
          {
            ok: false,
            message: "Webhook chưa nhận được dữ liệu. Vui lòng thử lại sau.",
            forwarded: false,
          },
          { status: 502 },
        );
      }

      return NextResponse.json<NewsletterResponse>({
        ok: true,
        message: "Đã gửi thông tin tư vấn thành công.",
        forwarded: true,
      });
    } catch {
      return NextResponse.json<NewsletterResponse>(
        {
          ok: false,
          message: "Không thể kết nối webhook. Vui lòng thử lại sau.",
          forwarded: false,
        },
        { status: 502 },
      );
    }
  }

  return NextResponse.json<NewsletterResponse>({
    ok: true,
    message:
      "Đã xác thực thông tin thành công. Thêm WEBHOOK_URL để forward dữ liệu.",
    forwarded: false,
  });
}
