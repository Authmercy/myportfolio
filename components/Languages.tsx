export default function Languages({ items }: { items: any[] }) {
  return (
 <div className="mx-auto max-w-6xl px-4">
  <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm transition hover:shadow-md">
    <div className="flex flex-col gap-3">
      {items.map((l) => (
        <div
          key={l.name}
          className="flex w-full items-center justify-between rounded-xl border border-blue-100 bg-blue-50 px-5 py-3 text-sm font-semibold text-blue-800 transition hover:bg-blue-100"
        >
          <span>{l.name}</span>
          <span className="text-xs font-bold text-blue-950">
            {l.level}
          </span>
        </div>
      ))}
    </div>
  </div>
</div>

  );
}
