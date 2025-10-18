import {useContext} from 'react'
import DomeGallery from "../../Animation/DomeGallery.js"
import { MainContext } from "../../Context/MainData/MainData.js"

export default function Galary() {
  const { gallery } = useContext(MainContext)
  
  return(
    <div className="h-dvh w-dvh">
      <DomeGallery images={gallery.images} />
    </div>
    )
  
}