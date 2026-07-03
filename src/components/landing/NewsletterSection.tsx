import { NewsletterForm } from "./NewsletterForm";
import { Reveal } from "./Reveal";

export function NewsletterSection() {
  return (
    <section
      id="newsletter"
      className="flex min-h-dvh snap-start scroll-mt-24 items-center px-4 py-20 sm:px-6 lg:py-28"
    >
      <Reveal>
        <div className="mx-auto max-w-7xl rounded-[2.2rem] border border-border bg-surface-muted p-2">
          <div className="grid gap-10 rounded-[calc(2.2rem-0.5rem)] bg-primary p-6 text-primary-foreground sm:p-8 lg:grid-cols-[0.85fr_1fr] lg:p-12">
            <div>
              <p className="text-sm font-semibold text-primary-foreground/80">
                Đăng ký nhận tin
              </p>
              <h2 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
                Cần tính diện tích phòng và nhận gợi ý cấu hình?
              </h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-primary-foreground/78">
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
