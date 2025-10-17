import Sarvices from "./Sarvices.js"
import {sarvices} from "../../Extra-Data/Sarvice.js"
import SplitText from "../../Animation/SplitText.js"
//import ScrollStackCreate from "./ScrollStackCreate.js"

export default function AboutUs(){
  
  return(
    <div className="min-h-dvh pt-[100px] px-5 md:px-52 relative">
      
      
      <div>
        <h3 className="text-xl mb-2.5 font-bold">About Us.</h3>
        <SplitText
          text="CakeCity is a Popular Cake store on bagerhat. they provide sweet cake every popular cake. they also make castom order cake. We geranty that we give you our best quality cake. to make your program beutifull."
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
      <Sarvices sarvices={sarvices} />
    </div>
    )
}