import React, { useEffect, useRef, useState } from "react";
import { Phone, Mail, X } from "lucide-react";
import { COLORS, ACCENT_TEXT } from "../theme.js";

const PHONE_HREF = "+48507394552";
const PHONE_DISPLAY = "+48 507 394 552";
const EMAIL = "kontakt@flowtex.pl";

// Pływający przycisk kontaktowy widoczny tylko na mobile (na desktopie
// numer telefonu jest już zawsze widoczny w górnym pasku/nawigacji).
// liftedOffset=true podnosi przycisk, gdy nad nim wyświetla się baner cookies,
// żeby się na siebie nie nakładały.
export default function ContactFab({ liftedOffset = false }) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const handleOutside = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false);
    };
    const handleEsc = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", handleOutside);
    document.addEventListener("touchstart", handleOutside);
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("mousedown", handleOutside);
      document.removeEventListener("touchstart", handleOutside);
      document.removeEventListener("keydown", handleEsc);
    };
  }, [open]);

  return (
    <div
      ref={wrapRef}
      className="fixed right-5 bottom-5 z-40 md:hidden transition-transform duration-300 ease-in-out"
      style={{ transform: liftedOffset ? "translateY(-72px)" : "translateY(0)" }}
    >
      {/* Opcje: e-mail / telefon — wysuwają się nad przyciskiem */}
      <div
        className={`absolute bottom-full right-0 mb-3 flex flex-col items-end gap-2.5 transition-all duration-200 ${
          open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-2 pointer-events-none"
        }`}
      >
        <a
          href={`mailto:${EMAIL}`}
          className="flex items-center gap-2.5 pl-4 pr-1.5 py-1.5 rounded-full shadow-lg ft-mono text-xs whitespace-nowrap"
          style={{ backgroundColor: COLORS.darkBg, color: COLORS.white, border: `1px solid ${COLORS.darkBorder}` }}
        >
          Napisz e-mail
          <span
            className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: COLORS.accent }}
          >
            <Mail size={16} style={{ color: ACCENT_TEXT }} />
          </span>
        </a>
        <a
          href={`tel:${PHONE_HREF}`}
          className="flex items-center gap-2.5 pl-4 pr-1.5 py-1.5 rounded-full shadow-lg ft-mono text-xs whitespace-nowrap"
          style={{ backgroundColor: COLORS.darkBg, color: COLORS.white, border: `1px solid ${COLORS.darkBorder}` }}
        >
          {PHONE_DISPLAY}
          <span
            className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: COLORS.accent }}
          >
            <Phone size={16} style={{ color: ACCENT_TEXT }} />
          </span>
        </a>
      </div>

      {/* Pulsujący pierścień przyciągający wzrok — wyłączony, gdy menu otwarte
          i dla osób preferujących ograniczone animacje (patrz CSS w Layout.jsx) */}
      {!open && (
        <span
          aria-hidden="true"
          className="ft-fab-pulse absolute inset-0 rounded-full"
          style={{ backgroundColor: COLORS.accent }}
        />
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Zamknij opcje kontaktu" : "Skontaktuj się z nami"}
        aria-expanded={open}
        className="relative w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-transform active:scale-95"
        style={{ backgroundColor: COLORS.accent, color: ACCENT_TEXT }}
      >
        {open ? <X size={24} /> : <Phone size={22} />}
      </button>
    </div>
  );
}
