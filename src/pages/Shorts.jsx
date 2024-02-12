import MyNavbar from "../components/MyNavbar";

import { useEffect, useRef, useState } from "react";
import ShowVideoShorts from "../components/ShowVideoShorts";

function Shorts() {
  const [toggleflagshorts, settoggleflagshorts] = useState(false);
  const divshortsvideo = useRef({})

  const togglefuncshorts = () => {
    if (toggleflagshorts) {
      settoggleflagshorts(false);
    } else {
      settoggleflagshorts(true);
    }
  };
  const closefathershorts = () => {
    if (toggleflagshorts) {
      settoggleflagshorts(false);
    }
  };

 

  return (
    <div onClick={closefathershorts}>
      <MyNavbar toggleflag={toggleflagshorts} togglefunc={togglefuncshorts} />
      <div ref={divshortsvideo} className=" w-full mt-[60px] justify-center items-center flex flex-col gap-16 pb-5">
        <ShowVideoShorts />
        <ShowVideoShorts />
        <ShowVideoShorts />
        <ShowVideoShorts />
        <ShowVideoShorts />
      </div>
    </div>
  );
}

export default Shorts;
