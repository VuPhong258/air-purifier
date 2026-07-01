import { productModes, specs } from "@/lib/content";
import { Reveal } from "./Reveal";

export function SpecsSection() {
  return (
    <section id="specs" className="px-4 py-20 sm:px-6 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal className="max-w-3xl">
          <p className="text-sm font-semibold text-primary">Thong so ky thuat</p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
            Du manh cho phong lon, du tinh te cho phong ngu.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-[1fr_0.8fr]">
          <Reveal>
            <div className="rounded-[2rem] border border-border bg-surface p-2">
              <dl className="grid rounded-[calc(2rem-0.5rem)] bg-surface-muted p-4 sm:grid-cols-2 sm:p-6">
                {specs.map((item) => (
                  <div
                    key={item.label}
                    className="border-b border-border px-2 py-5 last:border-b-0 sm:px-4 sm:even:border-l sm:[&:nth-last-child(-n+2)]:border-b-0"
                  >
                    <dt className="text-sm font-medium text-muted">{item.label}</dt>
                    <dd className="mt-2 text-lg font-semibold text-foreground">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>

          <div className="grid gap-4">
            {productModes.map((mode, index) => {
              const Icon = mode.icon;

              return (
                <Reveal key={mode.name} delay={index * 80}>
                  <article className="rounded-[1.5rem] border border-border bg-surface p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-surface-muted text-primary">
                        <Icon size={21} strokeWidth={1.8} />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground">
                          {mode.name}
                        </h3>
                        <p className="mt-2 text-sm leading-6 text-muted">
                          {mode.detail}
                        </p>
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
