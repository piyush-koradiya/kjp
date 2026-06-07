export function CTA() {
  return (
    <section id="join" className="relative overflow-hidden border-t border-border bg-secondary/40 py-28 md:py-36">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <p className="eyebrow">Join the Architects of India</p>
        <h2 className="mt-6 font-serif text-4xl leading-[1.1] md:text-6xl">
          Don't be the cockroach that hides when the lights come on.
          <br />
          <span className="italic text-accent">Be the light.</span>
        </h2>
        <p className="mx-auto mt-8 max-w-xl text-muted-foreground">
          Join the Kartavya Janta Party and help us draft the blueprint for a stronger India.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="#manifesto"
            className="inline-flex items-center border border-foreground/40 px-7 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-foreground transition-colors hover:border-foreground"
          >
            Re-read the Manifesto
          </a>
        </div>
      </div>
    </section>
  );
}
