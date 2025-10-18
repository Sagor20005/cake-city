import Mapp from "./Mapp.js"
import {useContext} from "react"
import { MainContext } from "../../../Context/MainData/MainData.js"

export default function Locations(){
  
  // Read context 
  const { contact } = useContext(MainContext)
  
  return(
    <div className="grid gap-4 justify-center">
      {/*Text Section*/}
      <div className="grid md:grid-cols-2 gap-5">
        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-bold text-[var(--title)]">Contact</h2>
          <h1 className="text-2xl font-bold">Our Locations</h1>
          <p>Come visit our friendly team at one of our Store.</p>
        </div>
        <div>
          {
            contact.address.map((loc)=>{
              return(
              <div key={loc.title} className="flex gap-2 items-center">
                <i className="p-3 h-[40px] w-[40px] bg-blue-500 rounded-xl fa-solid fa-location-dot"></i>
                <div>
                  <h3 className="text-xl font-semibold my-3">{loc.title}</h3>
                  <p className="text-[var(--sub-text)]">{loc.text}</p>
                </div>
              </div>
              )
            })
          }
        </div>
      </div>
      
      {/*Map section*/}
      <Mapp src={contact.location_src} />
    </div>
    )
}