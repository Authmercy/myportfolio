export default function Skills({ competence }: { competence: any }) {
  const Card = ({
    title,
    items,
  }: {
    title: string;
    items: string[];
  }) => (
    <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm transition hover:shadow-md">
      <h3 className="mb-4 text-lg font-bold text-blue-950">{title}</h3>
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
  );

  return (
    <div className="mx-auto grid max-w-6xl gap-6 px-4 md:grid-cols-2 lg:grid-cols-3">
      <Card
        title={competence.topicProgramming}
        items={competence.programming}
      />

      <Card title={competence.topicData} items={competence.data} />

      <Card title={competence.topicDB} items={competence.databases} />

      <Card
        title={competence.topicModeling}
        items={competence.modeling}
      />

      <Card title={competence.topicIA} items={competence.ia} />

      <Card title={competence.topicDevOps} items={competence.devOps} />

      <Card title={competence.topicTool} items={competence.tools} />
    </div>
  );
}
