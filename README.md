# Flowtex Polska

Strona firmowa (React + Vite + Tailwind CSS). Treści oznaczone jako
`[placeholder]` należy uzupełnić prawdziwymi danymi przed publikacją.

## Uruchomienie lokalnie

```bash
npm install
npm run dev
```

Strona wystartuje pod `http://localhost:5173`.

## Build produkcyjny

```bash
npm run build
npm run preview
```

Skompilowane pliki trafiają do folderu `dist/`.

## Wrzucenie na GitHub

```bash
git init
git add .
git commit -m "Initial commit: Flowtex Polska site"
git branch -M main
git remote add origin https://github.com/<twoj-uzytkownik>/flowtex-polska.git
git push -u origin main
```

## Deploy na Vercel

1. Wejdź na https://vercel.com i zaloguj się (może być przez konto GitHub).
2. Kliknij **Add New… → Project** i wybierz repozytorium `flowtex-polska`.
3. Vercel sam wykryje framework (Vite) — ustawienia domyślne:
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Kliknij **Deploy**. Po chwili strona będzie dostępna pod adresem `*.vercel.app`.

Każdy kolejny `git push` na branch `main` automatycznie zaktualizuje wdrożenie.

## Struktura projektu

```
flowtex-polska/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── vercel.json
└── src/
    ├── main.jsx
    ├── App.jsx      # cała strona (sekcje: hero, o nas, oferta, kontakt...)
    └── index.css    # Tailwind + fonty + globalne style
```
