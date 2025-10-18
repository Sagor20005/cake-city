import Sarvices from "./Sarvices.js"
import SplitText from "../../Animation/SplitText.js"
//import ScrollStackCreate from "./ScrollStackCreate.js"
import {useContext} from "react"
import { MainContext } from "../../Context/MainData/MainData.js"

export default function AboutUs(){
  
  // Read Data 
  const { about } = useContext(MainContext)
  
  return(
    <div className="min-h-dvh pt-[100px] px-5 md:px-52 relative">
      
      
      <div>
        <h3 className="text-xl mb-2.5 font-bold text-[var(--title)]">About Us.</h3>
        <SplitText
          text={about.text}
          className="text-larg font-semibold text-start"
          delay={10}
          duration={0.1}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          textAlign="start"
        />
      </div>
      
      {/*Sarvices*/} 
      <Sarvices sarvices={about.sarvices} />
    </div>
    )
}