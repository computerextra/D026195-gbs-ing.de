import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./Layout.tsx";
import Impressum from "./Impressum.tsx";
import Datenschutz from "./Datenschutz.tsx";
import Kontakt from "./Kontakt.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<App />} />
          <Route path="Impressum" element={<Impressum />} />
          <Route path="Datenschutz" element={<Datenschutz />} />
          <Route path="Kontakt" element={<Kontakt />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
