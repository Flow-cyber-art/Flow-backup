// Prerendering (SSG) dla Vite + React SPA.
//
// Dlaczego to istnieje: boty AI/LLM (GPTBot, ClaudeBot, PerplexityBot...)
// w większości NIE wykonują JavaScriptu — czytają wyłącznie surowy HTML.
// Zwykły build Vite/React zostawia w HTML pusty <div id="root"></div>,
// więc taki bot nie widzi żadnej treści strony. Ten skrypt dogenerowuje,
// dla każdej podstrony, gotowy statyczny HTML z realną treścią (naglówki,
// opisy usług, FAQ) — czytelny bez JS. Prawdziwi użytkownicy dalej dostają
// pełną, interaktywną aplikację React (hydracja w main.jsx).
//
// Uruchamiane automatycznie przez `npm run build` (patrz package.json),
// PO standardowym buildzie klienta i buildzie SSR.

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const distDir = path.join(root, "dist");
const ssrDir = path.join(root, "dist-ssr");

// Trasy do wygenerowania. Statyczne (/, /polityka-prywatnosci) + wszystkie
// sługi usług z src/data/services.js — jedno źródło prawdy, więc nowa
// usługa dodana w services.js automatycznie trafi też tutaj.
const { SERVICES } = await import(path.join(root, "src/data/services.js"));

const routes = [
  "/",
  "/polityka-prywatnosci",
  "/polityka-cookies",
  ...SERVICES.map((s) => `/${s.slug}`),
];

const { render } = await import(path.join(ssrDir, "entry-server.js"));

// Wklejamy oba arkusze CSS bezpośrednio do <head> jako <style>, zamiast
// linkować je jako osobne żądania sieciowe. PageSpeed Insights flagował
// oba (/assets/index-*.css i /fonts/fonts.css) jako "żądania blokujące
// renderowanie" — każdy z nich to dodatkowy round-trip odkrywany dopiero
// po sparsowaniu <head>, zanim przeglądarka może cokolwiek narysować.
// Oba pliki są małe (razem ok. 5,4 KiB), więc inlining nie zwiększa
// realnie wagi strony, a usuwa dwa żądania z krytycznej ścieżki.
function inlineStylesheets(html) {
  let out = html;

  out = out.replace(
    /<link rel="stylesheet" crossorigin href="(\/assets\/[^"]+\.css)">/,
    (_match, href) => {
      const css = fs.readFileSync(path.join(distDir, href), "utf-8");
      return `<style>${css}</style>`;
    }
  );

  out = out.replace(
    /<link rel="stylesheet" href="\/fonts\/fonts\.css" \/>/,
    () => {
      const css = fs.readFileSync(path.join(distDir, "fonts", "fonts.css"), "utf-8");
      return `<style>${css}</style>`;
    }
  );

  return out;
}

const template = inlineStylesheets(
  fs.readFileSync(path.join(distDir, "index.html"), "utf-8")
);

function injectHelmet(html, helmet) {
  let out = html;

  // <title> — helmet.title.toString() zwraca kompletny tag <title>...</title>
  if (helmet?.title) {
    out = out.replace(/<title[^>]*>[\s\S]*?<\/title>/, helmet.title.toString());
  }
  // meta description — nadpisujemy istniejący tag, jeśli strona ustawia własny.
  // Regexy NIE zakładają konkretnej kolejności atrybutów (helmet potrafi
  // dokładać atrybut data-rh PRZED name/property, więc "<meta name=" na
  // sztywno by nie trafił).
  if (helmet?.meta) {
    const metaStr = helmet.meta.toString();
    const descMatch = metaStr.match(/<meta[^>]*\bname="description"[^>]*>/);
    if (descMatch) {
      out = out.replace(/<meta[^>]*\bname="description"[^>]*>/, descMatch[0]);
    }
    ["og:title", "og:description", "og:url"].forEach((prop) => {
      const m = metaStr.match(new RegExp(`<meta[^>]*\\bproperty="${prop}"[^>]*>`));
      const re = new RegExp(`<meta[^>]*\\bproperty="${prop}"[^>]*>`);
      if (m && re.test(out)) out = out.replace(re, m[0]);
    });
  }
  // canonical link
  if (helmet?.link) {
    const linkStr = helmet.link.toString();
    const canMatch = linkStr.match(/<link[^>]*\brel="canonical"[^>]*>/);
    if (canMatch) {
      out = out.replace(/<link[^>]*\brel="canonical"[^>]*>/, canMatch[0]);
    }
  }
  // dodatkowy JSON-LD ustawiany per-strona (np. Service na ServicePage) —
  // dokładamy PRZED </head>, nie nadpisując istniejących danych strukturalnych
  if (helmet?.script) {
    const scriptStr = helmet.script.toString();
    if (scriptStr) out = out.replace("</head>", `${scriptStr}\n  </head>`);
  }
  return out;
}

let count = 0;
for (const url of routes) {
  const { appHtml, helmet } = await render(url);
  let html = template.replace(
    '<div id="root"></div>',
    `<div id="root">${appHtml}</div>`
  );
  html = injectHelmet(html, helmet);

  const outPath =
    url === "/"
      ? path.join(distDir, "index.html")
      : path.join(distDir, url.slice(1), "index.html");

  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, html);
  count++;
  console.log(`  ✓ prerendered ${url}`);
}

// Sprzątamy tymczasowy build SSR — nie jest potrzebny w finalnym dist/
fs.rmSync(ssrDir, { recursive: true, force: true });

console.log(`\nPrerendering zakończony: ${count} podstron z realną treścią w HTML.`);
