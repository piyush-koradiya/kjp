import hero from "@/assets/hero-parliament.jpg";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img
          src={hero}
          alt="Parliament of India at golden hour"
          width={1920}
          height={1080}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
      </div>

      <div className="mx-auto max-w-7xl px-6 pb-28 pt-24 md:pb-40 md:pt-36">
        <div className="max-w-3xl">
          <p className="eyebrow">A New Political Doctrine · Est. for the Republic</p>
          <h1 className="mt-6 text-5xl leading-[1.05] md:text-7xl">
            Duty Over Rights.
            <br />
            <span className="italic text-accent">Solutions Over Rants.</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
            The Kartavya Janta Party is a movement of builders, scholars, and citizens who
            refuse the politics of grievance. We draft blueprints, not hashtags. We choose
            <em> Kartavya </em>over complaint.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#join"
              className="inline-flex items-center bg-foreground px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground transition-opacity hover:opacity-90"
            >
              Architect of India →
            </a>
            <a
              href="#manifesto"
              className="inline-flex items-center border border-foreground/30 px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-foreground transition-colors hover:border-foreground"
            >
              Read the Manifesto
            </a>
          </div>

          <blockquote className="mt-16 max-w-xl border-l-2 border-accent pl-6 font-serif text-xl italic text-foreground/85">
            “Stop ranting, start resolving. Your country, your duty.”
          </blockquote>
        </div>
      </div>
    </section>
  );
}
