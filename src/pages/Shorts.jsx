import MyNavbar from "../components/MyNavbar";
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
import imgreact from "../assets/react.svg";
import videoshorts from "../assets/videos/shorts.mp4";
import { useEffect, useRef, useState } from "react";

function Shorts() {
  const [toggleflagshorts, settoggleflagshorts] = useState(false);
  const [likeflag, setlikeflag] = useState(false);
  const [shareflag, setshareflag] = useState(false);
  const [dislikeflag, setdislikeflag] = useState(false);
  const [menulitems, setmenulitems] = useState(false);
  const [showcomments, setshowcomments] = useState(false);
  const [likenumber, setlikenumber] = useState(435);
  const divshowmenu = useRef({});
  const btnmenuitem = useRef({});
  const divcoments = useRef({});
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
    <div onClick={closefathershorts}>
      <MyNavbar toggleflag={toggleflagshorts} togglefunc={togglefuncshorts} />
      <div className=" w-full mt-[60px] justify-center items-center flex flex-col gap-5 pb-5">
        <div className="w-[450px] sm:w-[550px] md:w-[750px] md:flex md:justify-center h-[620px] overflow-y-auto shareshortspage overflow-scroll">
          <div
            className={` ${
              showcomments ? "w-max" : " "
            } h-[570px]  flex justify-center gap-1`}
          >
            <div className=" w-[340px] relative mx-auto father flex flex-col h-[570px] rounded-2xl">
              <video
                className=" rounded-2xl"
                autoPlay
                muted
                src={videoshorts}
              ></video>

              <div className=" child absolute top-0 left-0 w-full px-3 pt-3 flex justify-between">
                <div className="left">
                  <button className=" w-[35px] h-[35px] flex items-center justify-center text-white rounded-full bg-[#0000004a] ">
                    <TbPlayerPause size={22} />
                  </button>
                  <button className=" w-[35px] h-[35px] flex items-center justify-center text-white rounded-full bg-[#0000004a] ">
                    <IoPlayOutline size={22} />
                  </button>
                </div>
                <div className="right">
                  <button className=" w-[35px] h-[35px] flex items-center justify-center text-white rounded-full bg-[#0000004a] ">
                    <GoUnmute size={22} />
                  </button>
                  <button className=" w-[35px] h-[35px] flex items-center justify-center text-white rounded-full bg-[#0000004a] ">
                    <GoMute size={22} />
                  </button>
                </div>
              </div>

              <div className={` ${ showcomments ? 'sm:-right-[0px] ' : ' sm:-right-[65px] sm:text-black' } absolute text-[13px] text-white bottom-0 right-0  w-[60px] h-max flex flex-col gap-3 items-center justify-center `}>
                {/* btn-like */}
                <div className="p-1 w-[100%] text-center h-max like">
                  <button
                    onClick={setlikefunc}
                    className={` ${
                      likeflag
                        ? " bg-[#f6f2f2] text-black sm:bg-[#000000da] sm:text-white "
                        : "bg-[#0000004a] "
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

              <div className=" absolute bottom-0 left-0 px-3 w-[250px] h-[100px] flex gap-2 flex-col justify-center items-start">
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
              <div className=" w-[340px] h-[570px] rounded-2xl bg-red-300">
                <p>{showcomments ? "ttt" : "fff"}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>

        {/* <div className=" w-[340px] mx-auto h-[600px] rounded-2xl bg-blue-500">vvv</div>
        <div className=" w-[340px] mx-auto h-[600px] rounded-2xl bg-red-500">vvv</div>
        <div className=" w-[340px] mx-auto h-[600px] rounded-2xl bg-blue-500">vvv</div>
        <div className=" w-[340px] mx-auto h-[600px] rounded-2xl bg-red-500">vvv</div>
        <div className=" w-[340px] mx-auto h-[600px] rounded-2xl bg-blue-500">vvv</div> */}
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

export default Shorts;
