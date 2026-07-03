import Image from "next/image";
import { metrics } from "@/lib/content";

export function ProductVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[420px] lg:max-w-[480px]">
      <div className="absolute left-3 top-5 z-20 hidden rounded-full border border-border bg-surface/92 px-3 py-2 shadow-[0_12px_40px_rgba(20,108,92,0.12)] backdrop-blur-xl sm:left-4 sm:block sm:top-6 sm:px-3.5 sm:py-2.5">
        <p className="text-[11px] font-medium text-muted">PM2.5 hiện tại</p>
        <p className="mt-0.5 text-lg font-semibold text-foreground">
          08 <span className="text-xs text-muted">µg/m³</span>
        </p>
      </div>

      <div className="absolute right-3 top-5 z-20 hidden rounded-full border border-border bg-surface/92 px-3 py-2 shadow-[0_12px_40px_rgba(20,108,92,0.12)] backdrop-blur-xl sm:right-4 sm:block sm:top-6 sm:px-3.5 sm:py-2.5">
        <p className="text-[11px] font-medium text-muted">AI đang tối ưu</p>
        <p className="mt-0.5 text-xs font-semibold text-primary">Silent Clean</p>
      </div>

      <div className="rounded-2xl border border-border bg-surface-muted p-1.5 shadow-[0_32px_100px_rgba(20,108,92,0.16)]">
        <div className="relative overflow-hidden rounded-[calc(1rem-0.125rem)] bg-surface">
          <Image
            src="/images/pure-flow-hero.webp"
            alt="Máy lọc không khí AI Pure Flow trong không gian sống sang"
            width={933}
            height={1400}
            priority
            sizes="(max-width: 768px) 92vw, 42vw"
            className="aspect-[4/5] w-full object-cover object-center"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-surface via-surface/80 to-transparent px-3 pb-3 pt-10 sm:px-4 sm:pb-4 sm:pt-12">
            <div className="grid grid-cols-3 gap-1.5 rounded-2xl border border-border/80 bg-surface/92 p-1.5 backdrop-blur-xl sm:gap-2 sm:p-2">
              {metrics.map((item) => (
                <div
                  key={item.value}
                  className="rounded-xl bg-surface-muted px-2 py-2 sm:px-2.5 sm:py-2.5"
                >
                  <p className="text-sm font-semibold text-foreground sm:text-base">
                    {item.value}
                  </p>
                  <p className="mt-0.5 text-[10px] leading-snug text-muted sm:text-[11px]">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
