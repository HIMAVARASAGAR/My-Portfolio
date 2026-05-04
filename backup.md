# 🌌 Antigravity Portfolio Architecture — SOTD Edition

## 1. Core Stack & Dependencies
- **Framework:** Next.js 15 (App Router, Turbopack)
- **Styling:** CSS Modules with variables in `globals.css`
- **Animations:** GSAP (Core + ScrollTrigger)
- **Smooth Scrolling:** `@studio-freight/lenis`
- **3D / WebGL:** `three`, `@react-three/fiber`, `@react-three/drei`

## 2. Global Design System ("Structural Brutalism")
Defined in `src/app/globals.css`.
- **Palette:**
  - Background (`--bg`): `#0a0a0f` (Midnight)
  - Card BG (`--bg-card`): `#101018`
  - Primary Text (`--text-primary`): `#e8e4dc` (Warm Ivory)
  - Accent (`--accent`): `#e8553d` (Coral-Orange)
  - Domains: `--violet` (Education), `--emerald` (AI)
- **Typography:**
  - Display (`--font-display`): Instrument Serif / Playfair Display
  - Mono (`--font-mono`): Space Mono / JetBrains
  - Body (`--font-body`): Inter / Roobert
- **Global Utilities:**
  - `.container`: Sets max-width (`1400px`) and responsive padding.
  - Norris Text (`.norris-text`, `.norris-char`): CSS pseudo-element driven hover slide animation.

## 3. Component Architecture & Interactions

### `SmoothScroll.js` & `NoiseOverlay.js`
- **Lenis:** Wrapped globally in the layout. Configured for a cinematic feel (`lerp: 0.05`).
- **Noise:** A fixed `mix-blend-mode: overlay` noise texture applied across the entire site for texture.
- **Custom Cursor:** Follows mouse with `mix-blend-mode: difference`, expands on `[data-cursor="lg"]` attributes.

### `Hero.js`
- **Visuals:** Massive outline/fill parallax typography. Background text `SAGAR` moving at a different depth.
- **WebGL:** Currently running a `ParticleField` points mesh using React Three Fiber.
- **Interactions:** Staggered load-in, scale-down on scroll out.

### `CircuitReveal.js` (Signature Interaction)
- **Visuals:** A massive SVG circuit board mimicking neural pathways and hardware.
- **Interactions:** Pinned section. Uses GSAP `strokeDashoffset` to "draw" the SVG lines as the user scrolls, popping in junction nodes, and fading in text. 

### `ProjectsGallery.js`
- **Visuals:** Horizontal scrolling track.
- **Interactions:** Section pins, track scrolls left horizontally using GSAP based on vertical scroll delta. Includes massive parallax background typography (`bgText`) inside each card that moves inversely to the scroll to create depth.

### `About.js`
- **Visuals:** Typography-heavy layout with a stat grid.
- **Interactions:** Pinned section. The main paragraph uses a word-by-word reveal (opacity/Y transform) mapped directly to scroll progress. Stats and tags stagger in via `ScrollTrigger`.

### `Experience.js`
- **Visuals:** A stack of physical-looking cards on top of a massive background counter.
- **Interactions:** Pinned section. As the user scrolls, each card animates in (`yPercent: 100` to `0`), and then pushes out the previous card (`scale: 0.95`, `opacity: 0.3`).

### `Contact.js`
- **Visuals:** Split layout with contact info and a massive circular button.
- **Interactions:** The button features advanced magnetic physics—it tracks the cursor position within a radius and uses GSAP to attract the button to the cursor, snapping back with elasticity on leave.

### `NorrisText.js`
- **Logic:** Splits a string into characters using `Intl.Segmenter` for grapheme safety, wraps them in `<span>`, and sets a CSS variable `--char-index`. Hover triggers a staggering slide-up animation.

## 4. Rebuild Instructions
If an agent needs to rebuild:
1. Initialize Next.js app, install `gsap`, `@studio-freight/lenis`, `three`, `@react-three/fiber`, `@react-three/drei`.
2. Apply `globals.css` palette and Norris text variables.
3. Build the core layout with Lenis provider and Custom Cursor.
4. Reconstruct GSAP timelines wrapped in `gsap.context()` for React Strict Mode safety. Make sure to use `ScrollTrigger.refresh()` if layouts change.
5. Combine vertical and horizontal scroll logic meticulously.
