import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { COLORS } from "../theme.js";

// Klucz w localStorage — zapamiętuje wyłącznie fakt zamknięcia komunikatu.
// To nie jest cookie analityczne/marketingowe: nic nie jest przez to
// śledzone ani wysyłane do żadnego serwisu zewnętrznego, dzięki czemu
// zgodnie z art. 173 ust. 3 Prawa telekomunikacyjnego nie wymaga zgody
// (zapis jest niezbędny do działania samego komunikatu).
const STORAGE_KEY = "flowtex_cookie_notice_dismissed";

export default function CookieNotice({ onVisibilityChange }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let shouldShow = true;
    try {
      if (window.localStorage.getItem(STORAGE_KEY)) shouldShow = false;
    } catch {
      // localStorage niedostępny (np. tryb prywatny) — pokaż komunikat,
      // po prostu pojawi się ponownie przy kolejnej wizycie.
    }
    setVisible(shouldShow);
    onVisibilityChange?.(shouldShow);
  }, []);

  const dismiss = () => {
    try {
      window.localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // ignorujemy — brak localStorage nie powinien blokować zamknięcia
    }
    setVisible(false);
    onVisibilityChange?.(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Informacja o plikach cookies"
      className="fixed bottom-0 left-0 right-0 z-50 px-4 py-4 md:px-6"
      style={{ backgroundColor: COLORS.darkBg, borderTop: `1px solid ${COLORS.darkBorder}` }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-4 md:gap-6">
        <p className="text-xs md:text-sm flex-1" style={{ color: COLORS.mutedOnDark }}>
          Ta strona wykorzystuje wyłącznie pliki cookies niezbędne do jej prawidłowego działania.
          Nie stosujemy cookies analitycznych ani marketingowych. Szczegóły w{" "}
          <Link to="/polityka-cookies" className="underline hover:opacity-80" style={{ color: COLORS.accent }}>
            Polityce Cookies
          </Link>
          .
        </p>
        <button
          type="button"
          onClick={dismiss}
          className="ft-mono text-xs uppercase tracking-wide px-5 py-2.5 flex-shrink-0 transition-opacity hover:opacity-90"
          style={{ backgroundColor: COLORS.accent, color: COLORS.accentText }}
        >
          Rozumiem
        </button>
      </div>
    </div>
  );
}
