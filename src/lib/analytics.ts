export type AnalyticsEventName =
  | "cta_click"
  | "form_submit"
  | "form_submit_success"
  | "form_submit_error"
  | "scroll_depth"
  | "theme_change";

export type AnalyticsPayload = Record<string, string | number | boolean>;

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

export function trackEvent(
  event: AnalyticsEventName,
  payload: AnalyticsPayload = {},
) {
  if (typeof window === "undefined") {
    return;
  }

  const entry = {
    event,
    ...payload,
    timestamp: new Date().toISOString(),
  };

  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push(entry);

  if (process.env.NODE_ENV === "development") {
    console.info("[analytics]", entry);
  }
}
