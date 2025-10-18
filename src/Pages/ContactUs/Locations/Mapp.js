export default function Mapp({src}){
  return(
    <div className="w-full">
        <iframe src={src}
        style={{border:0}} 
        title="location"
        className="w-full h-[400px] md:h-[600px] rounded-xl"
        allowfullscreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
    )
}