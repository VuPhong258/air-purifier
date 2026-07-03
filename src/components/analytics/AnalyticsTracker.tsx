"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

const scrollDepths = [25, 50, 75, 100] as const;

export function AnalyticsTracker() {
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const target = event.target;

      if (!(target instanceof Element)) {
        return;
      }

      const trackedElement = target.closest<HTMLElement>("[data-track]");

      if (!trackedElement) {
        return;
      }

      trackEvent("cta_click", {
        target: trackedElement.dataset.track ?? "unknown",
        href:
          trackedElement instanceof HTMLAnchorElement
            ? trackedElement.href
            : trackedElement.dataset.href ?? "",
      });
    }

    document.addEventListener("click", handleClick, { passive: true });

    return () => document.removeEventListener("click", handleClick);
  }, []);

  useEffect(() => {
    let cancelled = false;
    let cleanup: (() => void) | undefined;

    function setupScrollDepth() {
      if (cancelled) {
        return;
      }

      const observed = new Set<number>();

      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (!entry.isIntersecting) {
              continue;
            }

            const depth = Number(
              (entry.target as HTMLElement).dataset.scrollDepth,
            );

            if (!observed.has(depth)) {
              observed.add(depth);
              trackEvent("scroll_depth", { depth });
            }
          }
        },
        { threshold: 0.01 },
      );

      const sentinels = scrollDepths.map((depth) => {
        const marker = document.createElement("div");
        marker.dataset.scrollDepth = String(depth);
        marker.setAttribute("aria-hidden", "true");
        marker.style.position = "absolute";
        marker.style.left = "0";
        marker.style.width = "1px";
        marker.style.height = "1px";
        marker.style.pointerEvents = "none";
        document.body.appendChild(marker);
        observer.observe(marker);
        return marker;
      });

      function positionSentinels() {
        const trackHeight = Math.max(
          document.documentElement.scrollHeight - window.innerHeight,
          window.innerHeight,
        );

        sentinels.forEach((sentinel) => {
          const depth = Number(sentinel.dataset.scrollDepth);
          sentinel.style.top = `${Math.round((trackHeight * depth) / 100)}px`;
        });
      }

      positionSentinels();
      window.addEventListener("resize", positionSentinels, { passive: true });

      cleanup = () => {
        window.removeEventListener("resize", positionSentinels);
        observer.disconnect();
        sentinels.forEach((sentinel) => sentinel.remove());
      };
    }

    const useIdleCallback = typeof window.requestIdleCallback === "function";
    const idleId = useIdleCallback
      ? window.requestIdleCallback(setupScrollDepth, { timeout: 3000 })
      : window.setTimeout(setupScrollDepth, 1500);

    return () => {
      cancelled = true;
      cleanup?.();
      if (useIdleCallback) {
        window.cancelIdleCallback(idleId as number);
      } else {
        window.clearTimeout(idleId as number);
      }
    };
  }, []);

  return null;
}
