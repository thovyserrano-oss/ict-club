export default function Hero() {
  return (
    <section className="flex min-h-[80vh] items-center justify-center px-6">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
          Innovate. Build.{" "}
          <span className="text-[var(--muted)]">Lead.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[var(--muted)]">
          The official ICT club — where technology meets creativity. We build
          projects, host workshops, and shape the next generation of tech
          leaders.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#projects"
            className="inline-flex h-12 w-full items-center justify-center rounded-full bg-[var(--foreground)] px-8 text-sm font-medium text-[var(--background)] transition-opacity hover:opacity-80 sm:w-auto"
          >
            View Our Projects
          </a>
          <a
            href="#contact"
            className="inline-flex h-12 w-full items-center justify-center rounded-full border border-[var(--border)] px-8 text-sm font-medium transition-colors hover:border-[var(--foreground)] sm:w-auto"
          >
            Get Involved
          </a>
          <a
            href="/announcements"
            className="inline-flex h-12 w-full items-center justify-center rounded-full border border-[var(--border)] px-8 text-sm font-medium transition-colors hover:border-[var(--foreground)] sm:w-auto"
          >
            Announcements
          </a>
          <a
            href="/members"
            className="inline-flex h-12 w-full items-center justify-center rounded-full border border-[var(--border)] px-8 text-sm font-medium transition-colors hover:border-[var(--foreground)] sm:w-auto"
          >
            ICT Club Members
          </a>

        </div>
      </div>
    </section>
  );
}
