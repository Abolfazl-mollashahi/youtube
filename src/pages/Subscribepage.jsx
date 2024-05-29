import { useRef, useState } from "react";
import { TiThMenuOutline } from "react-icons/ti";
import { CgMenuGridO } from "react-icons/cg";
import MyNavbar from "../components/MyNavbar.jsx";
import HomeListVideo from "../components/HomeListTopVideo.jsx";
import Listflexcolvideo from "../components/Listflexcolvideo.jsx";
import { useNavigate } from "react-router-dom";

function Subscribepage() {
  const [toggleflag, settoggleflag] = useState(false);
  const [chengemanege, setchengemanege] = useState(false);
  const [dizinegrid, setdizinegrid] = useState(true);
  const [dizineflex, setdizineflex] = useState(false);
  const navigate = useNavigate();

  const divcontiner = useRef({});
  // const btnshow = useRef({});
  let db = [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1,
  ];

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

  const manegefunc = () => {
    setdizineflex(false);
    setdizinegrid(false);
    setchengemanege(true);
    navigate("/channels");
  };
  const desinegridfunc = () => {
    setdizineflex(false);
    setdizinegrid(true);
    setchengemanege(false);
  };
  const desineflexfunc = () => {
    setdizineflex(true);
    setdizinegrid(false);
    setchengemanege(false);
  };

  return (
    <div onClick={closefather} className="bg">
      <MyNavbar
        toggleflag={toggleflag}
        settoggleflag={settoggleflag}
        togglefunc={togglefunc}
        flagpagevideo={true}
      />
        <div className="flex w-full fixed top-0 left-0  bg"> 
      <div
        ref={divcontiner}
        className="w-full  h-screen flex flex-col justify-start items-center pt-[45px]   "
      >
          <div className="contin-video w-full md:pl-[80px] relative  flex flex-col overflow-scroll overflow-x-auto ">
            
            {/* btns-top */}
            <div className={` ${toggleflag ? '  ' : "fixed  md:ml-[5px]"}  w-full  border bg  top-[48px] z-50 p-2 px-6  flex  justify-between items-center dark:text-white `}>
              <span>Latest</span>
              <div className="flex gap-3 items-center md:-translate-x-[65px]">
                <button
                  className={`${
                    chengemanege
                      ? "text-white bg-sky-800 "
                      : "text-sky-700 border  bg dark:text-white"
                  } px-2 py-1 rounded-lg `}
                  onClick={manegefunc}
                >
                  Manage
                </button>
                <button
                  className={` ${
                    dizinegrid ? " !text-green-600  !border-green-600  " : ""
                  } p-1 px-2 rounded-lg  border  bg dark:text-white `}
                  onClick={desinegridfunc}
                >
                  <CgMenuGridO size={24} />
                </button>
                <button
                  className={` ${
                    dizineflex ? "!text-green-600  !border-green-600" : ""
                  } p-1 px-2 rounded-lg border  bg dark:text-white`}
                  onClick={desineflexfunc}
                >
                  <TiThMenuOutline size={24} />
                </button>
              </div>
            </div>

            <div className="w-full relative top-[50px] py-2 ">
              {dizinegrid && (
                <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 justify-center items-center w-full">
                  {db.map((item, ind) => (
                    <HomeListVideo key={ind} />
                  ))}
                </div>
              )}

              {dizineflex && (
                <div className="w-full">
                  {db.map((item, ind) => (
                    <Listflexcolvideo key={ind} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subscribepage;
