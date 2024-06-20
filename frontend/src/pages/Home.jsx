import { NavLink } from "react-router-dom";
import MyNavbar from "../components/MyNavbar";
import { IoMdHome } from "react-icons/io";
import { useEffect, useRef, useState } from "react";
import HomeListTopVideo from "../components/HomeListTopVideo";
import ShortsComponent from "../components/ShortsComponent";
import SliderName from "../components/SliderName";
import video1 from "../assets/videos/video1.mp4";
import video2 from "../assets/videos/video2.mp4";
import video3 from "../assets/videos/video3.mp4";

function Home() {
  let dbvideos = [
    {id:1,src:video1},
    {id:2,src:video2},
    {id:3,src:video3},
    {id:4,src:video1},
    {id:5,src:video2},
    {id:6,src:video3},
    {id:7,src:video1},
    {id:8,src:video2},
    {id:9,src:video3},
    {id:10,src:video1},
    {id:11,src:video2},
    {id:12,src:video3},
    {id:13,src:video1},
    {id:14,src:video2},
    {id:15,src:video3},
    {id:16,src:video1},
    {id:17,src:video2},
    {id:18,src:video3},
  ];
  
  const divcontiner = useRef({});
  const divslidername = useRef({});
  
  const [toggleflag, settoggleflag] = useState(false);
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
    if(toggleflag){
      settoggleflag(false);
      divcontiner.current.style.marginLeft = "0px";
      divslidername.current.style.marginLeft = "0px";
      divslidername.current.style.paddingRight = "0px";
    }
  };

  return (
    <div className="" onClick={closefather} >
      <MyNavbar
        toggleflag={toggleflag}
        settoggleflag={settoggleflag}
        togglefunc={togglefunc}
        flagpagevideo={true}
      />
 
      <div className="flex w-full fixed top-0 left-0  bg">
        <div
          ref={divcontiner}
          className=" w-full  h-screen flex flex-col justify-start items-center pt-[45px] "
        >
          {/* aslider name */}
          <div
            style={toggleflag ? { paddingRight: "220px" } : {}}
            ref={divslidername}
            className={` w-[100%] left-[75px] px-0 fixed h-[45px] flex justify-center items-center top-[50px] rounded-xl `}
            // className={` w-[100%] md:left-[75px] md:pr-[75px] fixed h-[50px] flex justify-center items-center top-[50px] `}
          >
            <SliderName toggle={toggleflag} elem={divslidername} />
          </div>

          <div className="contin-video w-full md:pl-[80px] relative mt-[50px] flex flex-col overflow-scroll overflow-x-auto">
            <div  className="d-1 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3d lg:grid-cols-3 xl:grid-cols-4  gap-5 p-2 justify-center items-center">
              {dbvideos.slice(0, 8).map((item,index) => (
                <HomeListTopVideo key={index}  item={item} />
              ))}
            </div>

            {/*  */}

            <ShortsComponent/>

            {/*  */}

            <div className="d-1 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3d lg:grid-cols-3 xl:grid-cols-4 gap-5 p-2 justify-center items-center">
              {dbvideos.slice(0, 8).map((item,index) => (
                <HomeListTopVideo key={index} item={item}/>
              ))}
            </div>

            {/*  */}

            <ShortsComponent />

            {/*  */}

            <div className="d-1 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3d lg:grid-cols-3 xl:grid-cols-4 gap-5 p-2 justify-center items-center">
              {dbvideos.map((item,index) => (
                <HomeListTopVideo key={index} item={item} />
              ))}
            </div>
          </div>
          
        </div>
      </div>

    </div>
  );
}

export default Home;
