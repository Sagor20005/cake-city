import IconLink from "../../CastomElements/IconLink.js"
import IconButton from "../../CastomElements/IconButton.js"
import Background from "../../CastomElements/CastomBackground.js"
import { Bounce } from "react-awesome-reveal"

export default function Home(){
  
  
  return(
    <div className=" flex justify-center items-center min-h-dvh">

      {/*Content*/}
      <div className="max-w-[600px] w-[80%] relative flex flex-col gap-4 items-center justify-center">
        
        <Bounce cascade>
          
          {/*CakeCity Logo */}
        <div className=" relative p-4 rounded-2xl shadow-2xl">
          <img className=" w-full drop-shadow-2xl" src="/Assets/images/cakecity text.png" alt ="." />
          <p className="absolute bottom-0.5 text-xs text-[var(--text)] right-2">Bagerhat</p>
        </div>
        {/*Some info*/}
        <div className="p-4 rounded-2xl shadow-2xl flex flex-col gap-2">
          <p><i className="fa-solid fa-circle-info"></i> Handcrafted with love and the finest ingeredirnts, our cakes are perfect for meking your moments special</p>
          <p><i className="fa-solid fa-location-dot"></i> Puran Police-line</p>
          <IconButton text="Castom Cake" icon_type="html" icon="fa-solid fa-shop" />
        </div>
        
          
        </Bounce>
        
      </div>
    
    </div>
    )
}