export default function Hero() {
  return (
    <section className="flex min-h-[80vh] items-center justify-center px-6">
      <div className="max-w-3xl text-center">
        <h1 className="animate-fade-up text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
          Innovate. Build.{" "}
          <span className="text-[var(--muted)]">Lead.</span>
        </h1>
        <p
          className="animate-fade-up mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[var(--muted)]"
          style={{ animationDelay: "0.2s" }}
        >
          The official ICT club — where technology meets creativity. We build
          projects, host workshops, and shape the next generation of tech
          leaders.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#projects"
            className="animate-fade-up inline-flex h-12 w-full items-center justify-center rounded-full bg-[var(--foreground)] px-8 text-sm font-medium text-[var(--background)] transition-all hover:scale-105 hover:opacity-80 sm:w-auto"
            style={{ animationDelay: "0.4s" }}
          >
            View Our Projects
          </a>
          <a
            href="#contact"
            className="animate-fade-up inline-flex h-12 w-full items-center justify-center rounded-full border border-[var(--border)] px-8 text-sm font-medium transition-all hover:scale-105 hover:border-[var(--foreground)] sm:w-auto"
            style={{ animationDelay: "0.5s" }}
          >
            Get Involved
          </a>
          <a
            href="/announcements"
            className="animate-fade-up inline-flex h-12 w-full items-center justify-center rounded-full border border-[var(--border)] px-8 text-sm font-medium transition-all hover:scale-105 hover:border-[var(--foreground)] sm:w-auto"
            style={{ animationDelay: "0.6s" }}
          >
            Announcements
          </a>
          <a
            href="/members"
            className="animate-fade-up inline-flex h-12 w-full items-center justify-center rounded-full border border-[var(--border)] px-8 text-sm font-medium transition-all hover:scale-105 hover:border-[var(--foreground)] sm:w-auto"
            style={{ animationDelay: "0.7s" }}
          >
            ICT Club Members
          </a>
        </div>
      </div>
    </section>
  );
}
