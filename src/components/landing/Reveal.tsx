import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

/** CSS view-timeline reveal — no client JS, safe for LCP. */
export function Reveal({ children, className = "", delay = 0 }: RevealProps) {
  return (
    <div
      className={`reveal-on-scroll ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
