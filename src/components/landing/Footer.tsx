import { ArrowUpRight } from "lucide-react";
import { metrics, navItems } from "@/lib/content";

const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface-muted/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr] lg:gap-8 lg:py-14">
          <div>
            <a href="#top" className="inline-flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                PF
              </span>
              <span className="text-sm font-semibold tracking-[0.14em] text-foreground uppercase">
                Pure Flow
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-6 text-muted">
              Máy lọc không khí AI theo dõi PM2.5, tự tối ưu công suất lọc cho
              không gian sống trong lành hơn.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {metrics.map((item) => (
                <span
                  key={item.value}
                  className="rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted"
                >
                  <span className="font-semibold text-foreground">
                    {item.value}
                  </span>{" "}
                  {item.label}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-wide text-foreground uppercase">
              Khám phá
            </p>
            <ul className="mt-4 space-y-2.5">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-wide text-foreground uppercase">
              Tư vấn
            </p>
            <p className="mt-4 text-sm leading-6 text-muted">
              Để lại thông tin phòng và nhu cầu sử dụng — đội ngũ sẽ gợi ý cấu
              hình phù hợp.
            </p>
            <a
              href="#newsletter"
              data-track="footer_consultation"
              className="group mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-foreground"
            >
              Nhận tư vấn sớm
              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-border py-5 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} Pure Flow. Concept landing page.</p>
          <p>HEPA H13 · Wi-Fi · Ứng dụng mobile</p>
        </div>
      </div>
    </footer>
  );
}
