import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./Pages/Nav/Navbar.js"
import Home from "./Pages/Home/Home.js"
import Cakes from "./Pages/Cakes/Cakes.js"
import Gallary from "./Pages/Galary/Gallary.js"
import Background from "./CastomElements/CastomBackground.js"
import AboutUs from "./Pages/About_us/AboutUs.js"

function App() {
  return (
    <div className="min-h-dvh ragular text-[var(--text)] bg-[var(--bg)] overflow-hidden">
      <BrowserRouter>
        <Background />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/cakes" element={<Cakes />}/>
          <Route path="/galary" element={<Gallary />}/>
          <Route path="/about" element={<AboutUs />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
