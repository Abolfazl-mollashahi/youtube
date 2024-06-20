import { createContext, useContext, useState } from "react";

export const AuthContext = createContext()

export const useAuthContext=()=>{
  return useContext(AuthContext)
}

export const AuthContexProvider = ({children})=>{
  const [ authUser,setAuthUser ] = useState(JSON.parse(localStorage.getItem("user-youtube")) || null)
  return(
    <AuthContext.Provider value ={{authUser,setAuthUser}}  >
      {children}
    </AuthContext.Provider>
  )
}




