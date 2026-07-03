import { NewsletterForm } from "./NewsletterForm";
import { Reveal } from "./Reveal";

export function NewsletterSection() {
  return (
    <section
      id="newsletter"
      className="scroll-mt-20 px-4 py-16 sm:px-6 lg:py-20"
    >
      <Reveal>
        <div className="mx-auto max-w-7xl rounded-2xl border border-border bg-surface-muted p-1.5">
          <div className="grid gap-8 rounded-[calc(1rem-0.125rem)] bg-primary p-5 text-primary-foreground sm:p-7 lg:grid-cols-[0.85fr_1fr] lg:p-9">
            <div>
              <p className="text-xs font-semibold text-primary-foreground/80">
                Đăng ký nhận tin
              </p>
              <h2 className="mt-3 text-2xl font-semibold leading-snug sm:text-3xl">
                Cần tính diện tích phòng và nhận gợi ý cấu hình?
              </h2>
              <p className="mt-4 max-w-md text-sm leading-6 text-primary-foreground/78">
                Để lại thông tin, Pure Flow sẽ gửi gợi ý chế độ lọc phù hợp với
                phòng của bạn.
              </p>
            </div>

            <NewsletterForm />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
