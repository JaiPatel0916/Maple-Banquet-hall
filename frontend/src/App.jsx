import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import About from "./pages/About";
import HallDetails from "./pages/HallDetails";
import Services from "./pages/Services";


function App() {
  return (
    <>
      <Navbar />


      <Routes>
        {/* Default route loads About page */}
        <Route path="/" element={<Home />} /> 
        <Route path="/about" element={<About />} />
        <Route path="/hall" element={<HallDetails/>} />
        <Route path="/services" element={<Services/>} />
      </Routes>


      

      <Footer />
    </>
  );
}

export default App;
