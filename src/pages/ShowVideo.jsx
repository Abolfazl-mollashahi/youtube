import tstvideo from "../assets/videos/video.mp4";
import tstvideotablig from "../assets/videos/tablig-3.mp4";
import personimg from '../assets/person.jpg'
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
import { LuChevronRight } from "react-icons/lu";
import { SlDislike } from "react-icons/sl";
import { RiShareForwardFill } from "react-icons/ri";
import { CiMenuKebab } from "react-icons/ci";
import { useEffect, useRef, useState } from "react";
import VideoComponentShow from "../components/VideoComponentShow";
import { useVideo } from "../utils/useVideo";
import Comments from "../components/Comments";
import MyNavbar from "../components/MyNavbar";
import SliderName from "../components/SliderName";

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
  const [
    videoelemtablig,
    mutetablig,
    totaltimetablig,
    currenttimetablig,
    VideoMousMovetablig,
    VideoMousLeavtablig,
    mutefunctablig,
    updateTimestablig,
    loadedDatatablig,
  ] = useVideo();

  const listcoments2 = [
    {
      id: 1,
      imgprof: personimg,
      user: "@abolfzl-1",
      textcoment: "tstcoment-1",
      comentlike: 10,
      comentdislike: 50,
      date: "1 months ago",
      replys: [],
    },
    {
      id: 2,
      imgprof: personimg,
      user: "@abolfzl-2",
      textcoment: "tstcoment-2",
      comentlike: 45,
      comentdislike: 3,
      date: "2 months ago",
      replys: [],
    },
    {
      id: 3,
      imgprof: personimg,
      user: "@abolfzl-3",
      textcoment: "tstcoment-3",
      comentlike: 23,
      comentdislike: 30,
      date: "3 months ago",
      replys: [],
    },
    {
      id: 4,
      imgprof: personimg,
      user: "@abolfzl-4",
      textcoment: "tstcoment-4",
      comentlike: 98,
      comentdislike: 5,
      date: "4 months ago",
      replys: [],
    },
    {
      id: 5,
      imgprof: personimg,
      user: "@abolfzl-5",
      textcoment: "tstcoment-5",
      comentlike: 21,
      comentdislike: 32,
      date: "5 months ago",
      replys: [],
    },
    {
      id: 6,
      imgprof: personimg,
      user: "@abolfzl-6",
      textcoment: "tstcoment-6",
      comentlike: 90,
      comentdislike: 45,
      date: "6 months ago",
      replys: [],
    },
    {
      id: 7,
      imgprof: personimg,
      user: "@abolfzl-7",
      textcoment: "tstcoment-7",
      comentlike: 130,
      comentdislike: 12,
      date: "7 months ago",
      replys: [],
    },
    {
      id: 8,
      imgprof: personimg,
      user: "@abolfzl-8",
      textcoment: "tstcoment-8",
      comentlike: 40,
      comentdislike: 39,
      date: "8 months ago",
      replys: [],
    },
    {
      id: 9,
      imgprof: personimg,
      user: "@abolfzl-9",
      textcoment: "tstcoment-9",
      comentlike: 120,
      comentdislike: 2,
      date: "9 months ago",
      replys: [],
    },
    {
      id: 10,
      imgprof: personimg,
      user: "@abolfzl-10",
      textcoment: "tstcoment-10",
      comentlike: 730,
      comentdislike: 8,
      date: "10 months ago",
      replys: [],
    },
    {
      id: 11,
      imgprof: personimg,
      user: "@abolfzl-11",
      textcoment: "tstcoment-11",
      comentlike: 260,
      comentdislike: 26,
      date: "11 months ago",
      replys: [],
    },
    {
      id: 12,
      imgprof: personimg,
      user: "@abolfzl-12",
      textcoment: "tstcoment-12",
      comentlike: 430,
      comentdislike: 16,
      date: "12 months ago",
      replys: [],
    },
  ];
  const [flagplay, setflagplay] = useState(true);
  const [flagmute, setflagmute] = useState(false);
  const [toggleflag, settoggleflag] = useState(false);
  const [flagminivideo, setflagminivideo] = useState(false);
  const [fullscreen, setfullscreen] = useState(false);
  const [speedvideo, setspeedvideo] = useState(1);
  const [tabligat, settabligat] = useState(false);
  const [timeshowbtn, settimeshowbtn] = useState(0);
  const divbtntablig = useRef({});
  const btnsendvideo = useRef({});
  const divslidername = useRef({});

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
    // console.log(e.target);
    // console.log("play");
    e.stopPropagation();

    // if (
    //   e.target == videoelem.current
    //   // spanplayvideo.current.contains(e.target)
    //   // e.stopPropagation() === undefined
    // ) {
    // };

    // console.log(currenttime == '');
    // if (currenttime == "") {
    if (flagplay) {
      videoelem.current.pause();
      setflagplay(false);
    } else {
      setflagplay(true);
      videoelem.current.play();
      
      // }
    }
    // CloseAndShowBtnSendVideo();
    //   // currenttime = newcurrenttime
    //   videoelem.current.play();
    // }
    // console.log(e.stopPropagation());
  };

  const funcmutevideo = (e) => {
    e.stopPropagation();
    videoelem.current.muted = !videoelem.current.muted;
    if (flagmute) {
      setflagmute(false);
    } else {
      setflagmute(true);
    }
  };

  // const funcmute =() =>{
  //   videoelem.current.play()
  //   console.log(videoelem.current);
  // }

  const FuncMiniVideo = (e) => {
    if (flagminivideo) {
      window.document.exitPictureInPicture();
    }
    videoelem.current.requestPictureInPicture();
    setflagminivideo(!flagminivideo);
  };

  const FuncFullScreenVideo = (e) => {
    e.preventDefault();
    // console.log(document.documentElement);
    if (document.fullscreenElement == null) {
      videoelem.current.requestFullscreen();
    } else {
      videoelem.current.exitFullscreen();
    }
  };

  // speed-btn
  const speedBtn = (e) => {
    e.stopPropagation();
    if (speedvideo >= 2) {
      videoelem.current.playbackRate = 1;
      setspeedvideo(1);
    } else {
      setspeedvideo((videoelem.current.playbackRate += 0.25));
    }
  };

  useEffect(() => {
    // if(videoelem.current){
    //   videoelem.current.preload = 'auto'
    //   // videoelem.current.buffered = true
    // }
    document.addEventListener("click", btnmenu);
    const div_btns = document.getElementById("btns");
    document.addEventListener("fullscreenchange", () => {
      // if(document.fullscreenElement){
      //   // videoelem.current.classList.toggle(
      //     //   "fullscreen",
      //     //   document.fullscreenElement
      //     // );
      //   }else{
      //   div_btns.style.display =
      // }
    });
    // let sum = 0;
    // if (sum == 6) {
    //   clearInterval()
    // }
    // setInterval(() => {
    //   sum++;
    //   // if (sum > 6) {
    //   //   sum = 0;
    //   // }
    //   settimeshowbtn(sum);
    // }, 1000);

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

  const exittabligatfunc = (e) => {
    e.stopPropagation();
    setflagplay(true);
    CloseAndShowBtnSendVideo();
    divbtntablig.current.style.display = "none";
    settabligat(true);
    setTimeout(() => {
      divbtntablig.current.style.display = "flex";
      CloseAndShowBtnSendVideo();
      setflagplay(true);
      settabligat(false);
    }, 8000);
  };

  const CloseAndShowBtnSendVideo = () => {
    setTimeout(() => {
      btnsendvideo.current.style.display = "flex";
    }, 6000);
    // let sum = 0;
    // setInterval(() => {
    //   sum++;
    //   if (sum > 6) {
    //     sum = 0;
    //   }
    //   settimeshowbtn(sum);
    // }, 1000);
  };

  return (
    <div onClick={closefather}>
      <MyNavbar
        toggleflag={toggleflag}
        settoggleflag={settoggleflag}
        togglefunc={togglefunc}
        flagpagevideo={false}
      />
      <div className=" w-full p-2 h-max pt-14 flex flex-col gap-2 lg:flex-row items-start   bg dark:text-white">
        {/* left */}
        <div className="w-full h-max p-1.5  flex flex-col gap-5 ">
          <div className=" relative divs h-[300px] sm:w-[600px] sm:h-[400px]  md:h-[450px] md:w-[100%] lg:w-[100%] mx-auto lg:h-[500px] rounded-3xl hover:rounded-lg overflow-hidden shadow-xl  md:shadow-2xl   shadow-violet-400">
            {/* div-video */}
            <div
              onClick={(e) => funcvideo(e)}
              className=" div-video relative w-full h-full flex items-center justify-center "
            >
              {/* time-line */}
              <div className="timeline-container w-full h-[7px] z-[4] bottom-[50px] absolute flex items-center cursor-pointer">
                <img className="thumbnail-img " src="" alt="" />
                <div className="timeline h-[3px] w-[100%] relative bg-[#5d5b5b70]">
                  <img className="preview-img" alt="" />
                  <div className="thumb-indicator"></div>
                </div>
              </div>

              {tabligat ? (
                <video
                  autoPlay
                  ref={videoelem}
                  onTimeUpdate={updateTimes}
                  onLoadedData={loadedData}
                  className="video w-full h-full object-cover z-[2] "
                  src={tstvideo}
                ></video>
              ) : (
                <video
                  autoPlay
                  ref={videoelem}
                  onTimeUpdate={updateTimes}
                  onLoadedData={loadedData}
                  className="video w-full h-full object-cover z-[2] "
                  src={tstvideotablig}
                ></video>
              )}

              {/* icon-play */}
              {flagplay ? (
                <span className="z-[3] opacity-0 absolute bg-[#0000005b] animate-play text-white rounded-full ">
                  <TbPlayerPause size={65} />
                </span>
              ) : (
                <span className="z-[3] absolute bg-[#0000005b] animate-pulse text-white rounded-full ">
                  <IoPlayOutline size={65} />
                </span>
              )}

              {/* btns-video */}
              <div
                id="btns"
                className=" w-full flex gap-2 justify-between px-5 pb-2 h-[80px] items-end text-white absolute  bottom-0 left-0 z-[5]  "
              >
                {/* left */}
                <div className="flex gap-3 items-center">
                  <span
                    ref={spanplayvideo}
                    onClick={(e) => funcvideo(e)}
                    className=" cursor-pointer pointer-events-none z-[3] "
                  >
                    {flagplay ? (
                      <TbPlayerPause size={30} />
                    ) : (
                      <IoPlayOutline size={30} />
                    )}
                  </span>

                  <span className="cursor-pointer rotate-180">
                    <CgPlayTrackPrev size={30} />
                  </span>
                  <span className=" cursor-pointer flex gap-1 father ">
                    {flagmute ? (
                      <GoMute onClick={(e) => funcmutevideo(e)} size={30} />
                    ) : (
                      <GoUnmute onClick={(e) => funcmutevideo(e)} size={30} />
                    )}
                  </span>
                  <span className=" text-[15px] cursor-default flex gap-2 items-center ">
                    {currenttime} {currenttime == 0 ? "" : "/"} {totaltime}
                  </span>
                </div>
                {/* right */}
                <div className="flex gap-3 items-center">
                  <span className=" cursor-pointer">
                    <CgMiniPlayer onClick={FuncMiniVideo} size={30} />
                  </span>
                  {/* speed-btn */}
                  <button
                    ref={speedbtn}
                    onClick={(e) => speedBtn(e)}
                    className=" w-[45px] text-center text-[20px] cursor-pointer"
                  >
                    {speedvideo + "x"}
                  </button>

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

              {/* div-btns-tablig */}
              <div
                ref={divbtntablig}
                className=" w-full h-[70px] z-[5] text-white absolute px-5 bottom-16 left-0 flex justify-end items-center"
              >
                <button
                  ref={btnsendvideo}
                  className=" flex gap-1 items-center justify-center px-3 py-1.5 rounded-2xl bg-gray-600 hover:bg-gray-950 hover:border transition-colors"
                  onClick={exittabligatfunc}
                >
                  Send <LuChevronRight size={20} />
                </button>
                <span>{timeshowbtn}</span>
              </div>
            </div>

            {/* div-tablig */}
            {/* <div className="  bg-[#000000d4] relative w-full h-full flex items-center justify-center ">
                <video
                  ref={videoelemtablig}
                  autoPlay
                  onTimeUpdate={updateTimestablig}
                  onLoadedData={loadedDatatablig}
                  className=" w-max h-full object-contain "
                  src="../src/assets/videos/tablig.mp4"
                ></video>
                <div className=" w-full h-[70px] text-white absolute px-10 bottom-10 left-0 flex justify-between items-center">
                  <span>{currenttimetablig} / {totaltimetablig}</span>
                  <button className=" flex gap-1 items-center justify-center px-2 py-1 rounded-2xl bg-gray-600 hover:bg-gray-900 transition-colors" onClick={exittabligatfunc}>Send <LuChevronRight size={20} /></button>
                </div>
              </div> */}

            {/* <div className=" !w-full !h-full bg-green-700">
            <video autoPlay ref={videoelem} onTimeUpdate={updateTimes} onMouseMove={VideoMousMove} onLoadedData={loadedData} onMouseLeave={VideoMousLeav} className=" !w-full !h-full object-cover " src={tstvideo}></video>
            </div> */}
          </div>
          <h3 className=" md:mt-5  pl-2 text-[20px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <div className="w-full flex flex-col gap-2 md:px-1 md:flex-row">
            {/* img-prof & btn sub */}
            <div className=" w-full flex items-center gap-5">
              <img
                className=" w-[50px] h-[50px]  rounded-full"
                src={personimg}
                alt=""
              />
              <div className="text-black dark:text-gray-300  flex flex-col">
                <NavLink className=" text-[19px]" to={`/profile/id`}>
                  abolfazl-tst
                </NavLink>
                <span className=" text-[13px]">900k Subscribe</span>
              </div>
              <button
                className={` ${
                  false ? " !bg-[#25232385] text-white" : ""
                } px-3 py-1.5 border  bg  rounded-2xl scale-100 hover:scale-90  shadow-md shadow-violet-600 `}
              >
                Subscribe
              </button>
            </div>
            {/* btns */}
            <div className=" px-2 flex gap-4 h-[40px] relative items-center justify-end">
              <div className="flex items-center  h-[40px] ">
                <button className=" w-[80px] h-full  flex gap-3 justify-center items-center border  bg dark:hover:bg-violet-950   hover:bg-gray-200 scale-100 hover:scale-90  shadow-md shadow-violet-600  rounded-l-full ">
                  <SlLike className=" text-green-700" /> 3.5k
                </button>
                <button className=" w-[40px] h-full flex justify-center items-center dark:ml-2  border  bg dark:hover:bg-violet-950  hover:bg-gray-200 scale-100 hover:scale-90  shadow-md shadow-violet-600  rounded-r-full ">
                  <SlDislike className=" text-red-700" />
                </button>
              </div>
              <button className=" w-[100px] h-full flex gap-3 justify-center items-center rounded-full border  bg dark:hover:bg-violet-950  hover:bg-gray-200 scale-100 hover:scale-90  shadow-md shadow-violet-600">
                <RiShareForwardFill /> Share
              </button>
              <button className=" w-[100px] h-full lg:hidden xl:flex flex gap-3 justify-center items-center rounded-full border  bg dark:hover:bg-violet-950   hover:bg-gray-200 scale-100 hover:scale-90  shadow-md shadow-violet-600">
                Download
              </button>
              <button
                ref={btnmenvideo}
                onClick={btnmenu}
                className=" w-[40px] h-[40px] flex justify-center items-center border  bg  hover:bg-gray-200 dark:hover:bg-violet-950 rounded-full scale-100 hover:scale-90  shadow-md shadow-violet-600"
              >
                <CiMenuKebab />
              </button>

              {/* menu-hidden */}
              <div
                ref={divmenvideo}
                className={`${
                  menuitemvid ? "flex" : "hidden"
                } w-[100px] absolute top-12 p-2 right-0 h-max border bg  gap-2 flex-col  rounded-xl `}
              >
                <button className=" px-2 py-1 flex  gap-1 items-center rounded-lg hover:bg-gray-200 dark:hover:bg-violet-950 ">
                  Clip
                </button>
                <button className=" px-2 py-1 flex  gap-1 items-center rounded-lg hover:bg-gray-200 dark:hover:bg-violet-950 ">
                  Save
                </button>
                <button className=" px-2 py-1 flex  gap-1 items-center rounded-lg hover:bg-gray-200 dark:hover:bg-violet-950 ">
                  Report
                </button>
              </div>
            </div>
          </div>
          {/* date-views video */}
          <div className="flex gap-2 items-center pl-5">
            <p>
              <span>89K</span> views
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
        <div className="w-full md:w-4/6  lg:w-3/6 mx-auto   h-max p-2 flex flex-col ">
          {/* tabliqh */}
          <div className=" w-full my-1  h-[140px] flex flex-col justify-center rounded-xl bg-green-600 dark:bg-violet-950">
            <div className="flex gap-3 justify-center items-center">
              <img
                className=" w-[50px] h-[50px]  rounded-full"
                src={personimg}
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

           {/* aslider name */}
           {/* <div
            // ref={divslidername}
            className={` w-full lg:w-6/6  h-[45px] flex justify-center items-center  rounded-xl `}
          >
            <SliderName  />
          </div> */}
          

          {/* <div className=" text-center">
            <p>slider name</p>
          </div> */}

          {/* videos */}
          <div className="mt-2 flex flex-col gap-3">
            {dbvideos.map((item) => (
              <VideoComponentShow
                Wvideo={`160px`}
                Hvideo={`100px`}
                key={item}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowVideo;
