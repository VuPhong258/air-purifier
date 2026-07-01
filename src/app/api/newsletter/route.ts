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
        message: "Du lieu gui len khong dung dinh dang JSON.",
      },
      { status: 400 },
    );
  }

  const parsed = newsletterSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json<NewsletterResponse>(
      {
        ok: false,
        message: "Vui long kiem tra lai thong tin.",
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
            message: "Webhook chua nhan duoc du lieu. Vui long thu lai sau.",
            forwarded: false,
          },
          { status: 502 },
        );
      }

      return NextResponse.json<NewsletterResponse>({
        ok: true,
        message: "Da gui thong tin tu van thanh cong.",
        forwarded: true,
      });
    } catch {
      return NextResponse.json<NewsletterResponse>(
        {
          ok: false,
          message: "Khong the ket noi webhook. Vui long thu lai sau.",
          forwarded: false,
        },
        { status: 502 },
      );
    }
  }

  return NextResponse.json<NewsletterResponse>({
    ok: true,
    message:
      "Da xac thuc thong tin thanh cong. Them WEBHOOK_URL de forward du lieu.",
    forwarded: false,
  });
}
