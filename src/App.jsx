import { Routes, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Career from "./pages/Career";
import DigitalMarketing from "./pages/DigitalMarketing";
import Technologies from "./pages/Technologies";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/career" element={<Career />} />
        <Route path="/digital-marketing" element={<DigitalMarketing />}/>
        <Route path="/technologies" element={<Technologies />}/>
        
      </Routes>

      <Footer />
    </>
  );
}

export default App;