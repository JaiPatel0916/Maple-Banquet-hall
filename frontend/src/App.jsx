import Navbar from "./components/Navbar";
import HeroSection from "./components/Home/HeroSection";
import FeaturesSection from "./components/Home/FeaturesSection";
import ServicesSection from "./components/Home/ServicesSection";
import GallerySection from "./components/Home/GallerySection";


function App() {
  return (
    <>
      <Navbar />
      <div className="pt-20">
        {/* Page content here */}
      <HeroSection />
       <FeaturesSection />
       <ServicesSection />
       <GallerySection />
      </div>
    </>
  );
}

export default App;