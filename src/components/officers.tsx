const officers = [
  { name: "Jhon Xyryll Samoy", role: "President" },
  { name: "Lance Thovy B. Serrano", role: "Vice President" },
  { name: "Greg Miguel Robles", role: "Secretary" },
  { name: "Rhianna V. Marin", role: "Treasurer" },
  { name: "Sherwin Dela Vega", role: "Project Manager" },
  { name: "Dennis T. Salvador", role: "Auditor" },
  { name: "Charlie Joy S. Pacheco", role: "Photographer" },
  { name: "John Sebuel Vergara", role: "Police Officer" },
  { name: "Kristel Mae Ramos", role: "Grade 8 Representative" },
  { name: "Princess Ann A. Labitan", role: "Grade 9 Representative" },
  { name: "Vincent Guevarra", role: "Grade 11 Representative" },
  { name: "Basty Garcia", role: "Grade 11 Representative" },
  { name: "JC M. Zabala", role: "Grade 12 Representative" },
];

export default function Officers() {
  return (
    <section id="about" className="border-t border-[var(--border)] px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-8 text-2xl font-bold tracking-tight">
          ICT CLUB MEMBERS
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {officers.map((o) => (
            <div
              key={o.role}
              className="rounded-xl border border-[var(--border)] p-6 text-center transition-colors hover:border-[var(--foreground)]"
            >
              <div className="mx-auto h-16 w-16 rounded-full bg-[var(--border)]" />
              {o.name ? (
                <>
                  <p className="mt-4 text-lg font-semibold">{o.name}</p>
                  <p className="mt-1 text-sm text-[var(--muted)]">{o.role}</p>
                </>
              ) : (
                <p className="mt-4 text-lg font-semibold">{o.role}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
