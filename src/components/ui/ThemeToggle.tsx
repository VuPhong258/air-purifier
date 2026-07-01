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

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(() => getPreferredTheme());

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  function toggleTheme() {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
    window.localStorage.setItem("pure-flow-theme", nextTheme);
    trackEvent("theme_change", { theme: nextTheme });
  }

  return (
    <button
      type="button"
      aria-label={theme === "dark" ? "Chuyển sang giao diện sáng" : "Chuyển sang giao diện tối"}
      onClick={toggleTheme}
      className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-muted text-foreground transition-[transform,background] duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-border active:scale-[0.96]"
    >
      {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
