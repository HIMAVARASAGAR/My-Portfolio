import { defineConfig } from "vite";
import glsl from "vite-plugin-glsl";

export default defineConfig({
  plugins: [glsl()],
  base: "./",
  assetsInclude: ["**/*.hdr", "**/*.glb", "**/*.mp4"],
  server: { port: 5173, open: true },
});
