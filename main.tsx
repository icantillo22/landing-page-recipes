import { createRoot } from "react-dom/client";
import App from "./src/App";
import './style.css';
import { FiltresProvider } from "./src/context/filtersContext";

const appContainer = document.getElementById("app");

if (appContainer) {
  createRoot(appContainer).render(
    <FiltresProvider>
      <App />
    </FiltresProvider>
  )
}