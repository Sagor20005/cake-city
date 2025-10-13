export default function IconButton({ text, icon_type, icon }){
  
  // Type Html
  if(icon_type === "html") return (
    <button className=" max-w-[300px] bg-blue-500 p-2.5 py-1.5 rounded-md shadow-xl text-[var(--text)]">
      <i className={`${icon} mr-[5px]`}></i>
      {text}
    </button>
    )
}