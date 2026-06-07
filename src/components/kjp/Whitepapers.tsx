import knowledge from "@/assets/knowledge.jpg";

const sample = [
  {
    tag: "Examination Integrity",
    title: "End-to-End Encryption for National Examinations",
    author: "Working Group · Governance Blueprint",
    pages: 24,
  },
  {
    tag: "Regulatory Reform",
    title: "Reducing the Surface Area of Corruption",
    author: "Working Group · Economic Liberty",
    pages: 38,
  },
  {
    tag: "Civic Resilience",
    title: "A Reading Curriculum Against Digital Manipulation",
    author: "Working Group · Knowledge Economy",
    pages: 19,
  },
];

export function Whitepapers() {
  return (
    <section id="whitepapers" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 md:grid-cols-2 md:gap-20">
          <div>
            <p className="eyebrow">Policy Whitepapers</p>
            <h2 className="mt-4 text-4xl leading-tight md:text-5xl">
              The library of the Knowledge Economy.
            </h2>
            <p className="mt-6 max-w-md text-muted-foreground">
              Members submit technical, sourced, implementable solutions to national problems.
              Each paper is reviewed by a working group before publication.
            </p>

            <img
              src={knowledge}
              alt="Open book emitting rays of light"
              loading="lazy"
              width={1024}
              height={1024}
              className="mt-10 hidden w-2/3 opacity-90 md:block"
            />
          </div>

          <div>
            <ul className="divide-y divide-border border-y border-border">
              {sample.map((p) => (
                <li
                  key={p.title}
                  className="group flex items-center justify-between gap-6 py-6 transition-colors"
                >
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                      {p.tag}
                    </p>
                    <h3 className="mt-2 font-serif text-xl leading-snug">{p.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {p.author} · {p.pages} pp.
                    </p>
                  </div>
                  <span className="shrink-0 text-sm font-medium underline-offset-4 group-hover:underline">
                    Read →
                  </span>
                </li>
              ))}
            </ul>

          </div>
        </div>
      </div>
    </section>
  );
}
