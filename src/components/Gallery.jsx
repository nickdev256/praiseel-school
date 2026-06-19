import {
  FaBookOpen,
  FaRunning,
  FaMusic,
  FaFlask,
  FaTrophy,
  FaUsers,
  FaGraduationCap,
  FaSchool,
} from "react-icons/fa";

import "./Gallery.css";

import gallery1 from "../assets/gallery1.jpg";
import gallery2 from "../assets/gallery2.jpg";
import gallery3 from "../assets/gallery3.jpg";
import gallery4 from "../assets/gallery4.jpg";
import gallery5 from "../assets/gallery5.jpg";
import gallery6 from "../assets/gallery6.jpg";

function Gallery() {
  return (
    <section className="gallery-section">

      <div className="gallery-header">

        <span className="gallery-tag">
          OUR GALLERY
        </span>

        <h2>
          Life At Praise-El Junior School
        </h2>

        <p>
          Explore moments of learning, creativity,
          leadership, sports and fun from our vibrant
          school community.
        </p>

      </div>

      <div className="gallery-layout">

        {/* FEATURED */}

        <div className="featured-card">

          <img
            src={gallery1}
            alt="Learning Together"
          />

          <div className="featured-label">
            ★ FEATURED
          </div>

          <div className="featured-overlay">

            <div className="overlay-icon">
              <FaBookOpen />
            </div>

            <div>
              <h3>Learning Together</h3>
              <p>
                Building strong foundations every day.
              </p>
            </div>

          </div>

        </div>

        {/* RIGHT COLUMN */}

        <div className="gallery-side">

          <div className="side-card">

            <img
              src={gallery2}
              alt="Sports Day"
            />

            <div className="side-overlay">

              <FaRunning />

              <div>
                <h4>Sports Day</h4>
                <span>
                  Team spirit in action!
                </span>
              </div>

            </div>

          </div>

          <div className="side-card">

            <img
              src={gallery3}
              alt="Music"
            />

            <div className="side-overlay">

              <FaMusic />

              <div>
                <h4>Music & Arts</h4>
                <span>
                  Discovering talents.
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* BOTTOM GRID */}

      <div className="bottom-gallery">

        <div className="bottom-card">

          <img
            src={gallery4}
            alt=""
          />

          <div className="bottom-overlay">

            <FaUsers />

            <div>
              <h4>Classroom Life</h4>
              <span>
                Curious minds, bright futures.
              </span>
            </div>

          </div>

        </div>

        <div className="bottom-card">

          <img
            src={gallery5}
            alt=""
          />

          <div className="bottom-overlay">

            <FaFlask />

            <div>
              <h4>Science Activities</h4>
              <span>
                Learning through discovery.
              </span>
            </div>

          </div>

        </div>

        <div className="bottom-card">

          <img
            src={gallery6}
            alt=""
          />

          <div className="bottom-overlay">

            <FaTrophy />

            <div>
              <h4>Leadership</h4>
              <span>
                Raising tomorrow's leaders.
              </span>
            </div>

          </div>

        </div>

      </div>

      {/* STATS */}

      <div className="gallery-stats">

        <div className="stat-item">
          <FaUsers />
          <div>
            <h3>500+</h3>
            <p>Happy Learners</p>
          </div>
        </div>

        <div className="stat-item">
          <FaGraduationCap />
          <div>
            <h3>35+</h3>
            <p>Dedicated Teachers</p>
          </div>
        </div>

        <div className="stat-item">
          <FaTrophy />
          <div>
            <h3>20+</h3>
            <p>School Activities</p>
          </div>
        </div>

        <div className="stat-item">
          <FaSchool />
          <div>
            <h3>1</h3>
            <p>Big Family</p>
          </div>
        </div>

      </div>

      <div className="gallery-btn">

        <button>
          View Full Gallery →
        </button>

      </div>

    </section>
  );
}

export default Gallery;