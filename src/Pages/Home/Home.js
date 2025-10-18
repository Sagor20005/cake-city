import IconLink from "../../CastomElements/IconLink.js"
import IconButton from "../../CastomElements/IconButton.js"
import Background from "../../CastomElements/CastomBackground.js"
import { Bounce } from "react-awesome-reveal"
import AlertComponent from "../../CastomElements/AlertComponent.js"
import { useState, useContext } from "react"
import IconLinks from "./IconLinks.js"
import { MainContext } from "../../Context/MainData/MainData.js"


export default function Home(){
  const [ Alert,setOpenAlert ] = useState(false)
  
  // Read context 
  const { home } = useContext(MainContext)
  console.log(typeof(home.logo))
  
  return(
    <div className=" flex justify-center items-center min-h-dvh">
      <AlertComponent State={[Alert,setOpenAlert]} />
      {/*Content*/}
      <div className="max-w-[600px] w-[80%] relative flex flex-col gap-4 items-center justify-center">
        
        <Bounce cascade>
          
          {/*CakeCity Logo */}
        <div className=" relative p-4 rounded-2xl shadow-2xl">
          {
            home.logo_type === "img" ? (
            <>
              <img className=" w-full drop-shadow-2xl" src={home.logo} alt ="." />
              <p className="absolute bottom-0.5 text-xs text-[var(--text)] right-2">{home.logo_bottom}</p>
            </>
            ) : (
            <h1 className="text-3xl font-bold big">{home.logo}</h1>
            )
          }
        </div>
        {/*Some info*/}
        <div className="p-4 rounded-2xl shadow-2xl flex flex-col gap-2">
          <p><i className="fa-solid fa-circle-info"></i> {home.bio}</p>
          <p><i className="fa-solid fa-location-dot"></i> {home.address}</p>
          <IconLinks links_data={home.links} />
          <IconButton onClick={()=>setOpenAlert(true)} text="Castom Cake" icon_type="html" icon="fa-solid fa-shop" />
        </div>
        
          
        </Bounce>
        
      </div>
    
    </div>
    )
}