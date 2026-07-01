import { ArrowRight, ShieldCheck } from "lucide-react";
import { ProductVisual } from "./ProductVisual";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden px-4 pb-20 pt-28 sm:px-6 lg:pb-28 lg:pt-32"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_76%_18%,rgba(216,243,107,0.24),transparent_28%),radial-gradient(circle_at_18%_32%,rgba(47,185,160,0.16),transparent_30%)]" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_0.92fr]">
        <Reveal className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-semibold text-muted shadow-[0_10px_40px_rgba(20,108,92,0.08)]">
            <ShieldCheck size={14} className="text-primary" />
            AI air quality system for healthier living
          </div>

          <h1 className="mt-7 max-w-5xl text-[clamp(3.1rem,8vw,6.9rem)] font-semibold leading-[0.95] text-foreground">
            Khong khi sach hon, truoc khi ban nhan ra.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted sm:text-xl">
            Pure Flow dung AI de doc chat luong khong khi, du doan muc o nhiem
            va tu dong toi uu cong suat loc cho tung khoanh khac trong nha.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#newsletter"
              data-track="hero_newsletter"
              className="group inline-flex h-14 items-center justify-center gap-3 rounded-full bg-primary px-6 text-base font-semibold text-primary-foreground transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:shadow-[0_24px_70px_rgba(20,108,92,0.26)] active:scale-[0.98]"
            >
              Nhan tu van som
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-foreground/15 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-1">
                <ArrowRight size={16} />
              </span>
            </a>
            <a
              href="#technology"
              data-track="hero_technology"
              className="inline-flex h-14 items-center justify-center rounded-full border border-border bg-surface px-6 text-base font-semibold text-foreground transition-[background,transform] duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-surface-muted active:scale-[0.98]"
            >
              Xem cong nghe
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
