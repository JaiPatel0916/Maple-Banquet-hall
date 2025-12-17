import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import HallDetails from "./pages/HallDetails";
import Services from "./pages/Services";
import OutdoorCatering from "./pages/OutdoorCatering";
import Packages from "./pages/Packages";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Founder from "./pages/Founder";



function App() {
  const location = useLocation();
  const hideFooterRoutes = ["/packages","/outdoor-catering","/contact"];
  const shouldHideFooter = hideFooterRoutes.includes(location.pathname);

  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services/>} />
        <Route path="/hall" element={<HallDetails />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/Gallery" element={< Gallery />} />
        <Route path="/outdoor-catering" element={<OutdoorCatering />} />
        <Route path="/contact" element={< Contact />} />
        <Route path="/founder" element={<Founder />} />
      </Routes>
      {!shouldHideFooter && <Footer />}
    </>
  );
}

export default App;
