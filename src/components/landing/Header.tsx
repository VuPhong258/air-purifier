"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { navItems } from "@/lib/content";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-30 px-4 pt-3 sm:px-6">
      <nav className="relative mx-auto flex h-11 max-w-7xl items-center rounded-full border border-border/60 bg-surface/88 px-2.5 shadow-[0_8px_30px_rgba(20,108,92,0.07)] backdrop-blur-xl sm:px-3">
        <a
          href="#top"
          className="flex shrink-0 items-center gap-2 pr-2"
          aria-label="Pure Flow"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
            PF
          </span>
          <span className="hidden text-xs font-semibold tracking-[0.14em] text-foreground uppercase sm:inline">
            Pure Flow
          </span>
        </a>

        <div className="absolute left-1/2 hidden -translate-x-1/2 md:block">
          <div className="flex items-center gap-0.5 rounded-full bg-surface-muted/70 p-0.5">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-3 py-1.5 text-[13px] font-medium text-muted transition-[background,color] duration-300 hover:bg-surface hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div className="ml-auto flex items-center gap-1">
          <a
            href="#newsletter"
            data-track="header_consultation"
            className="hidden h-8 items-center rounded-full bg-primary px-3.5 text-xs font-semibold text-primary-foreground transition-[transform,box-shadow] duration-300 hover:shadow-[0_10px_28px_rgba(20,108,92,0.2)] active:scale-[0.98] md:inline-flex"
          >
            Nhận tư vấn
          </a>

          <ThemeToggle className="hidden md:flex" />

          <button
            type="button"
            aria-label={isOpen ? "Đóng menu" : "Mở menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((value) => !value)}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-surface-muted text-foreground transition-transform duration-300 active:scale-[0.96] md:hidden"
          >
            {isOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </nav>

      {isOpen ? (
        <div className="mx-auto mt-2.5 max-w-7xl overflow-hidden rounded-2xl border border-border bg-surface/95 p-2 shadow-[0_16px_50px_rgba(20,108,92,0.12)] backdrop-blur-xl md:hidden">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block rounded-xl px-3 py-2.5 text-sm font-medium text-muted transition-colors hover:bg-surface-muted hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
          <div className="mt-1 flex items-center justify-between border-t border-border px-2 pt-2">
            <a
              href="#newsletter"
              data-track="header_consultation_mobile"
              onClick={() => setIsOpen(false)}
              className="inline-flex h-9 items-center rounded-full bg-primary px-4 text-xs font-semibold text-primary-foreground"
            >
              Nhận tư vấn
            </a>
            <ThemeToggle />
          </div>
        </div>
      ) : null}
    </header>
  );
}
