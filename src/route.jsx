import Home from "./pages/Home";
import Shorts from "./pages/Shorts";
import ShowVideo from "./pages/ShowVideo";

const routes = [
  {
    path: "/",
    element: <Home/> ,
  },
  {
    path: "/shorts",
    element: <Shorts/> ,
  },
  {
    path: "/video/:id",
    element: <ShowVideo/> ,
  },
];
export default routes;
