import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/Home/HeroSection";
import FeaturesSection from "./components/Home/FeaturesSection";
import ServicesSection from "./components/Home/ServicesSection";
import GallerySection from "./components/Home/GallerySection";

import Footer from "./components/Footer";
import About from "./pages/About";


function App() {
  return (
    <>
      <Navbar />


      <Routes>
        {/* Default route loads About page */}
        {/* <Route path="/" element={<About />} /> */}
        <Route path="/about" element={<About />} />
      </Routes>

=======
      <div className="pt-20">
        {/* Page content here */}
      <HeroSection />
       <FeaturesSection />
       <ServicesSection />
       <GallerySection />
      </div>

      <Footer />
    </>
  );
}

export default App;
