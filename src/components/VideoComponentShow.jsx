import { useEffect, useRef, useState } from "react";
import tstvideo from "../assets/videos/video.mp4";
import { CiLogin, CiMenuKebab } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import { useVideo } from "../utils/useVideo";

function VideoComponentShow({ Wvideo , Hvideo,classvideo,classdiv,classdivchild }) {
  const [menuit, setmenuit] = useState(false);
  const btnm = useRef({});
  const divmen = useRef({});
  const [ videoelem,mute,totaltime,currenttime,VideoMousMove,VideoMousLeav,mutefunc,updateTimes,loadedData ] = useVideo()


  const menufunc = (e) => {
    if (btnm.current.contains(e.target) || divmen.current.contains(e.target)) {
      setmenuit(true);
    } else {
      setmenuit(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", menufunc);
    return () => {
      document.removeEventListener("click", menufunc);
    };
  }, []);


  return (
    <div className={` ${ classdiv ? classdiv : `w-full flex gap-1 relative father `} `}>
      <NavLink to={`/video/2`} className=" w-max relative">
        <video
        ref={videoelem}
        onMouseMove={VideoMousMove}
        onMouseLeave={VideoMousLeav}
        onLoadedData={loadedData}
          className={` ${ classvideo ? classvideo : ` w-[${Wvideo}] h-[${Hvideo}] object-cover rounded-lg  border border-t-0  bg  ` } `}
          src={tstvideo}
        >
        </video>
          <span className=" w-max absolute  bottom-1 right-1 px-1 rounded-lg bg-[#251515bb] text-white">{totaltime}</span>
      </NavLink>
      <div className={` ${ classdivchild ? classdivchild : `flex flex-col gap-1 `}`}>
        <NavLink to={`/video/2`}>
          <span className=" text-[15px]">Lorem, ipsum dolor sit amet</span>
        </NavLink>
        <NavLink to={`/profile/id`} className="flex flex-col gap-1">
          <span className=" text-[12px]">name acant</span>
          <span className=" text-[12px]">130K views . 1 weeks ago</span>
        </NavLink>
      </div>
      <button
        ref={btnm}
        onClick={menufunc}
        className=" bmenu w-[35px] h-[35px] child justify-center items-center rounded-full hover:bg-gray-300 border  bg dark:hover:bg-violet-950 "
      >
        <CiMenuKebab />
      </button>
      <div
        ref={divmen}
        className={` ${
          menuit ? "flex" : "hidden"
        } w-[200px]f h-max absolute z-[3] top-10 right-0 flex-col gap-2 p-2 border  bg rounded-xl `}
      >
        <button className="px-2 py-0.5 flex gap-1 items-center rounded-lg hover:bg-gray-200 dark:hover:bg-violet-950">
          Add to queue
        </button>
        <button className="px-2 py-0.5 flex gap-1 items-center rounded-lg hover:bg-gray-200 dark:hover:bg-violet-950">
          Save to Watch later
        </button>
        <button className="px-2 py-0.5 flex gap-1 items-center rounded-lg hover:bg-gray-200 dark:hover:bg-violet-950">
          Save tpo playlist
        </button>
        <button className="px-2 py-0.5 flex gap-1 items-center rounded-lg hover:bg-gray-200 dark:hover:bg-violet-950">
          Download
        </button>
        <button className="px-2 py-0.5 flex gap-1 items-center rounded-lg hover:bg-gray-200 dark:hover:bg-violet-950">
          Share
        </button>
        <button className="px-2 py-0.5 flex gap-1 items-center rounded-lg hover:bg-gray-200 dark:hover:bg-violet-950">
          Not interested
        </button>
        <button className="px-2 py-0.5 flex gap-1 items-center rounded-lg hover:bg-gray-200 dark:hover:bg-violet-950">
          Dont recommend channel
        </button>
        <button className="px-2 py-0.5 flex gap-1 items-center rounded-lg hover:bg-gray-200 dark:hover:bg-violet-950">
          Report
        </button>
      </div>
    </div>
  );
}

export default VideoComponentShow;
