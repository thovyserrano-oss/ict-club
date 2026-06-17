export default function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-[var(--border)] px-6 py-16"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 sm:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold">ICT Club</h3>
            <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
              To equip students with the knowledge, skills, and mindset needed
              to thrive in the digital age through hands-on projects,
              workshops, and collaborative learning.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-[var(--muted)]">
              <li><a href="/" className="transition-colors hover:text-[var(--foreground)]">Home</a></li>
              <li><a href="/#projects" className="transition-colors hover:text-[var(--foreground)]">Projects</a></li>
              <li><a href="/about" className="transition-colors hover:text-[var(--foreground)]">About</a></li>
              <li><a href="/members" className="transition-colors hover:text-[var(--foreground)]">Members</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest">
              Contact
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-[var(--muted)]">
              <li>MRMNHS - Pamaldan Campus</li>
              <li>Pamaldan, Cabanatuan, Nueva Ecija</li>
              <li>ictclub@mrmnhs.edu.ph</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-[var(--border)] pt-8 text-center text-xs text-[var(--muted)]">
          &copy; {new Date().getFullYear()} ICT Club. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
