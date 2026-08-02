import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.jsx";
import "./index.css";

// hydrateRoot (zamiast createRoot) — po wdrożeniu prerenderingu każda
// podstrona trafia do przeglądarki jako gotowy, wypełniony treścią HTML
// (wygenerowany przez scripts/prerender.js). React "przejmuje" ten HTML
// (hydracja) zamiast renderować go od nowa po stronie klienta. W trybie
// `npm run dev` div#root jest pusty, więc hydrateRoot po prostu renderuje
// normalnie (może pokazać w konsoli deweloperskie ostrzeżenie o hydracji —
// nieszkodliwe, dotyczy tylko trybu dev).
ReactDOM.hydrateRoot(
  document.getElementById("root"),
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);
