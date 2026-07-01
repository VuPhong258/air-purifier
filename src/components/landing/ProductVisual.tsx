import Image from "next/image";
import { metrics } from "@/lib/content";

export function ProductVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[520px] lg:max-w-[600px]">
      <div className="absolute -left-5 top-20 hidden rounded-full border border-border bg-surface/90 px-4 py-3 shadow-[0_18px_55px_rgba(20,108,92,0.14)] backdrop-blur-xl sm:block">
        <p className="text-xs font-medium text-muted">PM2.5 hiện tại</p>
        <p className="mt-1 text-2xl font-semibold text-foreground">
          08 <span className="text-sm text-muted">ug/m3</span>
        </p>
      </div>

      <div className="absolute -right-3 bottom-16 z-10 hidden rounded-full border border-border bg-surface/90 px-4 py-3 shadow-[0_18px_55px_rgba(20,108,92,0.14)] backdrop-blur-xl sm:block">
        <p className="text-xs font-medium text-muted">AI đang tối ưu</p>
        <p className="mt-1 text-sm font-semibold text-primary">Silent Clean</p>
      </div>

      <div className="rounded-[2rem] border border-border bg-surface-muted p-2 shadow-[0_45px_140px_rgba(20,108,92,0.20)]">
        <div className="relative overflow-hidden rounded-[calc(2rem-0.5rem)] bg-surface">
          <Image
            src="/images/pure-flow-hero.webp"
            alt="Máy lọc không khí AI Pure Flow trong không gian sống sang"
            width={933}
            height={1400}
            priority
            sizes="(max-width: 768px) 92vw, 48vw"
            className="aspect-[4/5] w-full object-cover object-center"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-surface via-surface/70 to-transparent p-5 pt-16">
            <div className="grid grid-cols-3 gap-2 rounded-3xl border border-border/80 bg-surface/90 p-2 backdrop-blur-xl">
              {metrics.map((item) => (
                <div key={item.value} className="rounded-2xl bg-surface-muted p-3">
                  <p className="text-lg font-semibold text-foreground">{item.value}</p>
                  <p className="mt-1 text-[11px] leading-snug text-muted">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
