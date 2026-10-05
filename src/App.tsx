import Hero from "./components/Hero";

/**
 * No preloader, no curtain.
 *
 * The page is paper — it paints instantly, and the orb blinks on arrival
 * because it blinks on any page. A loading screen on a site this size is
 * theatre for a load that takes under a second, and it delays the one thing
 * worth seeing.
 */
export default function App() {
  return <Hero />;
}