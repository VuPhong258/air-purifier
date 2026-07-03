export type SubmissionPayload = {
  fullName: string;
  email: string;
  phone: string;
  roomSize: string;
  roomSizeLabel: string;
  message: string;
  source: string;
  submittedAt: string;
};

export type ForwardResult =
  | { ok: true; forwarded: true }
  | { ok: false; message: string; forwarded: false };

type GasResponse = {
  ok?: boolean;
  message?: string;
};

function parseGasResponse(raw: string): GasResponse | null {
  const trimmed = raw.trim();

  if (trimmed.startsWith("{")) {
    try {
      return JSON.parse(trimmed) as GasResponse;
    } catch {
      return null;
    }
  }

  const monoMatch = raw.match(
    /<div[^>]*font-family:monospace[^>]*>([^<]+)<\/div>/i,
  );

  if (monoMatch?.[1]) {
    const gasError = monoMatch[1].trim();

    if (/doPost/i.test(gasError)) {
      return {
        ok: false,
        message:
          "Apps Script chưa có hàm doPost. Dán scripts/google-sheets/Code.gs, lưu, rồi Deploy → New deployment (Web app).",
      };
    }

    return { ok: false, message: gasError };
  }

  if (/doPost/i.test(raw)) {
    return {
      ok: false,
      message:
        "Apps Script chưa có hàm doPost. Dán scripts/google-sheets/Code.gs, lưu, rồi Deploy → New deployment (Web app).",
    };
  }

  if (/sign in|đăng nhập|authorization/i.test(raw)) {
    return {
      ok: false,
      message:
        "Apps Script chưa được authorize hoặc quyền truy cập chưa đặt là Anyone.",
    };
  }

  return null;
}

export async function forwardToGoogleSheets(
  payload: SubmissionPayload,
): Promise<ForwardResult> {
  const webAppUrl = process.env.GOOGLE_SHEETS_WEB_APP_URL;

  if (!webAppUrl) {
    return {
      ok: false,
      message:
        "Chưa cấu hình GOOGLE_SHEETS_WEB_APP_URL. Xem scripts/google-sheets/Code.gs.",
      forwarded: false,
    };
  }

  const secret = process.env.GOOGLE_SHEETS_SECRET;

  try {
    const response = await fetch(webAppUrl, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        ...payload,
        ...(secret ? { secret } : {}),
      }),
      redirect: "follow",
    });

    const raw = await response.text();
    const result = parseGasResponse(raw);

    if (!result) {
      return {
        ok: false,
        message:
          "Google Sheets trả về phản hồi không hợp lệ. Kiểm tra lại URL deploy /exec và deploy Web app mới.",
        forwarded: false,
      };
    }

    if (!result.ok) {
      return {
        ok: false,
        message: result.message ?? "Google Sheets từ chối bản ghi.",
        forwarded: false,
      };
    }

    return { ok: true, forwarded: true };
  } catch {
    return {
      ok: false,
      message: "Không thể kết nối Google Sheets. Vui lòng thử lại sau.",
      forwarded: false,
    };
  }
}
