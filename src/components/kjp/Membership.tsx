const reqs = [
  {
    title: "Knowledge Seekers",
    body:
      "A minimum of two hours of reading — books, research, primary sources — every single day. No four-second processing borrowed from a reel.",
  },
  {
    title: "Solution-Oriented",
    body:
      "For every grievance you voice, you must present one constructive, implementable solution. Criticism without architecture is noise.",
  },
  {
    title: "Nationalists",
    body:
      "Dedicated to the territorial integrity of India. Respectful of the constitutional restrictions on speech that hold the republic together.",
  },
  {
    title: "Active Contributors",
    body:
      "Professionals, students, and workers who honour the dignity of labour — and reject any culture that glorifies idleness as virtue.",
  },
];

export function Membership() {
  return (
    <section
      id="membership"
      className="border-y border-border bg-foreground py-24 text-primary-foreground md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-[1fr_1.4fr] md:gap-20">
          <div>
            <p className="eyebrow" style={{ color: "var(--saffron)" }}>
              Membership · The Builder Standard
            </p>
            <h2 className="mt-4 text-4xl leading-tight md:text-5xl">
              We are not recruiting followers. We are recruiting <em>builders</em>.
            </h2>
            <p className="mt-6 text-primary-foreground/70">
              Four requirements. Non-negotiable. They are how we keep the party honest.
            </p>
          </div>

          <ol className="space-y-8">
            {reqs.map((r, i) => (
              <li key={r.title} className="border-l border-primary-foreground/20 pl-6">
                <div className="flex items-baseline gap-4">
                  <span className="font-serif text-xl text-accent">
                    Requirement {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-2 font-serif text-2xl text-primary-foreground">{r.title}</h3>
                <p className="mt-3 leading-relaxed text-primary-foreground/75">{r.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
