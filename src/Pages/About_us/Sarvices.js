export default function Sarvices({sarvices}){
  
  
  if(!sarvices.length) return <h1>Please add an sarvice.</h1>
  
  return(
    <div className="mt-16 grid md:grid-cols-3 gap-3 gap-y-6">
        
        {
          sarvices.map((sarvice)=>{
            return(
            <div className="rounded-md shadow-2xl p-3 flex items-center text-center md:text-start md:items-start flex-col gap-4">
              <img className="h-11" src={sarvice.image} alt={sarvice.name}/>
              <h4 className="text-lg text-[var(--title)] font-bold">{sarvice.name}</h4>
              <p>{sarvice.text}</p>
            </div>
            )
          })
        }
        
      </div>
    )
}