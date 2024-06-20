import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { useAuthContext } from "../context/authContext";

function useLogin() {
  const [loading,setloading] = useState(false)
  const { setAuthUser } = useAuthContext()

  const login = async ({email , password})=>{
    const success = handelinputerrors({email , password})
    if(!success) return
    setloading(true)
    try {
      const res = await axios.post("http://localhost:4000/auth/login",{email,password},{
        withCredentials: true,
      })
      localStorage.setItem("user-youtube",JSON.stringify(res.data))
      setAuthUser(res.data)
      toast.success("Success login !!!")
      return true
    } catch (error) {
      console.log("login error",error.message);
      toast.error(error.message)
    }finally{
      setloading(false)
    }
  }

  return {loading , login}
}

export default useLogin;

function handelinputerrors({email,password}){
  if(!email || !password){
    toast.error('Please fill in all fields');
    return false
  }
  return true
}