import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import SphereEyesDemo from "./components/SphereEyesDemo";
import "./sphere-eyes.css";

const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <SphereEyesDemo />
    </StrictMode>
  );
}
