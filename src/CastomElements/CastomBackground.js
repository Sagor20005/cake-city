import CakeElPng from "../Assets/cakeel.png"

export default function Background(){
  return(
    <div className="w-dvw fixed top-0 left-0 ">
      <div className="absolute top-0 left-0 h-full w-full bg-[#1f2f3eb3]"></div>
      <div className="grid grid-cols-2">
        {
          Array.from({length:12}).map(()=>  <img src={CakeElPng} alt="."/>)
        }
      </div>
    </div>
    )
}