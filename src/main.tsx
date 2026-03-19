import { createRoot } from "react-dom/client";
import App from "./App";
import { I18nProvider } from "./shared/i18n";

const container = document.getElementById("root");

if (!container) {
  throw new Error("Root container not found");
}

const root = createRoot(container);

root.render(
  <I18nProvider>
    <App />
  </I18nProvider>,
);
