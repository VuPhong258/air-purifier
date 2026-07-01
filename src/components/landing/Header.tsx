"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems } from "@/lib/content";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-30 px-4 pt-4 sm:px-6">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between rounded-full border border-border/70 bg-surface/90 px-4 shadow-[0_18px_60px_rgba(20,108,92,0.10)] backdrop-blur-xl sm:px-5">
        <a href="#top" className="flex items-center gap-3" aria-label="Pure Flow">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
            PF
          </span>
          <span className="text-sm font-semibold tracking-[0.18em] text-foreground uppercase">
            Pure Flow
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-muted transition-[background,color,transform] duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-surface-muted hover:text-foreground active:scale-[0.98]"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="#newsletter"
          className="group hidden items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:shadow-[0_16px_45px_rgba(20,108,92,0.24)] active:scale-[0.98] md:flex"
        >
          Dat lich tu van
        </a>

        <button
          type="button"
          aria-label={isOpen ? "Dong menu" : "Mo menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
          className="relative flex h-10 w-10 items-center justify-center rounded-full bg-surface-muted text-foreground transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.96] md:hidden"
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {isOpen ? (
        <div className="mx-auto mt-3 max-w-7xl rounded-[1.5rem] border border-border bg-surface p-3 shadow-[0_22px_70px_rgba(20,108,92,0.14)] md:hidden">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block rounded-2xl px-4 py-3 text-sm font-medium text-muted transition-colors hover:bg-surface-muted hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </div>
      ) : null}
    </header>
  );
}
