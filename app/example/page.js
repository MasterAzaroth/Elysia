export default function ExamplePage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 p-6 space-y-8">

      {/* Page Header */}
      <header className="space-y-1">
        <h1 className="text-2xl font-bold">Example Page</h1>
        <p className="text-sm text-zinc-400">
          This page demonstrates divs, text, lists, sections, and buttons in React + Tailwind.
        </p>
      </header>


      {/* Section */}
      <section className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 space-y-4">
        <h2 className="text-xl font-semibold">Basic Text</h2>

        <p className="text-sm">
          This is a normal paragraph. Tailwind controls all styling using classes.
        </p>

        <p className="text-sm text-zinc-400">
          Tailwind is basically CSS shortcuts like <code>p-4</code> instead of <code>padding: 1rem;</code>.
        </p>
      </section>


      {/* List Example */}
      <section className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 space-y-3">
        <h2 className="text-lg font-semibold">List Example</h2>

        <ul className="list-disc list-inside space-y-1 text-sm text-zinc-300">
          <li>React uses JSX (HTML inside JS)</li>
          <li>Tailwind replaces most CSS</li>
          <li>class → className</li>
          <li>Styles are added via utility classes</li>
        </ul>
      </section>


      {/* Button Example */}
      <section className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 space-y-3">
        <h2 className="text-lg font-semibold">Button Example</h2>

        <button
          className="
            px-4 py-2
            rounded-lg
            bg-violet-600 hover:bg-violet-500
            text-sm font-medium
            transition
          "
        >
          Click Me
        </button>
      </section>

    </main>
  );
}
