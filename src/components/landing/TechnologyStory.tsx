import { storySteps } from "@/lib/content";
import { Reveal } from "./Reveal";

export function TechnologyStory() {
  return (
    <section
      id="technology"
      className="flex min-h-dvh snap-start scroll-mt-24 items-center px-4 py-20 sm:px-6 lg:py-28"
    >
      <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[0.85fr_1fr]">
        <Reveal className="lg:sticky lg:top-28 lg:h-max">
          <p className="text-sm font-semibold text-primary">Clean intelligence</p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
            AI xử lý không khí như một hệ sinh thái nhỏ.
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-8 text-muted">
            Thay vì bật quạt theo cấp cố định, Pure Flow kết hợp dữ liệu cảm
            biến và ngữ cảnh sinh hoạt để giữ phòng ổn định hơn.
          </p>
        </Reveal>

        <div className="space-y-4">
          {storySteps.map((step, index) => {
            const Icon = step.icon;

            return (
              <Reveal key={step.title} delay={index * 90}>
                <article className="rounded-[2rem] border border-border bg-surface p-2">
                  <div className="grid gap-6 rounded-[calc(2rem-0.5rem)] bg-surface-muted p-6 sm:grid-cols-[auto_1fr] sm:p-8">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                      <Icon size={24} strokeWidth={1.8} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-primary">
                        Bước {index + 1}
                      </p>
                      <h3 className="mt-2 text-2xl font-semibold text-foreground">
                        {step.title}
                      </h3>
                      <p className="mt-4 text-base leading-7 text-muted">
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
