import { useState } from "react"
import { Link } from "react-router-dom"
import { Bounce } from "react-awesome-reveal"

export default function Alert({ State }){
  const [ open,setOpen ] = State
  
  if(!open) return null
  return(
    <div className="min-h-dvh w-dvw flex justify-center items-center fixed top-0 left-0 z-50 bg-[#000000a6]">
      <Bounce>
        <div className="m-auto w-[80%] max-w-[500px] py-9 px-3 border-[0.5px] border-[#ae4998] rounded-2xl bg-[#6b245c] flex flex-col gap-3 relative">
        <i onClick={()=>setOpen(false)} className="absolute top-3 right-3 fa-solid fa-xmark"></i>
        <h3 className="text-2xl">Order Notice</h3>
        <p className="text-[var(--sub-text)]">
          Our Website now not capable to order. If you Want to order  Click bellw <span>Facebook</span> Or <span>Whatsapp</span> Icon And Complete Your Order.
        </p>
        <nav className="flex gap-2">
          <Link to="https://whatsapp.com">
            <i className="fa-brands fa-whatsapp"></i>
          </Link>
          <Link to="https://www.facebook.com">
            <i className="fa-brands fa-facebook-f"></i>
          </Link>
        </nav>
      </div>
      </Bounce>
    </div>
    )
}