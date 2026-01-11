export default function Projects({ items }: { items: any[] }) {
  if (!items.length)
    return (
      <p className="text-center text-sm text-blue-700 opacity-70">
        Projets à ajouter…
      </p>
    );

  return (
    <div className="mx-auto grid max-w-6xl gap-6 px-4 md:grid-cols-2 lg:grid-cols-3">
      {items.map((p) => (
        <article
          key={p.name}
          className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm transition hover:shadow-md"
        >
          {/* Header */}
          <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
            <h3 className="text-lg font-bold text-blue-950">
              {p.name}
            </h3>
            {p.date && (
              <span className="text-xs font-medium text-blue-700 opacity-70">
                {p.date}
              </span>
            )}
          </div>

          {/* Description */}
          <p className="mb-4 text-sm leading-relaxed text-blue-900 opacity-80">
            {p.description}
          </p>

          {/* Stack */}
          {p.stack?.length ? (
            <div className="mb-4 flex flex-wrap gap-2">
              {p.stack.map((tech: string) => (
                <span
                  key={tech}
                  className="rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          ) : null}

          {/* Link */}
          {p.link && (
            <a
              href={p.link}
              target="_blank"
              rel="noreferrer"
              className="inline-block text-sm font-semibold text-blue-700 transition hover:text-blue-900"
            >
              Voir le projet →
            </a>
          )}
        </article>
      ))}
    </div>
  );
}
