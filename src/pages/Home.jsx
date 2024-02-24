import { NavLink } from "react-router-dom";
import MyNavbar from "../components/MyNavbar";
import { IoMdHome } from "react-icons/io";
import { useEffect, useRef, useState } from "react";
import HomeListTopVideo from "../components/HomeListTopVideo";
import ShortsComponent from "../components/ShortsComponent";
import SliderName from "../components/SliderName";

function Home() {
  const [dbvideos, setdbvideos] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ]);
  const [toggleflag, settoggleflag] = useState(false);

  const divcontiner = useRef({});
  const divslidername = useRef({});

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
    <div onClick={closefather}>
      <MyNavbar
        toggleflag={toggleflag}
        settoggleflag={settoggleflag}
        togglefunc={togglefunc}
        flagpagevideo={true}
      />

      <div className="flex w-full fixed top-0 left-0 ">
        <div
          ref={divcontiner}
          className=" w-full  h-screen flex flex-col justify-start items-center pt-[50px] "
        >
          {/* aslider name */}
          <div
            style={toggleflag ? { paddingRight: "220px" } : {}}
            ref={divslidername}
            className={` w-[100%] md:left-[75px] md:pr-[75px] fixed h-[50px] flex justify-center items-center top-[50px] `}
          >
            <SliderName toggle={toggleflag} elem={divslidername} />
          </div>

          <div className="contin-video w-full md:pl-[80px] relative mt-[50px] flex flex-col overflow-scroll overflow-x-auto">
            <div className="d-1 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 p-2 justify-center items-center">
              {dbvideos.slice(0, 8).map((item) => (
                <HomeListTopVideo key={item} />
              ))}
            </div>

            {/*  */}

            <ShortsComponent/>

            {/*  */}

            <div className="d-1 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 p-2 justify-center items-center">
              {dbvideos.slice(0, 8).map((item) => (
                <HomeListTopVideo key={item}/>
              ))}
            </div>

            {/*  */}

            <ShortsComponent />

            {/*  */}

            <div className="d-1 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 p-2 justify-center items-center">
              {dbvideos.map((item) => (
                <HomeListTopVideo key={item} />
              ))}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Home;
