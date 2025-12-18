import { useParams, Link } from "react-router-dom";
import FounderHero from "../components/Founder/FounderHero";
import FounderProfile from "../components/Founder/FounderProfile";

const FounderDetails = () => {
    const { id } = useParams();

    if (id !== "1" && id !== "2") {
        return (
            <div className="py-32 text-center">
                <h2 className="text-2xl font-semibold">Founder not found</h2>
                <Link to="/about" className="text-[#D29922] underline">
                    Back to About
                </Link>
            </div>
        );
    }

    return (
        <>
            <FounderHero />
            <FounderProfile founderId={id} />
        </>
    );
};

export default FounderDetails;
