import IconButton from "../../CastomElements/IconButton.js"
import { Slide, Fade } from "react-awesome-reveal"
import AlertComponent,{setOpen} from "../../CastomElements/AlertComponent.js"
import { useState, useContext } from "react"
import { MainContext } from "../../Context/MainData/MainData.js"

export default function Cakes(){
  const [ openAlert,setOpenAlert ] = useState(false)
  
  // Parse Data from context
  const {cakes} = useContext(MainContext)
  
  
  // LODDING EFFECT RENDER
  if(false) return(
    <CakesBody State={[openAlert,setOpenAlert]}>>
        {
          Array.from({length:5}).map((e,i)=>{
            return(
            <div className=" bg-[var(--box)] rounded-2xl p-4 ">
              <div className="animate-pulse h-[200px] w-[200px] rounded-full bg-[var(--bg)] mx-auto"></div>
              <div className="flex flex-col gap-2 mx-5">
                <div className="animate-pulse h-2 w-[100px] bg-[var(--bg)] rounded-md"></div>
                <div className="h-2 w-[200px] bg-[var(--bg)] rounded-md"></div>
                <div className="animate-pulse h-2 w-[100px] bg-[var(--bg)] rounded-md"></div>
              </div>
            </div>
            )
          })
        }
    </CakesBody>
  )
  
  // CAKES RENDER
  return(
    <CakesBody State={[openAlert,setOpenAlert]}>
      <Slide cascade damping={0.2} triggerOnce>
        {
        cakes.map((cake)=>{
          return(
          <div className=" hover:scale-105 hover:bg-[var(--box)] transition shadow-2xl rounded-2xl p-4 flex flex-col gap-2 items-center">
            <img
            className=" max-w-[200px] max-h-[200px] w-[90%] object-cover rounded-xl"
            src={cake.image} alt={cake.name} />
            <div className="flex flex-col gap-1">
              <p className="font-bold">{cake.name}</p>
              <p className="text-sm md:text-base text-[var(--sub-text)]" >price: {cake.price}tk</p>
              <IconButton onClick={()=>setOpenAlert(true)} text="Shop Now" icon_type="html" icon="fa-solid fa-shop" />
            </div>
          </div>
          )
        })
      }
      </Slide>
    </CakesBody>
    )
}

function CakesBody({State,children}){
  return(
    <div className="min-h-dvh relative pt-[100px]">
      <AlertComponent State={State} />
      <Fade><h1 className="text-2xl text-[var(--title)] text-center">Cakes</h1></Fade>
      <div className="p-4 grid justify-center gap-3 grid-cols-2 md:grid-cols-[repeat(auto-fit,300px)]">
        {children}
      </div>
    </div>
    )
}