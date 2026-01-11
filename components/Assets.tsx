export default function Assets({ items }: { items: string[] }) {
  
  return (
    <div className="mx-auto max-w-6xl px-4">
      <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm transition hover:shadow-md">
        

        <div className="flex flex-wrap gap-2">
          {items.map((x) => (
            <span
              key={x}
              className="rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700"
            >
              {x}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
