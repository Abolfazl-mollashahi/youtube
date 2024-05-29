import Channels from "./pages/Channels";
import Home from "./pages/Home";
import Serachpage from "./pages/Search";
import Shorts from "./pages/Shorts";
import ShowVideo from "./pages/ShowVideo";
import PersonPage from "./pages/PersonPage";
import Subscribepage from "./pages/Subscribepage";


const routes = [
  {
    path: "/",
    element: <Home/> ,
  },
  {
    path: "/:username?",
    element: <PersonPage/> ,
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
  {
    path: "/Subscribe",
    element: <Subscribepage/> ,
  },
  {
    path: "/channels",
    element: <Channels/> ,
  },
];
export default routes;
