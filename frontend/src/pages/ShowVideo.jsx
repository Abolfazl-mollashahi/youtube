import video1 from "../assets/videos/video1.mp4";
import video2 from "../assets/videos/video2.mp4";
import video3 from "../assets/videos/video3.mp4";
import tstvideotablig from "../assets/videos/tablig-3.mp4";
import personimg from "../assets/person.jpg";
import { NavLink, useParams } from "react-router-dom";
import { IoPlayOutline } from "react-icons/io5";
import { GoUnmute, GoMute } from "react-icons/go";
import { TbPlayerPause } from "react-icons/tb";
import { SlLike, SlDislike } from "react-icons/sl";
import { MdFullscreen, MdFullscreenExit } from "react-icons/md";
import { CgLogIn, CgPlayTrackPrev, CgMiniPlayer } from "react-icons/cg";
import { LuChevronRight } from "react-icons/lu";
import { RiShareForwardFill } from "react-icons/ri";
import { CiMenuKebab } from "react-icons/ci";
import { useEffect, useRef, useState } from "react";
import VideoComponentShow from "../components/VideoComponentShow";
import { useVideo } from "../utils/useVideo";
import Comments from "../components/Comments";
import MyNavbar from "../components/MyNavbar";
import { useMediaQuery } from "react-responsive";

function ShowVideo() {
  const [menuitemvid, setmenuitemvid] = useState(false);
  const btnmenvideo = useRef({});
  const divmenvideo = useRef({});
  const spanplayvideo = useRef({});
  const speedbtn = useRef({});
  let dbvideos = [
    { id: 1, src: video1 },
    { id: 2, src: video2 },
    { id: 3, src: video3 },
    { id: 4, src: video1 },
    { id: 5, src: video2 },
    { id: 6, src: video3 },
    { id: 7, src: video1 },
    { id: 8, src: video2 },
    { id: 9, src: video3 },
    { id: 10, src: video1 },
    { id: 11, src: video2 },
    { id: 12, src: video3 },
    { id: 13, src: video1 },
    { id: 14, src: video2 },
    { id: 15, src: video3 },
    { id: 16, src: video1 },
    { id: 17, src: video2 },
    { id: 18, src: video3 },
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

  const route = useParams();
// console.log(route.id);
  const [flagplay, setflagplay] = useState(true);
  const [flagmute, setflagmute] = useState(false);
  const [toggleflag, settoggleflag] = useState(false);
  const [flagminivideo, setflagminivideo] = useState(false);
  const [fullscreen, setfullscreen] = useState(false);
  const [speedvideo, setspeedvideo] = useState(1);
  const [currenttimevideo, setcurrenttimevideo] = useState(() => currenttime);
  const [tabligat, settabligat] = useState(false);
  const [flagVideosUsers, setFlagVideosUsers] = useState(false);
  const [sum, setsum] = useState(7);
  const btnsendvideo = useRef({});
  const divslidername = useRef({});
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const isTabletOrLarger = useMediaQuery({ query: "(min-width: 768px)" });

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

  const secend = () => {
    setInterval(() => {
      setsum((per) => {
        if (per >= 7) {
          clearInterval();
          return per;
        }
        return per + 1;
      });
    }, 1000);
  };

  // هنوکارداره
  const funcvideo = (e) => {
    if (flagVideosUsers) {
      setFlagVideosUsers(false);
    }
    e.stopPropagation();
    // CloseAndShowBtnSendVideo()
    // console.log('333');
    if (flagplay) {
      videoelem.current.pause();
      setflagplay(false);
    } else {
      setflagplay(true);
      videoelem.current.play();
    }
  };

  // play video tabligh
  const funcvideotab = (e) => {
    e.stopPropagation();
    if (flagplay) {
      videoelemtablig.current.pause();
      setflagplay(false);
    } else {
      secend();
      setflagplay(true);
      videoelemtablig.current.play();
    }
  };

  const funcmutevideo = (e) => {
    // e.stopPropagation();
    // videoelem.current.muted = !videoelem.current.muted;
    mutefunc();
    setflagmute(!flagmute);
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

// const closevideoshowtabligh =()=>{
//   setflagplay(true); 
//   settabligat(true);
//   videoelem.current.pause();
// }

  useEffect(() => {
    secend();
    document.addEventListener("click", btnmenu);
    const div_btns = document.getElementById("btns");
    document.addEventListener("fullscreenchange", () => {});

    videoelem.current.src = dbvideos[route.id - 1].src
    
    // const timer = setTimeout(() => {
    //   console.log('1');
    //   console.log(Math.floor(videoelem.current.currentTime), "ctime-1");
    //   closevideoshowtabligh()
    // }, 10000);
      
      
      return () => {
        // clearTimeout(timer)
      
      
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
    settabligat(false);
    videoelem.current.play();
    // // console.log(Math.ceil(videoelem.current.currentTime),'eee');
    // if (Math.ceil(videoelem.current.currentTime) >= 10) {
    //   setTimeout(()=>{
    //     console.log('2');
    //     closevideoshowtabligh();
    //   },10000)
    //   console.log("totall",totaltime, "cur",currenttime);
    // }
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
          {/* div-video and tabligh */}
          <div className=" relative  w-full  divs h-[300px] sm:w-[600px] sm:h-[400px]  md:h-[450px] md:w-[100%] lg:w-[100%] mx-auto lg:h-[500px] rounded-3xl hover:rounded-2xl overflow-hidden shadow-lg shadow-black">
            <>
              {/* //  div-video */}
              <div className=" relative w-full h-full ">
                <div
                  className=" div-video cursor-pointer relative w-full h-full flex items-center justify-center "
                  onClick={(e) => funcvideo(e)}
                >
                  <video
                    autoPlay
                    // onPlay={()=>funcvideo}
                    ref={videoelem}
                    onTimeUpdate={updateTimes}
                    onLoadedData={loadedData}
                    onEnded={() => {
                      setFlagVideosUsers(true);
                    }}
                    className="video w-full h-full object-fill z-[2] "
                    // src={}
                  ></video>

                  {/* icon-play */}
                  {flagplay ? (
                    <span className=" z-[3] p-2 opacity-0 absolute bg-[#0000005b] animate-play text-white  mask mask-hexagon ">
                      <TbPlayerPause size={60} className="" />
                    </span>
                  ) : (
                    <span className="z-[3] p-1.5 cursor-pointer  absolute bg-[#0000005b] animate-pulse text-white rounded-full  mask mask-hexagon ">
                      <IoPlayOutline size={65} className=" translate-x-1" />
                    </span>
                  )}
                </div>
                {/* btns-video */}
                <div
                  id="btns"
                  className=" w-full flex gap-2 justify-between px-5 pb-2 h-[80px] items-end text-white absolute  bottom-0 left-0 z-[5] "
                >
                  {/* left */}
                  <div className="flex gap-3 items-center pointer-events-none">
                    <span
                      ref={spanplayvideo}
                      onClick={(e) => funcvideo(e)}
                      className=" cursor-pointer pointer-events-auto z-[3] "
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
                    <span
                      onClick={(e) => funcmutevideo(e)}
                      className=" cursor-pointer flex gap-1 father pointer-events-auto"
                    >
                      {flagmute ? <GoMute size={30} /> : <GoUnmute size={30} />}
                    </span>
                    <span className=" text-[15px] select-none  flex gap-2 items-center ">
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
                      className=" w-[45px] text-center select-none  text-[20px] cursor-pointer"
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

                {/* VideosUsers */}
                {flagVideosUsers && (
                  <div
                    className={` ${
                      flagVideosUsers ? " absolute  " : "hidden"
                    }  w-full h-full bottom-0 left-0  z-[5] grid grid-cols-1 md:grid-cols-3 justify-center items-center `}
                  >
                    {isMobile &&
                      dbvideos.slice(0, 1).map((video, index) => (
                        <div
                          key={index}
                          className={` z-[6] w-[280px] mx-auto h-[180px] rounded-xl overflow-hidden shadow-md shadow-black bg-[#291051ab] `}
                        >
                          <video
                            className="w-full h-[150px] object-cover rounded-xl"
                            src={video1}
                          ></video>
                          <p className="px-1">text-video {index + 1}</p>
                        </div>
                      ))}

                    {isTabletOrLarger &&
                      dbvideos.slice(0, 6).map((video, index) => (
                        <div
                          key={index}
                          className={` z-[6] w-[280px] mx-auto h-[180px] md:w-[200px] md:h-[150px] xl:w-[260px] xl:h-[180px]  rounded-xl overflow-hidden shadow-md shadow-black bg-[#291051ab] `}
                        >
                          <video
                            className="w-full h-[150px] md:h-[120px] xl:h-[150px]  object-cover rounded-xl"
                            src={video1}
                          ></video>
                          <p className="px-1">text-video {index + 1}</p>
                        </div>
                      ))}
                  </div>
                )}
              </div>
            </>
            {tabligat && (
              // div-tablig
              <div className=" w-full h-full  absolute z-[10] left-0  top-0">
                <div
                  onClick={(e) => funcvideotab(e)}
                  className="  bg-[#000000d4] cursor-pointer z-[15]  relative w-full h-full flex items-center justify-center "
                >
                  <video
                    ref={videoelemtablig}
                    autoPlay
                    onTimeUpdate={updateTimestablig}
                    onLoadedData={loadedDatatablig}
                    onEnded={() => settabligat(true)}
                    className="video  w-full h-full  object-cover "
                    src={tstvideotablig}
                  ></video>

                  {/* icon-play */}
                  {flagplay ? (
                    <span className="z-[3] p-2 opacity-0 absolute bg-[#0000005b] animate-play text-white  mask mask-hexagon ">
                      <TbPlayerPause size={60} className="" />
                    </span>
                  ) : (
                    <span className="z-[3] p-1.5 cursor-pointer absolute bg-[#0000005b] animate-pulse text-white rounded-full  mask mask-hexagon ">
                      <IoPlayOutline size={65} className=" translate-x-1" />
                    </span>
                  )}

                  <div className=" w-full h-[70px] z-[]  text-white absolute px-10 bottom-0 left-0 flex justify-between items-center pointer-events-none ">
                    <span className=" bg-[#00000088] px-1.5 rounded-lg">
                      {currenttimetablig} / {totaltimetablig}
                    </span>
                    <button
                      disabled={sum === 7 ? false : true}
                      className={` flex gap-2 items-center justify-center px-2 py-1 rounded-2xl transition-colorsk pointer-events-auto  ${
                        sum === 7
                          ? "bg-violet-950 hover:bg-violet-900"
                          : "bg-violet-400 hover:bg-gray-900"
                      }`}
                      onClick={exittabligatfunc}
                    >
                      Send
                      <LuChevronRight size={20} />
                      <p
                        className={` z-50  text-white  w-[30px] h-[30px] flex justify-center items-center  mask mask-hexagon-2 ${
                          sum === 7 ? "bg-green-700" : "bg-red-700"
                        }`}
                      >
                        {sum}s
                      </p>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* desc-video */}
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
          <div className=" w-full my-1 p-2  h-[140px] flex flex-col justify-center rounded-xl bg-green-600 dark:bg-violet-950">
            <div className="flex gap-2 justify-center items-center">
              <img
                className=" w-[50px] h-[50px]  rounded-full"
                src={personimg}
                alt=""
              />
              <div className="w-full text-[12px] lg:text-[15px]  flex flex-col gap-1 ">
                <span>Find Your Match</span>
                <span>
                  Sponsored .{" "}
                  <span className=" text-gray-300">www.target.com/b/maul</span>
                </span>
              </div>
              <button className=" w-[100px] h-[30px] text-nowrap p-1  bg-blue-600 text-white rounded-full">
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
            {dbvideos.map((item, index) => (
              <VideoComponentShow
                Wvideo={`170px`}
                Hvideo={`100px`}
                key={index}
                item={item}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowVideo;
