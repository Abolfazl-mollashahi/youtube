import jwt from "jsonwebtoken"
import UserModel from "../models/user.model.js"

const protectRoute = async (req,res,next)=>{
  try {
    const token = req.cookie.jwt;
    if(!token){
      return res.status(400).json({error:"Unauthorized - No Token Provided"})
    }
    
    const decoded = jwt.verify(token,process.env.JWT_SECRET)
    if(!decoded){
      return res.status(400).json({error:"Unauthorized - Invalid Token"})
    }
  
    const user = await UserModel.findById(decoded.userId).select("password")
    if(!user){
      return res.status(404).json({ error: "User not found" });
    }
    
    req.user = user
  
    next()
    
  } catch (error) {
    console.log("Error in protectRoute middleware: ", error.message);
		res.status(500).json({ error: "Internal server error" });
  }


}
export default protectRoute


