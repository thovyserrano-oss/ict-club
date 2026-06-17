import Link from "next/link";

const announcements: { date: string; title: string }[] = [];

export default function AnnouncementsPage() {
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
          Announcements
        </h1>
        <p className="mt-3 text-[var(--muted)]">
          Stay updated with the latest from ICT Club.
        </p>

        <div className="mt-12">
          <div className="rounded-xl border border-[var(--border)] p-12 text-center">
            <p className="text-lg font-semibold">No announcements yet</p>
            <p className="mt-2 text-sm text-[var(--muted)]">
              Soon to be projects and updates will appear here.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
