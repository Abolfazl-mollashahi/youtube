import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import {dirname,join} from 'path'
import { fileURLToPath } from 'url';
import connectToMongodb from "./db/connectToMongoDB.js"
import cookieParser from "cookie-parser"
import authRoutes from "./routes/auth.routes.js"
import videoRoutes from "./routes/video.routes.js"

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express()
const PORT = process.env.PORT || 4000
dotenv.config()
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));
app.use(cookieParser())
app.use(express.json())

// app.use(express.static(join(__dirname,"/frontend/dist")))
// app.get("/",(req,res)=>{
//   res.sendFile(join(__dirname,"frontend","dist","index.html"))
// })
app.use("/auth/",authRoutes)
app.use("/video/",videoRoutes)


app.listen(PORT,()=>{ 
  connectToMongodb()
  console.log(` server runing port ${PORT} `)
})
