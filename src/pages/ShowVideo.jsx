import tstvideo from "../assets/videos/video.mp4";
import imgreact from "../assets/react.svg";
import { NavLink } from "react-router-dom";
import { SlLike } from "react-icons/sl";
import { SlDislike } from "react-icons/sl";
import { RiShareForwardFill } from "react-icons/ri";
import { CiMenuKebab } from "react-icons/ci";
import { useState } from "react";

function ShowVideo() {

  const [menuitemvid ,setmenuitemvid] = useState(false)


  return (
    <div className=" w-full p-2 h-max flex flex-col gap-2 lg:flex-row items-start">
      <div className="w-full h-[1000px]  bg-red-500">
        {/* div-video-asly */}
        <div className=" h-[300px] sm:w-[600px] sm:h-[400px] md:w-[90%] lg:w-[100%] mx-auto lg:h-[450px] rounded-3xl overflow-hidden bg-red-700">
          <video className=" vid object-cover  " src={tstvideo}></video>
        </div>
        <h3 className=" pl-2 text-[20px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h3>
        <div className="w-full flex flex-col gap-2 md:px-5 md:flex-row">
          {/* img-prof & btn sub */}
          <div className=" w-full flex items-center gap-5">
            <img
              className=" w-[50px] h-[50px]  rounded-full"
              src={imgreact}
              alt=""
            />
            <div className="text-white flex flex-col">
              <NavLink className=" text-[19px]" to={`/`}>
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
              <button className=" w-[80px] h-full  flex gap-3 justify-center items-center hover:bg-gray-200"><SlLike /> 3.5K</button>
              <button className=" w-[40px] h-full flex justify-center items-center bg-gray-400 hover:bg-gray-200"><SlDislike /></button>
            </div>
            <button className=" w-[100px] h-full flex gap-3 justify-center items-center rounded-full bg-gray-300 hover:bg-gray-200"><RiShareForwardFill /> Share</button>
            <button className=" w-[100px] h-full flex gap-3 justify-center items-center rounded-full bg-gray-300 hover:bg-gray-200">Download</button>
            <button onClick={()=>setmenuitemvid(!menuitemvid)} className=" w-[40px] h-[40px] flex justify-center items-center bg-gray-300 hover:bg-gray-200 rounded-full"><CiMenuKebab /></button>
  
            {/* menu-hidden */}
            <div className={`${menuitemvid ? 'flex' : 'hidden'} w-[100px] absolute top-12 p-2 right-0 h-max bg-gray-100 gap-2 flex-col  rounded-xl `}>
              <button className=" px-2 py-1 flex  gap-1 items-center rounded-lg hover:bg-gray-200">Clip</button>
              <button className=" px-2 py-1 flex  gap-1 items-center rounded-lg hover:bg-gray-200">Save</button>
              <button className=" px-2 py-1 flex  gap-1 items-center rounded-lg hover:bg-gray-200">Report</button>
            </div>

          </div>

        </div>
      </div>
      
      <div className="w-full lg:w-3/6 h-[1500px] flex flex-col bg-green-500"></div>
    </div>
  );
}

export default ShowVideo;
