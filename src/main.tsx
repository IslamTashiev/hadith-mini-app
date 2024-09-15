import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "@telegram-apps/telegram-ui/dist/styles.css";
import { AppRoot } from "@telegram-apps/telegram-ui";

createRoot(document.getElementById("root")!).render(
  <AppRoot>
    <App />
  </AppRoot>
);
