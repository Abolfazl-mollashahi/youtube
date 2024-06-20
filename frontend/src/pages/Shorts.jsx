import MyNavbar from "../components/MyNavbar";
import { useEffect, useRef, useState } from "react";
import ShowVideoShorts from "../components/ShowVideoShorts";

function Shorts() {

  const db = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  const [toggleflagshorts, settoggleflagshorts] = useState(false);
  const divshortsvideo = useRef({});

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
    <>
      <div onClick={closefathershorts} className=" relative h-screen ">
        <MyNavbar toggleflag={toggleflagshorts} togglefunc={togglefuncshorts} />
        <div
          ref={divshortsvideo}
          className=" w-full mt-[50px] relative justify-center items-center flex flex-col  pt-10  bg overflow-scroll overflow-x-hidden "
        >
          <div className="flex  flex-col gap-10 ">
            {db.map((short, index) => (
              <ShowVideoShorts key={index} list={short} />
            ))}
            <div className=" z-20 fixed w-[65px] h-[150px] flex flex-col justify-center items-center gap-2 bottom-[40%] top-[40%] right-2 text-white">
              <button className=" w-[65px] h-[65px]  mask mask-hexagon bg-violet-700 ">
                prev
              </button>
              <button className=" w-[65px] h-[65px]  mask mask-hexagon bg-violet-700 ">
                next
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Shorts;
