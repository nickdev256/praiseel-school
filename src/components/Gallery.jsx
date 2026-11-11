import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaBookOpen,
  FaChevronLeft,
  FaChevronRight,
  FaExpand,
  FaFlask,
  FaGraduationCap,
  FaMusic,
  FaRunning,
  FaSchool,
  FaTimes,
  FaTrophy,
  FaUsers,
} from "react-icons/fa";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "./Gallery.css";

import gallery1 from "../assets/gallery1.jpg";
import gallery2 from "../assets/gallery2.jpg";
import gallery3 from "../assets/gallery3.jpg";
import gallery4 from "../assets/gallery4.jpg";
import gallery5 from "../assets/gallery5.jpg";
import gallery6 from "../assets/gallery6.jpg";

/* ============================================================
   CONTENT
   To add photos: import the image, then add an item here.
   size: "tall" | "wide" | "" (normal)
============================================================ */

const photos = [
  {
    src: gallery1,
    title: "Learning Together",
    text: "Building strong foundations every day.",
    category: "Learning",
    icon: FaBookOpen,
    size: "tall",
  },
  {
    src: gallery2,
    title: "Sports Day",
    text: "Team spirit in action.",
    category: "Sports",
    icon: FaRunning,
    size: "",
  },
  {
    src: gallery3,
    title: "Music & Arts",
    text: "Discovering creative talents.",
    category: "Arts",
    icon: FaMusic,
    size: "",
  },
  {
    src: gallery4,
    title: "Classroom Life",
    text: "Curious minds, bright futures.",
    category: "Learning",
    icon: FaUsers,
    size: "wide",
  },
  {
    src: gallery5,
    title: "Science Activities",
    text: "Learning through discovery.",
    category: "Science",
    icon: FaFlask,
    size: "wide",
  },
  {
    src: gallery6,
    title: "Leadership",
    text: "Raising tomorrow's leaders.",
    category: "Leadership",
    icon: FaTrophy,
    size: "",
  },
];

const categories = ["All", ...new Set(photos.map((photo) => photo.category))];

const stats = [
  { icon: FaUsers, value: "500+", label: "Happy learners" },
  { icon: FaGraduationCap, value: "35+", label: "Dedicated teachers" },
  { icon: FaTrophy, value: "20+", label: "School activities" },
  { icon: FaSchool, value: "1", label: "Big family" },
];

/* ============================================================
   HELPERS
============================================================ */

function useInView(threshold = 0.12) {
  const [node, setNode] = useState(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!node || inView) return undefined;
    if (!("IntersectionObserver" in window)) {
      setInView(true);
      return undefined;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [node, inView, threshold]);

  return [setNode, inView];
}

function Reveal({ as: Tag = "div", className = "", delay = 0, children, ...rest }) {
  const [ref, inView] = useInView();
  return (
    <Tag
      ref={ref}
      className={`gl-reveal ${inView ? "is-in" : ""} ${className}`.trim()}
      style={{ "--delay": `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

function Eyebrow({ children, light = false }) {
  return <span className={`gl-eyebrow ${light ? "light" : ""}`}>{children}</span>;
}

/* ============================================================
   LIGHTBOX (native <dialog>: focus trap + Escape built in)
============================================================ */

function Lightbox({ items, index, onClose, onMove }) {
  const dialogRef = useRef(null);
  const isOpen = index !== null;
  const photo = isOpen ? items[index] : null;

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (isOpen && !dialog.open) dialog.showModal();
    if (!isOpen && dialog.open) dialog.close();
  }, [isOpen]);

  const handleKeyDown = (event) => {
    if (event.key === "ArrowRight") onMove(1);
    if (event.key === "ArrowLeft") onMove(-1);
  };

  // Clicking the dark backdrop (outside the figure) closes the lightbox.
  const handleClick = (event) => {
    if (event.target === dialogRef.current) onClose();
  };

  return (
    <dialog
      ref={dialogRef}
      className="gl-lightbox"
      aria-label={photo ? `${photo.title} — photo ${index + 1} of ${items.length}` : "Photo viewer"}
      onClose={onClose}
      onKeyDown={handleKeyDown}
      onClick={handleClick}
    >
      {photo && (
        <>
          <button type="button" className="gl-lb-close" onClick={onClose} aria-label="Close photo">
            <FaTimes />
          </button>

          {items.length > 1 && (
            <>
              <button
                type="button"
                className="gl-lb-nav prev"
                onClick={() => onMove(-1)}
                aria-label="Previous photo"
              >
                <FaChevronLeft />
              </button>
              <button
                type="button"
                className="gl-lb-nav next"
                onClick={() => onMove(1)}
                aria-label="Next photo"
              >
                <FaChevronRight />
              </button>
            </>
          )}

          <figure className="gl-lb-figure">
            <img key={photo.src} src={photo.src} alt={photo.title} />
            <figcaption>
              <span className="gl-lb-tag">{photo.category}</span>
              <strong>{photo.title}</strong>
              <span>{photo.text}</span>
              <small>
                {index + 1} / {items.length}
              </small>
            </figcaption>
          </figure>
        </>
      )}
    </dialog>
  );
}

/* ============================================================
   PAGE
============================================================ */

function Gallery() {
  const [filter, setFilter] = useState("All");
  const [openIndex, setOpenIndex] = useState(null);

  const visible =
    filter === "All" ? photos : photos.filter((photo) => photo.category === filter);

  const move = (step) =>
    setOpenIndex((current) =>
      current === null ? null : (current + step + visible.length) % visible.length,
    );

  return (
    <>
      <Navbar />

      <main className="gl">
        {/* ================= HERO ================= */}
        <section
          className="gl-hero"
          aria-labelledby="gl-hero-title"
          style={{ "--gl-hero-bg": `url(${gallery1})` }}
        >
          <div className="gl-hero-bg" aria-hidden="true" />

          <div className="gl-container gl-hero-head">
            <nav className="gl-crumbs" aria-label="Breadcrumb">
              <Link to="/">Home</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">Gallery</span>
            </nav>

            <Eyebrow light>Our gallery</Eyebrow>

            <h1 id="gl-hero-title">
              Life at <em>Praise-El</em>.
            </h1>

            <p>
              Moments of learning, creativity, leadership, sports and fun from
              our vibrant school community.
            </p>
          </div>

          {/* fan of preview photos */}
          <div className="gl-container gl-hero-fan" aria-hidden="true">
            {[gallery2, gallery1, gallery3].map((src, i) => (
              <span key={src} className={`gl-fan gl-fan-${i + 1}`}>
                <img src={src} alt="" />
              </span>
            ))}
          </div>
        </section>

        {/* ================= GALLERY ================= */}
        <section className="gl-section" aria-labelledby="gl-grid-title">
          <div className="gl-container">
            <div className="gl-toolbar">
              <div>
                <h2 id="gl-grid-title">
                  Moments that <em>shape</em> us.
                </h2>
                <p className="gl-count" aria-live="polite">
                  Showing {visible.length} {visible.length === 1 ? "photo" : "photos"}
                  {filter !== "All" && ` in ${filter}`}
                </p>
              </div>

              <div className="gl-filters" role="group" aria-label="Filter photos">
                {categories.map((category) => (
                  <button
                    key={category}
                    type="button"
                    className={filter === category ? "is-active" : ""}
                    aria-pressed={filter === category}
                    onClick={() => setFilter(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <ul className={`gl-grid ${filter === "All" ? "is-all" : ""}`}>
              {visible.map(({ src, title, text, category, icon: Icon, size }, i) => (
                <li key={src} className={`gl-item ${filter === "All" ? size : ""}`}>
                  <button
                    type="button"
                    className="gl-photo"
                    onClick={() => setOpenIndex(i)}
                    aria-label={`Open photo: ${title}`}
                  >
                    <img src={src} alt={title} loading="lazy" decoding="async" />

                    <span className="gl-photo-tag">{category}</span>
                    <span className="gl-photo-zoom" aria-hidden="true">
                      <FaExpand />
                    </span>

                    <span className="gl-photo-caption">
                      <Icon aria-hidden="true" />
                      <span>
                        <strong>{title}</strong>
                        <small>{text}</small>
                      </span>
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ================= STATS ================= */}
        <section className="gl-stats-wrap" aria-label="Praise-El in numbers">
          <div className="gl-container">
            <ul className="gl-stats">
              {stats.map(({ icon: Icon, value, label }, i) => (
                <Reveal as="li" key={label} delay={i * 80}>
                  <span className="gl-stat-icon" aria-hidden="true">
                    <Icon />
                  </span>
                  <span>
                    <strong>{value}</strong>
                    <small>{label}</small>
                  </span>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* ================= CTA ================= */}
        <section className="gl-section gl-cta-wrap">
          <Reveal className="gl-container">
            <div className="gl-cta" style={{ "--gl-cta-bg": `url(${gallery4})` }}>
              <div>
                <Eyebrow light>See it for yourself</Eyebrow>
                <h2>
                  Come and <em>visit our school</em>.
                </h2>
                <p>
                  Photos tell part of the story. Visit our campus, meet our
                  teachers and see our learners in action.
                </p>
              </div>
              <div className="gl-cta-actions">
                <Link to="/apply-online" className="gl-btn gl-btn-gold">
                  <span>Apply online</span>
                  <i aria-hidden="true">
                    <FaArrowRight />
                  </i>
                </Link>
                <Link to="/contact" className="gl-btn gl-btn-ghost">
                  <span>Book a visit</span>
                  <i aria-hidden="true">
                    <FaArrowRight />
                  </i>
                </Link>
              </div>
            </div>
          </Reveal>
        </section>

        <Lightbox
          items={visible}
          index={openIndex}
          onClose={() => setOpenIndex(null)}
          onMove={move}
        />
      </main>

      <Footer />
    </>
  );
}

export default Gallery;