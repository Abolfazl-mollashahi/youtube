import Home from "./pages/Home";
import Serachpage from "./pages/Search";
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
  {
    path: "/serach/:value",
    element: <Serachpage/> ,
  },
];
export default routes;
