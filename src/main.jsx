import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.jsx";
import "./index.css";

// TYMCZASOWY znacznik diagnostyczny — usunąć po potwierdzeniu wdrożenia.
// Pokazuje w konsoli: 1) że to nowy build, 2) jaki <title> faktycznie
// przyszedł z serwera dla bieżącej ścieżki (document.title jest ustawiane
// przez server-rendered HTML, ZANIM React cokolwiek zrobi) — jeśli tu
// zobaczysz "FLOWTEX Polska | Posadzki przemysłowe..." na stronie /fitout,
// to znaczy, że serwer nadal oddaje HTML strony głównej pod tym adresem.
console.log(
  "%c[FLOWTEX DEPLOY CHECK v2]",
  "color:#fff;background:#1B1B1D;padding:2px 6px",
  { pathname: window.location.pathname, serverTitle: document.title }
);

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
