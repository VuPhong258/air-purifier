"use client";

import { ArrowRight, Loader2 } from "lucide-react";
import { useState, type FormEvent } from "react";
import {
  formatZodErrors,
  newsletterSchema,
  roomSizeLabels,
  type NewsletterInput,
  type NewsletterResponse,
} from "@/lib/newsletter";
import { useToast } from "@/components/ui/ToastProvider";
import { trackEvent } from "@/lib/analytics";

const initialValues: NewsletterInput = {
  fullName: "",
  email: "",
  phone: "",
  roomSize: "20-40",
  message: "",
};

export function NewsletterForm() {
  const [values, setValues] = useState<NewsletterInput>(initialValues);
  const [errors, setErrors] = useState<
    Partial<Record<keyof NewsletterInput, string>>
  >({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { showToast } = useToast();

  function updateField<K extends keyof NewsletterInput>(
    field: K,
    value: NewsletterInput[K],
  ) {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const parsed = newsletterSchema.safeParse(values);

    if (!parsed.success) {
      const nextErrors = formatZodErrors(parsed.error);
      setErrors(nextErrors);
      trackEvent("form_submit_error", { reason: "client_validation" });
      showToast("error", "Vui lòng kiểm tra lại thông tin trước khi gửi.");
      return;
    }

    setIsSubmitting(true);
    trackEvent("form_submit", { roomSize: parsed.data.roomSize });

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(parsed.data),
      });
      const result = (await response.json()) as NewsletterResponse;

      if (!response.ok || !result.ok) {
        setErrors(result.errors ?? {});
        trackEvent("form_submit_error", {
          reason: "api_error",
          status: response.status,
        });
        showToast("error", result.message);
        return;
      }

      trackEvent("form_submit_success", {
        forwarded: Boolean(result.forwarded),
      });
      showToast("success", result.message);
      setValues(initialValues);
      setErrors({});
    } catch {
      trackEvent("form_submit_error", { reason: "network_error" });
      showToast("error", "Không thể gửi thông tin. Vui lòng thử lại sau.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-3.5 rounded-xl bg-primary-foreground p-4 text-foreground sm:p-5"
      noValidate
    >
      <div className="grid gap-3 sm:grid-cols-2">
        <FieldError message={errors.fullName}>
          <input
            aria-label="Họ và tên"
            aria-invalid={Boolean(errors.fullName)}
            placeholder="Họ và tên"
            value={values.fullName}
            onChange={(event) => updateField("fullName", event.target.value)}
            className="h-11 w-full rounded-xl border border-border bg-surface px-4 text-sm outline-none transition-shadow focus:shadow-[0_0_0_4px_rgba(47,185,160,0.18)]"
          />
        </FieldError>
        <FieldError message={errors.email}>
          <input
            aria-label="Email"
            aria-invalid={Boolean(errors.email)}
            placeholder="Email"
            type="email"
            value={values.email}
            onChange={(event) => updateField("email", event.target.value)}
            className="h-11 w-full rounded-xl border border-border bg-surface px-4 text-sm outline-none transition-shadow focus:shadow-[0_0_0_4px_rgba(47,185,160,0.18)]"
          />
        </FieldError>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <FieldError message={errors.phone}>
          <input
            aria-label="Số điện thoại"
            aria-invalid={Boolean(errors.phone)}
            placeholder="Số điện thoại"
            inputMode="tel"
            value={values.phone}
            onChange={(event) => updateField("phone", event.target.value)}
            className="h-11 w-full rounded-xl border border-border bg-surface px-4 text-sm outline-none transition-shadow focus:shadow-[0_0_0_4px_rgba(47,185,160,0.18)]"
          />
        </FieldError>
        <FieldError message={errors.roomSize}>
          <select
            aria-label="Diện tích phòng"
            aria-invalid={Boolean(errors.roomSize)}
            value={values.roomSize}
            onChange={(event) =>
              updateField(
                "roomSize",
                event.target.value as NewsletterInput["roomSize"],
              )
            }
            className="h-11 w-full rounded-xl border border-border bg-surface px-4 text-sm outline-none transition-shadow focus:shadow-[0_0_0_4px_rgba(47,185,160,0.18)]"
          >
            {Object.entries(roomSizeLabels).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </FieldError>
      </div>

      <FieldError message={errors.message}>
        <textarea
          aria-label="Nhu cầu tư vấn"
          aria-invalid={Boolean(errors.message)}
          placeholder="Nhu cầu tư vấn"
          rows={4}
          value={values.message}
          onChange={(event) => updateField("message", event.target.value)}
          className="w-full resize-none rounded-xl border border-border bg-surface px-4 py-3 text-sm outline-none transition-shadow focus:shadow-[0_0_0_4px_rgba(47,185,160,0.18)]"
        />
      </FieldError>

      <button
        type="submit"
        data-track="newsletter_submit"
        disabled={isSubmitting}
        className="group inline-flex h-11 items-center justify-center gap-2.5 rounded-full bg-foreground px-5 text-sm font-semibold text-background transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSubmitting ? "Đang gửi" : "Gửi thông tin"}
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-background/12 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-1">
          {isSubmitting ? (
            <Loader2 size={15} className="animate-spin" />
          ) : (
            <ArrowRight size={15} />
          )}
        </span>
      </button>
    </form>
  );
}

function FieldError({
  children,
  message,
}: {
  children: React.ReactNode;
  message?: string;
}) {
  return (
    <label className="block">
      {children}
      {message ? (
        <span className="mt-1.5 block text-xs font-medium text-red-600">
          {message}
        </span>
      ) : null}
    </label>
  );
}
