import { NextResponse } from "next/server";
import { forwardToGoogleSheets } from "@/lib/google-sheets";
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

  const webAppUrl = process.env.GOOGLE_SHEETS_WEB_APP_URL;

  if (!webAppUrl) {
    return NextResponse.json<NewsletterResponse>({
      ok: true,
      message:
        "Đã xác thực thông tin thành công. Thêm GOOGLE_SHEETS_WEB_APP_URL để lưu vào Google Sheets.",
      forwarded: false,
    });
  }

  const result = await forwardToGoogleSheets(payload);

  if (!result.ok) {
    return NextResponse.json<NewsletterResponse>(
      {
        ok: false,
        message: result.message,
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
}
