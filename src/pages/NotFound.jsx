import React from "react";
import { COLORS, ACCENT_TEXT } from "../theme.js";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Strona nie znaleziona | FLOWTEX Polska</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <div className="max-w-3xl mx-auto px-5 md:px-8 py-24 md:py-32 text-center">
        <div className="ft-display" style={{ fontSize: "4rem", fontWeight: 800, color: COLORS.accent }}>
          404
        </div>
        <h1 className="ft-display text-2xl md:text-3xl mt-2 mb-4" style={{ fontWeight: 700 }}>
          Nie znaleziono strony
        </h1>
        <p className="mb-8" style={{ color: COLORS.textOnLight }}>
          Strona, której szukasz, nie istnieje lub została przeniesiona.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-sm ft-mono text-xs tracking-wider uppercase"
          style={{ backgroundColor: COLORS.darkBg, color: COLORS.white, fontWeight: 600 }}
        >
          <ArrowLeft size={15} /> Wróć na stronę główną
        </Link>
      </div>
    </>
  );
}
