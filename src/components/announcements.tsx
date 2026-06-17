const announcements = [
  { date: "Jun 15, 2026", title: "Hackathon 2026 Registration Open" },
  { date: "Jun 10, 2026", title: "Workshop: Intro to React & Next.js" },
  { date: "Jun 5, 2026", title: "Officer Elections Coming Soon" },
];

export default function Announcements() {
  return (
    <section id="announcements" className="border-t border-[var(--border)] px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)]">
            Updates
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Announcements
          </h2>
        </div>

        <div className="overflow-x-auto rounded-xl border border-[var(--border)]">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-[var(--border)] text-xs font-semibold uppercase tracking-widest text-[var(--muted)]">
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4">Title</th>
              </tr>
            </thead>
            <tbody>
              {announcements.map((a) => (
                <tr
                  key={a.title}
                  className="border-b border-[var(--border)] last:border-0 transition-colors hover:bg-[var(--foreground)] hover:text-[var(--background)]"
                >
                  <td className="px-6 py-4 font-medium">{a.date}</td>
                  <td className="px-6 py-4">{a.title}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 text-center">
          <a
            href="#"
            className="inline-flex h-12 items-center justify-center rounded-full border border-[var(--border)] px-8 text-sm font-medium transition-colors hover:border-[var(--foreground)]"
          >
            View All Announcements
          </a>
        </div>
      </div>
    </section>
  );
}
