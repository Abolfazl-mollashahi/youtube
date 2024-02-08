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
import { useState } from "react";

function Shorts() {
  const [toggleflagshorts, settoggleflagshorts] = useState(false);

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
      <MyNavbar
        toggleflag={toggleflagshorts}
        togglefunc={togglefuncshorts}
      />
      <div className=" w-full mt-[60px] justify-center items-center flex flex-col gap-5 pb-5">
        <div className=" w-[340px] relative father flex flex-col mx-auto h-[600px] rounded-2xl bg-red-500">
          <video className=" rounded-2xl" autoPlay src={videoshorts}></video>

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

          <div className=" absolute text-[13px] text-white bottom-0 right-0 sm:-right-[65px] sm:text-black w-[60px] h-max flex flex-col gap-3 items-center justify-center bg-blue-4000">
            <div className="p-1 w-[100%] text-center h-max like">
              <button className=" p-1 w-[45px] h-[45px] flex items-center justify-center rounded-full bg-[#0000004a] ">
                <SlLike size={20} />
              </button>
              <p>4.8M</p>
            </div>
            <div className="p-1 w-[100%] text-center h-max dislike">
              <button className=" p-1 w-[45px] h-[45px] flex items-center justify-center rounded-full bg-[#0000004a] ">
                <SlDislike size={20} />
              </button>
              <p>Dislike</p>
            </div>
            <div className="p-1 w-[100%] text-center h-max comment">
              <div className="">
                <button className=" p-1 w-[45px] h-[45px] flex items-center justify-center rounded-full bg-[#0000004a] ">
                  <MdComment size={20} />
                </button>
                <p>4.3K</p>
              </div>
            </div>
            <div className="p-1 w-[100%] text-center h-max share">
              <button className=" p-1 w-[45px] h-[45px] flex items-center justify-center rounded-full bg-[#0000004a] ">
                <RiShareForwardFill size={20} />
              </button>
              <p>Share</p>
            </div>
            <div className="p-1 w-[100%] text-center h-max menu">
              <button className=" p-1 w-[45px] h-[45px] flex items-center justify-center rounded-full bg-[#0000004a]">
                <CiMenuKebab size={20} />
              </button>
            </div>
            <div className="p-1 w-[100%] text-center h-max img-prof">
              <img
                className=" w-[45px] h-[45px] mx-auto "
                src={imgreact}
                alt=""
              />
            </div>
          </div>

          <div className=" absolute bottom-0 left-0 px-3 w-[250px] h-[100px] flex gap-2 flex-col justify-center items-start bg-green-500c">
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
        {/* <div className=" w-[340px] mx-auto h-[600px] rounded-2xl bg-blue-500">vvv</div>
        <div className=" w-[340px] mx-auto h-[600px] rounded-2xl bg-red-500">vvv</div>
        <div className=" w-[340px] mx-auto h-[600px] rounded-2xl bg-blue-500">vvv</div>
        <div className=" w-[340px] mx-auto h-[600px] rounded-2xl bg-red-500">vvv</div>
        <div className=" w-[340px] mx-auto h-[600px] rounded-2xl bg-blue-500">vvv</div> */}
      </div>
    </div>
  );
}

export default Shorts;
