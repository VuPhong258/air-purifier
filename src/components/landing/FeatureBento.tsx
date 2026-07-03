import { features } from "@/lib/content";
import { Reveal } from "./Reveal";

export function FeatureBento() {
  return (
    <section
      id="features"
      className="flex min-h-dvh snap-start scroll-mt-24 items-center px-4 py-20 sm:px-6 lg:py-28"
    >
      <div className="mx-auto w-full max-w-7xl">
        <Reveal className="max-w-3xl">
          <p className="text-sm font-semibold text-primary">Tính năng nổi bật</p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight text-foreground sm:text-5xl lg:text-6xl">
            Một thiết bị im lặng, nhưng ra quyết định liên tục.
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-flow-dense grid-cols-1 gap-4 md:grid-cols-6 lg:grid-cols-12">
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
                <article className="group h-full rounded-[2rem] border border-border bg-surface-muted p-2 transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1">
                  <div className="flex h-full min-h-[250px] flex-col justify-between rounded-[calc(2rem-0.5rem)] bg-surface p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.50)] sm:p-8">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-surface-muted text-primary">
                      <Icon size={22} strokeWidth={1.8} />
                    </div>
                    <div className="mt-12">
                      <h3 className="text-2xl font-semibold text-foreground">
                        {feature.title}
                      </h3>
                      <p className="mt-4 max-w-xl text-base leading-7 text-muted">
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
