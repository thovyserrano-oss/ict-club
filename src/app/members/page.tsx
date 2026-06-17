import Link from "next/link";

const adviser = { name: "Mark Zoren MJ", role: "Adviser" };

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

export default function MembersPage() {
  return (
    <div className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/"
          className="text-sm text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
        >
          &larr; Back to Home
        </Link>

        <h1 className="mt-6 text-4xl font-bold tracking-tight">
          ICT Club Members
        </h1>
        <p className="mt-3 text-[var(--muted)]">
          Meet the officers and representatives of ICT Club.
        </p>

        <div className="mt-16 mb-16 text-center">
          <div className="mx-auto inline-block rounded-xl border border-[var(--border)] p-6">
            <div className="mx-auto h-16 w-16 rounded-full bg-[var(--border)]" />
            <p className="mt-4 text-lg font-semibold">{adviser.name}</p>
            <p className="mt-1 text-sm text-[var(--muted)]">{adviser.role}</p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {officers.map((o, i) => (
            <div
              key={i}
              className="rounded-xl border border-[var(--border)] p-6 transition-colors hover:border-[var(--foreground)]"
            >
              <div className="mx-auto h-14 w-14 rounded-full bg-[var(--border)]" />
              <p className="mt-4 text-lg font-semibold">{o.name}</p>
              <p className="mt-1 text-sm text-[var(--muted)]">{o.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
