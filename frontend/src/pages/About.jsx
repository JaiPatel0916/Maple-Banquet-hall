import AboutStory from "../components/About/AboutStory";
import AboutValues from "../components/About/AboutValues";
import FounderPreview from "../components/About/FounderPreview";
import VisionMission from "../components/About/VisionMission";
import AboutHeroSection from "../components/About/AboutHeroSection"

export default function About() {
    return (
        <>
            <div >
                <AboutHeroSection/>
                <AboutStory />
                <AboutValues />
                <FounderPreview />
                <VisionMission />
            </div>
        </>
    );
}
