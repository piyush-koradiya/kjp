import { Emblem } from "./Emblem";

export function Footer() {
  return (
    <footer className="border-t border-border bg-foreground text-primary-foreground">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 py-12 md:flex-row md:items-center">
        <div className="flex items-center gap-3">
          <Emblem className="h-8 w-8 text-primary-foreground" />
          <div className="leading-tight">
            <div className="font-serif text-lg">Kartavya Janta Party</div>
            <div className="text-[10px] font-medium uppercase tracking-[0.2em] text-primary-foreground/60">
              Duty · Solutions · Nation
            </div>
          </div>
        </div>
        <p className="max-w-md font-serif text-sm italic text-primary-foreground/70">
          “A republic is not preserved by complaint. It is preserved by citizens who do their duty.”
        </p>
        <p className="text-xs uppercase tracking-[0.18em] text-primary-foreground/50">
          © {new Date().getFullYear()} KJP · Bharat
        </p>
      </div>
    </footer>
  );
}
