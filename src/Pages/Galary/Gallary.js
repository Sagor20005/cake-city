import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import EmblaCarousel from "./Slider/EmblaCarousel.jsx"
import "./Slider/css/base.css"
import "./Slider/css/embla.css"

export default function Galary() {
  
  const OPTIONS = { dragFree: true, loop: true }
  const SLIDE_COUNT = 5
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
  
  return(
    <div className="pt-[100px] relative">
     
     <div className="flex flex-col gap-2 items-center">
       <h2 className="text-2xl font-bold text-[var(--title)]">Store Gallary</h2>
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
     </div>
     <div className="flex flex-col gap-2 items-center">
       <h2 className="text-2xl font-bold text-[var(--title)]">Best Cakes</h2>
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
     </div>
     
    </div>
    )
  
}