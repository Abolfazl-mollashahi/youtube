import Home from "./pages/Home";
import Shorts from "./pages/Shorts";

const routes = [
  {
    path: "/",
    element: <Home/> ,
  },
  {
    path: "/shorts",
    element: <Shorts/> ,
  },
];
export default routes;
