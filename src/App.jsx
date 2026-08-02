import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Home from "./pages/Home.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import CookiePolicy from "./pages/CookiePolicy.jsx";
import ServicePage from "./pages/ServicePage.jsx";
import NotFound from "./pages/NotFound.jsx";

// Uwaga: podstrony ładowane były wcześniej przez React.lazy() + Suspense
// (code-splitting), ale ta granica Suspense (obecna na KAŻDEJ trasie,
// łącznie z Home) w połączeniu z ręcznym prerenderingiem (scripts/prerender.js
// wstrzykuje appHtml jako surowy string) powodowała błędy hydracji #423/#425
// na produkcji. Podstrony są małe (kilka KB), więc zwykłe, statyczne importy
// nie obciążają realnie bundla, a eliminują cały problem.
export default function App() {
  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/polityka-prywatnosci" element={<PrivacyPolicy />} />
        <Route path="/polityka-cookies" element={<CookiePolicy />} />
        <Route path="/:slug" element={<ServicePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}
