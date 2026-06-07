const pillars = [
  {
    n: "01",
    title: "The Governance Blueprint",
    body:
      "We do not shout about corruption — we engineer it out. Remove the complex regulations that breed it. Demand end-to-end encryption and full-proof systems for every national examination.",
  },
  {
    n: "02",
    title: "Duty-Bound Citizenship",
    body:
      "Drawing from Indian history and the discipline of Mahatma Gandhi, we place Kartavya before claim. Ask not only what the nation owes you, but what you are willing to contribute.",
  },
  {
    n: "03",
    title: "Knowledge as Defense",
    body:
      "Against foreign-funded subversion, manufactured unrest, and digital stone-pelting, the only durable shield is a literate, reasoning citizenry that cannot be moved by a reel.",
  },
  {
    n: "04",
    title: "Accountability of Institutions",
    body:
      "Reform of the judiciary and administrative services must come through healthy intellectual debate and alternative visions — never by insulting the institutions of the Republic.",
  },
];

export function Manifesto() {
  return (
    <section id="manifesto" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">The Kartavya Manifesto</p>
          <h2 className="mt-4 text-4xl leading-tight md:text-5xl">
            Four pillars. One republic.
          </h2>
          <p className="mt-6 text-muted-foreground">
            Action-oriented commitments, drafted to be debated, refined, and implemented.
          </p>
        </div>

        <div className="mt-16 grid gap-px bg-border md:grid-cols-2">
          {pillars.map((p) => (
            <article
              key={p.n}
              className="group relative bg-background p-10 transition-colors hover:bg-secondary/60"
            >
              <div className="flex items-start justify-between">
                <span className="font-serif text-5xl text-accent/80">{p.n}</span>
                <span className="h-px w-12 translate-y-6 bg-foreground/30 transition-all group-hover:w-20 group-hover:bg-accent" />
              </div>
              <h3 className="mt-8 font-serif text-2xl md:text-3xl">{p.title}</h3>
              <p className="mt-4 leading-relaxed text-foreground/75">{p.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
