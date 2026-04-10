import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const root = createRoot(document.getElementById("root")!);
root.render(<App />);

requestAnimationFrame(() => {
  requestAnimationFrame(() => {
    document.documentElement.classList.remove("no-transition");

    const loader = document.getElementById("app-loader");
    if (loader) {
      loader.style.opacity = "0";
      loader.style.visibility = "hidden";
      document.body.style.overflow = "";
      setTimeout(() => loader.remove(), 520);
    }
  });
});
