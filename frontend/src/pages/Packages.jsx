import PackagesHero from "../components/Packages/PackagesHero";
import PackagesCards from "../components/Packages/PackagesCards";
// import PackagesAddOns from "../components/Packages/PackagesAddOns";
import PackagesCTA from "../components/Packages/PackagesCTA";
import PackageFooter from "../components/Packages/PackageFooter";

const Packages = () => {
    return (
        <div >
            <PackagesHero />
            <PackagesCards />
            {/* <PackagesAddOns /> */}
            <PackagesCTA />
            <PackageFooter/>
           
        </div>
    );
};

export default Packages;
