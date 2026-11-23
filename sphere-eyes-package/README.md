# Sphere Eyes Animation

A high-performance WebGL interactive sphere character with capsule eyes that smoothly track mouse pointer / touch movement and blink naturally.

- **Zero dependencies** (pure vanilla WebGL 1.0, no Three.js or heavy 3D library required)
- **High performance** (runs 60–120fps with negligible CPU usage)
- **Responsive** (adapts to retina displays and window resizing automatically)

---

## 1. Using in React / Next.js

1. Copy `LiveOrb.tsx` into your components folder (e.g. `src/components/LiveOrb.tsx`).
2. Import and use it:

```tsx
import LiveOrb from "./LiveOrb";

export default function Page() {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <LiveOrb size={300} variant="black" interactive blink />
    </div>
  );
}
```

### Available Props:
- `size` (number, default: `280`): width and height in px
- `variant` (`"black"` | `"white"` | `"volt"` | `"sunset"` | `"klein"` | `"webgl"` | `"custom"`): color preset
- `interactive` (boolean, default: `true`): eyes follow pointer movement
- `blink` (boolean, default: `true`): natural random blinking
- `color` (string): body hex code when `variant="custom"`
- `eyeColor` (string): eye hex code when `variant="custom"`
- `shading` (number, `0.0` to `1.0`): subtle 3D rim shading

---

## 2. Using in Plain HTML / JavaScript

Open `standalone.html` in any web browser — it runs immediately with zero build tools or servers needed.
