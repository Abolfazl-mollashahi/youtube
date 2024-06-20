import { useRef, useState } from "react";
import MyNavbar from "../components/MyNavbar";
import personimg from '../assets/person.jpg'
import { Link } from "react-router-dom";

function Channels() {
  const [dbchannels, setdbchannels] = useState([
    1,2,2,2, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
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
    <div onClick={closefather} className=" dark:text-white">
      <MyNavbar
        toggleflag={toggleflag}
        settoggleflag={settoggleflag}
        togglefunc={togglefunc}
        flagpagevideo={true}
      />
      <div
        ref={divslidername}
        className={` w-[100%]  relative flex justify-center items-center top-[50px] bg `}
      >
        <div className=" w-[100%] sm:w-[85%]  flex flex-col justify-center items-center mt-2 mb-8">
          {dbchannels.map((channel, index) => (
            <div className=" w-[85%] h-[150px] flex gap-4 justify-center items-center p-2  my-1.5 border border-violet-400 rounded-2xl scale-100 hover:scale-95  shadow-md  shadow-violet-400 hover:border-violet-800 " key={index}>
              
              <img
                className=" w-[120px] h-[120px] mask mask-hexagon  rounded-full object-cover  shadow-md border "
                src={personimg}
                alt=""
              />
              
              <div className=" flex flex-col gap-2 justify-start items-start">
                <Link className="text-[23px]" to={"/"}>Abolfazl</Link>
                <p className="text-gray-700 dark:text-gray-400 text-[16px]">@Abolfazl . 180K subscribers</p>
                <p className="text-gray-700 dark:text-gray-400 text-[14px]">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Reprehenderit aliquid
                </p>
              </div>
              
              <div className="hidden md:block">
                <button className=" px-3 py-1 rounded-xl border  bg  scale-90  shadow-md  !shadow-violet-400  border-violet-700 hover:scale-100 " >Subscribed</button>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Channels;
