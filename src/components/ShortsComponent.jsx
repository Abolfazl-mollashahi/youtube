import { useRef, useState } from "react";
import tstvideoshorts from "../assets/videos/shorts.mp4";
import { NavLink } from "react-router-dom";

function ShortsComponent() {


  const [dbshorts, setdbshorts] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
  ]);

  const [flagmore, setflagmore] = useState(false);
  const div_cont = useRef({});
  const [showvideoshorts, setshowvideoshorts] = useState(false);




  const VideoMousMoveshorts = (e) => {
    if (showvideoshorts) {
      setshowvideoshorts(!showvideoshorts);
      e.target.play();
    } else {
      e.target.play();
      setshowvideoshorts(true);
    }
  };
  const VideoMousLeavshorts = (e) => {
    e.target.pause();
  };

  const flagfunc = () => {
    if (flagmore) {
      setflagmore(false);
      div_cont.current.style.height = "450px";
    } else {
      setflagmore(true);
      div_cont.current.style.height = "auto";
    }
  };

  return (
    <>
      <div className="w-full mb-10">
        <div className=" px-3 mb-3 flex justify-between items-center">
          <p className=" flex text-[20px] items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              focusable="false"
              style={{ display: "block", width: "100%", height: "100%" }}
            >
              <g>
                <path
                  d="M17.77,10.32l-1.2-.5L18,9.06a3.74,3.74,0,0,0-3.5-6.62L6,6.94a3.74,3.74,0,0,0,.23,6.74l1.2.49L6,14.93a3.75,3.75,0,0,0,3.5,6.63l8.5-4.5a3.74,3.74,0,0,0-.23-6.74Z"
                  fill="red"
                ></path>
                <polygon
                  points="10 14.65 15 12 10 9.35 10 14.65"
                  fill="#fff"
                ></polygon>
              </g>
            </svg>
            Shorts
          </p>

          <span className="px-2 text-[20px]  rounded-full hover:bg-gray-300">
            X
          </span>
        </div>
        <div
          ref={div_cont}
          className="w-full h-[450px] overflow-hidden p-1 justify-center items-center grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6"
        >
          {dbshorts.map((item) => (
            <NavLink to="/shorts" key={item}>
              <div className="  mx-auto p-1 ">
                <video
                  onMouseMove={VideoMousMoveshorts}
                  onMouseLeave={VideoMousLeavshorts}
                  className=" w-full md:w-[230px] lg:w-[200px] mx-auto h-[380px] rounded-2xl object-cover "
                >
                  <source src={tstvideoshorts} />
                </video>
                <div className="text-shortscomponent flex justify-between px-1 pt-1">
                  <p>tst video </p>
                  <span className=" hidden btn w-[24px] h-[24px] cursor-pointer ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                      width="24"
                      focusable="false"
                      style={{
                        display: "block",
                        width: "100%",
                        height: "100%",
                      }}
                    >
                      <path d="M12 16.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zM10.5 12c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5zm0-6c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5z"></path>
                    </svg>
                  </span>
                </div>
                <p className="px-1 text-[12px] text-gray-600">
                  <span>6.4M</span> views
                </p>
              </div>
            </NavLink>
          ))}
        </div>
        <p className=" w-full flex items-center justify-center border-b-2 border-gray-300">
          <button
            className=" w-[200px] h-[40px] bg-gray-300 relative top-5 rounded-3xl  "
            onClick={flagfunc}
          >
            { !flagmore ? "Show more" : "Show less"}
          </button>
        </p>
      </div>
    </>
  );
}

export default ShortsComponent;
