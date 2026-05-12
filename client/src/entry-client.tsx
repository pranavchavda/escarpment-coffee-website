import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const container = document.getElementById("root")!;

// Hydrate only when the server rendered real DOM (any Element child),
// not when the HTML template merely contains the <!--ssr-outlet--> comment.
const hasElementChild = Array.from(container.childNodes).some(
  (node) => node.nodeType === Node.ELEMENT_NODE,
);

if (hasElementChild) {
  hydrateRoot(container, <App />);
} else {
  createRoot(container).render(<App />);
}
