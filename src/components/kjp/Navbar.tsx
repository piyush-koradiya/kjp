import { Emblem } from "./Emblem";

const links = [
  { href: "#vision", label: "Vision" },
  { href: "#manifesto", label: "Manifesto" },
  { href: "#membership", label: "Membership" },
  { href: "#whitepapers", label: "Whitepapers" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-3">
          <Emblem className="h-8 w-8 text-foreground" />
          <div className="leading-tight">
            <div className="font-serif text-lg">Kartavya Janta Party</div>
            <div className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Duty · Solutions · Nation
            </div>
          </div>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
