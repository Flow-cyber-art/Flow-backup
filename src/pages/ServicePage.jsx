import React from "react";
import { COLORS, ACCENT_TEXT } from "../theme.js";
import { Link, Navigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowRight, Check, ArrowLeft } from "lucide-react";
import { SERVICES, getServiceBySlug } from "../data/services.js";

// Automatyczne wczytanie zdjęć realizacji z src/assets/realizacje/.
// Nazwa pliku (bez rozszerzenia) = slug usługi, np. posadzki-zywiczne.webp
// pokaże się na stronie /posadzki-zywiczne. Usługi bez pliku o pasującej
// nazwie po prostu nie pokażą sekcji ze zdjęciem — nic nie trzeba zmieniać w kodzie.
const realizationModules = import.meta.glob("../assets/realizacje/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}", {
  eager: true,
  import: "default",
});
const REALIZATION_IMAGES = Object.fromEntries(
  Object.entries(realizationModules).map(([path, src]) => {
    const slug = path.split("/").pop().replace(/\.[^.]+$/, "");
    return [slug, src];
  })
);

export default function ServicePage() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  if (!service) {
    return <Navigate to="/404" replace />;
  }

  const Icon = service.icon;
  const realizationImage = REALIZATION_IMAGES[service.slug];
  const otherServices = SERVICES.filter((s) => s.slug !== service.slug);
  const remainder = otherServices.length % 3;
  const ctaSpan = remainder === 0 ? 3 : 3 - remainder;
  const canonicalUrl = `https://www.flowtex.pl/${service.slug}`;

  return (
    <>
      <Helmet>
        <title>{service.title} | FLOWTEX Polska</title>
        <meta name="description" content={service.metaDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={`${service.title} | FLOWTEX Polska`} />
        <meta property="og:description" content={service.metaDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: service.title,
            description: service.metaDescription,
            provider: { "@type": "LocalBusiness", name: "FLOWTEX Polska" },
            areaServed: "PL",
          })}
        </script>
      </Helmet>

      {/* Breadcrumb */}
      <div style={{ backgroundColor: COLORS.darkBg }}>
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-4 ft-mono text-xs" style={{ color: COLORS.mutedOnDarkSecondary }}>
          <Link to="/" className="hover:opacity-80" style={{ color: COLORS.mutedOnDarkSecondary }}>
            Strona główna
          </Link>{" "}
          <span className="mx-2">/</span>
          <Link to="/#oferta" className="hover:opacity-80" style={{ color: COLORS.mutedOnDarkSecondary }}>
            Oferta
          </Link>{" "}
          <span className="mx-2">/</span>
          <span style={{ color: COLORS.white }}>{service.title}</span>
        </div>
      </div>

      {/* Hero usługi */}
      <section style={{ backgroundColor: COLORS.darkBg }}>
        <div className="max-w-7xl mx-auto px-5 md:px-8 pb-16 md:pb-20">
          <Icon size={36} style={{ color: COLORS.white }} />
          <h1
            className="ft-display mt-4"
            style={{ color: COLORS.white, fontSize: "clamp(2.2rem, 5vw, 3.4rem)", fontWeight: 800 }}
          >
            {service.title}
          </h1>
          <p className="mt-4 max-w-2xl text-base md:text-lg" style={{ color: COLORS.mutedOnDark }}>
            {service.intro}
          </p>
          <Link
            to="/#kontakt"
            className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-sm ft-mono text-xs tracking-wider uppercase hover:opacity-90 transition"
            style={{ backgroundColor: COLORS.accent, color: ACCENT_TEXT, fontWeight: 600 }}
          >
            Zapytaj o wycenę <ArrowRight size={15} />
          </Link>
        </div>
      </section>

      {/* Zdjęcie realizacji — pełna szerokość, spokojnie pod tekstem hero */}
      {realizationImage && (
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-10 md:py-14">
          <div className="relative rounded-sm overflow-hidden" style={{ border: `1px solid ${COLORS.borderOnLight}` }}>
            <img
              src={realizationImage}
              alt={`Realizacja FLOWTEX Polska — ${service.title}`}
              className="w-full object-cover"
              style={{ height: "clamp(240px, 40vw, 500px)" }}
              loading="eager"
              width="1920"
              height="1080"
            />
            <div
              className="absolute left-0 bottom-0 px-4 py-2 md:px-5 md:py-2.5 ft-mono text-[10px] md:text-[11px] tracking-wider uppercase"
              style={{ backgroundColor: COLORS.darkBg, color: COLORS.white, fontWeight: 600 }}
            >
              Z naszych realizacji
            </div>
          </div>
        </div>
      )}

      {/* Rozbudowane sekcje merytoryczne */}
      {service.sections?.map((sec, i) => (
        <section
          key={sec.heading}
          className={`max-w-7xl mx-auto px-5 md:px-8 py-14 md:py-20 ${i > 0 ? "border-t" : ""}`}
          style={{ borderColor: COLORS.borderOnLight }}
        >
          <div className="grid md:grid-cols-12 gap-10">
            <div className="md:col-span-4">
              <h2 className="ft-display text-2xl md:text-3xl" style={{ fontWeight: 700 }}>
                {sec.heading}
              </h2>
            </div>
            <div className="md:col-span-8">
              <p className="text-base md:text-lg" style={{ color: COLORS.textOnLight }}>
                {sec.body}
              </p>
            </div>
          </div>
        </section>
      ))}

      {/* Zakres usługi (skrót w punktach) */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-24 border-t" style={{ borderColor: COLORS.borderOnLight }}>
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <div className="ft-mono text-xs ft-tracking-wide uppercase mb-3" style={{ color: COLORS.accent }}>
              Zakres usługi
            </div>
            <h2 className="ft-display text-2xl md:text-3xl" style={{ fontWeight: 700 }}>
              Co obejmuje realizacja
            </h2>
          </div>
          <div className="md:col-span-8">
            <ul className="space-y-4">
              {service.highlights.map((h) => (
                <li key={h} className="flex items-start gap-3">
                  <Check size={18} className="mt-0.5 shrink-0" style={{ color: COLORS.accent }} />
                  <span className="text-base" style={{ color: COLORS.textOnLight }}>
                    {h}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-base" style={{ color: COLORS.textOnLight }}>
              {service.closing}
            </p>
          </div>
        </div>
      </section>

      {/* Pozostałe usługi — linkowanie wewnętrzne */}
      <section style={{ backgroundColor: COLORS.darkBg }}>
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-20">
          <h2 className="ft-display text-2xl md:text-3xl mb-8" style={{ color: COLORS.white, fontWeight: 700 }}>
            Zobacz też pozostałe usługi
          </h2>
          <div className="grid md:grid-cols-3 gap-px" style={{ backgroundColor: COLORS.darkBorder }}>
            {otherServices.map((s) => {
              const OIcon = s.icon;
              return (
                <Link
                  key={s.slug}
                  to={`/${s.slug}`}
                  className="p-6 group ft-tile transition block"
                  style={{ backgroundColor: COLORS.darkBg }}
                >
                  <OIcon size={22} style={{ color: COLORS.white }} />
                  <h3 className="ft-display text-lg mt-3 mb-1" style={{ color: COLORS.white, fontWeight: 700 }}>
                    {s.title}
                  </h3>
                  <p className="text-xs" style={{ color: COLORS.mutedOnDark }}>
                    {s.shortDesc}
                  </p>
                </Link>
              );
            })}
            <Link
              to="/#oferta"
              className={`p-6 group ft-tile transition flex ${ctaSpan === 3 ? "flex-row items-center gap-4" : "flex-col justify-center"}`}
              style={{ backgroundColor: COLORS.accent, gridColumn: `span ${ctaSpan} / span ${ctaSpan}` }}
            >
              <ArrowLeft size={22} className="rotate-180 shrink-0" style={{ color: ACCENT_TEXT }} />
              <div>
                <h3 className="ft-display text-lg mb-1" style={{ color: ACCENT_TEXT, fontWeight: 700 }}>
                  Zobacz pełną ofertę
                </h3>
                <p className="text-xs" style={{ color: ACCENT_TEXT, opacity: 0.85 }}>
                  Wszystkie usługi FLOWTEX Polska w jednym miejscu.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Powrót do oferty */}
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-8">
        <Link
          to="/#oferta"
          className="inline-flex items-center gap-2 ft-mono text-xs uppercase tracking-wide hover:opacity-80"
          style={{ color: COLORS.mutedOnLight }}
        >
          <ArrowLeft size={14} /> Wróć do pełnej oferty
        </Link>
      </div>
    </>
  );
}
