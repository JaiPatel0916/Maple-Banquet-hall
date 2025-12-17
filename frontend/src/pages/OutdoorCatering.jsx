import OutdoorCateringHero from "../components/OutdoorCatering/OutdoorCateringHero";
import HowItWorks from "../components/OutdoorCatering/HowItWorks";
import OutdoorFooter from "../components/OutdoorCatering/OutdoorFooter";

import StepWrapper from "../components/OutdoorCatering/StepWrapper";
import GuestStep from "../components/OutdoorCatering/GuestStep";
import MenuStep from "../components/OutdoorCatering/MenuStep";
import ReviewStep from "../components/OutdoorCatering/ReviewStep";

import { OutdoorCateringProvider, useOutdoorCatering }
    from "../context/OutdoorCateringContext";

const StepContent = () => {
    const { step } = useOutdoorCatering();

    if (step === 1) return <GuestStep />;
    if (step === 2) return <MenuStep />;
    return <ReviewStep />;
};

const OutdoorCatering = () => {
    return (
        <OutdoorCateringProvider>
            <div>
               
                <OutdoorCateringHero />

                <HowItWorks />

                <StepWrapper>
                    <StepContent />
                </StepWrapper>

                <OutdoorFooter />
            </div>
        </OutdoorCateringProvider>
    );
};

export default OutdoorCatering;
