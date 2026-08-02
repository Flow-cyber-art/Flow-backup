import React, { useState } from "react";
import { COLORS, ACCENT_TEXT } from "../theme.js";
import { Link } from "react-router-dom";
import { Layers, Phone, Mail, Menu, X } from "lucide-react";
import { SERVICES } from "../data/services.js";
import CookieNotice from "./CookieNotice.jsx";
import ContactFab from "./ContactFab.jsx";

const NAV_LINKS = [
  { href: "/#o-nas", label: "O nas" },
  { href: "/#oferta", label: "Oferta" },
  { href: "/#certyfikaty", label: "Certyfikaty" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#kontakt", label: "Kontakt" },
];

export default function Layout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cookieBannerVisible, setCookieBannerVisible] = useState(false);

  return (
    <div
      style={{ fontFamily: "'IBM Plex Sans', sans-serif", backgroundColor: COLORS.lightBg, color: COLORS.darkBg }}
      className="min-h-screen w-full flex flex-col"
    >
      <style>{`
        .ft-display { font-family: 'Big Shoulders Display', sans-serif; }
        .ft-mono { font-family: 'IBM Plex Mono', monospace; }
        .ft-tracking-wide { letter-spacing: 0.2em; }
        .ft-label-sm { font-size: 10px; }
        @media (min-width: 768px) { .ft-label-sm-responsive { font-size: 11px; } }
        .ft-hero-heading { line-height: 0.95; }
        .ft-hero-visual { height: 360px; }
        @media (min-width: 768px) { .ft-hero-visual { height: 440px; } }
        html { scroll-behavior: smooth; overflow-anchor: none; }
        * { -webkit-tap-highlight-color: transparent; overflow-anchor: none; }
        .reveal { opacity: 0; transform: translateY(24px); transition: opacity 0.7s ease, transform 0.7s ease; }
        .reveal.visible { opacity: 1; transform: translateY(0); }
        @media (prefers-reduced-motion: reduce) {
          .reveal { opacity: 1; transform: none; transition: none; }
        }
        /* Kafelki (usługi, karty) — efekt "wciśniętego przycisku": lekkie
           zmniejszenie przy kliknięciu/dotknięciu, które od razu wraca do
           normy — a nie trwałe zaszarzenie tła. Hover (podświetlenie na
           najechanie) działa TYLKO na urządzeniach z myszką, żeby telefony
           nie "przyklejały" tego stanu po dotknięciu. */
        .ft-tile {
          transition: transform 0.15s ease, background-color 0.15s ease;
          -webkit-tap-highlight-color: transparent;
        }
        @media (hover: hover) and (pointer: fine) {
          .ft-tile:hover { background-color: rgba(255, 255, 255, 0.04); }
        }
        .ft-tile:active { transform: scale(0.97); }
        .ft-tile:focus { outline: none; }
        .ft-tile:focus-visible {
          outline: 2px solid ${COLORS.white};
          outline-offset: -2px;
        }
        .ft-outline-btn { transition: background-color 0.2s ease, transform 0.15s ease; }
        @media (hover: hover) and (pointer: fine) {
          .ft-outline-btn:hover { background-color: rgba(255, 255, 255, 0.06); }
        }
        .ft-outline-btn:active { transform: scale(0.97); }

        /* Pulsujący pierścień pod pływającym przyciskiem kontaktu (mobile) */
        @keyframes ftFabPulse {
          0% { transform: scale(1); opacity: 0.55; }
          70% { transform: scale(1.7); opacity: 0; }
          100% { transform: scale(1.7); opacity: 0; }
        }
        .ft-fab-pulse { animation: ftFabPulse 2.2s ease-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .ft-fab-pulse { animation: none; opacity: 0; }
        }
      `}</style>

      {/* TOP BAR — telefon / e-mail */}
      <div className="hidden md:block" style={{ backgroundColor: COLORS.darkBgSecondary }}>
        <div className="max-w-7xl mx-auto px-5 md:px-8 h-9 flex items-center justify-end gap-6 ft-mono text-xs">
          <a
            href="tel:+48507394552"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            style={{ color: COLORS.mutedOnDark }}
          >
            <Phone size={13} style={{ color: COLORS.white }} />
            +48 507 394 552
          </a>
          <a
            href="mailto:kontakt@flowtex.pl"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            style={{ color: COLORS.mutedOnDark }}
          >
            <Mail size={13} style={{ color: COLORS.white }} />
            kontakt@flowtex.pl
          </a>
        </div>
      </div>

      {/* NAV */}
      <header className="sticky top-0 z-50" style={{ backgroundColor: COLORS.darkBg }}>
        <div className="max-w-7xl mx-auto px-5 md:px-8 flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-2" style={{ color: COLORS.white }}>
            {/* Uwaga: w palecie ACME accent == darkBg (celowo, wg oryginalnej
                strony wzorcowej), więc po ewentualnym przełączeniu z powrotem
                na ACME ta ikona/napis "Polska" znów zleją się z tłem — to
                echo tamtej marki, nie błąd. Przy ACME warto wrócić do
                COLORS.white w tych dwóch miejscach (tak jak było wcześniej). */}
            <Layers size={26} style={{ color: COLORS.accent }} />
            <span className="ft-display text-xl md:text-2xl tracking-wide" style={{ fontWeight: 700 }}>
              FLOWTEX <span style={{ color: COLORS.accent }}>Polska</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="ft-mono text-xs tracking-wider uppercase hover:opacity-70 transition-opacity"
                style={{ color: COLORS.mutedOnDark }}
              >
                {l.label}
              </a>
            ))}
            <a
              href="tel:+48507394552"
              className="ft-mono text-xs tracking-wider uppercase px-4 py-2 rounded-sm hover:opacity-90 transition"
              style={{ backgroundColor: COLORS.accent, color: ACCENT_TEXT, fontWeight: 600 }}
            >
              +48 507 394 552
            </a>
          </nav>

          <div className="flex items-center gap-4 md:hidden">
            <button
              style={{ color: COLORS.white }}
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden px-5 pb-5 flex flex-col gap-4" style={{ backgroundColor: COLORS.darkBg }}>
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="ft-mono text-sm tracking-wider uppercase"
                style={{ color: COLORS.mutedOnDark }}
              >
                {l.label}
              </a>
            ))}
            <a href="tel:+48507394552" className="ft-mono text-sm" style={{ color: COLORS.white }}>
              +48 507 394 552
            </a>
            <a href="mailto:kontakt@flowtex.pl" className="ft-mono text-sm" style={{ color: COLORS.white }}>
              kontakt@flowtex.pl
            </a>
          </div>
        )}
      </header>

      <main className="flex-1">{children}</main>

      {/* FOOTER */}
      <footer style={{ backgroundColor: COLORS.darkBg }}>
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-12 grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Layers size={22} style={{ color: COLORS.accent }} />
              <span className="ft-display text-lg" style={{ color: COLORS.white, fontWeight: 700 }}>
                FLOWTEX <span style={{ color: COLORS.accent }}>Polska</span>
              </span>
            </div>
            <p className="text-sm" style={{ color: COLORS.mutedOnDarkSecondary }}>
              Paweł Najduk, NIP: 7621744781
              <br />
              Ciółkowo Małe 32, 07-215 Ciółkowo Małe
            </p>
          </div>
          <div>
            <div className="ft-mono text-xs uppercase tracking-wide mb-3" style={{ color: COLORS.white }}>
              Nasze usługi
            </div>
            <ul className="space-y-2 text-sm" style={{ color: COLORS.mutedOnDark }}>
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link to={`/${s.slug}`} className="hover:opacity-80 transition-opacity">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="ft-mono text-xs uppercase tracking-wide mb-3" style={{ color: COLORS.white }}>
              Kontakt
            </div>
            <ul className="space-y-2 text-sm" style={{ color: COLORS.mutedOnDark }}>
              <li>+48 507 394 552</li>
              <li>kontakt@flowtex.pl</li>
            </ul>
          </div>
        </div>
        <div
          className="border-t px-5 md:px-8 py-5 text-xs ft-mono flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderColor: COLORS.darkBorder, color: COLORS.mutedOnDarkSecondary }}
        >
          <span suppressHydrationWarning>
            © FLOWTEX Polska {new Date().getFullYear()} — Wszelkie prawa zastrzeżone.
          </span>
          <span className="flex items-center gap-4">
            <Link to="/polityka-prywatnosci" className="hover:opacity-80" style={{ color: COLORS.mutedOnDarkSecondary }}>
              Polityka Prywatności
            </Link>
            <Link to="/polityka-cookies" className="hover:opacity-80" style={{ color: COLORS.mutedOnDarkSecondary }}>
              Polityka Cookies
            </Link>
          </span>
        </div>
      </footer>

      <CookieNotice onVisibilityChange={setCookieBannerVisible} />
      <ContactFab liftedOffset={cookieBannerVisible} />
    </div>

  );
}
