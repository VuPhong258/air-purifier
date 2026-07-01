import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

export function NewsletterSection() {
  return (
    <section id="newsletter" className="px-4 py-20 sm:px-6 lg:py-28">
      <Reveal>
        <div className="mx-auto max-w-7xl rounded-[2.2rem] border border-border bg-surface-muted p-2">
          <div className="grid gap-10 rounded-[calc(2.2rem-0.5rem)] bg-primary p-6 text-primary-foreground sm:p-8 lg:grid-cols-[0.85fr_1fr] lg:p-12">
            <div>
              <p className="text-sm font-semibold text-primary-foreground/80">
                Dang ky nhan tin
              </p>
              <h2 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
                Can tinh dien tich phong va nhan goi y cau hinh?
              </h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-primary-foreground/78">
                De lai thong tin, Pure Flow se gui goi y che do loc phu hop voi
                phong cua ban. Form gui that se duoc ket noi voi backend o buoc
                tiep theo.
              </p>
            </div>

            <form className="grid gap-4 rounded-[1.5rem] bg-primary-foreground p-4 text-foreground sm:p-5">
              <div className="grid gap-3 sm:grid-cols-2">
                <input
                  aria-label="Ho va ten"
                  placeholder="Ho va ten"
                  className="h-12 rounded-2xl border border-border bg-surface px-4 text-sm outline-none transition-shadow focus:shadow-[0_0_0_4px_rgba(47,185,160,0.18)]"
                />
                <input
                  aria-label="Email"
                  placeholder="Email"
                  className="h-12 rounded-2xl border border-border bg-surface px-4 text-sm outline-none transition-shadow focus:shadow-[0_0_0_4px_rgba(47,185,160,0.18)]"
                />
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <input
                  aria-label="So dien thoai"
                  placeholder="So dien thoai"
                  className="h-12 rounded-2xl border border-border bg-surface px-4 text-sm outline-none transition-shadow focus:shadow-[0_0_0_4px_rgba(47,185,160,0.18)]"
                />
                <select
                  aria-label="Dien tich phong"
                  className="h-12 rounded-2xl border border-border bg-surface px-4 text-sm outline-none transition-shadow focus:shadow-[0_0_0_4px_rgba(47,185,160,0.18)]"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Dien tich phong
                  </option>
                  <option>Duoi 20m2</option>
                  <option>20-40m2</option>
                  <option>Tren 40m2</option>
                </select>
              </div>
              <textarea
                aria-label="Nhu cau tu van"
                placeholder="Nhu cau tu van"
                rows={4}
                className="resize-none rounded-2xl border border-border bg-surface px-4 py-3 text-sm outline-none transition-shadow focus:shadow-[0_0_0_4px_rgba(47,185,160,0.18)]"
              />
              <button
                type="button"
                className="group inline-flex h-13 items-center justify-center gap-3 rounded-full bg-foreground px-5 text-sm font-semibold text-background transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98]"
              >
                Gui thong tin
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-background/12 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-1">
                  <ArrowRight size={15} />
                </span>
              </button>
            </form>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
