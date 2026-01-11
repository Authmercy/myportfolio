import { Dispatch, SetStateAction, useEffect, useMemo, useState } from "react";

export default function Navbar({
  items,
  open,
  setOpen,
}: {
  items: { label: string; href: string }[];
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const [active, setActive] = useState<string>(items?.[0]?.href ?? "#profil");

  const hrefs = useMemo(() => items.map((i) => i.href), [items]);

  useEffect(() => {
    const ids = hrefs
      .filter((h) => h.startsWith("#"))
      .map((h) => h.replace("#", ""))
      .filter(Boolean);

    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!sections.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];

        if (visible?.target?.id) setActive(`#${visible.target.id}`);
      },
      {
        root: null,
        threshold: [0.2, 0.35, 0.5],
        rootMargin: "-30% 0px -60% 0px",
      }
    );

    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, [hrefs]);

  const onNavClick = (href: string) => {
    setActive(href);
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-blue-100 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Brand */}
        <a
          href="#profil"
          onClick={() => onNavClick("#profil")}
          className="text-lg font-bold tracking-tight text-blue-900"
        >
          Nahsang Mercy<span className="text-blue-600">.</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {items.map((it) => {
            const isActive = active === it.href;
            return (
              <a
                key={it.href}
                href={it.href}
                onClick={() => onNavClick(it.href)}
                className={`text-sm font-semibold transition ${
                  isActive
                    ? "text-blue-700"
                    : "text-blue-900/75 hover:text-blue-700"
                }`}
              >
                {it.label}
              </a>
            );
          })}
          <a
            href="#contact"
            onClick={() => onNavClick("#contact")}
            className="rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
          >
            Me contacter
          </a>
        </div>

        {/* Mobile button */}
        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen(true)}
          className="inline-flex items-center justify-center rounded-lg border border-blue-100 bg-white p-2 text-blue-900 shadow-sm transition hover:bg-blue-50 md:hidden"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            className="stroke-current"
          >
            <path d="M4 6h16M4 12h16M4 18h16" strokeWidth="2" />
          </svg>
        </button>
      </nav>
{open && (
  <>
    {/* Backdrop semi-transparent derrière le drawer */}
    <div
      onClick={() => setOpen(false)}
      className="fixed inset-0 z-40 bg-black/10" // léger assombrissement
    />

    {/* Drawer côté droit, blanc net */}
    <aside className="fixed right-0 top-0 z-50 h-full w-4/5 max-w-sm bg-white shadow-2xl p-6 flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <span className="text-lg font-bold text-blue-900">Menu</span>
        <button
          onClick={() => setOpen(false)}
          className="rounded-lg border border-blue-100 p-2 text-blue-900 hover:bg-blue-50"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="stroke-current">
            <path d="M6 6l12 12M18 6L6 18" strokeWidth="2" />
          </svg>
        </button>
      </div>

      {/* Liens */}
      <div className="flex flex-col gap-3 flex-1">
        {items.map((it) => {
          const isActive = active === it.href;
          return (
            <a
              key={it.href}
              href={it.href}
              onClick={() => onNavClick(it.href)}
              className={`block rounded-xl px-4 py-3 text-base font-semibold w-full transition ${
                isActive
                  ? "bg-blue-50 text-blue-700"
                  : "text-blue-900/85 hover:bg-blue-50 hover:text-blue-700"
              }`}
            >
              {it.label}
            </a>
          );
        })}

        <a
          href="#contact"
          onClick={() => onNavClick("#contact")}
          className="mt-4 block rounded-xl bg-blue-600 px-4 py-3 text-center text-sm font-semibold text-white shadow-sm w-full transition hover:bg-blue-700"
        >
          Me contacter
        </a>
      </div>
    </aside>
  </>
)}





    </header>
  );
}
