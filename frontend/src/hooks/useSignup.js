import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { useAuthContext } from "../context/authContext";

const useSignup = () => {
  const [loading, setloading] = useState(false);
  const { setAuthUser } = useAuthContext();
  

  const signup = async ({ fullname, email, password, confirmPassword }) => {
    const success = handleInputErrors({
      fullname,
      email,
      password,
      confirmPassword,
    });
    if (!success) return;

    setloading(true);
    try {
      const res = await axios.post(
          "http://localhost:4000/auth/signup",
          {
            fullname,
            email,
            password,
            confirmPassword,
          },
          {
            withCredentials: true,
          }
        )
        
        setAuthUser(res.data);
        localStorage.setItem("user-youtube", JSON.stringify(res.data))
        toast.success("Signup successful!")
        return true
    } catch (error) {
      console.error("Error during signup:", error)
      toast.error(error.message);
    } finally {
      setloading(false);
    }
    
  };

  return { loading, signup };
};

export default useSignup;

function handleInputErrors({ fullname, email, password, confirmPassword }) {
  if (!fullname || !email || !password || !confirmPassword) {
    toast.error("Please fill in all fields");
    return false;
  }

  if (password !== confirmPassword) {
    toast.error("Passwords do not match");
    return false;
  }

  if (password.length < 6) {
    toast.error("Password must be at least 6 characters");
    return false;
  }

  return true;
}
