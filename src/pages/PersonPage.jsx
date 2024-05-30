import { useParams } from "react-router-dom";
import MyNavbar from "../components/MyNavbar";
import HomeListTopVideo from "../components/HomeListTopVideo";
import baner from "../assets/baneruser-1.jpg";
import personimg from '../assets/person.jpg'
import { IoMdSearch } from "react-icons/io";
import { IoNotificationsOutline } from "react-icons/io5";
import { useRef, useState } from "react";
function PersonPage() {
  const { username } = useParams();
  let videos = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  const [toggleflag, settoggleflag] = useState(false);
  const [homeflag, setHomeflag] = useState(true);
  const [videosflag, setVideosflag] = useState(false);
  const [shortsflag, setShortsflag] = useState(false);
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
    if (toggleflag) {
      settoggleflag(false);
      divcontiner.current.style.marginLeft = "0px";
      divslidername.current.style.marginLeft = "0px";
      divslidername.current.style.paddingRight = "0px";
    }
  };

  return (
    <div className="" onClick={closefather}>
      <MyNavbar
        toggleflag={toggleflag}
        settoggleflag={settoggleflag}
        togglefunc={togglefunc}
        flagpagevideo={true}
      />

      <div className="flex w-full fixed top-0 left-0 bg dark:text-white">
        <div
          ref={divcontiner}
          className="  w-full h-screen flex flex-col justify-start citems-center pt-[50px] "
        >
          <div className="contin-video w-full p-1  md:pl-[80px] lg:max-w-[1200px]d lg:w-[100%]  mx-auto  relative flex flex-col overflow-scroll overflow-x-auto ">
            <div className="img-baner mt-2  w-[100%]  h-[100px] md:w-[95%]  md:h-[220px] lg:max-w-[1200px] mx-auto ">
              <img
                className=" w-full h-full object-fill  rounded-2xl"
                src={baner}
                alt=""
              />
            </div>

            <div className="flex justify-start items-center gap-2 mt-3 w-[100%] md:w-[95%]  lg:max-w-[1200px] mx-auto">
              <img className=" w-20 h-20 rounded-full " src={personimg} alt="" />
              <div className="flex flex-col justify-center items-start gap-2">
                <p className="text-[30px]">ali</p>
                <p>username . 160K subscribers . 2K videos </p>
                {/* <button>clickdesc  /// </button> */}
                <button className=" p-2  flex gap-1 items-center rounded-2xl border  border-violet-300  bg scale-100 hover:scale-110  ">
                  <IoNotificationsOutline className="w-6 h-6 " />
                  subscribed
                </button>
              </div>
              {/* desc */}
              <div className="hidden"></div>
            </div>

            <div className="flex gap-4 items-center pl-2  mt-8 w-[100%] md:w-[95%]  lg:max-w-[1200px] mx-auto">
              <button
                onClick={() =>
                  setHomeflag(
                    () => true,
                    setVideosflag(false),
                    setShortsflag(false)
                  )
                }
                className=" p-2 bg rounded-lg border border-violet-300 scale-100 hover:scale-110 "
              >
                Home
              </button>
              <button
                onClick={() =>
                  setVideosflag(
                    () => true,
                    setHomeflag(false),
                    setShortsflag(false)
                  )
                }
                className=" p-2 bg rounded-lg border border-violet-300 scale-100 hover:scale-110 "
              >
                Videos
              </button>
              <button
                onClick={() =>
                  setShortsflag(
                    () => true,
                    setVideosflag(false),
                    setHomeflag(false)
                  )
                }
                className=" p-2 bg rounded-lg border border-violet-300 scale-100 hover:scale-110 "
              >
                Shorts
              </button>
              <div className="flex  items-center gap-1">
                <input
                  className=" w-[200px] h-[40px] px-2 pr-[45px]  rounded-lg border outline-none   bg  border-violet-300"
                  type="text"
                />
                <button>
                  <IoMdSearch className=" -translate-x-10  w-8 h-8 rounded-xl p-0.5 border  bg scale-100 hover:scale-110" />
                </button>
              </div>
            </div>

            {/* home */}
            {homeflag && (
              <div className="d-1 mt-3  w-[95%] mx-auto  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-3 justify-center items-center border-t-2  border-violet-500  dark:border-violet-700  rounded-2xl">
                {videos.map((index, key) => (
                  <HomeListTopVideo key={key} />
                ))}
              </div>
            )}

            {/* videos */}
            {videosflag && (
              <div className="d-1 mt-3  w-[95%] mx-auto  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-3 justify-center items-center border-t-2  border-violet-500  dark:border-violet-700  rounded-2xl">
                {videos.map((index, key) => (
                  <HomeListTopVideo key={key} />
                ))}
              </div>
            )}

            {/* shorts */}
            {shortsflag && (
              <div className="d-1 mt-3  w-[95%] mx-auto  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-3 justify-center items-center border-t-2  border-violet-500  dark:border-violet-700  rounded-2xl">
                {videos.map((index, key) => (
                  <HomeListTopVideo key={key} />
                ))}
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonPage;
