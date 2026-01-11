export default function Hero({ profil }: { profil: any }) {
  const c = profil?.contact ?? {};

  const badges = ["Power BI", "SQL", "Python", "Data Viz", "Machine Learning", "ETL", "Reporting", "Excel"]; 

  return (
    <div className="mx-auto   px-4 py-6 ">
  
        <p className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700">
          <span className="h-2 w-2 rounded-full bg-blue-600" />
          Disponible pour alternance / stage
        </p>

        <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-blue-950 sm:text-4xl">
          {profil.fullname}
          <span className="text-blue-600">.</span>
        </h1>

        <p className="mt-2 text-lg font-semibold text-blue-900/80">
          {profil.headline}
        </p>

        <p className="mt-5  leading-relaxed text-blue-950/70">
          {profil.about}
        </p>

        {/* Badges */}
        <div className="mt-5 flex flex-wrap gap-2">
          {badges.map((b) => (
            <span
              key={b}
              className="rounded-full border border-blue-100 bg-white px-3 py-1 text-sm font-semibold text-blue-800 shadow-sm"
            >
              {b}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-7 flex flex-wrap gap-3">
          {c.linkedin ? (
            <a
              href={c.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
            >
              LinkedIn
            </a>
          ) : null}

          {c.github ? (
            <a
              href={c.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-xl border border-blue-200 bg-white px-4 py-2.5 text-sm font-semibold text-blue-800 shadow-sm transition hover:bg-blue-50"
            >
              GitHub
            </a>
          ) : null}

          {c.email ? (
            <a
              href={`mailto:${c.email}`}
              className="inline-flex items-center justify-center rounded-xl border border-blue-200 bg-white px-4 py-2.5 text-sm font-semibold text-blue-800 shadow-sm transition hover:bg-blue-50"
            >
              Email 
            </a>
          ) : null}
        </div>
      

      {/* Right card 
      <div className="rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-6 shadow-sm">
        <h3 className="text-base font-bold text-blue-950">Infos rapides</h3>

        <div className="mt-4 grid gap-3 text-sm">
          {profil.location ? (
            <div className="flex items-center justify-between rounded-xl bg-white/70 px-4 py-3">
              <span className="font-semibold text-blue-950/70">Localisation</span>
              <span className="font-bold text-blue-950">{profil.location}</span>
            </div>
          ) : null}

          {c.email ? (
            <div className="flex items-center justify-between rounded-xl bg-white/70 px-4 py-3">
             <span className="font-semibold text-blue-950/70">Email  </span>
              <a
                href={`mailto:${c.email}`}
                className="font-bold text-blue-700 hover:underline"
              >
                 {c.email}
              </a>
            </div>
          ) : null}

          {c.phone ? (
            <div className="flex items-center justify-between rounded-xl bg-white/70 px-4 py-3">
              <span className="font-semibold text-blue-950/70">Téléphone</span>
              <a
                href={`tel:${c.phone}`}
                className="font-bold text-blue-700 hover:underline"
              >
                {c.phone}
              </a>
            </div>
          ) : null}
        </div>

        <div className="mt-6 rounded-xl border border-blue-100 bg-white p-4">
          <p className="text-xs font-semibold text-blue-700">Objectif</p>
          <p className="mt-1 text-sm font-semibold text-blue-950">
            Data Analyst / BI — dashboards, KPI, automatisation reporting
          </p>
          <p className="mt-2 text-sm text-blue-950/70">
            Je transforme des données en décisions avec Power BI, SQL, Excel et Python.
          </p>
        </div>
      </div>*/}
    </div>
  );
}
