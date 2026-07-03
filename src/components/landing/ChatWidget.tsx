"use client";

import { Bot, MessageCircle, Send, X } from "lucide-react";
import { useMemo, useState } from "react";
import { trackEvent } from "@/lib/analytics";

type Message = {
  role: "assistant" | "user";
  content: string;
};

const suggestions = [
  "Phòng 20-40m² nên dùng chế độ nào?",
  "Bao lâu cần thay bộ lọc?",
  "Máy có ồn khi ngủ không?",
];

function getReply(input: string) {
  const normalized = input.toLowerCase();

  if (normalized.includes("lọc") || normalized.includes("thay")) {
    return "Bộ lọc HEPA H13 + than hoạt tính được Pure Flow dự báo tuổi thọ theo mức ô nhiễm thật. Với phòng dùng hằng ngày, bạn có thể kiểm tra cảnh báo Smart Filter Care trên app.";
  }

  if (normalized.includes("ồn") || normalized.includes("ngủ")) {
    return "Chế độ Sleep giữ độ ồn khoảng 22 dB và tự giảm ánh sáng màn hình khi phòng tối, phù hợp phòng ngủ hoặc phòng trẻ nhỏ.";
  }

  if (
    normalized.includes("20") ||
    normalized.includes("40") ||
    normalized.includes("diện tích") ||
    normalized.includes("phòng")
  ) {
    return "Với phòng 20-40m², Auto mode là lựa chọn cân bằng. Khi nấu ăn hoặc vừa dọn phòng, bạn có thể chuyển Focus mode để lọc nhanh hơn.";
  }

  if (normalized.includes("giá") || normalized.includes("mua")) {
    return "Landing page này là concept cho bài test. Bạn có thể để lại thông tin ở form tư vấn để đội ngũ giả lập gửi cấu hình và ưu đãi phù hợp.";
  }

  return "Pure Flow tập trung vào ba điểm: cảm biến PM2.5/VOC thời gian thực, AI tự tối ưu công suất lọc và chế độ ngủ yên tĩnh. Bạn muốn tư vấn theo diện tích phòng nào?";
}

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Chào bạn, mình có thể tư vấn nhanh về Pure Flow theo diện tích phòng, độ ồn hoặc bộ lọc.",
    },
  ]);

  const lastAssistantMessage = useMemo(
    () => messages.findLast((message) => message.role === "assistant"),
    [messages],
  );

  function toggleOpen() {
    const nextOpen = !isOpen;
    setIsOpen(nextOpen);
    trackEvent("cta_click", {
      target: nextOpen ? "chat_open" : "chat_close",
    });
  }

  function submitMessage(value: string) {
    const trimmed = value.trim();

    if (!trimmed) {
      return;
    }

    setMessages((current) => [
      ...current,
      { role: "user", content: trimmed },
      { role: "assistant", content: getReply(trimmed) },
    ]);
    setInput("");
    trackEvent("cta_click", { target: "chat_message" });
  }

  return (
    <div className="fixed bottom-4 right-4 z-40 sm:bottom-5 sm:right-5">
      {isOpen ? (
        <section className="mb-3 w-[calc(100vw-2rem)] max-w-[340px] overflow-hidden rounded-[1.75rem] border border-border bg-surface shadow-[0_28px_90px_rgba(20,108,92,0.22)]">
          <header className="flex items-center justify-between border-b border-border bg-surface-muted px-4 py-3">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Bot size={18} />
              </span>
              <div>
                <p className="text-sm font-semibold text-foreground">
                  Pure Flow Assistant
                </p>
                <p className="text-xs text-muted">Tư vấn tự động</p>
              </div>
            </div>
            <button
              type="button"
              aria-label="Đóng chatbot"
              onClick={toggleOpen}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-surface text-muted transition-colors hover:text-foreground"
            >
              <X size={17} />
            </button>
          </header>

          <div className="max-h-[360px] space-y-3 overflow-y-auto px-4 py-4">
            {messages.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                className={
                  message.role === "user"
                    ? "ml-auto max-w-[86%] rounded-3xl bg-primary px-4 py-3 text-sm leading-6 text-primary-foreground"
                    : "max-w-[90%] rounded-3xl bg-surface-muted px-4 py-3 text-sm leading-6 text-foreground"
                }
              >
                {message.content}
              </div>
            ))}
          </div>

          <div className="border-t border-border p-3">
            <div className="mb-3 flex gap-2 overflow-x-auto pb-1">
              {suggestions.map((suggestion) => (
                <button
                  key={suggestion}
                  type="button"
                  onClick={() => submitMessage(suggestion)}
                  className="shrink-0 rounded-full border border-border bg-surface-muted px-3 py-2 text-xs font-medium text-muted transition-colors hover:text-foreground"
                >
                  {suggestion}
                </button>
              ))}
            </div>

            <form
              className="flex items-center gap-2"
              onSubmit={(event) => {
                event.preventDefault();
                submitMessage(input);
              }}
            >
              <input
                aria-label="Nhập câu hỏi tư vấn"
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Nhập câu hỏi..."
                className="h-11 min-w-0 flex-1 rounded-full border border-border bg-background px-4 text-sm outline-none transition-shadow focus:shadow-[0_0_0_4px_rgba(47,185,160,0.18)]"
              />
              <button
                type="submit"
                aria-label="Gửi câu hỏi"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform active:scale-[0.96]"
              >
                <Send size={16} />
              </button>
            </form>

            {lastAssistantMessage ? (
              <p className="sr-only">{lastAssistantMessage.content}</p>
            ) : null}
          </div>
        </section>
      ) : null}

      <button
        type="button"
        aria-label="Mở chatbot tư vấn"
        onClick={toggleOpen}
        className="group flex h-12 items-center gap-2.5 rounded-full bg-primary px-4 text-sm font-semibold text-primary-foreground shadow-[0_18px_55px_rgba(20,108,92,0.24)] transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-0.5 active:scale-[0.98] sm:h-13 sm:px-5"
      >
        <MessageCircle size={19} />
        Tư vấn nhanh
      </button>
    </div>
  );
}
