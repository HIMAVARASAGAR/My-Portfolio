/**
 * Closing movement. Deliberately plain — a big name, two links, a rule.
 * The orb comes back here so the page ends on the same thing it opened with.
 */

export function Contact() {
  return (
    <footer
      id="contact"
      className="flex min-h-[70svh] flex-col justify-between border-t border-line px-6 pb-10 pt-8 sm:px-10"
    >
      <div className="flex items-baseline justify-between gap-4">
        <span className="eyebrow">Contact</span>
        <span className="eyebrow">04 — end</span>
      </div>

      <div className="flex flex-1 flex-col items-center justify-center gap-12 py-16">
        <p className="display text-center text-[clamp(2.5rem,9vw,7rem)]">
          Let&apos;s talk.
        </p>
        {/* TODO: real links. */}
        <div className="flex gap-8 text-sm">
          <a
            href="#"
            className="border-b border-transparent pb-0.5 transition-colors hover:border-foreground"
          >
            Email
          </a>
          <a
            href="#"
            className="border-b border-transparent pb-0.5 transition-colors hover:border-foreground"
          >
            GitHub
          </a>
          <a
            href="#"
            className="border-b border-transparent pb-0.5 transition-colors hover:border-foreground"
          >
            LinkedIn
          </a>
        </div>
      </div>

      <div className="flex justify-between gap-4 border-t border-line pt-4">
        <span className="eyebrow">HIMAVARA SAGAR.</span>
        <span className="eyebrow">Built from scratch</span>
      </div>
    </footer>
  );
}

export default Contact;