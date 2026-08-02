import React from "react";
import { renderToPipeableStream } from "react-dom/server";
import { PassThrough } from "node:stream";
import { StaticRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.jsx";

// Renderuje aplikację (dla podanej ścieżki) do statycznego stringa HTML,
// plus zbiera tagi <title>/<meta>/<script type="ld+json"> wygenerowane
// przez react-helmet-async na tej konkretnej podstronie (np. ServicePage
// ustawia swój własny <title> i JSON-LD Service).
//
// UWAGA: strony poza Home są ładowane przez React.lazy() (App.jsx) —
// zwykłe renderToString NIE czeka na rozwiązanie lazy-importów i zwróciłoby
// pusty/błędny HTML dla tych podstron. renderToPipeableStream + onAllReady
// poprawnie czeka aż wszystkie leniwe komponenty się doładują, zanim
// serializujemy wynik do stringa — dlatego funkcja jest teraz asynchroniczna
// (zwraca Promise), a wywołanie w scripts/prerender.js musi użyć await.
export function render(url) {
  const helmetContext = {};

  return new Promise((resolve, reject) => {
    let html = "";
    const { pipe } = renderToPipeableStream(
      <React.StrictMode>
        <HelmetProvider context={helmetContext}>
          <StaticRouter location={url}>
            <App />
          </StaticRouter>
        </HelmetProvider>
      </React.StrictMode>,
      {
        onAllReady() {
          const collector = new PassThrough();
          collector.on("data", (chunk) => {
            html += chunk.toString();
          });
          collector.on("end", () => {
            resolve({ appHtml: html, helmet: helmetContext.helmet });
          });
          collector.on("error", reject);
          pipe(collector);
        },
        onError(err) {
          reject(err);
        },
      }
    );
  });
}
