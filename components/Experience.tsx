export default function Experience({ items }: { items: any[] }) {
  return (
    <div className="relative mx-auto max-w-5xl px-4">
      {/* Vertical line */}
      <div className="absolute left-4 top-0 h-full w-[2px] bg-blue-100 md:left-1/2" />

      <div className="flex flex-col gap-12">
        {items.map((xp, i) => {
          const isLeft = i % 2 === 0;

          return (
            <div
              key={`${xp.title}-${xp.company}-${xp.date}`}
              className={`relative flex w-full ${
                isLeft ? "md:justify-start" : "md:justify-end"
              }`}
            >
              {/* Dot */}
              <div className="absolute left-4 top-6 z-10 h-4 w-4 rounded-full border-4 border-blue-200 bg-blue-600 md:left-1/2 md:-translate-x-1/2" />

              {/* Card */}
              <article
                className={`mt-2 w-full rounded-2xl border border-blue-100 bg-white p-6 shadow-sm md:w-[46%] ${
                  isLeft ? "md:mr-auto" : "md:ml-auto"
                }`}
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-lg font-bold text-blue-950">
                    {xp.title}
                  </h3>
                  <span className="text-sm font-semibold text-blue-700">
                    {xp.date}
                  </span>
                </div>

                <p className="mt-1 text-sm font-semibold text-blue-950/70">
                  {xp.company} — {xp.location}
                </p>

                {xp.detail?.length ? (
                  <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-blue-950/80">
                    {xp.detail.map((d: string) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                ) : null}

                {xp.stack?.length ? (
                  <div className="mt-4">
                    <p className="mb-2 text-sm font-bold uppercase tracking-wide text-blue-700">
                      Stack
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {xp.stack.map((s: string) => (
                        <span
                          key={s}
                          className="rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                ) : null}

                {xp.link ? (
                  <a
                    href={xp.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-block text-sm font-semibold text-blue-700 hover:underline"
                  >
                    Voir l’entreprise →
                  </a>
                ) : null}
              </article>
            </div>
          );
        })}
      </div>
    </div>
  );
}
