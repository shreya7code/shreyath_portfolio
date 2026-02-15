export default function Home() {
  return (
    <main className="min-h-screen w-full bg-white">
      {/* Soft background blobs */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-pink-200 blur-3xl opacity-40" />
        <div className="absolute right-0 top-40 h-96 w-96 rounded-full bg-sky-200 blur-3xl opacity-40" />
        <div className="absolute left-1/3 bottom-0 h-96 w-96 rounded-full bg-emerald-200 blur-3xl opacity-30" />
      </div>

      <section className="mx-auto flex max-w-5xl flex-col items-center px-6 pt-16 text-center">
        {/* Small logo placeholder */}
        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border bg-white shadow-sm">
          <span className="text-lg font-semibold">S</span>
        </div>

        <p className="text-lg text-gray-700">Hey, I'm Shreya 👋</p>
        <h1 className="mt-2 text-5xl font-extrabold tracking-tight text-gray-900 sm:text-7xl">
          Software Developer
        </h1>

        {/* Avatar placeholder */}
        <div className="mt-10 flex h-40 w-40 items-center justify-center rounded-full bg-white shadow-md ring-1 ring-gray-200">
          <span className="text-sm text-gray-500">Your avatar</span>
        </div>

        {/* Chat-like input */}
        <div className="mt-10 flex w-full max-w-xl items-center gap-3 rounded-full border bg-white px-5 py-3 shadow-sm">
          <input
            className="w-full bg-transparent text-gray-800 outline-none placeholder:text-gray-400"
            placeholder="Ask me anything..."
          />
          <button
            className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500 text-white"
            aria-label="Send"
            type="button"
          >
            →
          </button>
        </div>

        {/* Buttons row */}
        <div className="mt-10 grid w-full max-w-3xl grid-cols-2 gap-4 sm:grid-cols-5">
          {["Me", "Projects", "Skills", "Fun", "Contact"].map((label) => (
            <button
              key={label}
              className="flex items-center justify-center gap-2 rounded-2xl border bg-white px-4 py-5 text-gray-800 shadow-sm hover:shadow-md transition"
              type="button"
            >
              <span className="text-sm font-medium">{label}</span>
            </button>
          ))}
        </div>
      </section>
    </main>
  );
}
