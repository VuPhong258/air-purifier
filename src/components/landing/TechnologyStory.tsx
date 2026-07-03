import { storySteps } from "@/lib/content";
import { Reveal } from "./Reveal";

export function TechnologyStory() {
  return (
    <section
      id="technology"
      className="scroll-mt-20 px-4 py-16 sm:px-6 lg:py-20"
    >
      <div className="mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-[0.85fr_1fr]">
        <Reveal className="lg:sticky lg:top-24 lg:h-max">
          <p className="text-xs font-semibold text-primary">Clean intelligence</p>
          <h2 className="mt-3 text-2xl font-semibold leading-snug text-foreground sm:text-3xl lg:text-4xl">
            AI xử lý không khí như một hệ sinh thái nhỏ.
          </h2>
          <p className="mt-4 max-w-lg text-sm leading-7 text-muted sm:text-base">
            Thay vì bật quạt theo cấp cố định, Pure Flow kết hợp dữ liệu cảm
            biến và ngữ cảnh sinh hoạt để giữ phòng ổn định hơn.
          </p>
        </Reveal>

        <div className="space-y-3">
          {storySteps.map((step, index) => {
            const Icon = step.icon;

            return (
              <Reveal key={step.title} delay={index * 90}>
                <article className="rounded-2xl border border-border bg-surface p-1.5">
                  <div className="grid gap-4 rounded-[calc(1rem-0.125rem)] bg-surface-muted p-5 sm:grid-cols-[auto_1fr] sm:p-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                      <Icon size={20} strokeWidth={1.8} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-primary">
                        Bước {index + 1}
                      </p>
                      <h3 className="mt-1 text-lg font-semibold text-foreground">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-muted">
                        {step.description}
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
