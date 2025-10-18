import { createContext } from "react" 
import Data from "../../SiteData/siteData.js"

export const MainContext = createContext({})

export function MainDataWraper({children}){
  
  const MainData = Data
  
  return(
    <MainContext.Provider value={MainData}>
      {children}
    </MainContext.Provider>
  )
}