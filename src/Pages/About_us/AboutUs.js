import Sarvices from "./Sarvices.js"
import {sarvices} from "../../Extra-Data/Sarvice.js"
export default function AboutUs(){
  
  
  
  
  return(
    <div className="pt-[100px] px-5 md:px-52 relative">
      
      <div>
        <h3 className="text-xl mb-2.5 font-bold">About Us.</h3>
        <p className="font-bold">CakeCity is a Popular Cake store on bagerhat. they provide sweet cake every popular cake. they also make castom order cake.
        We geranty that we give you our best quality cake. to make your program beutifull.</p>
      </div>
      
      {/*Sarvices*/} 
      <Sarvices sarvices={sarvices} />
      
    </div>
    )
}