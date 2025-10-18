import { useContext } from "react"
import { MainContext } from "../../Context/MainData/MainData.js"


export default function Footer(){
  
  // Context data 
  const { siteName } = useContext(MainContext)
  
  return(
    <div className="text-xs relative flex flex-col justify-center items-center gap-3 h-[100px] bg-[#100d0d56] text-white mt-5">
      <p>©2025 {siteName}. All rights reserved.</p>
      <p className="text-[#a5dacd]">Managed by Jakareya Haldar</p>
    </div>
    )
}