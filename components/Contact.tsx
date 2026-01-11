export default function Contact({ profil }: { profil: any }) {
  const c = profil.contact || {};

  return (
    <div className="mx-auto max-w-6xl px-4">
      <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm transition hover:shadow-md">
      

        <div className="space-y-3 text-sm text-blue-900">
          {c.email && (
            <p>
              <span className="font-semibold text-blue-700">Email :</span>{" "}
              <a
                href={`mailto:${c.email}`}
                className="font-medium text-blue-900 transition hover:text-blue-700"
              >
                {c.email}
              </a>
            </p>
          )}

          {c.phone && (
            <p>
              <span className="font-semibold text-blue-700">Téléphone :</span>{" "}
              <a
                href={`tel:${c.phone}`}
                className="font-medium text-blue-900 transition hover:text-blue-700"
              >
                {c.phone}
              </a>
            </p>
          )}

          {c.linkedin && (
            <p>
              <span className="font-semibold text-blue-700">LinkedIn :</span>{" "}
              <a
                href={c.linkedin}
                target="_blank"
                rel="noreferrer"
                className="font-medium text-blue-900 transition hover:text-blue-700"
              >
                Profil LinkedIn
              </a>
            </p>
          )}

          {c.github && (
            <p>
              <span className="font-semibold text-blue-700">GitHub :</span>{" "}
              <a
                href={c.github}
                target="_blank"
                rel="noreferrer"
                className="font-medium text-blue-900 transition hover:text-blue-700"
              >
                Profil GitHub
              </a>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
