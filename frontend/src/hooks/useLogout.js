import { useState } from "react";
import axios from "axios";
import { useAuthContext } from "../context/authContext";
import toast from "react-hot-toast";

function useLogout() {
  const [loading,setloading] = useState(false)
  const {setAuthUser} = useAuthContext()

  const logout = async()=>{
    setloading(true)
    try {
      const res = await axios.post("http://localhost:4000/auth/logout",{})
      localStorage.removeItem("user-youtube")
      setAuthUser(null)
      toast.success("Success logout !!!")
    } catch (error) {
      toast.error(error.message)
    }finally{
      setloading(false)
    }
  }
  return {loading , logout}
}

export default useLogout;