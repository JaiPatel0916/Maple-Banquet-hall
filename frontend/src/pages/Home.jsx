
import HeroSection from "../components/Home/HeroSection";
import FeaturesSection from "../components/Home/FeaturesSection";
import ServicesSection from "../components/Home/ServicesSection";
import GallerySection from "../components/Home/GallerySection"; 

export default function Home() {
    return (
        <>
            <div className="pt-20">
            
              <HeroSection />
              <FeaturesSection />
              <ServicesSection />
              <GallerySection />
                
            </div>
        </>
    );
}
