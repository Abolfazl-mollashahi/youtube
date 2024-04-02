import { useRef, useState } from "react";
import MyNavbar from "../components/MyNavbar";
import imgreact from "../assets/react.svg";
import { Link } from "react-router-dom";

function Channels() {
  const [dbchannels, setdbchannels] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ]);
  const [toggleflag, settoggleflag] = useState(false);
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
    <div onClick={closefather}>
      <MyNavbar
        toggleflag={toggleflag}
        settoggleflag={settoggleflag}
        togglefunc={togglefunc}
        flagpagevideo={true}
      />
      <div
        style={toggleflag ? { paddingRight: "220px" } : {}}
        ref={divslidername}
        className={` w-[100%] md:left-[75px] md:pr-[75px] relative flex justify-center items-center top-[55px] `}
      >
        <div className=" w-[90%] flex flex-col justify-center items-center">
          {dbchannels.map((channel, index) => (
            <div className=" w-[80%] h-[150px] flex gap-4 justify-center items-center  mx-2" key={index}>
              
              <img
                className=" w-[100px] h-[100px] rounded-full object-cover"
                src={imgreact}
                alt=""
              />
              
              <div className=" flex flex-col gap-2 justify-start items-start">
                <Link className="text-[23px]" to={"/"}>Abolfazl</Link>
                <p className="text-gray-700 text-[16px]">@Abolfazl . 180K subscribers</p>
                <p className="text-gray-700 text-[14px]">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Reprehenderit aliquid
                </p>
              </div>
              
              <div className="hidden md:block">
                <button className=" px-3 py-1 rounded-xl bg-gray-200" >Subscribed</button>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Channels;
