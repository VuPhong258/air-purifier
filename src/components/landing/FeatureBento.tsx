import { features } from "@/lib/content";
import { Reveal } from "./Reveal";

export function FeatureBento() {
  return (
    <section
      id="features"
      className="scroll-mt-20 px-4 py-16 sm:px-6 lg:py-20"
    >
      <div className="mx-auto w-full max-w-7xl">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-semibold text-primary">Tính năng nổi bật</p>
          <h2 className="mt-3 text-2xl font-semibold leading-snug text-foreground sm:text-3xl lg:text-4xl">
            Một thiết bị im lặng, nhưng ra quyết định liên tục.
          </h2>
        </Reveal>

        <div className="mt-8 grid grid-flow-dense grid-cols-1 gap-3 md:grid-cols-6 lg:grid-cols-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const span =
              index === 0
                ? "md:col-span-6 lg:col-span-7"
                : index === 1
                  ? "md:col-span-3 lg:col-span-5"
                  : "md:col-span-3 lg:col-span-6";

            return (
              <Reveal key={feature.title} delay={index * 80} className={span}>
                <article className="group h-full rounded-2xl border border-border bg-surface-muted p-1.5 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-0.5">
                  <div className="flex h-full flex-col gap-5 rounded-[calc(1rem-0.125rem)] bg-surface p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.50)] sm:p-6">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-surface-muted text-primary">
                      <Icon size={18} strokeWidth={1.8} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {feature.title}
                      </h3>
                      <p className="mt-2 max-w-xl text-sm leading-6 text-muted">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
