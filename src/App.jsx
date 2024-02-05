import { useRoutes } from "react-router-dom"
import routes from './route'


export default function App() {
  let router = useRoutes(routes)
  return router
}