"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { trackEvent } from "@/lib/analytics";

type Theme = "light" | "dark";

function getPreferredTheme(): Theme {
  if (typeof window === "undefined") {
    return "light";
  }

  const stored = window.localStorage.getItem("pure-flow-theme");

  if (stored === "dark" || stored === "light") {
    return stored;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
}

export function ThemeToggle({ className = "" }: { className?: string }) {
  const [theme, setTheme] = useState<Theme>(() => getPreferredTheme());

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  function toggleTheme() {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    applyTheme(nextTheme);
    window.localStorage.setItem("pure-flow-theme", nextTheme);
    trackEvent("theme_change", { theme: nextTheme });
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      aria-label={
        isDark ? "Chuyển sang giao diện sáng" : "Chuyển sang giao diện tối"
      }
      onClick={toggleTheme}
      className={`flex h-8 w-8 items-center justify-center rounded-full bg-surface-muted text-foreground transition-[transform,background] duration-300 hover:bg-border active:scale-[0.96] ${className}`}
    >
      {isDark ? <Sun size={15} /> : <Moon size={15} />}
    </button>
  );
}
