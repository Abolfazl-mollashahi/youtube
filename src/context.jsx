import { createContext, useEffect, useState } from "react";

const darkmodecontext = createContext();

let Contextprovider = ({children}) => {
  const [darkmode,setdarkmode] = useState(()=>{
    const savedark = localStorage.getItem("darkmode")
    return savedark ? JSON.parse(savedark) : false
  })
  
  useEffect(()=>{
    localStorage.setItem("darkmode", JSON.stringify(darkmode))
    if(darkmode){
      document.documentElement.classList.add("dark")
    }else{
      document.documentElement.classList.remove("dark")
    }
  },[darkmode])

  return (
    <darkmodecontext.Provider value={{ darkmode ,setdarkmode }} >
      {children}
    </darkmodecontext.Provider>
  )
}

export {darkmodecontext , Contextprovider}