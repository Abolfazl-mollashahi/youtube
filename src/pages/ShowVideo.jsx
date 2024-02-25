import tstvideo from "../assets/videos/video.mp4";
import imgreact from "../assets/react.svg";
import { NavLink } from "react-router-dom";
import { IoPlayOutline } from "react-icons/io5";
import { GoUnmute } from "react-icons/go";
import { GoMute } from "react-icons/go";
import { TbPlayerPause } from "react-icons/tb";
import { SlLike } from "react-icons/sl";
import { MdFullscreen } from "react-icons/md";
import { MdFullscreenExit } from "react-icons/md";
import { CgLogIn, CgPlayTrackPrev } from "react-icons/cg";
import { CgMiniPlayer } from "react-icons/cg";
import { SlDislike } from "react-icons/sl";
import { RiShareForwardFill } from "react-icons/ri";
import { CiMenuKebab } from "react-icons/ci";
import { useEffect, useRef, useState } from "react";
import VideoComponentShow from "../components/VideoComponentShow";
import { useVideo } from "../utils/useVideo";
import Comments from "../components/Comments";
import MyNavbar from "../components/MyNavbar";

function ShowVideo() {
  const [menuitemvid, setmenuitemvid] = useState(false);
  const btnmenvideo = useRef({});
  const divmenvideo = useRef({});
  const spanplayvideo = useRef({});
  const speedbtn = useRef({});
  let dbvideos = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  const [
    videoelem,
    mute,
    totaltime,
    currenttime,
    VideoMousMove,
    VideoMousLeav,
    mutefunc,
    updateTimes,
    loadedData,
  ] = useVideo();

  const listcoments2 = [
    {
      id: 1,
      imgprof: imgreact,
      user: "@abolfzl-1",
      textcoment: "tstcoment-1",
      comentlike: 10,
      comentdislike: 50,
      date: "1 months ago",
      replys: [],
    },
    {
      id: 2,
      imgprof: imgreact,
      user: "@abolfzl-2",
      textcoment: "tstcoment-2",
      comentlike: 45,
      comentdislike: 3,
      date: "2 months ago",
      replys: [],
    },
    {
      id: 3,
      imgprof: imgreact,
      user: "@abolfzl-3",
      textcoment: "tstcoment-3",
      comentlike: 23,
      comentdislike: 30,
      date: "3 months ago",
      replys: [],
    },
    {
      id: 4,
      imgprof: imgreact,
      user: "@abolfzl-4",
      textcoment: "tstcoment-4",
      comentlike: 98,
      comentdislike: 5,
      date: "4 months ago",
      replys: [],
    },
    {
      id: 5,
      imgprof: imgreact,
      user: "@abolfzl-5",
      textcoment: "tstcoment-5",
      comentlike: 21,
      comentdislike: 32,
      date: "5 months ago",
      replys: [],
    },
    {
      id: 6,
      imgprof: imgreact,
      user: "@abolfzl-6",
      textcoment: "tstcoment-6",
      comentlike: 90,
      comentdislike: 45,
      date: "6 months ago",
      replys: [],
    },
    {
      id: 7,
      imgprof: imgreact,
      user: "@abolfzl-7",
      textcoment: "tstcoment-7",
      comentlike: 130,
      comentdislike: 12,
      date: "7 months ago",
      replys: [],
    },
    {
      id: 8,
      imgprof: imgreact,
      user: "@abolfzl-8",
      textcoment: "tstcoment-8",
      comentlike: 40,
      comentdislike: 39,
      date: "8 months ago",
      replys: [],
    },
    {
      id: 9,
      imgprof: imgreact,
      user: "@abolfzl-9",
      textcoment: "tstcoment-9",
      comentlike: 120,
      comentdislike: 2,
      date: "9 months ago",
      replys: [],
    },
    {
      id: 10,
      imgprof: imgreact,
      user: "@abolfzl-10",
      textcoment: "tstcoment-10",
      comentlike: 730,
      comentdislike: 8,
      date: "10 months ago",
      replys: [],
    },
    {
      id: 11,
      imgprof: imgreact,
      user: "@abolfzl-11",
      textcoment: "tstcoment-11",
      comentlike: 260,
      comentdislike: 26,
      date: "11 months ago",
      replys: [],
    },
    {
      id: 12,
      imgprof: imgreact,
      user: "@abolfzl-12",
      textcoment: "tstcoment-12",
      comentlike: 430,
      comentdislike: 16,
      date: "12 months ago",
      replys: [],
    },
  ];
  const [flagplay, setflagplay] = useState(false);
  const [flagmute, setflagmute] = useState(false);
  const [toggleflag, settoggleflag] = useState(false);
  const [flagminivideo, setflagminivideo] = useState(false);
  const [fullscreen, setfullscreen] = useState(false);
  const [speedvideo, setspeedvideo] = useState(1);

  const btnmenu = (e) => {
    if (
      btnmenvideo.current.contains(e.target) ||
      divmenvideo.current.contains(e.target)
    ) {
      setmenuitemvid(true);
    } else {
      setmenuitemvid(false);
    }
  };
  // هنوکارداره
  const funcvideo = (e) => {
    e.stopPropagation();
    if (
      e.target == videoelem.current
      // spanplayvideo.current.contains(e.target)
      // e.stopPropagation() === undefined
    ) {
      if (flagplay) {
        videoelem.current.play();
      } else {
        videoelem.current.pause();
      }
      console.log(e.stopPropagation());
      setflagplay(!flagplay);
    }
    console.log("kkk");
  };

  const funcmutevideo = () => {
    videoelem.current.muted = !videoelem.current.muted;
    setflagmute(!flagmute);
  };

  const FuncMiniVideo = () => {
    if (flagminivideo) {
      window.document.exitPictureInPicture();
    }
    videoelem.current.requestPictureInPicture();
    setflagminivideo(!flagminivideo);
  };
  const FuncFullScreenVideo = () => {
    if (document.fullscreenElement == null) {
      videoelem.current.requestFullscreen();
    } else {
      videoelem.current.exitFullscreen();
    }
  };

  // speed-btn
  const speedBtn = () => {
    if (speedvideo >= 2) {
      videoelem.current.playbackRate = 1;
      setspeedvideo(1);
    } else {
      setspeedvideo((videoelem.current.playbackRate += 0.25));
    }
  };

  useEffect(() => {
    document.addEventListener("click", btnmenu);
    document.addEventListener("fullscreenchange", () => {
      videoelem.current.classList.toggle(
        "fullscreen",
        document.fullscreenElement
      );
    });

    return () => {
      document.removeEventListener("click", btnmenu);
    };
  }, []);

  const togglefunc = () => {
    if (toggleflag) {
      settoggleflag(false);
      divcontiner.current.style.marginLeft = "0px";
      divslidername.current.style.marginLeft = "0px";
      divslidername.current.style.paddingRight = "0px";
    } else {
      settoggleflag(true);
      divcontiner.current.style.marginLeft = "150px";
      divslidername.current.style.marginLeft = "150px";
    }
  };

  const closefather = () => {
    if (toggleflag) {
      settoggleflag(false);
      divcontiner.current.style.marginLeft = "0px";
      divslidername.current.style.marginLeft = "0px";
      divslidername.current.style.paddingRight = "0px";
    }
  };

  return (
    <div onClick={closefather}>
      <MyNavbar
        toggleflag={toggleflag}
        settoggleflag={settoggleflag}
        togglefunc={togglefunc}
        flagpagevideo={false}
      />
      <div className=" w-full p-2 h-max mt-14 flex flex-col gap-2 lg:flex-row items-start">
        {/* left */}
        <div className="w-full h-max p-1 flex flex-col gap-4 ">
          <div className=" relative h-[300px] sm:w-[600px] sm:h-[400px]  md:h-[450px] md:w-[100%] lg:w-[100%] mx-auto lg:h-[500px] rounded-3xl hover:rounded-lg overflow-hidden ">
            {/* div-video-asly */}
            <div
              onClick={(e) => funcvideo(e)}
              className=" !w-full !h-full hiddene flex items-center justify-center bg-red-600 z-[2]  "
            >
              {/* time-line */}
              <div className="timeline-container w-full h-[7px] z-[4] bottom-32 absolute flex items-center cursor-pointer">
                <img className="thumbnail-img " src="" alt="" />
                <div className="timeline h-[3px] w-[100%] relative bg-[#5d5b5b70]">
                  <img className="preview-img" alt="" />
                  <div className="thumb-indicator"></div>
                </div>
              </div>

              <video
                autoPlay
                ref={videoelem}
                onTimeUpdate={updateTimes}
                onLoadedData={loadedData}
                className="video !w-full !h-full object-cover z-[2] "
                src={tstvideo}
              ></video>
              {flagplay ? (
                <span className="z-[3] absolute bg-[#0000005b] animate-pulse text-white rounded-full ">
                  <IoPlayOutline size={65} />
                </span>
              ) : (
                <span className="z-[3] opacity-0 absolute bg-[#0000005b] animate-play text-white rounded-full ">
                  <TbPlayerPause size={65} />
                </span>
              )}
              {/* btn-video */}
              <div className=" w-full flex gap-2 justify-between px-5 h-[40px] items-center text-white bg-red-950 absolute  bottom-1 left-0 z-[3]">
                {/* left */}
                <div className="flex gap-3 items-center">
                  <span
                    ref={spanplayvideo}
                    onClick={(e) => funcvideo(e)}
                    className=" cursor-pointer pointer-events-auto z-[3] "
                  >
                    {flagplay ? (
                      <IoPlayOutline size={30} />
                    ) : (
                      <TbPlayerPause size={30} />
                    )}
                  </span>
                  <span className="cursor-pointer rotate-180">
                    <CgPlayTrackPrev size={30} />
                  </span>
                  <span className=" cursor-pointer flex gap-1 father">
                    {flagmute ? (
                      <GoMute onClick={funcmutevideo} size={30} />
                    ) : (
                      <GoUnmute onClick={funcmutevideo} size={30} />
                    )}
                    <input
                      className=" children w-[100px] origin-left "
                      type="range"
                      name=""
                      min={`0`}
                      max={`5`}
                      id=""
                    />
                  </span>
                  <span className=" cursor-default flex gap-2 items-center ">
                    {currenttime} / {totaltime}
                  </span>
                </div>
                {/* right */}
                <div className="flex gap-3 items-center">
                  <span className=" cursor-pointer">
                    <CgMiniPlayer onClick={FuncMiniVideo} size={30} />
                  </span>
                  {/* speed-btn */}
                  <span
                    ref={speedbtn}
                    onClick={speedBtn}
                    className=" w-[45px] text-center text-[20px] cursor-pointer"
                  >
                    {speedvideo + "x"}
                  </span>
                  <span className=" cursor-pointer">
                    {fullscreen ? (
                      <MdFullscreenExit
                        onClick={FuncFullScreenVideo}
                        size={30}
                      />
                    ) : (
                      <MdFullscreen onClick={FuncFullScreenVideo} size={30} />
                    )}
                  </span>
                </div>
              </div>
            </div>
            {/* <div className=" !w-full !h-full bg-green-700">
            <video autoPlay ref={videoelem} onTimeUpdate={updateTimes} onMouseMove={VideoMousMove} onLoadedData={loadedData} onMouseLeave={VideoMousLeav} className=" !w-full !h-full object-cover " src={tstvideo}></video>
            </div> */}
          </div>
          <h3 className=" pl-2 text-[20px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <div className="w-full flex flex-col gap-2 md:px-1 md:flex-row">
            {/* img-prof & btn sub */}
            <div className=" w-full flex items-center gap-5">
              <img
                className=" w-[50px] h-[50px]  rounded-full"
                src={imgreact}
                alt=""
              />
              <div className="text-black flex flex-col">
                <NavLink className=" text-[19px]" to={`/profile/id`}>
                  abolfazl-tst
                </NavLink>
                <span className=" text-[13px]">900k Subscribe</span>
              </div>
              <button
                className={` ${
                  false ? " bg-[#25232385] text-white" : " bg-yellow-50"
                } px-2 py-1  rounded-2xl `}
              >
                Subscribe
              </button>
            </div>
            {/* btns */}
            <div className=" px-2 flex gap-4 h-[40px] relative items-center justify-end">
              <div className="flex items-center h-full bg-gray-300 overflow-hidden rounded-full">
                <button className=" w-[80px] h-full  flex gap-3 justify-center items-center hover:bg-gray-200">
                  <SlLike /> 3.5K
                </button>
                <button className=" w-[40px] h-full flex justify-center items-center bg-gray-300 hover:bg-gray-200">
                  <SlDislike />
                </button>
              </div>
              <button className=" w-[100px] h-full flex gap-3 justify-center items-center rounded-full bg-gray-300 hover:bg-gray-200">
                <RiShareForwardFill /> Share
              </button>
              <button className=" w-[100px] h-full lg:hidden xl:flex flex gap-3 justify-center items-center rounded-full bg-gray-300 hover:bg-gray-200">
                Download
              </button>
              <button
                ref={btnmenvideo}
                onClick={btnmenu}
                className=" w-[40px] h-[40px] flex justify-center items-center bg-gray-300 hover:bg-gray-200 rounded-full"
              >
                <CiMenuKebab />
              </button>

              {/* menu-hidden */}
              <div
                ref={divmenvideo}
                className={`${
                  menuitemvid ? "flex" : "hidden"
                } w-[100px] absolute top-12 p-2 right-0 h-max bg-gray-100 gap-2 flex-col  rounded-xl `}
              >
                <button className=" px-2 py-1 flex  gap-1 items-center rounded-lg hover:bg-gray-200">
                  Clip
                </button>
                <button className=" px-2 py-1 flex  gap-1 items-center rounded-lg hover:bg-gray-200">
                  Save
                </button>
                <button className=" px-2 py-1 flex  gap-1 items-center rounded-lg hover:bg-gray-200">
                  Report
                </button>
              </div>
            </div>
          </div>
          {/* date-views video */}
          <div className="flex gap-2 items-center pl-5">
            <p>
              <span>89K</span> views {flagplay ? 1 : 0}
            </p>
            <p>
              <span>1</span> year ago
            </p>
          </div>

          {/* div-coments */}
          <div className="p-3">
            <div className=" w-[300px] h-[30px] flex">
              <p className=" text-[17px]">
                <span>{listcoments2.length}</span> Cooments
              </p>
            </div>
            {listcoments2.map((item) => (
              <Comments key={item.id} coment={item} />
            ))}
          </div>
        </div>

        {/* right */}
        <div className="w-full lg:w-3/6 h-max p-2 flex flex-col ">
          {/* tabliqh */}
          <div className=" w-full h-[140px] bg-green-300 flex flex-col justify-center rounded-xl">
            <div className="flex gap-3 justify-center items-center">
              <img
                className=" w-[50px] h-[50px] bg-red-500 rounded-full"
                src={imgreact}
                alt=""
              />
              <div className="flex flex-col gap-1">
                <span>Find Your Match</span>
                <span>
                  Sponsored .{" "}
                  <span className=" text-gray-300">www.target.com/b/maul</span>
                </span>
              </div>
              <button className=" px-2 py-2 bg-blue-600 text-white rounded-full">
                Shop new
              </button>
            </div>
          </div>

          <div className=" text-center">
            <p>slider name</p>
          </div>

          {/* videos */}
          <div className=" flex flex-col gap-2">
            {dbvideos.map((item) => (
              <VideoComponentShow key={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowVideo;
