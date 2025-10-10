import { Link } from "react-router-dom"

export default function IconLink({ path, icon }){
  return <Link to={path}> <img className="h-[20px]" src={`/Assets/icons/${icon}`} alt={icon} /> </Link>
}