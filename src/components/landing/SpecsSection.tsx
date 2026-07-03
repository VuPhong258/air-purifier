import { productModes, specs } from "@/lib/content";
import { Reveal } from "./Reveal";

export function SpecsSection() {
  return (
    <section
      id="specs"
      className="scroll-mt-20 px-4 py-16 sm:px-6 lg:py-20"
    >
      <div className="mx-auto w-full max-w-7xl">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-semibold text-primary">Thông số kỹ thuật</p>
          <h2 className="mt-3 text-2xl font-semibold leading-snug text-foreground sm:text-3xl lg:text-4xl">
            Đủ mạnh cho phòng lớn, đủ tinh tế cho phòng ngủ.
          </h2>
        </Reveal>

        <div className="mt-8 grid gap-4 lg:grid-cols-[1fr_0.8fr]">
          <Reveal>
            <div className="rounded-2xl border border-border bg-surface p-1.5">
              <dl className="grid rounded-[calc(1rem-0.125rem)] bg-surface-muted p-3 sm:grid-cols-2 sm:p-4">
                {specs.map((item) => (
                  <div
                    key={item.label}
                    className="border-b border-border px-2 py-4 last:border-b-0 sm:px-3 sm:even:border-l sm:[&:nth-last-child(-n+2)]:border-b-0"
                  >
                    <dt className="text-xs font-medium text-muted">{item.label}</dt>
                    <dd className="mt-1 text-base font-semibold text-foreground">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>

          <div className="grid gap-3">
            {productModes.map((mode, index) => {
              const Icon = mode.icon;

              return (
                <Reveal key={mode.name} delay={index * 80}>
                  <article className="rounded-xl border border-border bg-surface p-4 sm:p-5">
                    <div className="flex items-start gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-surface-muted text-primary">
                        <Icon size={18} strokeWidth={1.8} />
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-foreground">
                          {mode.name}
                        </h3>
                        <p className="mt-1 text-sm leading-5 text-muted">
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
