export default function Education({ school }: { school: any }) {
  const items = [school.master, school.bachelor].filter(Boolean);

  return (
    <div className="mx-auto grid max-w-6xl gap-6 px-4 md:grid-cols-2">
      {items.map((s: any) => (
        <article
          key={s.degreeName}
          className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm transition hover:shadow-md"
        >
          {/* Diplôme */}
          <h3 className="mb-2 text-lg font-bold text-blue-950">
            {s.degreeName}
          </h3>

          {/* École / lieu / date */}
          <p className="mb-4 text-sm text-blue-900 opacity-80">
            <strong className="font-semibold text-blue-900">
              {s.schoolName}
            </strong>{" "}
            — {s.place} · {s.date}
          </p>

          {/* Matières / compétences */}
          <div className="flex flex-wrap gap-2">
            {s.subject.map((x: string) => (
              <span
                key={x}
                className="rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700"
              >
                {x}
              </span>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}
