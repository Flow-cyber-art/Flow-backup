import { LAYER_COLORS } from "../theme.js";

const LAYERS = [
  { key: "substrate", label: "PODŁOŻE", sub: "Beton konstrukcyjny", color: LAYER_COLORS.substrate, h: 18 },
  { key: "primer", label: "GRUNT", sub: "Warstwa penetrująca", color: LAYER_COLORS.primer, h: 12 },
  { key: "leveling", label: "WYRÓWNANIE", sub: "Masa samopoziomująca", color: LAYER_COLORS.leveling, h: 14 },
  { key: "resin", label: "POSADZKA ŻYWICZNA", sub: "Warstwa nośna", color: LAYER_COLORS.resin, h: 28 },
  { key: "topcoat", label: "WARSTWA OCHRONNA", sub: "Uszczelnienie UV", color: LAYER_COLORS.topcoat, h: 10 },
];

export { LAYERS };

export function LayerStack({ variant = "hero", active }) {
  // variant: "hero" (tall, labeled) | "divider" (thin, unlabeled)
  if (variant === "divider") {
    return (
      <div className="w-full flex flex-col" aria-hidden="true">
        {LAYERS.map((l) => (
          <div key={l.key} style={{ backgroundColor: l.color, height: `${l.h / 4}px` }} />
        ))}
      </div>
    );
  }
  return (
    <div className="relative w-full h-full flex flex-col justify-end">
      {LAYERS.map((l, i) => {
        const isActive = active === i;
        return (
          <div
            key={l.key}
            className="relative group transition-all duration-500 ease-out flex items-center"
            style={{
              backgroundColor: l.color,
              height: `${l.h * 3.6}px`,
              opacity: active === null || active === undefined ? 1 : isActive ? 1 : 0.45,
            }}
          >
            <div className="pl-5 md:pl-7">
              <div
                className="font-mono ft-label-sm md:text-xs ft-tracking-wide"
                style={{ color: i >= 3 ? "#1B1B1D" : "#F0EEE7" }}
              >
                {String(i + 1).padStart(2, "0")} — {l.label}
              </div>
              <div
                className="ft-label-sm ft-label-sm-responsive mt-0.5"
                style={{ color: i >= 3 ? "#1B1B1D" : "#D8D6CE", opacity: 0.8 }}
              >
                {l.sub}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
