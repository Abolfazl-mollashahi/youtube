import { useRoutes } from "react-router-dom"
import routes from './route'
// import "aos/dist/aos.css"
// import { useEffect } from "react"
// import Aos from "aos"
export default function App() {
  let router = useRoutes(routes)
  // useEffect(()=>{
  // Aos.init()
  // },[])
  return(
    router
  )
  
}