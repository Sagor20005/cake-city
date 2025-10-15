import Mapp from "./Mapp.js"

export default function Locations(){
  return(
    <div className="grid gap-4 justify-center">
      {/*Text Section*/}
      <div className="grid md:grid-cols-2 gap-5">
        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-bold text-[var(--title)]">Contact</h2>
          <h1 className="text-2xl font-bold">Our Locations</h1>
          <p>Come visit our friendly team at one of our Store.</p>
        </div>
        <div>
          <div className="flex gap-2 items-center">
            <i className="p-3 max-h-4 bg-blue-500 rounded-xl fa-solid fa-location-dot"></i>
            <div>
              <h3 className="text-xl font-semibold my-3">Bagerhat</h3>
              <p>Khulna Bagerhat, Sador bagerhat</p>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <i className="p-3 max-h-4 bg-blue-500 rounded-xl fa-solid fa-location-dot"></i>
            <div>
              <h3 className="text-xl font-semibold my-3">Nur Morjid Road</h3>
              <p>Nurmorjid-mor Bagerhat, old police-line</p>
            </div>
          </div>
        </div>
      </div>
      
      {/*Map section*/}
      <Mapp />
    </div>
    )
}