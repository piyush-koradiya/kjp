const stances = [
  {
    against: "The Culture of Laziness",
    body:
      "Others demand the right to be unemployed by choice and idle by habit. We demand a Knowledge Economy. A nation does not rise by ranting eleven hours a day; it rises by building.",
  },
  {
    against: "Weaponized Hashtags",
    body:
      "Paper leaks and corruption are real grievances. The answer is not viral outrage but Governance Blueprints — concrete, technical, accountable reforms drafted by citizens who actually read.",
  },
  {
    against: "Sub-Nationalism",
    body:
      "Regional triggers and identity politics are designed to fracture the republic. We stand for National Integration and the restoration of democratic order over performative division.",
  },
];

export function Vision() {
  return (
    <section id="vision" className="border-t border-border bg-secondary/40 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 md:grid-cols-[1fr_2fr] md:gap-24">
          <div>
            <p className="eyebrow">Our Vision</p>
            <h2 className="mt-4 text-4xl leading-tight md:text-5xl">
              The Anti-Cockroach Stance.
            </h2>
            <p className="mt-6 text-muted-foreground">
              We do not survive in the shadows. We build in the light of <em>Kartavya</em>.
              Three rejections define what we stand for.
            </p>
          </div>

          <div className="space-y-px bg-border">
            {stances.map((s, i) => (
              <div key={s.against} className="bg-background p-8 md:p-10">
                <div className="flex items-baseline gap-6">
                  <span className="font-serif text-3xl text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      We stand against
                    </p>
                    <h3 className="mt-1 font-serif text-2xl">{s.against}</h3>
                    <p className="mt-4 leading-relaxed text-foreground/80">{s.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
