import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import HallDetails from "./pages/HallDetails";
import Services from "./pages/Services";
import Packages from "./pages/Packages";
import Gallery from "./pages/Gallery";


function App() {
  const location = useLocation();

  // ❌ Footer should NOT appear on Packages page
  const hideFooterRoutes = ["/packages"];
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
      </Routes>
      {!shouldHideFooter && <Footer />}
    </>
  );
}

export default App;
