import { useState, useEffect } from "react"

export default function TheemTogle() {
  const [checked,setChecked] = useState(false)
  const width = window.innerWidth
  
  useEffect(()=>{
    let theem = document.documentElement.dataset.theme
    if(theem === "dark"){
      setChecked(true)
    }else{
      setChecked(false)
    }
  },[])
  
  function Onchange(e){
    const value = e.target.checked
    setChecked(value)
    document.documentElement.dataset.theme = value ? "dark" : "light"
  }
  return(
    <div className={` ${ width < 500 ? "absolute bottom-3 right-3" : ""} `}>
      <input checked={checked} onChange={Onchange} type="checkbox" className="opacity-0 absolute" id="checkbox" />
      <label htmlFor="checkbox" className=" bg-[#346697] w-[45px] h-[20px] rounded-full relative p-[5px] cursor-pointer flex justify-between items-center ">
        <i className=" text-[#f39c12] fas fa-sun"></i>
        <i className="text-[#f1c40f] fas fa-moon"></i>
        <span className={`${checked ? "translate-x-[24px]" : ""} bg-[#fff] w-[22px] h-[22px] absolute left-[2px] top-[2px] rounded-[50%] transition-transform`}></span>
      </label>
    </div>
    )
    }