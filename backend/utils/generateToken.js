import jwt from "jsonwebtoken"

const tokenAndSet = ( userId ,res )=>{
  const tokenjwt = jwt.sign({userId},process.env.JWT_SECRET,{
    expiresIn:"5d"
  })
  
  res.cookie("jwt",tokenjwt,{
		maxAge: 5 * 24 * 60 * 60 * 1000, // MS
		httpOnly: true, // prevent XSS attacks cross-site scripting attacks
		sameSite: "strict", // CSRF attacks cross-site request forgery attacks
		secure: false,
  })

}
export default tokenAndSet




