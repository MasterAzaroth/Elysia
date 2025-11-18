export default function SectionCard({ title, children }) {
  return (
    <section className="bg-zinc-800 rounded-xl p-4 space-y-2">
      <h2 className="text-lg font-semibold">{title}</h2>
      {children}
    </section>
  );
}
