import { LiveOrb } from "./LiveOrb";
import { Contact } from "./Contact";

/**
 * The landing, in three movements.
 *
 * The idea: one dark object on warm paper, and it stays with you. It starts
 * large and centred under the name, shrinks and moves aside as the work comes
 * in, then returns for contact. Everything else on the page is type and rule
 * lines — the orb is the only thing that moves, so it reads as a presence
 * rather than a decoration.
 */

export function Hero() {
  return (
    <main className="relative">
      {/* --- Opening --------------------------------------------------------- */}
      <section className="flex min-h-[92svh] flex-col justify-between px-6 pb-10 pt-8 sm:px-10">
        <header className="flex items-baseline justify-between gap-4">
          <span className="eyebrow">Portfolio — 2026</span>
          <span className="eyebrow">Scroll</span>
        </header>

        {/* Name sits above; the orb is directly beneath it, so the first thing
            you read and the first thing that moves belong together. */}
        <div className="flex flex-1 flex-col items-center justify-center gap-10 py-16">
          <h1 className="display text-center text-[clamp(3.5rem,15vw,11rem)]">
            HIMAVARA
            <br />
            SAGAR.
          </h1>
          <LiveOrb variant="black" size={260} />
          <p className="max-w-md text-center text-sm leading-relaxed text-muted-foreground">
            Systems, graphics, and the space between. This page is a placeholder
            — the structure is real, the words are not.
          </p>
        </div>

        <div className="flex justify-between gap-4 border-t border-line pt-4">
          <span className="eyebrow">Selected work</span>
          <span className="eyebrow">01 — 04</span>
        </div>
      </section>

      {/* --- Work ------------------------------------------------------------ */}
      {/* The wheel fills its parent, so the wrapper sets the height and the
          component measures the stage and scales to it. */}
      <section className="border-t border-line">
        <div className="flex items-baseline justify-between px-6 py-5 sm:px-10">
          <h2 className="eyebrow">Index</h2>
          <span className="eyebrow">Turn the wheel</span>
        </div>
        <div className="h-[78vh] w-full">
          <WorkSection />
        </div>
      </section>

      <Contact />
    </main>
  );
}

import { WorksWheel, type WorksWheelItem } from "./WorksWheel";

const PLACEHOLDER = (label: string) =>
  `data:image/svg+xml;utf8,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="414"><rect width="600" height="414" fill="#e2dfd7"/><text x="300" y="212" fill="#6e6a60" font-family="sans-serif" font-size="22" text-anchor="middle" letter-spacing="3">${label}</text></svg>`,
  )}`;

const ITEMS: WorksWheelItem[] = [
  { title: "Placeholder 01", image: PLACEHOLDER("01") },
  { title: "Placeholder 02", image: PLACEHOLDER("02") },
  { title: "Placeholder 03", image: PLACEHOLDER("03") },
  { title: "Placeholder 04", image: PLACEHOLDER("04") },
];

function WorkSection() {
  return <WorksWheel items={ITEMS} label="Work" action="Open" />;
}

export default Hero;