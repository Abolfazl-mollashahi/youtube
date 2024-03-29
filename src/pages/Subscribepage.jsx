import { useRef, useState } from "react";
import { TiThMenuOutline } from "react-icons/ti";
import { CgMenuGridO } from "react-icons/cg";
import MyNavbar from "../components/MyNavbar";
import HomeListVideo from "../components/HomeListTopVideo";
import Listflexcolvideo from "../components/listflexcolvideo";

function Subscribepage() {
  const [toggleflag, settoggleflag] = useState(false);
  const [chengemanege, setchengemanege] = useState(false);
  const [dizinegrid, setdizinegrid] = useState(true);
  const [dizineflex, setdizineflex] = useState(false);

  const divcontiner = useRef({});
  let db = [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1,
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

  // const dizineflexfunc = () => {
  //   if(chengemanege){
  //     setchengemanege(false)
  //   }

  //   if (flagdizine) {
  //     setflagdizine(false);
  //     setdizine1("");
  //   } else {
  //     setdizine1(" w-full flex flex-col justify-start gap-2 items-center ");
  //     setflagdizine(true);
  //   }
  // };

  return (
    <div onClick={closefather}>
      <MyNavbar
        toggleflag={toggleflag}
        settoggleflag={settoggleflag}
        togglefunc={togglefunc}
        flagpagevideo={true}
      />
      <div
        ref={divcontiner}
        className="w-full flex flex-col justify-start items-center pt-[50px] md:pl-[85px] "
      >
        {/* btns-top */}
        <div className="w-full fixed top-[48px] z-50 bg-white p-2 px-10 flex justify-between items-center ">
          <span>Latest</span>
          <div className="flex gap-3 items-center lg:pr-10">
            <button
              className={`${
                chengemanege
                  ? "text-white bg-sky-800"
                  : "text-sky-700 bg-gray-200"
              } px-2 py-1 rounded-lg `}
              onClick={manegefunc}
            >
              Manage
            </button>
            <button
              className={` ${
                dizinegrid ? "bg-sky-800 text-white" : ""
              } p-1 px-2 rounded-lg`}
              onClick={desinegridfunc}
            >
              <CgMenuGridO size={24} />
            </button>
            <button
              className={` ${
                dizineflex ? "bg-sky-800 text-white" : ""
              } p-1 px-2 rounded-lg `}
              onClick={desineflexfunc}
            >
              <TiThMenuOutline size={24} />
            </button>
          </div>
        </div>

        <div className="w-full relative top-[50px] py-2 ">
          {chengemanege ? (
            <div className={` h-[500px]s bg-red-500`}>
              vvvv
            </div>
          ) : (
            ""
          )}

          {dizinegrid ? (
            <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 justify-center items-center w-full">
              {db.map((item, ind) => (
                <HomeListVideo key={ind} />
              ))}
            </div>
          ) : (
            ""
          )}

          {dizineflex ? (
            <div className="w-full">
              {db.map((item, ind) => (
                <Listflexcolvideo key={ind} />
              ))}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default Subscribepage;
