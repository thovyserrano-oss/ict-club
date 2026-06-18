const placeholderProjects = [
  {
    title: "School Portal Website",
    description:
      "A central website for students and teachers to access announcements, schedules, and school resources.",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Grade Viewer System",
    description:
      "An online platform where students can securely view their grades and academic progress.",
    tags: ["PHP", "MySQL", "Bootstrap"],
  },
  {
    title: "Library Management System",
    description:
      "A digital catalog and borrowing system to streamline book tracking in the school library.",
    tags: ["Python", "SQLite", "Flask"],
  },
  {
    title: "Event Registration System",
    description:
      "An online sign-up system for school events, workshops, and club enrollment.",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "E-Voting System",
    description:
      "A secure digital voting platform for SSLG and club officer elections.",
    tags: ["JavaScript", "Firebase", "HTML/CSS"],
  },
  {
    title: "School Newsletter",
    description:
      "A monthly online publication featuring school news, student achievements, and upcoming events.",
    tags: ["WordPress", "Canva", "Photoshop"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="border-t border-[var(--border)] px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)]">
            Our Work
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Featured Projects
          </h2>
          <p className="mt-4 max-w-xl text-[var(--muted)]">
            A selection of projects our members have built. Each one represents
            countless hours of learning, collaboration, and craftsmanship.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {placeholderProjects.map((project, i) => (
            <article
              key={project.title}
              className="animate-fade-up group flex flex-col rounded-xl border border-[var(--border)] p-6 transition-all hover:-translate-y-1 hover:border-[var(--foreground)]"
              style={{ animationDelay: `${(i + 1) * 0.1}s` }}
            >
              <div className="mb-2 h-2 w-12 rounded-full bg-[var(--foreground)]" />
              <h3 className="mt-4 text-lg font-semibold">{project.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--muted)]">
                {project.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[var(--border)] px-3 py-1 text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
