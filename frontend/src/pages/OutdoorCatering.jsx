import OutdoorCateringHero from "../components/OutdoorCatering/OutdoorCateringHero";
import MenuBuilder from "../components/OutdoorCatering/MenuBuilder/MenuBuilder";
import HowItWorks from "../components/OutdoorCatering/HowItWorks";
import OutdoorFooter from "../components/OutdoorCatering/OutdoorFooter";

const OutdoorCatering = () => {
    return (
        <div >
            <OutdoorCateringHero />
            <HowItWorks />
            <MenuBuilder />
            <OutdoorFooter/>
          
        </div>
    );
};

export default OutdoorCatering;
