import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/"
          className="text-sm text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
        >
          &larr; Back to Home
        </Link>

        <h1 className="mt-6 text-4xl font-bold tracking-tight">About ICT Club</h1>
        <p className="mt-3 text-[var(--muted)]">
          Marciano Del Rosario Memorial National High School
        </p>

        <div className="mt-12 space-y-12">
          <section>
            <h2 className="text-2xl font-bold tracking-tight">Our Mission</h2>
            <p className="mt-4 leading-relaxed text-[var(--muted)]">
              To equip students with the knowledge, skills, and mindset needed to
              thrive in the digital age. We aim to create a community where
              technology meets creativity — empowering learners to build,
              innovate, and lead through hands-on projects and collaborative
              learning.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold tracking-tight">Our Vision</h2>
            <p className="mt-4 leading-relaxed text-[var(--muted)]">
              A campus where every student is digitally literate, confident in
              using technology, and inspired to pursue careers in ICT and
              related fields.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold tracking-tight">What We Do</h2>
            <ul className="mt-4 space-y-3 text-[var(--muted)]">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--foreground)]" />
                <span>Conduct coding workshops and tech seminars</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--foreground)]" />
                <span>Organize inter-school hackathons and competitions</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--foreground)]" />
                <span>Build real-world projects using modern technologies</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--foreground)]" />
                <span>Provide peer-to-peer mentoring for junior students</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--foreground)]" />
                <span>Participate in division and regional ICT events</span>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
