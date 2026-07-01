import { NewsletterForm } from "./NewsletterForm";
import { Reveal } from "./Reveal";

export function NewsletterSection() {
  return (
    <section id="newsletter" className="px-4 py-20 sm:px-6 lg:py-28">
      <Reveal>
        <div className="mx-auto max-w-7xl rounded-[2.2rem] border border-border bg-surface-muted p-2">
          <div className="grid gap-10 rounded-[calc(2.2rem-0.5rem)] bg-primary p-6 text-primary-foreground sm:p-8 lg:grid-cols-[0.85fr_1fr] lg:p-12">
            <div>
              <p className="text-sm font-semibold text-primary-foreground/80">
                Dang ky nhan tin
              </p>
              <h2 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
                Can tinh dien tich phong va nhan goi y cau hinh?
              </h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-primary-foreground/78">
                De lai thong tin, Pure Flow se gui goi y che do loc phu hop voi
                phong cua ban. Backend se xac thuc du lieu va san sang forward
                sang WEBHOOK_URL khi co endpoint.
              </p>
            </div>

            <NewsletterForm />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
