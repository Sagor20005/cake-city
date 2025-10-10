
import IconLink from "../../CastomElements/IconLink.js"

export default function Home(){
  return(
    <div className="h-dvh flex justify-center items-center relative">
      
      <div className="flex items-center md:gap-2 max-w-[500px]">
        
        <img className="h-[200px]" src="/Assets/icons/left.png" alt="cake" />
        <div className="text-center">
          <p className="big text-3xl">CakeCity</p>
          <p className="font-bold">A <span className="bg-blue-500">Cake</span> Word stand on Khulna Bagerhat.</p>
          <p className="text-[#567dcc] text-sm mt-3"><i className="fa-solid fa-location-dot"></i>Old Police Line</p>
        </div>
        <img className="h-[200px]" src="/Assets/icons/right.png" alt="cake" />
        
      </div>
      
      
      {/* About us and contact Shortcat*/}
      <div className="flex gap-2.5 absolute bottom-10">
        <IconLink path="/" icon="facebook.png" />
        <IconLink path="/" icon="tik-tok.png" />
        <IconLink path="/" icon="whatsapp.png" />
      </div>
      
    </div>
    )
}