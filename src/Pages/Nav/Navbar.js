import { NavLink } from "react-router-dom"
import { useState, useEffect} from "react"
import TheemToggle from "../../CastomElements/TheemToggle.js"

export default function Navbar(){
  // States 
  const [ navOpen, setNavOpen ] = useState(false)
  const width = window.innerWidth
  
  // Set Navopen when Dextop mode
  useEffect(()=>{
    if(window.innerWidth > 500){
      setNavOpen(true)
    }
  },[])
  
  // Handle Active Links
  function ActiveLinkHandler(e){
    if(e.isActive) {
      if(width < 500){
        return "translate-x-1 transition-transform text-[var(--link)] font-bold"
      }
      return "-translate-y-1 transition-transform text-[var(--link)] font-bold"
    }
    return ""
  }
  
  function close(){
    if(width > 500) return
    setNavOpen(false)
  }
  
  
  // Return Navbar HTML
  return(
    <header className="z-[1000] min-h-[45px] max-[380px]:w-[80%] max-w-[600px] w-[90%] p-2.5 px-3 bg-[var(--box)] rounded-2xl shadow-md fixed left-[50%] top-2 -translate-x-[50%] transition-all transition-[2s] md:flex gap-2 md:justify-between md:items-center">
      <div className="flex justify-between items-center">
        <img className="h-[40px]" src="/Assets/icons/cakeCity.png" alt="CakeCity" />
        {
          navOpen ? <i onClick={()=>setNavOpen(false)} className="md:hidden fa-solid fa-xmark"></i> :
          <i onClick={()=>setNavOpen(true)} className="fa-solid fa-bars"></i>
        }
      </div>
      
      {
        navOpen && (
        <nav className="flex flex-col md:flex-row gap-3 mt-3 md:mt-0 text-lg">
          <NavLink onClick={close} className={ActiveLinkHandler} to="/">Home</NavLink>
          <NavLink onClick={close} className={ActiveLinkHandler} to="/cakes">Cakes</NavLink>
          <NavLink onClick={close} className={ActiveLinkHandler} to="/galary">Galary</NavLink>
          <NavLink onClick={close} className={ActiveLinkHandler} to="/about">Abouts</NavLink>
          <NavLink onClick={close} className={ActiveLinkHandler} to="/contact">Contact</NavLink>
        </nav>)
      }
      {navOpen && <TheemToggle />}
    </header>
    )
}