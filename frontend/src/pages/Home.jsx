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
        const fetchPopups = async () => {
            try {
                const { data } = await api.get("/popup");
                // data is an ARRAY

                // ✅ filter only active popups
                const activePopups = data
                    .filter(p => p.isActive)
                    .sort(
                        (a, b) =>
                            new Date(b.createdAt) - new Date(a.createdAt)
                    );

                if (activePopups.length > 0) {
                    setPopups(activePopups);
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
            setCurrentIndex(prev => prev + 1);
        } else {
            setShowPopup(false);
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
