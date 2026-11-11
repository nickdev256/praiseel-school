import Navbar from "../components/Navbar";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";

function GalleryPage() {
  return (
    <>
      <Navbar />

      <div style={{ paddingTop: "160px" }}>
        <Gallery />
      </div>

      <Footer />
    </>
  );
}

export default GalleryPage;