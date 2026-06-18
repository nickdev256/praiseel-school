import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import HomeIntro from "../components/HomeIntro";
import WhyChooseUs from "../components/WhyChooseUs";
import Statistics from "../components/Statistics";
import Programs from "../components/Programs";
import Gallery from "../components/Gallery";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <HomeIntro />

      <WhyChooseUs />

      <Statistics />

      <Programs />

      <Gallery />

      <Testimonials />

      <Contact />

      <Footer />
    </>
  );
}

export default Home;