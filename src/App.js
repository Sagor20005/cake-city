import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./Pages/Nav/Navbar.js"
import Home from "./Pages/Home/Home.js"
import Cakes from "./Pages/Cakes/Cakes.js"

function App() {
  return (
    <div className="min-h-dvh ragular text-[var(--text)] bg-[var(--bg)]">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/cakes" element={<Cakes />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
