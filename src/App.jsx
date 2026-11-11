import { useEffect } from "react";
import {
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import Admissions from "./pages/Admissions";
import ApplyOnline from "./pages/ApplyOnline";
import GalleryPage from "./pages/GalleryPage";
import ContactPage from "./pages/ContactPage";

import "./App.css";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/about"
          element={<AboutPage />}
        />

        <Route
          path="/admissions"
          element={<Admissions />}
        />

        <Route
          path="/apply-online"
          element={<ApplyOnline />}
        />

        <Route
          path="/gallery"
          element={<GalleryPage />}
        />

        <Route
          path="/contact"
          element={<ContactPage />}
        />

        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />
      </Routes>
    </>
  );
}

export default App;