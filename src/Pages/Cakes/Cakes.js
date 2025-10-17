import IconButton from "../../CastomElements/IconButton.js"
import { Slide, Fade } from "react-awesome-reveal"
import AlertComponent,{setOpen} from "../../CastomElements/AlertComponent.js"
import { useState } from "react"

export default function Cakes(){
  const [ openAlert,setOpenAlert ] = useState(false)
  
  const cakes = [
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8YqdR6Pvj-Kk9j5x7jc8cd2sul11W4P1nICokHhTw0g&s=10",
    name: "Chocolate Cake RedQueen",
    price: "500-1000"
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU7wQX5di_SeufsNYdZTFPTO-cWIG-2z8isWOes_kWkA&s=10",
    name: "Vanilla Cream Delight",
    price: "400-800"
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPjKdX3K1ZRqi98KdtgY0HjPHjj_WodPL2nTJvGOzWlw&s=10",
    name: "Red Velvet Dream",
    price: "600-1200"
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfxoOxoT6GspU4ZQySplR7rWVvyTI780VRMQn1NtNo6g&s=10",
    name: "Black Forest Classic",
    price: "550-950"
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSskRIDwlAG4oHo7rsdCoRgTBlX7WOLA7d_4NrnaBgZ2Q&s=10",
    name: "Strawberry Bliss Cake",
    price: "450-850"
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrDjDqirE0Q9fZ5VETdwikVHDPbgSN8UOIGj5gHyZm9w&s=10",
    name: "Blueberry Cheese Cake",
    price: "700-1300"
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNqENDYo0yKxifhvXeLkMyKj7Yf77nqiAui15GeOq9Eg&s=10",
    name: "Butterscotch Fantasy",
    price: "500-900"
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVmqfEib_dpyz4No20QYVbs_LmTszS5_OYoEmqFJeEZQ&s=10",
    name: "Coffee Mocha Cake",
    price: "550-1000"
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwJgeKnBe3kjWF1K3PvjlLaGNVtyPXYRdnLS6lZFCuxQ&s=10",
    name: "Pineapple Paradise",
    price: "400-750"
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7ccZ8mE5uYm5RWVy0ZUgrEC9PhgtKQ_dj-38LB9eE4Q&s=10",
    name: "Mango Cream Swirl",
    price: "500-950"
  }
];

  
  
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
              <p className="text-sm md:text-base" >price: {cake.price}tk</p>
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