import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react()],
  build: {
    rollupOptions: isSsrBuild
      ? {}
      : {
          output: {
            // React/React Router zmieniają się dużo rzadziej niż kod
            // aplikacji — osobny chunk oznacza, że po każdym wdrożeniu
            // (np. drobna zmiana treści) przeglądarki powracających
            // użytkowników nie muszą ponownie pobierać całego React-a
            // z cache'a. Pomijamy to dla buildu SSR (--ssr), gdzie
            // react/react-dom są i tak externalizowane przez Vite.
            manualChunks: {
              vendor: ["react", "react-dom", "react-router-dom"],
            },
          },
        },
  },
}));
