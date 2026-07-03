import { navItems } from "@/lib/content";

export function Footer() {
  return (
    <footer className="snap-start border-t border-border px-4 py-10 sm:px-6">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 text-sm text-muted md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-semibold text-foreground">Pure Flow</p>
          <p className="mt-2">AI air purifier.</p>
        </div>
        <div className="flex flex-wrap gap-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
