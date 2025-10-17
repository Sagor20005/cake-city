import { Link } from "react-router-dom"

export default function IconLinks({ links_data }){
  
  return(
    <nav className="flex gap-3 flex-wrap my-3">
      {
       links_data.map((data)=>{
        return <Link key={data.url} to={data.url}>{data.icon}</Link>
       }) 
      }
    </nav>
    )
}