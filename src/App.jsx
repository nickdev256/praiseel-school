import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import Admissions from "./pages/Admissions";
import ApplyOnline from "./pages/ApplyOnline";
import GalleryPage from "./pages/GalleryPage";
import ContactPage from "./pages/ContactPage";
import "./App.css";

function App() {
  return (
    <Routes>

      <Route
        path="/"
        element={<Home />}
      />

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

    </Routes>
  );
}

export default App;