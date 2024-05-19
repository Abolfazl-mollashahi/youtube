import { useRoutes } from "react-router-dom"
import routes from './route'
import "aos/dist/aos.css"
import { useEffect } from "react"
import Aos from "aos"


export default function App() {
  // useEffect(()=>{
  // Aos.init()
  // },[])
  let router = useRoutes(routes)
  return router
}