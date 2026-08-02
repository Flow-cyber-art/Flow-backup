import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Home from "./pages/Home.jsx";

// Code-splitting tras: Home zostaje eager (to zawsze najważniejsza,
// pierwsza odsłona — strona główna, potencjalny LCP). Pozostałe podstrony
// są doczytywane dopiero gdy użytkownik faktycznie na nie wejdzie, więc nie
// obciążają początkowego JS na stronie głównej.
//
// SSR/prerendering: entry-server.jsx renderuje przez renderToPipeableStream
// (onAllReady), które prawidłowo czeka na rozwiązanie React.lazy — dzięki
// temu wygenerowany statyczny HTML (scripts/prerender.js) ma pełną treść
// tych podstron, tak jak wcześniej z importami statycznymi.
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy.jsx"));
const CookiePolicy = lazy(() => import("./pages/CookiePolicy.jsx"));
const ServicePage = lazy(() => import("./pages/ServicePage.jsx"));
const NotFound = lazy(() => import("./pages/NotFound.jsx"));

export default function App() {
  return (
    <Layout>
      <ScrollToTop />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/polityka-prywatnosci" element={<PrivacyPolicy />} />
          <Route path="/polityka-cookies" element={<CookiePolicy />} />
          <Route path="/:slug" element={<ServicePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}
