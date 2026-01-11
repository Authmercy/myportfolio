type SectionProps = {
  id: string;
  title?: string;
  children: React.ReactNode;
};

export default function Section({ id, title, children }: SectionProps) {
  return (
    <section
      id={id}
      className="w-full px-4 py-12 sm:py-14"
    >
      <div className="mx-auto max-w-6xl">
        {title && (
          <div className="mb-8">
            <h2 className="text-2xl font-extrabold tracking-tight text-blue-950 sm:text-3xl">
              {title}
              <span className="text-blue-600">.</span>
            </h2>
            <div className="mt-2 h-1 w-16 rounded-full bg-blue-600" />
          </div>
        )}

        {children}
      </div>
    </section>
  );
}
