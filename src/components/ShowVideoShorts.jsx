import { SlLike } from "react-icons/sl";
import { SlDislike } from "react-icons/sl";
import { MdComment } from "react-icons/md";
import { RiShareForwardFill } from "react-icons/ri";
import { CiMenuKebab } from "react-icons/ci";
import { IoPlayOutline } from "react-icons/io5";
import { GoUnmute } from "react-icons/go";
import { GoMute } from "react-icons/go";
import { TbPlayerPause } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import videoshorts from "../assets/videos/shorts.mp4";
import imgreact from "../assets/react.svg";
import { useEffect, useRef, useState } from "react";
import Comments from "./Comments";

function ShowVideoShorts() {
  const [likeflag, setlikeflag] = useState(false);
  const [shareflag, setshareflag] = useState(false);
  const [dislikeflag, setdislikeflag] = useState(false);
  const [menulitems, setmenulitems] = useState(false);
  const [showcomments, setshowcomments] = useState(false);
  const [videomeutflag, setvideomeutflag] = useState(false);
  const [videoplayflag, setvideoplayflag] = useState(false);
  const [likenumber, setlikenumber] = useState(435);
  const divshowmenu = useRef({});
  const btnmenuitem = useRef({});
  const videotag = useRef({});
  const sharelist = [
    { id: 1, name: "WhatsApp", ico: imgreact },
    { id: 2, name: "Facebook", ico: imgreact },
    { id: 3, name: "X", ico: imgreact },
    { id: 4, name: "Email", ico: imgreact },
    { id: 5, name: "Reddit", ico: imgreact },
    { id: 6, name: "6", ico: imgreact },
    { id: 7, name: "7", ico: imgreact },
    { id: 8, name: "8", ico: imgreact },
    { id: 9, name: "9", ico: imgreact },
  ];
  const listcoments = [
    {id:1, imgprof:imgreact , user:'@abolfzl-1', textcoment:'tstcoment-1' , comentlike:10,comentdislike:50 , date:'1 months ago',replys:[]},
    {id:2, imgprof:imgreact , user:'@abolfzl-2', textcoment:'tstcoment-2' , comentlike:45,comentdislike:3 , date:'2 months ago',replys:[]},
    {id:3, imgprof:imgreact , user:'@abolfzl-3', textcoment:'tstcoment-3' , comentlike:23,comentdislike:30 , date:'3 months ago',replys:[]},
    {id:4, imgprof:imgreact , user:'@abolfzl-4', textcoment:'tstcoment-4' , comentlike:98,comentdislike:5 , date:'4 months ago',replys:[]},
    {id:5, imgprof:imgreact , user:'@abolfzl-5', textcoment:'tstcoment-5' , comentlike:21,comentdislike:32 , date:'5 months ago',replys:[]},
    {id:6, imgprof:imgreact , user:'@abolfzl-6', textcoment:'tstcoment-6' , comentlike:90,comentdislike:45 , date:'6 months ago',replys:[]},
    {id:7, imgprof:imgreact , user:'@abolfzl-7', textcoment:'tstcoment-7' , comentlike:130,comentdislike:12 , date:'7 months ago',replys:[]},
    {id:8, imgprof:imgreact , user:'@abolfzl-8', textcoment:'tstcoment-8' , comentlike:40,comentdislike:39 , date:'8 months ago',replys:[]},
    {id:9, imgprof:imgreact , user:'@abolfzl-9', textcoment:'tstcoment-9' , comentlike:120,comentdislike:2 , date:'9 months ago',replys:[]},
    {id:10, imgprof:imgreact , user:'@abolfzl-10', textcoment:'tstcoment-10' , comentlike:730,comentdislike:8 , date:'10 months ago',replys:[]},
    {id:11, imgprof:imgreact , user:'@abolfzl-11', textcoment:'tstcoment-11' , comentlike:260,comentdislike:26 , date:'11 months ago',replys:[]},
    {id:12, imgprof:imgreact , user:'@abolfzl-12', textcoment:'tstcoment-12' , comentlike:430,comentdislike:16 , date:'12 months ago',replys:[]},
  ]

  const setlikefunc = () => {
    if (!likeflag) {
      setlikenumber(likenumber + 1);
    } else {
      setlikenumber(likenumber - 1);
    }
    setlikeflag(!likeflag);
    setdislikeflag(false);
  };
  const setdislikefunc = () => {
    if (likeflag) {
      setlikeflag(false);
      setlikenumber(likenumber - 1);
    }
    setdislikeflag(!dislikeflag);
  };
  const setshareflagfunc = () => {
    setshareflag(!shareflag);
  };

  const videoplayfunc = () => {
    if (videoplayflag) {
      videotag.current.pause();
      setvideoplayflag(false);
    } else {
      videotag.current.play();
      setvideoplayflag(true);
    }
  };

  const videomeutfunc = () => {
    setvideomeutflag(!videomeutflag);
    videotag.current.muted = !videotag.current.muted;
    console.log(videotag.current);
  };

  const move = () => {
    videotag.current.currentTime = 0;
    videotag.current.play();
    // setvideoplayflag(true);
  };
  const leve = () => {
    videotag.current.pause();
    // setvideoplayflag(false);
  };

  const menuitemsfunc = (event) => {
    if (
      btnmenuitem.current.contains(event.target) ||
      divshowmenu.current.contains(event.target)
    ) {
      divshowmenu.current.style.display = "flex";
      setmenulitems(true);
    } else {
      divshowmenu.current.style.display = "none";
      setmenulitems(false);
    }
  };
  useEffect(() => {
    document.addEventListener("click", menuitemsfunc);
    return () => {
      document.removeEventListener("click", menuitemsfunc);
    };
  });

  return (
    <div className="w-[450px] sm:w-[550px] md:w-[750px] md:flex md:justify-center h-[620px] overflow-y-auto shareshortspage overflow-scroll">
      <div
        className={` ${
          showcomments ? "w-max" : " "
        } h-[570px]  flex justify-center gap-1`}
      >
        <div
          onMouseEnter={move}
          onMouseLeave={leve}
          className=" w-[340px] z-[5] relative mx-auto father flex flex-col h-[570px] rounded-2xl"
        >
          <video
            ref={videotag}
            className=" h-full z-[1] object-cover rounded-2xl "
            src={videoshorts}
          ></video>

          <div className="z-[6] child absolute top-0 left-0 w-full px-3 pt-3 flex justify-between">
            <div className="left">
              <button
                onClick={videoplayfunc}
                className="hidden w-[35px] h-[35px] dflex items-center justify-center text-white rounded-full bg-[#0000004a] "
              >
                {videoplayflag ? (
                  <TbPlayerPause size={22} />
                ) : (
                  <IoPlayOutline size={22} />
                )}
              </button>
              {/* <button className=" w-[35px] h-[35px] flex items-center justify-center text-white rounded-full bg-[#0000004a] ">
                  </button> */}
            </div>
            <div className="right">
              <button
                onClick={videomeutfunc}
                className=" w-[35px] h-[35px] flex items-center justify-center text-white rounded-full bg-[#0000004a] "
              >
                {videomeutflag ? <GoMute size={22} /> : <GoUnmute size={22} />}
              </button>
            </div>
          </div>

          <div
            className={` ${
              showcomments ? "sm:-right-[0px] " : " sm:-right-[65px]"
            } absolute z-[6] text-[13px]  bottom-0 right-0  w-[60px] h-max flex flex-col gap-3 items-center justify-center `}
          >
            {/* btn-like */}
            <div className="p-1 w-[100%] text-center h-max like">
              <button
                onClick={setlikefunc}
                className={` ${
                  likeflag
                    ? " bg-[#4a4a4a] text-white  "
                    : "bg-[#7e7d7d4a] text-black "
                } p-1 w-[45px] h-[45px] flex items-center justify-center rounded-full `}
              >
                <SlLike size={20} />
              </button>
              <p>{likenumber}</p>
            </div>
            {/* btn-dislike */}
            <div className="p-1 w-[100%] text-center h-max dislike">
              <button
                onClick={setdislikefunc}
                className={` ${
                  dislikeflag
                    ? " bg-[#f6f2f2] text-black sm:bg-[#000000da] sm:text-white "
                    : "bg-[#0000004a] "
                } p-1 w-[45px] h-[45px] flex items-center justify-center rounded-full `}
              >
                <SlDislike size={20} />
              </button>
              <p>Dislike</p>
            </div>
            {/* btn-comment */}
            <div className="p-1 w-[100%] text-center h-max comment">
              <div className="">
                <button
                  onClick={() => setshowcomments(!showcomments)}
                  className={`${
                    showcomments
                      ? " bg-[#f6f2f2] text-black  sm:text-white "
                      : "bg-[#0000004a] "
                  } p-1 w-[45px] h-[45px] flex items-center justify-center rounded-full `}
                >
                  <MdComment size={20} />
                </button>
                <p>4.3K</p>
              </div>
            </div>
            {/* btn-share */}
            <div className="p-1 w-[100%] text-center h-max share">
              <button
                onClick={setshareflagfunc}
                className={` ${
                  shareflag
                    ? " bg-[#f6f2f2] text-black sm:bg-[#000000da] sm:text-white "
                    : "bg-[#0000004a] "
                } p-1 w-[45px] h-[45px] flex items-center justify-center rounded-full `}
              >
                <RiShareForwardFill size={20} />
              </button>
              <p>Share</p>
            </div>
            {/* btn-menu */}
            <div className="p-1 w-[100%] text-center h-max menu">
              <button
                ref={btnmenuitem}
                onClick={menuitemsfunc}
                className={`${
                  menulitems
                    ? " bg-[#f6f2f2] text-black sm:bg-[#000000da] sm:text-white "
                    : "bg-[#0000004a] "
                }  p-1 w-[45px] btn-tst h-[45px] flex items-center justify-center rounded-full `}
              >
                <CiMenuKebab size={20} />
              </button>
            </div>
            {/* link-profile */}
            <div className="p-1 w-[100%] text-center h-max img-prof">
              <img
                className=" w-[45px] h-[45px] mx-auto "
                src={imgreact}
                alt=""
              />
            </div>

            {/* poopup-menu */}
            <div
              ref={divshowmenu}
              style={{ display: "none" }}
              className=" text-black w-[300px] h-[200px] z-[100] absolute flexv flex-col bottom-28 right-3 rounded-xl bg-gray-200 shadow-lg shadow-gray-800 "
            >
              tstttssttststtdbvssts
            </div>
          </div>

          <div className=" z-[6] absolute bottom-0 left-0 px-3 w-[250px] h-[100px] flex gap-2 flex-col justify-center items-start">
            <div className=" w-full flex items-center gap-3">
              <img src={imgreact} alt="" />
              <NavLink className=" text-white" to={`/`}>
                abolfazl-tst
              </NavLink>
              <button className=" px-2 py-1 bg-yellow-50 rounded-2xl">
                Subscribe
              </button>
            </div>
            <p className="text-white text-[13px]">
              انواع شعبده بازی کلوز آپ چین؟
            </p>
          </div>
        </div>

        {/* show-comments */}
        {showcomments ? (
          <div className=" w-[340px] h-[570px] rounded-2xl bg-red-300f">
            <div className="px-2 flex justify-between items-center">
              <p>
                {" "}
                Comments <span>10</span>
              </p>
              <div className="">
                <button className=" w-[30px] h-[30px] rounded-full hover:bg-gray-200">
                  X
                </button>
              </div>
            </div>

            <div className=" w-full h-[450px] overflow-scroll widthscroll overflow-x-auto bg-red-100f">
              <div className="flex flex-col gap-2">
              {
                listcoments && listcoments.map(item=>
                  <Comments key={item.id} coment={item} />
                )
              }

              </div>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>

      {/* share */}
      {shareflag ? (
        <div className=" w-full h-full fixed z-[200] top-0 left-0 flex justify-center items-center bg-[#00000085]">
          <div className=" w-[400px] h-[210px] p-2 bg-[#e1e4f4] shadow-lg shadow-gray-800 rounded-2xl">
            <div className="px-1 mt-1 flex items-center justify-between">
              <span>Share</span>
              <button
                onClick={() => setshareflag(false)}
                className=" w-[35px] h-[35px] text-[15px] hover:text-black hover:bg-gray-200 rounded-full"
              >
                X
              </button>
            </div>

            <div className=" w-full flex shareshortspage overflow-scroll overflow-y-auto">
              <div className="h-[100px] flex gap-4 justify-center items-center">
                {sharelist.map((item) => (
                  <div
                    key={item.id}
                    className=" w-max h-max bg-green-40 flex flex-col gap-2 justify-center items-center"
                  >
                    <img
                      className=" w-[45px] h-[45px] rounded-full"
                      src={item.ico}
                      alt=""
                    />
                    <span>{item.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className=" w-full mt-2 flex gap-2 justify-center items-center">
              <p className=" px-2 outline-none">http://tst/shorts</p>
              <button className="px-2 py-1 bg-blue-600 text-white rounded-xl">
                copy
              </button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default ShowVideoShorts;
