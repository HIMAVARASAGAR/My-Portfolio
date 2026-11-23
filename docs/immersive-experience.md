# Motion direction — Buttermax study

## Reference inspected
User-provided `buttermax-extracted.zip`, extracted for inspection only under `/tmp/portfolio-butter-reference`, and https://buttermax.net/ . No reference branding, models, media, fonts or source modules are shipped with the portfolio.

Specific findings:
- `beautified/index.beautified.js`: logo uses a non-looping Lottie texture. The animation data is 51 frames at 30fps (1.7 seconds), with animated shape paths and trim-path reveals. This is bespoke logo artwork, not a generic staggered text reveal.
- `engine/shaders/LogoShapeShader.glsl`: scroll-dependent texture positioning and pointer-fluid sampling.
- `beautified/projects.beautified.js`: coordinated item colour transitions, a hover-enabled title marquee, media and label layers. Detail media has separate parallax and velocity uniforms.
- The page controller uses a single smooth-scroll update loop. Copy, media and background transitions share easing and timing.

## Adaptation
- Name: original vector outlines generated from the already-used Instrument Serif italic for “Sagar”, drawing into filled glyphs, followed by the underline. First-name glyphs settle into place. One accessible name stays available throughout. The animation is original and does not reuse Buttermax's logo.
- Bento gallery: existing eleven projects and column proportions retained. Existing project diagrams occupy the media area; pointer movement shifts that area slightly. Hover coordinates a cobalt surface, softened artwork and oversized flowing title. Touch devices retain the static title and media; nothing relies on hover to open.
- Smooth desktop wheel scrolling uses the already-installed Lenis on the GSAP ticker. Touch stays native. Dialogs and navigation stop background scrolling. Reduced-motion stays native and skips entrances.
- Skills: all tools and associated projects are visible in four groups, with short panel/content arrival sequences.
- About: two chronological milestones replace the tilted panels. The reading rail advances with scroll; dates and facts enter as one sequence.
- Contact: coordinated heading reveal with the existing functional envelope/email interactions.
- Project opening is a card-to-image expansion; closing reverses that same timeline. No ribbon, independent 3D sculpture or experimental WebGL reading outlines remain.

## Media
- `public/projects/code.jpg`: contextual photo by Godfrey Atima, https://www.pexels.com/photo/programming-code-on-computer-screen-5223887/
- `public/projects/electronics.jpg`: contextual photo by Ivan Chumak, https://www.pexels.com/photo/close-up-of-electronics-circuit-board-components-40342987/
- `public/projects/portfolio.jpg`: existing screenshot of this portfolio's earlier iteration.

Context photos remain clearly captioned; project diagrams are labelled illustrative where appropriate. They are not presented as photographs of the user's own hardware.
