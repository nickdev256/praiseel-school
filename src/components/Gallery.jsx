import "./Gallery.css";

import gallery1 from "../assets/gallery1.jpg";
import gallery2 from "../assets/gallery2.jpg";
import gallery3 from "../assets/gallery3.jpg";
import gallery4 from "../assets/gallery4.jpg";
import gallery5 from "../assets/gallery5.jpg";
import gallery6 from "../assets/gallery6.jpg";

function Gallery() {
  const images = [
    gallery1,
    gallery2,
    gallery3,
    gallery4,
    gallery5,
    gallery6,
  ];

  return (
    <section className="gallery-section">

      <div className="gallery-header">

        <span>OUR GALLERY</span>

        <h2>
          Life At Praise-El Junior School
        </h2>

        <p>
          Explore moments of learning, creativity,
          leadership, sports and fun from our vibrant
          school community.
        </p>

      </div>

      <div className="gallery-grid">

        {images.map((image, index) => (
          <div
            className="gallery-card"
            key={index}
          >
            <img
              src={image}
              alt={`Gallery ${index + 1}`}
            />

            <div className="gallery-overlay">
              <span>View Image</span>
            </div>
          </div>
        ))}

      </div>

      <div className="gallery-btn">

        <button>
          View Full Gallery
        </button>

      </div>

    </section>
  );
}

export default Gallery;