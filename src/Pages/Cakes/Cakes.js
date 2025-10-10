import IconButton from "../../CastomElements/IconButton.js"

export default function Cakes(){
  
  
  const cakes = [
    {
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8YqdR6Pvj-Kk9j5x7jc8cd2sul11W4P1nICokHhTw0g&s=10",
      name:"Choklet Cake RedQueen",
      price:"500-1000"
    },
    {
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8YqdR6Pvj-Kk9j5x7jc8cd2sul11W4P1nICokHhTw0g&s=10",
      name:"Choklet Cake RedQueen",
      price:"500-1000"
    },
    {
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8YqdR6Pvj-Kk9j5x7jc8cd2sul11W4P1nICokHhTw0g&s=10",
      name:"Choklet Cake RedQueen",
      price:"500-1000"
    },
    {
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8YqdR6Pvj-Kk9j5x7jc8cd2sul11W4P1nICokHhTw0g&s=10",
      name:"Choklet Cake RedQueen",
      price:"500-1000"
    },
    ]
  
  
  // LODDING EFFECT RENDER
  if(false) return(
    <CakesBody>
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
    <CakesBody>
      {
        cakes.map((cake)=>{
          return(
          <div className=" hover:scale-105 hover:bg-[var(--box)] transition shadow-2xl rounded-2xl p-4 flex flex-col gap-2 items-center">
            <img
            className=" max-w-[200px] w-[90%] rounded-xl"
            src={cake.image} alt={cake.name} />
            <div className="flex flex-col gap-1">
              <p className="font-bold">{cake.name}</p>
              <p className="text-sm md:text-base" >price: {cake.price}tk</p>
              <IconButton text="Shop Now" icon_type="html" icon="fa-solid fa-shop" />
            </div>
          </div>
          )
        })
      }
    </CakesBody>
    )
}

function CakesBody({children}){
  return(
    <div className="pt-[100px]">
      <h1 className="text-2xl text-[var(--title)] text-center">Cakes</h1>
      <div className="p-4 grid justify-center gap-3 grid-cols-2 md:grid-cols-[repeat(auto-fit,300px)]">
        {children}
      </div>
    </div>
    )
}