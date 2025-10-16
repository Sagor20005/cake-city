import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./Pages/Nav/Navbar.js"
import Home from "./Pages/Home/Home.js"
import Cakes from "./Pages/Cakes/Cakes.js"
import Gallary from "./Pages/Galary/Gallary.js"
import Background from "./CastomElements/CastomBackground.js"
import AboutUs from "./Pages/About_us/AboutUs.js"
import SplashCursor from "./Animation/SplashCursor.js"
import BubbleMenu from "./Pages/Nav/BubbleMenu.js"
import ContactUs from "./Pages/ContactUs/ContactUs.js"
import Footer from "./Pages/Nav/Footer.js"

function App() {
  return (
    <div className="min-h-[calc(100dvh)] ragular text-[var(--text)] bg-[var(--bg)] overflow-hidden">
      <BrowserRouter>
        <BubbleMenu />
        <Background />
        <SplashCursor />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/cakes" element={<Cakes />}/>
          <Route path="/gallary" element={<Gallary />}/>
          <Route path="/about" element={<AboutUs />}/>
          <Route path="/contact" element={<ContactUs />}/>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
