/**
 * Pure Flow — Google Sheets intake (Apps Script)
 *
 * Setup:
 * 1. Create a Google Sheet with a tab named "Submissions".
 * 2. Row 1 headers: Timestamp | Full Name | Email | Phone | Room Size | Message | Source
 * 3. Extensions → Apps Script → paste this file.
 * 4. Project Settings → Script properties → add SHEETS_SECRET (any random string).
 * 5. Deploy → New deployment → Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 6. Mở URL /exec trên trình duyệt — phải thấy {"ok":true,...}
 * 7. Copy the /exec URL into GOOGLE_SHEETS_WEB_APP_URL (.env.local + Vercel).
 *
 * QUAN TRỌNG: Sau khi sửa code, phải Deploy → Manage deployments → Edit → New version
 * (hoặc New deployment). Chỉ Save không cập nhật URL đang chạy.
 */

const SHEET_NAME = "Submissions";

/** Mở URL /exec trên trình duyệt — nếu thấy {"ok":true} là deploy đúng. */
function doGet() {
  return jsonResponse({ ok: true, message: "Pure Flow intake is live." });
}

function doPost(e) {
  try {
    const secret = PropertiesService.getScriptProperties().getProperty("SHEETS_SECRET");

    if (!e.postData || !e.postData.contents) {
      return jsonResponse({ ok: false, message: "Missing request body." }, 400);
    }

    const payload = JSON.parse(e.postData.contents);

    if (secret && payload.secret !== secret) {
      return jsonResponse({ ok: false, message: "Unauthorized." }, 401);
    }

    const sheet = getOrCreateSheet_();
    ensureHeaders_(sheet);

    sheet.appendRow([
      payload.submittedAt || new Date().toISOString(),
      payload.fullName || "",
      payload.email || "",
      payload.phone || "",
      payload.roomSizeLabel || payload.roomSize || "",
      payload.message || "",
      payload.source || "pure-flow-landing-page",
    ]);

    return jsonResponse({ ok: true, message: "Row appended." });
  } catch (error) {
    return jsonResponse(
      {
        ok: false,
        message: error instanceof Error ? error.message : "Unknown error.",
      },
      500,
    );
  }
}

function getOrCreateSheet_() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = spreadsheet.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = spreadsheet.insertSheet(SHEET_NAME);
  }

  return sheet;
}

function ensureHeaders_(sheet) {
  if (sheet.getLastRow() > 0) {
    return;
  }

  sheet.appendRow([
    "Timestamp",
    "Full Name",
    "Email",
    "Phone",
    "Room Size",
    "Message",
    "Source",
  ]);
  sheet.getRange(1, 1, 1, 7).setFontWeight("bold");
}

function jsonResponse(body, statusCode) {
  const output = ContentService.createTextOutput(JSON.stringify(body)).setMimeType(
    ContentService.MimeType.JSON,
  );

  if (statusCode) {
    // Apps Script Web Apps don't expose HTTP status codes directly;
    // the Next.js API interprets the JSON `ok` field instead.
  }

  return output;
}
