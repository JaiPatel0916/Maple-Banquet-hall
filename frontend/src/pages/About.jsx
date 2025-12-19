import AboutStory from "../components/About/AboutStory";
import AboutValues from "../components/About/AboutValues";
import FounderPreview from "../components/About/FounderPreview";
import VisionMission from "../components/About/VisionMission";


export default function About() {
    return (
        <>
            <div >
                <AboutStory />
                <AboutValues />
                <FounderPreview />
                <VisionMission />
            </div>
        </>
    );
}
