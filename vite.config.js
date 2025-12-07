import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { ghPages } from "vite-plugin-gh-pages";

// Change base to your repo name **later**
export default defineConfig({
  plugins: [react(), ghPages()],
  base: "/my-portfolio/"
});