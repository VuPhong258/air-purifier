import { ArrowRight, ShieldCheck } from "lucide-react";
import { ProductVisual } from "./ProductVisual";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[88dvh] items-center overflow-hidden px-4 pb-12 pt-20 sm:px-6 lg:min-h-[85dvh] lg:pb-14 lg:pt-24"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_76%_18%,rgba(216,243,107,0.24),transparent_28%),radial-gradient(circle_at_18%_32%,rgba(47,185,160,0.16),transparent_30%)]" />
      <div className="mx-auto grid w-full max-w-7xl items-center gap-8 lg:grid-cols-[0.98fr_0.86fr] xl:gap-12">
        <Reveal className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-semibold text-muted shadow-[0_10px_40px_rgba(20,108,92,0.08)]">
            <ShieldCheck size={14} className="text-primary" />
            AI air quality system for healthier living
          </div>

          <h1 className="mt-5 max-w-2xl text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.05] text-foreground">
            Không khí sạch hơn, trước khi bạn nhận ra.
          </h1>

          <p className="mt-4 max-w-lg text-sm leading-7 text-muted sm:text-base">
            Pure Flow dùng AI để đọc chất lượng không khí, dự đoán mức ô nhiễm
            và tự động tối ưu công suất lọc cho từng khoảnh khắc trong nhà.
          </p>

          <div className="mt-6 flex flex-col gap-2.5 sm:flex-row">
            <a
              href="#newsletter"
              data-track="hero_newsletter"
              className="group inline-flex h-11 items-center justify-center gap-2.5 rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:shadow-[0_16px_50px_rgba(20,108,92,0.22)] active:scale-[0.98]"
            >
              Nhận tư vấn sớm
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary-foreground/15 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-1">
                <ArrowRight size={14} />
              </span>
            </a>
            <a
              href="#technology"
              data-track="hero_technology"
              className="inline-flex h-11 items-center justify-center rounded-full border border-border bg-surface px-5 text-sm font-semibold text-foreground transition-[background,transform] duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-surface-muted active:scale-[0.98]"
            >
              Xem công nghệ
            </a>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <ProductVisual />
        </Reveal>
      </div>
    </section>
  );
}
