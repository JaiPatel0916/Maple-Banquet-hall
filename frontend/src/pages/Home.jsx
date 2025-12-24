import { useEffect, useState } from "react";
import api from "../api/axios";

import HeroSection from "../components/Home/HeroSection";
import FeaturesSection from "../components/Home/FeaturesSection";
import ServicesSection from "../components/Home/ServicesSection";
import GallerySection from "../components/Home/GallerySection";
import PopupModal from "../components/Popup/PopupModal";

export default function Home() {
    const [popups, setPopups] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
      
        if (sessionStorage.getItem("popupSeen")) return;

        const fetchPopups = async () => {
            try {
                const { data } = await api.get("/popup");

                if (Array.isArray(data) && data.length > 0) {
                    setPopups(data);
                    setCurrentIndex(0);
                    setShowPopup(true);
                }
            } catch (err) {
                console.error("Popup fetch failed", err);
            }
        };

        fetchPopups();
    }, []);

    const closePopup = () => {
        if (currentIndex < popups.length - 1) {
            setCurrentIndex((prev) => prev + 1);
        } else {
            setShowPopup(false);
            sessionStorage.setItem("popupSeen", "true"); 
        }
    };

    return (
        <>
            <div>
                <HeroSection />
                <FeaturesSection />
                <ServicesSection />
                <GallerySection />
            </div>

            {showPopup && popups[currentIndex] && (
                <PopupModal
                    image={popups[currentIndex].image}
                    onClose={closePopup}
                />
            )}
        </>
    );
}
