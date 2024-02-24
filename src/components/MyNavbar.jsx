import { SlBell } from "react-icons/sl";
import { PiBatteryPlus } from "react-icons/pi";
import { FaMicrophone, FaBarsStaggered } from "react-icons/fa6";
import { IoMdSearch, IoMdHome } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { useRef, useState } from "react";
import NavbarItem from "./NavbarItem";
import imgreact from "../assets/react.svg";

function MyNavbar({ toggleflag, settoggleflag, togglefunc,flagpagevideo }) {
  const [flag1, setflag1] = useState(false);
  const btnmore = useRef({});
  const btnless = useRef({});
  const btnnav = useRef();
  const div2 = useRef({});

  const showmore = () => {
    if (!flag1) {
      btnmore.current.style.display = "none";
      setflag1(true);
    } else {
      btnmore.current.style.display = "flex";
      setflag1(false);
    }
  };

  return (
    <div
      dir="rtl"
      className=" px-2 pt-1 flex justify-between items-center w-full bg-white fixed top-0 left-0 z-[100] "
    >
      <div className="div-1 flex gap-4 items-center">
        <div className=" relative father">
          <button className=" w-[35px] h-[35px] rounded-full text-white bg-blue-900">
            a
          </button>
          {/* div-acant */}
          <div className="hidden child w-[280px] p-2 h-max absolute  top-[35px] right-0 flex-col rounded-xl bg-white shadow-orange-100 border-2 bordder-black shadow-lg">
            <div className="w-full flex mb-1 flex-row-reverse items-center gap-2">
              <img
                className={`w-[50px] h-[50px] rounded-full`}
                src={imgreact}
              />
              <div className=" w-full flex flex-col items-end gap-1">
                <NavLink
                  className={` w-full h-max flex-col items-end`}
                  to={`/`}
                >
                  <p className="w-full text-left">abolfazl_mollashahi</p>
                  <p className="w-full text-left">@abolfazlmollashahi</p>
                </NavLink>
                <NavLink className={` text-sky-600`}>View your channel</NavLink>
              </div>
            </div>
            <hr />

            <div className=" w-full flex justify-between items-center">
              <button className="pr-4">///</button>
              <NavLink
                to="/tst"
                className=" w-[90%]  mx-auto py-2 flex gap-3 justify-end items-center rounded-xl hover:bg-gray-100 "
              >
                <span>Switch account</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  focusable="false"
                  className="ml-[10px]"
                  style={{
                    display: "block",
                    width: "24px",
                    height: "24px",
                  }}
                >
                  <path d="M3,3v18h18V3H3z M4.99,20c0.39-2.62,2.38-5.1,7.01-5.1s6.62,2.48,7.01,5.1H4.99z M9,10c0-1.65,1.35-3,3-3s3,1.35,3,3 c0,1.65-1.35,3-3,3S9,11.65,9,10z M12.72,13.93C14.58,13.59,16,11.96,16,10c0-2.21-1.79-4-4-4c-2.21,0-4,1.79-4,4 c0,1.96,1.42,3.59,3.28,3.93c-4.42,0.25-6.84,2.8-7.28,6V4h16v15.93C19.56,16.73,17.14,14.18,12.72,13.93z"></path>
                </svg>
              </NavLink>
            </div>

            <NavLink
              to="/tst"
              className=" w-[100%]  mx-auto py-2 flex gap-3 justify-end items-center rounded-xl hover:bg-gray-100 "
            >
              <span>Sign out</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                focusable="false"
                className="ml-[10px]"
                style={{
                  display: "block",
                  width: "24px",
                  height: "24px",
                }}
              >
                <path d="M3,3v18h18V3H3z M4.99,20c0.39-2.62,2.38-5.1,7.01-5.1s6.62,2.48,7.01,5.1H4.99z M9,10c0-1.65,1.35-3,3-3s3,1.35,3,3 c0,1.65-1.35,3-3,3S9,11.65,9,10z M12.72,13.93C14.58,13.59,16,11.96,16,10c0-2.21-1.79-4-4-4c-2.21,0-4,1.79-4,4 c0,1.96,1.42,3.59,3.28,3.93c-4.42,0.25-6.84,2.8-7.28,6V4h16v15.93C19.56,16.73,17.14,14.18,12.72,13.93z"></path>
              </svg>
            </NavLink>

            <hr />

            <NavLink
              to="/tst"
              className=" w-[100%]  mx-auto py-2 flex gap-3 justify-end items-center rounded-xl hover:bg-gray-100 "
            >
              <span>TouTube Studio</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                focusable="false"
                className="ml-[10px]"
                style={{
                  display: "block",
                  width: "24px",
                  height: "24px",
                }}
              >
                <path d="M3,3v18h18V3H3z M4.99,20c0.39-2.62,2.38-5.1,7.01-5.1s6.62,2.48,7.01,5.1H4.99z M9,10c0-1.65,1.35-3,3-3s3,1.35,3,3 c0,1.65-1.35,3-3,3S9,11.65,9,10z M12.72,13.93C14.58,13.59,16,11.96,16,10c0-2.21-1.79-4-4-4c-2.21,0-4,1.79-4,4 c0,1.96,1.42,3.59,3.28,3.93c-4.42,0.25-6.84,2.8-7.28,6V4h16v15.93C19.56,16.73,17.14,14.18,12.72,13.93z"></path>
              </svg>
            </NavLink>

            <NavLink
              to="/tst"
              className=" w-[100%]  mx-auto py-2 flex gap-3 justify-end items-center rounded-xl hover:bg-gray-100 "
            >
              <span>Purchases and memberships</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                focusable="false"
                className="ml-[10px]"
                style={{
                  display: "block",
                  width: "24px",
                  height: "24px",
                }}
              >
                <path d="M3,3v18h18V3H3z M4.99,20c0.39-2.62,2.38-5.1,7.01-5.1s6.62,2.48,7.01,5.1H4.99z M9,10c0-1.65,1.35-3,3-3s3,1.35,3,3 c0,1.65-1.35,3-3,3S9,11.65,9,10z M12.72,13.93C14.58,13.59,16,11.96,16,10c0-2.21-1.79-4-4-4c-2.21,0-4,1.79-4,4 c0,1.96,1.42,3.59,3.28,3.93c-4.42,0.25-6.84,2.8-7.28,6V4h16v15.93C19.56,16.73,17.14,14.18,12.72,13.93z"></path>
              </svg>
            </NavLink>

            <hr />
            <NavLink
              to="/tst"
              className=" w-[100%]  mx-auto py-2 flex gap-3 justify-end items-center rounded-xl hover:bg-gray-100 "
            >
              <span>Yor data in YouTube</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                focusable="false"
                className="ml-[10px]"
                style={{
                  display: "block",
                  width: "24px",
                  height: "24px",
                }}
              >
                <path d="M3,3v18h18V3H3z M4.99,20c0.39-2.62,2.38-5.1,7.01-5.1s6.62,2.48,7.01,5.1H4.99z M9,10c0-1.65,1.35-3,3-3s3,1.35,3,3 c0,1.65-1.35,3-3,3S9,11.65,9,10z M12.72,13.93C14.58,13.59,16,11.96,16,10c0-2.21-1.79-4-4-4c-2.21,0-4,1.79-4,4 c0,1.96,1.42,3.59,3.28,3.93c-4.42,0.25-6.84,2.8-7.28,6V4h16v15.93C19.56,16.73,17.14,14.18,12.72,13.93z"></path>
              </svg>
            </NavLink>

            <div className=" w-full flex justify-between items-center">
              <button className="pr-4">///</button>
              <NavLink
                to="/tst"
                className=" w-[90%]  mx-auto py-2 flex gap-3 justify-end items-center rounded-xl hover:bg-gray-100 "
              >
                <span>
                  Appearance: <span>Light</span>
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  focusable="false"
                  className="ml-[10px]"
                  style={{
                    display: "block",
                    width: "24px",
                    height: "24px",
                  }}
                >
                  <path d="M3,3v18h18V3H3z M4.99,20c0.39-2.62,2.38-5.1,7.01-5.1s6.62,2.48,7.01,5.1H4.99z M9,10c0-1.65,1.35-3,3-3s3,1.35,3,3 c0,1.65-1.35,3-3,3S9,11.65,9,10z M12.72,13.93C14.58,13.59,16,11.96,16,10c0-2.21-1.79-4-4-4c-2.21,0-4,1.79-4,4 c0,1.96,1.42,3.59,3.28,3.93c-4.42,0.25-6.84,2.8-7.28,6V4h16v15.93C19.56,16.73,17.14,14.18,12.72,13.93z"></path>
                </svg>
              </NavLink>
            </div>

            <div className=" w-full flex justify-between items-center">
              <button className="pr-4">///</button>
              <NavLink
                to="/tst"
                className=" w-[90%]  mx-auto py-2 flex gap-3 justify-end items-center rounded-xl hover:bg-gray-100 "
              >
                <span>
                  Language: <span>English</span>
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  focusable="false"
                  className="ml-[10px]"
                  style={{
                    display: "block",
                    width: "24px",
                    height: "24px",
                  }}
                >
                  <path d="M3,3v18h18V3H3z M4.99,20c0.39-2.62,2.38-5.1,7.01-5.1s6.62,2.48,7.01,5.1H4.99z M9,10c0-1.65,1.35-3,3-3s3,1.35,3,3 c0,1.65-1.35,3-3,3S9,11.65,9,10z M12.72,13.93C14.58,13.59,16,11.96,16,10c0-2.21-1.79-4-4-4c-2.21,0-4,1.79-4,4 c0,1.96,1.42,3.59,3.28,3.93c-4.42,0.25-6.84,2.8-7.28,6V4h16v15.93C19.56,16.73,17.14,14.18,12.72,13.93z"></path>
                </svg>
              </NavLink>
            </div>

            <div className=" w-full flex justify-between items-center">
              <button className="pr-4">///</button>
              <NavLink
                to="/tst"
                className=" w-[90%]  mx-auto py-2 flex gap-3 justify-end items-center rounded-xl hover:bg-gray-100 "
              >
                <span>
                  Restricted Mode: <span>Off</span>
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  focusable="false"
                  className="ml-[10px]"
                  style={{
                    display: "block",
                    width: "24px",
                    height: "24px",
                  }}
                >
                  <path d="M3,3v18h18V3H3z M4.99,20c0.39-2.62,2.38-5.1,7.01-5.1s6.62,2.48,7.01,5.1H4.99z M9,10c0-1.65,1.35-3,3-3s3,1.35,3,3 c0,1.65-1.35,3-3,3S9,11.65,9,10z M12.72,13.93C14.58,13.59,16,11.96,16,10c0-2.21-1.79-4-4-4c-2.21,0-4,1.79-4,4 c0,1.96,1.42,3.59,3.28,3.93c-4.42,0.25-6.84,2.8-7.28,6V4h16v15.93C19.56,16.73,17.14,14.18,12.72,13.93z"></path>
                </svg>
              </NavLink>
            </div>

            <div className=" w-full flex justify-between items-center">
              <button className="pr-4">///</button>
              <NavLink
                to="/tst"
                className=" w-[90%]  mx-auto py-2 flex gap-3 justify-end items-center rounded-xl hover:bg-gray-100 "
              >
                <span>
                  Location: <span>United States</span>
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  focusable="false"
                  className="ml-[10px]"
                  style={{
                    display: "block",
                    width: "24px",
                    height: "24px",
                  }}
                >
                  <path d="M3,3v18h18V3H3z M4.99,20c0.39-2.62,2.38-5.1,7.01-5.1s6.62,2.48,7.01,5.1H4.99z M9,10c0-1.65,1.35-3,3-3s3,1.35,3,3 c0,1.65-1.35,3-3,3S9,11.65,9,10z M12.72,13.93C14.58,13.59,16,11.96,16,10c0-2.21-1.79-4-4-4c-2.21,0-4,1.79-4,4 c0,1.96,1.42,3.59,3.28,3.93c-4.42,0.25-6.84,2.8-7.28,6V4h16v15.93C19.56,16.73,17.14,14.18,12.72,13.93z"></path>
                </svg>
              </NavLink>
            </div>

            <NavLink
              to="/tst"
              className=" w-[100%]  mx-auto py-2 flex gap-3 justify-end items-center rounded-xl hover:bg-gray-100 "
            >
              <span>Keybord shortcuts</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                focusable="false"
                className="ml-[10px]"
                style={{
                  display: "block",
                  width: "24px",
                  height: "24px",
                }}
              >
                <path d="M3,3v18h18V3H3z M4.99,20c0.39-2.62,2.38-5.1,7.01-5.1s6.62,2.48,7.01,5.1H4.99z M9,10c0-1.65,1.35-3,3-3s3,1.35,3,3 c0,1.65-1.35,3-3,3S9,11.65,9,10z M12.72,13.93C14.58,13.59,16,11.96,16,10c0-2.21-1.79-4-4-4c-2.21,0-4,1.79-4,4 c0,1.96,1.42,3.59,3.28,3.93c-4.42,0.25-6.84,2.8-7.28,6V4h16v15.93C19.56,16.73,17.14,14.18,12.72,13.93z"></path>
              </svg>
            </NavLink>

            <hr />

            <NavLink
              to="/tst"
              className=" w-[100%]  mx-auto py-2 flex gap-3 justify-end items-center rounded-xl hover:bg-gray-100 "
            >
              <span>Settings</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                focusable="false"
                className="ml-[10px]"
                style={{
                  display: "block",
                  width: "24px",
                  height: "24px",
                }}
              >
                <path d="M3,3v18h18V3H3z M4.99,20c0.39-2.62,2.38-5.1,7.01-5.1s6.62,2.48,7.01,5.1H4.99z M9,10c0-1.65,1.35-3,3-3s3,1.35,3,3 c0,1.65-1.35,3-3,3S9,11.65,9,10z M12.72,13.93C14.58,13.59,16,11.96,16,10c0-2.21-1.79-4-4-4c-2.21,0-4,1.79-4,4 c0,1.96,1.42,3.59,3.28,3.93c-4.42,0.25-6.84,2.8-7.28,6V4h16v15.93C19.56,16.73,17.14,14.18,12.72,13.93z"></path>
              </svg>
            </NavLink>

            <hr />

            <NavLink
              to="/tst"
              className=" w-[100%]  mx-auto py-2 flex gap-3 justify-end items-center rounded-xl hover:bg-gray-100 "
            >
              <span>Help</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                focusable="false"
                className="ml-[10px]"
                style={{
                  display: "block",
                  width: "24px",
                  height: "24px",
                }}
              >
                <path d="M3,3v18h18V3H3z M4.99,20c0.39-2.62,2.38-5.1,7.01-5.1s6.62,2.48,7.01,5.1H4.99z M9,10c0-1.65,1.35-3,3-3s3,1.35,3,3 c0,1.65-1.35,3-3,3S9,11.65,9,10z M12.72,13.93C14.58,13.59,16,11.96,16,10c0-2.21-1.79-4-4-4c-2.21,0-4,1.79-4,4 c0,1.96,1.42,3.59,3.28,3.93c-4.42,0.25-6.84,2.8-7.28,6V4h16v15.93C19.56,16.73,17.14,14.18,12.72,13.93z"></path>
              </svg>
            </NavLink>

            <NavLink
              to="/tst"
              className=" w-[100%]  mx-auto py-2 flex gap-3 justify-end items-center rounded-xl hover:bg-gray-100 "
            >
              <span>Send feedback</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                focusable="false"
                className="ml-[10px]"
                style={{
                  display: "block",
                  width: "24px",
                  height: "24px",
                }}
              >
                <path d="M3,3v18h18V3H3z M4.99,20c0.39-2.62,2.38-5.1,7.01-5.1s6.62,2.48,7.01,5.1H4.99z M9,10c0-1.65,1.35-3,3-3s3,1.35,3,3 c0,1.65-1.35,3-3,3S9,11.65,9,10z M12.72,13.93C14.58,13.59,16,11.96,16,10c0-2.21-1.79-4-4-4c-2.21,0-4,1.79-4,4 c0,1.96,1.42,3.59,3.28,3.93c-4.42,0.25-6.84,2.8-7.28,6V4h16v15.93C19.56,16.73,17.14,14.18,12.72,13.93z"></path>
              </svg>
            </NavLink>
          </div>
        </div>

        <div className=" relative father">
          <button>
            <SlBell size={23} />
          </button>
          {/* div-notifications */}
          <div className="hidden child w-[400px] text-[14px] p-2 h-max absolute  top-[35px] right-0 flex-col rounded-xl bg-white shadow-orange-100 border-2 bordder-black shadow-lg">
            {/* notif-1 */}
            <div className=" w-full h-max flex gap-2 items-center">
              <img className="w-[40px] h-[40px] rounded-full" src="" alt="" />
              <div className="flex flex-col items-end">
                <p className=" text-left">
                  incidunt in aut tenetur sint debitis error pariatur provident
                  consequuntur
                </p>
                <span> 2 weeks ago</span>
              </div>
              <img className="w-[70px] h-[50px] rounded-lg" src="" alt="" />
            </div>
          </div>
        </div>

        <div className="relative father">
          <button>
            <PiBatteryPlus size={23} />
          </button>
          {/* div-upload video */}
          <div className="hidden child w-[150px] text-[14px] p-2 h-max absolute  top-[30px] right-0 flex-col rounded-xl bg-white shadow-orange-100 border-2 bordder-black shadow-lg">
            <NavLink
              to="/shorts"
              className=" w-[100%]  mx-auto py-1 flex gap-3 justify-end items-center rounded-xl hover:bg-gray-100 "
            >
              <span>Upload video</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                className="ml-[10px]"
                viewBox="0 0 24 24"
                width="24"
                focusable="false"
                style={{
                  display: "block",
                  width: "25px",
                  height: "25px",
                }}
              >
                <path d="M10 14.65v-5.3L15 12l-5 2.65zm7.77-4.33-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94c-1.29.68-2.07 2.04-2 3.49.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93c-1.83.97-2.53 3.24-1.56 5.07.97 1.83 3.24 2.53 5.07 1.56l8.5-4.5c1.29-.68 2.06-2.04 1.99-3.49-.07-1.42-.94-2.68-2.23-3.25zm-.23 5.86-8.5 4.5c-1.34.71-3.01.2-3.72-1.14-.71-1.34-.2-3.01 1.14-3.72l2.04-1.08v-1.21l-.69-.28-1.11-.46c-.99-.41-1.65-1.35-1.7-2.41-.05-1.06.52-2.06 1.46-2.56l8.5-4.5c1.34-.71 3.01-.2 3.72 1.14.71 1.34.2 3.01-1.14 3.72L15.5 9.26v1.21l1.8.74c.99.41 1.65 1.35 1.7 2.41.05 1.06-.52 2.06-1.46 2.56z"></path>
              </svg>
            </NavLink>

            <NavLink
              to="/shorts"
              className=" w-[100%]  mx-auto py-1 flex gap-3 justify-end items-center rounded-xl hover:bg-gray-100 "
            >
              <span>Go live</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                className="ml-[10px]"
                viewBox="0 0 24 24"
                width="24"
                focusable="false"
                style={{
                  display: "block",
                  width: "25px",
                  height: "25px",
                }}
              >
                <path d="M10 14.65v-5.3L15 12l-5 2.65zm7.77-4.33-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94c-1.29.68-2.07 2.04-2 3.49.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93c-1.83.97-2.53 3.24-1.56 5.07.97 1.83 3.24 2.53 5.07 1.56l8.5-4.5c1.29-.68 2.06-2.04 1.99-3.49-.07-1.42-.94-2.68-2.23-3.25zm-.23 5.86-8.5 4.5c-1.34.71-3.01.2-3.72-1.14-.71-1.34-.2-3.01 1.14-3.72l2.04-1.08v-1.21l-.69-.28-1.11-.46c-.99-.41-1.65-1.35-1.7-2.41-.05-1.06.52-2.06 1.46-2.56l8.5-4.5c1.34-.71 3.01-.2 3.72 1.14.71 1.34.2 3.01-1.14 3.72L15.5 9.26v1.21l1.8.74c.99.41 1.65 1.35 1.7 2.41.05 1.06-.52 2.06-1.46 2.56z"></path>
              </svg>
            </NavLink>
          </div>
        </div>

        <div className=" sm:hidden">
          <button>
            <FaMicrophone size={23} />
          </button>
        </div>

        <div className=" sm:hidden">
          <button className="">
            <IoMdSearch size={23} />
          </button>
        </div>
      </div>

      <div className="div-2 px-3 w-full hidden sm:flex justify-center gap-3 items-center">
        <div className="">
          <button>
            <FaMicrophone size={23} />
          </button>
        </div>

        <div className=" w-[100%] md:w-[400px] lg:w-[600px] h-[40px] flex items-center gap-2 border-2 rounded-3xl border-gray-300 overflow-hidden">
          <button className=" w-[40px] h-[100%] px-2  border-l-2 border-gray-300 rounded-r-3xl hover:bg-gray-300">
            <IoMdSearch size={25} />
          </button>
          <input
            dir=""
            className=" w-[100%] px-3 h-[100%] outline-none placeholder:text-left "
            placeholder="Search"
            type="text"
            name=""
            id=""
          />
          <span className="hidden px-2 mx-2 bg-red-400">X</span>
        </div>
      </div>

      <div className="div-3 pl-2 flex items-center gap-4">
        <NavLink className=" w-[100px] h-[45px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="external-icon"
            viewBox="0 0 90 20"
            focusable="false"
            style={{
              pointerEvents: "none",
              display: "block",
              width: "100%",
              height: "100%",
            }}
          >
            <svg
              viewBox="0 0 90 20"
              preserveAspectRatio="xMidYMid meet"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path
                  d="M27.9727 3.12324C27.6435 1.89323 26.6768 0.926623 25.4468 0.597366C23.2197 2.24288e-07 14.285 0 14.285 0C14.285 0 5.35042 2.24288e-07 3.12323 0.597366C1.89323 0.926623 0.926623 1.89323 0.597366 3.12324C2.24288e-07 5.35042 0 10 0 10C0 10 2.24288e-07 14.6496 0.597366 16.8768C0.926623 18.1068 1.89323 19.0734 3.12323 19.4026C5.35042 20 14.285 20 14.285 20C14.285 20 23.2197 20 25.4468 19.4026C26.6768 19.0734 27.6435 18.1068 27.9727 16.8768C28.5701 14.6496 28.5701 10 28.5701 10C28.5701 10 28.5677 5.35042 27.9727 3.12324Z"
                  fill="#FF0000"
                ></path>
                <path
                  d="M11.4253 14.2854L18.8477 10.0004L11.4253 5.71533V14.2854Z"
                  fill="white"
                ></path>
              </g>
              <g>
                <g>
                  <path d="M34.6024 13.0036L31.3945 1.41846H34.1932L35.3174 6.6701C35.6043 7.96361 35.8136 9.06662 35.95 9.97913H36.0323C36.1264 9.32532 36.3381 8.22937 36.665 6.68892L37.8291 1.41846H40.6278L37.3799 13.0036V18.561H34.6001V13.0036H34.6024Z"></path>
                  <path d="M41.4697 18.1937C40.9053 17.8127 40.5031 17.22 40.2632 16.4157C40.0257 15.6114 39.9058 14.5437 39.9058 13.2078V11.3898C39.9058 10.0422 40.0422 8.95805 40.315 8.14196C40.5878 7.32588 41.0135 6.72851 41.592 6.35457C42.1706 5.98063 42.9302 5.79248 43.871 5.79248C44.7976 5.79248 45.5384 5.98298 46.0981 6.36398C46.6555 6.74497 47.0647 7.34234 47.3234 8.15137C47.5821 8.96275 47.7115 10.0422 47.7115 11.3898V13.2078C47.7115 14.5437 47.5845 15.6161 47.3329 16.4251C47.0812 17.2365 46.672 17.8292 46.1075 18.2031C45.5431 18.5771 44.7764 18.7652 43.8098 18.7652C42.8126 18.7675 42.0342 18.5747 41.4697 18.1937ZM44.6353 16.2323C44.7905 15.8231 44.8705 15.1575 44.8705 14.2309V10.3292C44.8705 9.43077 44.7929 8.77225 44.6353 8.35833C44.4777 7.94206 44.2026 7.7351 43.8074 7.7351C43.4265 7.7351 43.156 7.94206 43.0008 8.35833C42.8432 8.77461 42.7656 9.43077 42.7656 10.3292V14.2309C42.7656 15.1575 42.8408 15.8254 42.9914 16.2323C43.1419 16.6415 43.4123 16.8461 43.8074 16.8461C44.2026 16.8461 44.4777 16.6415 44.6353 16.2323Z"></path>
                  <path d="M56.8154 18.5634H54.6094L54.3648 17.03H54.3037C53.7039 18.1871 52.8055 18.7656 51.6061 18.7656C50.7759 18.7656 50.1621 18.4928 49.767 17.9496C49.3719 17.4039 49.1743 16.5526 49.1743 15.3955V6.03751H51.9942V15.2308C51.9942 15.7906 52.0553 16.188 52.1776 16.4256C52.2999 16.6631 52.5045 16.783 52.7914 16.783C53.036 16.783 53.2712 16.7078 53.497 16.5573C53.7228 16.4067 53.8874 16.2162 53.9979 15.9858V6.03516H56.8154V18.5634Z"></path>
                  <path d="M64.4755 3.68758H61.6768V18.5629H58.9181V3.68758H56.1194V1.42041H64.4755V3.68758Z"></path>
                  <path d="M71.2768 18.5634H69.0708L68.8262 17.03H68.7651C68.1654 18.1871 67.267 18.7656 66.0675 18.7656C65.2373 18.7656 64.6235 18.4928 64.2284 17.9496C63.8333 17.4039 63.6357 16.5526 63.6357 15.3955V6.03751H66.4556V15.2308C66.4556 15.7906 66.5167 16.188 66.639 16.4256C66.7613 16.6631 66.9659 16.783 67.2529 16.783C67.4974 16.783 67.7326 16.7078 67.9584 16.5573C68.1842 16.4067 68.3488 16.2162 68.4593 15.9858V6.03516H71.2768V18.5634Z"></path>
                  <path d="M80.609 8.0387C80.4373 7.24849 80.1621 6.67699 79.7812 6.32186C79.4002 5.96674 78.8757 5.79035 78.2078 5.79035C77.6904 5.79035 77.2059 5.93616 76.7567 6.23014C76.3075 6.52412 75.9594 6.90747 75.7148 7.38489H75.6937V0.785645H72.9773V18.5608H75.3056L75.5925 17.3755H75.6537C75.8724 17.7988 76.1993 18.1304 76.6344 18.3774C77.0695 18.622 77.554 18.7443 78.0855 18.7443C79.038 18.7443 79.7412 18.3045 80.1904 17.4272C80.6396 16.5476 80.8653 15.1765 80.8653 13.3092V11.3266C80.8653 9.92722 80.7783 8.82892 80.609 8.0387ZM78.0243 13.1492C78.0243 14.0617 77.9867 14.7767 77.9114 15.2941C77.8362 15.8115 77.7115 16.1808 77.5328 16.3971C77.3564 16.6158 77.1165 16.724 76.8178 16.724C76.585 16.724 76.371 16.6699 76.1734 16.5594C75.9759 16.4512 75.816 16.2866 75.6937 16.0702V8.96062C75.7877 8.6196 75.9524 8.34209 76.1852 8.12337C76.4157 7.90465 76.6697 7.79646 76.9401 7.79646C77.2271 7.79646 77.4481 7.90935 77.6034 8.13278C77.7609 8.35855 77.8691 8.73485 77.9303 9.26636C77.9914 9.79787 78.022 10.5528 78.022 11.5335V13.1492H78.0243Z"></path>
                  <path d="M84.8657 13.8712C84.8657 14.6755 84.8892 15.2776 84.9363 15.6798C84.9833 16.0819 85.0821 16.3736 85.2326 16.5594C85.3831 16.7428 85.6136 16.8345 85.9264 16.8345C86.3474 16.8345 86.639 16.6699 86.7942 16.343C86.9518 16.0161 87.0365 15.4705 87.0506 14.7085L89.4824 14.8519C89.4965 14.9601 89.5035 15.1106 89.5035 15.3011C89.5035 16.4582 89.186 17.3237 88.5534 17.8952C87.9208 18.4667 87.0247 18.7536 85.8676 18.7536C84.4777 18.7536 83.504 18.3185 82.9466 17.446C82.3869 16.5735 82.1094 15.2259 82.1094 13.4008V11.2136C82.1094 9.33452 82.3987 7.96105 82.9772 7.09558C83.5558 6.2301 84.5459 5.79736 85.9499 5.79736C86.9165 5.79736 87.6597 5.97375 88.1771 6.32888C88.6945 6.684 89.059 7.23433 89.2707 7.98457C89.4824 8.7348 89.5882 9.76961 89.5882 11.0913V13.2362H84.8657V13.8712ZM85.2232 7.96811C85.0797 8.14449 84.9857 8.43377 84.9363 8.83593C84.8892 9.2381 84.8657 9.84722 84.8657 10.6657V11.5641H86.9283V10.6657C86.9283 9.86133 86.9001 9.25221 86.846 8.83593C86.7919 8.41966 86.6931 8.12803 86.5496 7.95635C86.4062 7.78702 86.1851 7.7 85.8864 7.7C85.5854 7.70235 85.3643 7.79172 85.2232 7.96811Z"></path>
                </g>
              </g>
            </svg>
          </svg>
        </NavLink>

        {/* menu-hamber */}
        <div className="flex flex-col pl-3 relative">
          <button ref={btnnav} onClick={togglefunc}>
            <FaBarsStaggered size={23} />
          </button>

          <div className=" absolute top-8 -left-4">
            <div className="div-tst ">
              {toggleflag ? (
                <div ref={div2} className=" relative -top-2 -left-2">
                  <div className=" menuscroll py-2 w-[230px] h-screen flex flex-col items-end overflow-scroll overflow-x-auto ">
                    <div className="divmenu px-1 w-[230px] h-max flex flex-col gap-3 items-end bg-white">
                      <NavLink
                        to="/"
                        className=" w-[90%]  mx-auto py-2 flex gap-3 justify-end items-center rounded-xl hover:bg-gray-100 "
                      >
                        <span>Home</span>
                        <IoMdHome className="ml-[10px]" size={24} />
                      </NavLink>

                      <NavLink
                        to="/shorts"
                        className=" w-[90%]  mx-auto py-2 flex gap-3 justify-end items-center rounded-xl hover:bg-gray-100 "
                      >
                        <span>Shorts</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="24"
                          className="ml-[10px]"
                          viewBox="0 0 24 24"
                          width="24"
                          focusable="false"
                          style={{
                            display: "block",
                            width: "25px",
                            height: "25px",
                          }}
                        >
                          <path d="M10 14.65v-5.3L15 12l-5 2.65zm7.77-4.33-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94c-1.29.68-2.07 2.04-2 3.49.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93c-1.83.97-2.53 3.24-1.56 5.07.97 1.83 3.24 2.53 5.07 1.56l8.5-4.5c1.29-.68 2.06-2.04 1.99-3.49-.07-1.42-.94-2.68-2.23-3.25zm-.23 5.86-8.5 4.5c-1.34.71-3.01.2-3.72-1.14-.71-1.34-.2-3.01 1.14-3.72l2.04-1.08v-1.21l-.69-.28-1.11-.46c-.99-.41-1.65-1.35-1.7-2.41-.05-1.06.52-2.06 1.46-2.56l8.5-4.5c1.34-.71 3.01-.2 3.72 1.14.71 1.34.2 3.01-1.14 3.72L15.5 9.26v1.21l1.8.74c.99.41 1.65 1.35 1.7 2.41.05 1.06-.52 2.06-1.46 2.56z"></path>
                        </svg>
                      </NavLink>

                      <NavLink
                        to="/subscriptions"
                        className=" w-[90%]  mx-auto py-2 flex gap-3 justify-end items-center rounded-xl hover:bg-gray-100 "
                      >
                        <span>Subscriptions</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="24"
                          className="ml-[10px]"
                          viewBox="0 0 24 24"
                          width="24"
                          focusable="false"
                          style={{
                            display: "block",
                            width: "27px",
                            height: "27px",
                          }}
                        >
                          <path d="M10 18v-6l5 3-5 3zm7-15H7v1h10V3zm3 3H4v1h16V6zm2 3H2v12h20V9zM3 10h18v10H3V10z"></path>
                        </svg>
                      </NavLink>

                      <hr />

                      <NavLink
                        to="/tst"
                        className=" w-[90%]  mx-auto py-2 flex gap-3 justify-end items-center rounded-xl hover:bg-gray-100 "
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="16"
                          viewBox="0 0 16 16"
                          width="16"
                          focusable="false"
                          style={{
                            display: "block",
                            width: "24px",
                            height: "24px",
                          }}
                        >
                          <path d="M4.97 12.65 9.62 8 4.97 3.35l.71-.71L11.03 8l-5.35 5.35-.71-.7z"></path>
                        </svg>
                        <span>You</span>
                      </NavLink>

                      <NavLink
                        to="/tst"
                        className=" w-[90%]  mx-auto py-2 flex gap-3 justify-end items-center rounded-xl hover:bg-gray-100 "
                      >
                        <span>Your channel</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          focusable="false"
                          className="ml-[10px]"
                          style={{
                            display: "block",
                            width: "24px",
                            height: "24px",
                          }}
                        >
                          <path d="M3,3v18h18V3H3z M4.99,20c0.39-2.62,2.38-5.1,7.01-5.1s6.62,2.48,7.01,5.1H4.99z M9,10c0-1.65,1.35-3,3-3s3,1.35,3,3 c0,1.65-1.35,3-3,3S9,11.65,9,10z M12.72,13.93C14.58,13.59,16,11.96,16,10c0-2.21-1.79-4-4-4c-2.21,0-4,1.79-4,4 c0,1.96,1.42,3.59,3.28,3.93c-4.42,0.25-6.84,2.8-7.28,6V4h16v15.93C19.56,16.73,17.14,14.18,12.72,13.93z"></path>
                        </svg>
                      </NavLink>

                      <NavLink
                        to="/tst"
                        className=" w-[90%]  mx-auto py-2 flex gap-3 justify-end items-center rounded-xl hover:bg-gray-100 "
                      >
                        <span>History</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="24"
                          className="ml-[10px]"
                          style={{
                            display: "block",
                            width: "24px",
                            height: "24px",
                          }}
                          viewBox="0 0 24 24"
                          width="24"
                          focusable="false"
                        >
                          <g>
                            <path d="M14.97 16.95 10 13.87V7h2v5.76l4.03 2.49-1.06 1.7zM22 12c0 5.51-4.49 10-10 10S2 17.51 2 12h1c0 4.96 4.04 9 9 9s9-4.04 9-9-4.04-9-9-9C8.81 3 5.92 4.64 4.28 7.38c-.11.18-.22.37-.31.56L3.94 8H8v1H1.96V3h1v4.74c.04-.09.07-.17.11-.25.11-.22.23-.42.35-.63C5.22 3.86 8.51 2 12 2c5.51 0 10 4.49 10 10z"></path>
                          </g>
                        </svg>
                      </NavLink>

                      <NavLink
                        to="/tst"
                        className=" w-[90%]  mx-auto py-2 flex gap-3 justify-end items-center rounded-xl hover:bg-gray-100 "
                      >
                        <span>Your videos</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="24"
                          className="ml-[10px]"
                          viewBox="0 0 24 24"
                          width="24"
                          focusable="false"
                          style={{
                            display: "block",
                            width: "24px",
                            height: "24px",
                          }}
                        >
                          <path d="m10 8 6 4-6 4V8zm11-5v18H3V3h18zm-1 1H4v16h16V4z"></path>
                        </svg>
                      </NavLink>

                      <NavLink
                        to="/tst"
                        className=" w-[90%]  mx-auto py-2 flex gap-3 justify-end items-center rounded-xl hover:bg-gray-100 "
                      >
                        <span>Watch later</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="24"
                          className="ml-[10px]"
                          viewBox="0 0 24 24"
                          width="24"
                          focusable="false"
                          style={{
                            display: "block",
                            width: "24px",
                            height: "24px",
                          }}
                        >
                          <path d="M14.97 16.95 10 13.87V7h2v5.76l4.03 2.49-1.06 1.7zM12 3c-4.96 0-9 4.04-9 9s4.04 9 9 9 9-4.04 9-9-4.04-9-9-9m0-1c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2z"></path>
                        </svg>
                      </NavLink>

                      <button
                        ref={btnmore}
                        onClick={showmore}
                        className=" w-[90%]  mx-auto py-2 flex gap-3 justify-end items-center rounded-xl hover:bg-gray-100  "
                      >
                        Show more
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="24"
                          viewBox="0 0 24 24"
                          width="24"
                          className="ml-[10px]"
                          focusable="false"
                          style={{
                            display: "block",
                            width: "24px",
                            height: "24px",
                          }}
                        >
                          <path d="m18 9.28-6.35 6.35-6.37-6.35.72-.71 5.64 5.65 5.65-5.65z"></path>
                        </svg>
                      </button>

                      {flag1 ? (
                        <div className=" px-4 w-[240px] mx-auto flex flex-col gap-3 items-end">
                          <NavLink
                            to="/tst"
                            className=" w-[90%]  mx-auto py-2 flex gap-3 justify-end items-center rounded-xl hover:bg-gray-100 "
                          >
                            <span>Liked videos</span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              height="24"
                              viewBox="0 0 24 24"
                              className="ml-[10px]"
                              width="24"
                              focusable="false"
                              style={{
                                display: "block",
                                width: "24px",
                                height: "24px",
                              }}
                            >
                              <path d="M18.77,11h-4.23l1.52-4.94C16.38,5.03,15.54,4,14.38,4c-0.58,0-1.14,0.24-1.52,0.65L7,11H3v10h4h1h9.43 c1.06,0,1.98-0.67,2.19-1.61l1.34-6C21.23,12.15,20.18,11,18.77,11z M7,20H4v-8h3V20z M19.98,13.17l-1.34,6 C18.54,19.65,18.03,20,17.43,20H8v-8.61l5.6-6.06C13.79,5.12,14.08,5,14.38,5c0.26,0,0.5,0.11,0.63,0.3 c0.07,0.1,0.15,0.26,0.09,0.47l-1.52,4.94L13.18,12h1.35h4.23c0.41,0,0.8,0.17,1.03,0.46C19.92,12.61,20.05,12.86,19.98,13.17z"></path>
                            </svg>
                          </NavLink>

                          <NavLink
                            to="/tst"
                            className=" w-[90%]  mx-auto py-2 flex gap-3 justify-end items-center rounded-xl hover:bg-gray-100 "
                          >
                            <span>play list</span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              height="24"
                              viewBox="0 0 24 24"
                              className="ml-[10px]"
                              width="24"
                              focusable="false"
                              style={{
                                display: "block",
                                width: "24px",
                                height: "24px",
                              }}
                            >
                              <path d="M22 7H2v1h20V7zm-9 5H2v-1h11v1zm0 4H2v-1h11v1zm2 3v-8l7 4-7 4z"></path>
                            </svg>
                          </NavLink>

                          <button
                            ref={btnless}
                            onClick={showmore}
                            className=" w-[90%]  mx-auto py-2 flex gap-3 justify-end items-center rounded-xl hover:bg-gray-100  "
                          >
                            Show less
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              height="24"
                              viewBox="0 0 24 24"
                              className="ml-[10px]"
                              width="24"
                              focusable="false"
                              style={{
                                display: "block",
                                width: "24px",
                                height: "24px",
                              }}
                            >
                              <path d="M18.4 14.6 12 8.3l-6.4 6.3.8.8L12 9.7l5.6 5.7z"></path>
                            </svg>
                          </button>
                        </div>
                      ) : (
                        <></>
                      )}

                      <hr />

                      <p className="pl-2">Subscriptions</p>

                      <NavLink
                        to="/tst"
                        className=" w-[90%]  mx-auto py-2 flex gap-3 justify-end items-center rounded-xl hover:bg-gray-100 "
                      >
                        <div className=" w-[5px] h-[5px] rounded-full bg-blue-600"></div>
                        <span>tst-1</span>
                        <img src={imgreact} alt="" />
                      </NavLink>

                      <NavLink
                        to="/tst"
                        className=" w-[90%]  mx-auto py-2 flex gap-3 justify-end items-center rounded-xl hover:bg-gray-100 "
                      >
                        <span>Browse channels</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="24"
                          viewBox="0 0 24 24"
                          width="24"
                          focusable="false"
                          style={{
                            display: "block",
                            width: "24px",
                            height: "24px",
                          }}
                        >
                          <path d="M17 13h-4v4h-2v-4H7v-2h4V7h2v4h4v2zM12 3c-4.96 0-9 4.04-9 9s4.04 9 9 9 9-4.04 9-9-4.04-9-9-9m0-1c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2z"></path>
                        </svg>
                      </NavLink>

                      <button className=" w-[90%]  mx-auto py-2 flex gap-3 justify-end items-center rounded-xl hover:bg-gray-100  ">
                        Show less
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="24"
                          viewBox="0 0 24 24"
                          width="24"
                          focusable="false"
                          style={{
                            display: "block",
                            width: "24px",
                            height: "24px",
                          }}
                        >
                          <path d="M18.4 14.6 12 8.3l-6.4 6.3.8.8L12 9.7l5.6 5.7z"></path>
                        </svg>
                      </button>

                      <hr />

                      <p className="pl-2">Explore</p>

                      <NavLink
                        to="/tst"
                        className=" w-[90%]  mx-auto py-2 flex gap-3 justify-end items-center rounded-xl hover:bg-gray-100 "
                      >
                        <span>Trending</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="24"
                          viewBox="0 0 24 24"
                          width="24"
                          focusable="false"
                          style={{
                            display: "block",
                            width: "24px",
                            height: "24px",
                          }}
                        >
                          <path d="M19 3.87v9.77C19 17.7 15.86 21 12 21s-7-3.3-7-7.37v-.13c0-1.06.22-2.13.62-3.09.5-1.19 1.29-2.21 2.27-2.97.85-.66 1.83-1.14 2.87-1.65.39-.19.77-.38 1.15-.58.36-.19.72-.38 1.08-.56v3.22l1.55-1.04L19 3.87M20 2l-6 4V3c-.85.44-1.7.88-2.55 1.33-1.41.74-2.9 1.34-4.17 2.32-1.13.87-2.02 2.05-2.58 3.37-.46 1.09-.7 2.29-.7 3.48v.14C4 18.26 7.58 22 12 22s8-3.74 8-8.36V2zM9.45 12.89 14 10v5.7c0 1.82-1.34 3.3-3 3.3s-3-1.47-3-3.3c0-1.19.58-2.23 1.45-2.81z"></path>
                        </svg>
                      </NavLink>

                      <NavLink
                        to="/tst"
                        className=" w-[90%]  mx-auto py-2 flex gap-3 justify-end items-center rounded-xl hover:bg-gray-100 "
                      >
                        <span>Shopping</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="24"
                          viewBox="0 0 24 24"
                          width="24"
                          focusable="false"
                          style={{
                            display: "block",
                            width: "24px",
                            height: "24px",
                          }}
                        >
                          <path d="M7 8c0 2.76 2.24 5 5 5s5-2.24 5-5h-1c0 2.21-1.79 4-4 4s-4-1.79-4-4H7zm9.9-2c-.46-2.28-2.48-4-4.9-4S7.56 3.72 7.1 6H4v14c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V6h-3.1zM12 3c1.86 0 3.43 1.27 3.87 3H8.13c.44-1.73 2.01-3 3.87-3zm7 17c0 .55-.45 1-1 1H6c-.55 0-1-.45-1-1V7h14v13z"></path>
                        </svg>
                      </NavLink>

                      <NavLink
                        to="/tst"
                        className=" w-[90%]  mx-auto py-2 flex gap-3 justify-end items-center rounded-xl hover:bg-gray-100 "
                      >
                        <span>Music</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="24"
                          viewBox="0 0 24 24"
                          width="24"
                          focusable="false"
                          style={{
                            display: "block",
                            width: "24px",
                            height: "24px",
                          }}
                        >
                          <path d="M12 4v9.38c-.73-.84-1.8-1.38-3-1.38-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V8h6V4h-7zM9 19c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm9-12h-5V5h5v2z"></path>
                        </svg>
                      </NavLink>

                      <NavLink
                        to="/tst"
                        className=" w-[90%]  mx-auto py-2 flex gap-3 justify-end items-center rounded-xl hover:bg-gray-100 "
                      >
                        <span>Movies & TV</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="24"
                          viewBox="0 0 24 24"
                          width="24"
                          focusable="false"
                          style={{
                            display: "block",
                            width: "24px",
                            height: "24px",
                          }}
                        >
                          <path d="m22.01 4.91-.5-2.96L1.64 5.19 2 8v13h20V8H3.06l18.95-3.09zM5 9l1 3h3L8 9h2l1 3h3l-1-3h2l1 3h3l-1-3h3v11H3V9h2z"></path>
                        </svg>
                      </NavLink>

                      <NavLink
                        to="/tst"
                        className=" w-[90%]  mx-auto py-2 flex gap-3 justify-end items-center rounded-xl hover:bg-gray-100 "
                      >
                        <span>Live</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="24"
                          viewBox="0 0 24 24"
                          width="24"
                          focusable="false"
                          style={{
                            display: "block",
                            width: "24px",
                            height: "24px",
                          }}
                        >
                          <g>
                            <path d="M14 12c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zM8.48 8.45l-.71-.7C6.68 8.83 6 10.34 6 12s.68 3.17 1.77 4.25l.71-.71C7.57 14.64 7 13.39 7 12s.57-2.64 1.48-3.55zm7.75-.7-.71.71c.91.9 1.48 2.15 1.48 3.54s-.57 2.64-1.48 3.55l.71.71C17.32 15.17 18 13.66 18 12s-.68-3.17-1.77-4.25zM5.65 5.63l-.7-.71C3.13 6.73 2 9.24 2 12s1.13 5.27 2.95 7.08l.71-.71C4.02 16.74 3 14.49 3 12s1.02-4.74 2.65-6.37zm13.4-.71-.71.71C19.98 7.26 21 9.51 21 12s-1.02 4.74-2.65 6.37l.71.71C20.87 17.27 22 14.76 22 12s-1.13-5.27-2.95-7.08z"></path>
                          </g>
                        </svg>
                      </NavLink>

                      <NavLink
                        to="/tst"
                        className=" w-[90%]  mx-auto py-2 flex gap-3 justify-end items-center rounded-xl hover:bg-gray-100 "
                      >
                        <span>Gaming</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="24"
                          viewBox="0 0 24 24"
                          width="24"
                          focusable="false"
                          style={{
                            display: "block",
                            width: "24px",
                            height: "24px",
                          }}
                        >
                          <path d="M10 12H8v2H6v-2H4v-2h2V8h2v2h2v2zm7 .5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5.67 1.5 1.5 1.5 1.5-.67 1.5-1.5zm3-3c0-.83-.67-1.5-1.5-1.5S17 8.67 17 9.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5zm-3.03-4.35-4.5 2.53-.49.27-.49-.27-4.5-2.53L3 7.39v6.43l8.98 5.04 8.98-5.04V7.39l-3.99-2.24m0-1.15 4.99 2.8v7.6L11.98 20 2 14.4V6.8L6.99 4l4.99 2.8L16.97 4z"></path>
                        </svg>
                      </NavLink>

                      <NavLink
                        to="/tst"
                        className=" w-[90%]  mx-auto py-2 flex gap-3 justify-end items-center rounded-xl hover:bg-gray-100 "
                      >
                        <span>News</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="24"
                          viewBox="0 0 24 24"
                          width="24"
                          focusable="false"
                          style={{
                            display: "block",
                            width: "24px",
                            height: "24px",
                          }}
                        >
                          <path d="M11 11v6H7v-6h4m1-1H6v8h6v-8zM3 3.03V21h14l4-4V3.03M20 4v11.99l-.01.01H16v3.99l-.01.01H4V4h16zm-2 4H6V6h12v2zm0 7h-5v-2h5v2zm0-3h-5v-2h5v2z"></path>
                        </svg>
                      </NavLink>

                      <NavLink
                        to="/tst"
                        className=" w-[90%]  mx-auto py-2 flex gap-3 justify-end items-center rounded-xl hover:bg-gray-100 "
                      >
                        <span>Sports</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="24"
                          viewBox="0 0 24 24"
                          width="24"
                          focusable="false"
                          style={{
                            display: "block",
                            width: "24px",
                            height: "24px",
                          }}
                        >
                          <path d="M18 5V2H6v3H3v6l3.23 1.61c.7 2.5 2.97 4.34 5.69 4.38L8 19v3h8v-3l-3.92-2.01c2.72-.04 4.99-1.88 5.69-4.38L21 11V5h-3zM6 11.38l-2-1V6h2v5.38zM15 21H9v-1.39l3-1.54 3 1.54V21zm2-10c0 2.76-2.24 5-5 5s-5-2.24-5-5V3h10v8zm3-.62-2 1V6h2v4.38z"></path>
                        </svg>
                      </NavLink>

                      <NavLink
                        to="/tst"
                        className=" w-[90%]  mx-auto py-2 flex gap-3 justify-end items-center rounded-xl hover:bg-gray-100 "
                      >
                        <span>Learning</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="24"
                          viewBox="0 0 24 24"
                          width="24"
                          focusable="false"
                          style={{
                            display: "block",
                            width: "24px",
                            height: "24px",
                          }}
                        >
                          <path d="M16 21h-2.28c-.35.6-.98 1-1.72 1s-1.38-.4-1.72-1H8v-1h8v1zm4-11c0 2.96-1.61 5.54-4 6.92V19H8v-2.08C5.61 15.54 4 12.96 4 10c0-4.42 3.58-8 8-8s8 3.58 8 8zm-5 8v-1.66l.5-.29C17.66 14.8 19 12.48 19 10c0-3.86-3.14-7-7-7s-7 3.14-7 7c0 2.48 1.34 4.8 3.5 6.06l.5.28V18h6z"></path>
                        </svg>
                      </NavLink>

                      <NavLink
                        to="/tst"
                        className=" w-[90%]  mx-auto py-2 flex gap-3 justify-end items-center rounded-xl hover:bg-gray-100 "
                      >
                        <span>Fashion & Beauty</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="24"
                          style={{
                            display: "block",
                            width: "24px",
                            height: "24px",
                          }}
                          viewBox="0 0 24 24"
                          width="24"
                          focusable="false"
                        >
                          <path d="M12.5 6.44v-.5C13.36 5.71 14 4.93 14 4c0-1.1-.9-2-2-2s-2 .9-2 2h1c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1h-.5v1.44L4 13h2v6h1v2h1v-2h2v3h1v-3h2v2h1v-2h1v-3h3v-3h2l-7.5-6.56zM6.66 12 12 7.33 17.34 12H6.66zM14 18H7v-5h7v5zm1-3v-2h2v2h-2z"></path>
                        </svg>
                      </NavLink>

                      <NavLink
                        to="/tst"
                        className=" w-[90%]  mx-auto py-2 flex gap-3 justify-end items-center rounded-xl hover:bg-gray-100 "
                      >
                        <span>Podcasts</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="24"
                          viewBox="0 0 24 24"
                          width="24"
                          focusable="false"
                          style={{
                            display: "block",
                            width: "24px",
                            height: "24px",
                          }}
                        >
                          <path d="M6 12c0-3.31 2.69-6 6-6s6 2.69 6 6c0 1.66-.67 3.16-1.77 4.25l-.71-.71C16.44 14.63 17 13.38 17 12c0-2.76-2.24-5-5-5s-5 2.24-5 5c0 1.38.56 2.63 1.47 3.54l-.71.71C6.67 15.16 6 13.66 6 12zm8 0c0-1.1-.9-2-2-2s-2 .9-2 2c0 .74.4 1.38 1 1.72V22h2v-8.28c.6-.34 1-.98 1-1.72zm-9.06 7.08.71-.71C4.01 16.74 3 14.49 3 12c0-4.96 4.04-9 9-9s9 4.04 9 9c0 2.49-1.01 4.74-2.65 6.37l.71.71C20.88 17.27 22 14.77 22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 2.77 1.12 5.27 2.94 7.08z"></path>
                        </svg>
                      </NavLink>

                      <p className="pl-2">More from YouTube</p>

                      <NavLink
                        to="/tst"
                        className=" w-[90%]  mx-auto py-2 flex gap-3 justify-end items-center rounded-xl hover:bg-gray-100 "
                      >
                        <span>YouTube Premium</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          focusable="false"
                          style={{
                            display: "block",
                            width: "24px",
                            height: "24px",
                          }}
                        >
                          <defs>
                            <radialGradient
                              cx="5.4%"
                              cy="7.11%"
                              r="107.93%"
                              fx="5.4%"
                              fy="7.11%"
                              gradientTransform="matrix(.70653 0 0 1 .016 0)"
                            >
                              <stop offset="0%"></stop>
                              <stop offset="100%"></stop>
                            </radialGradient>
                          </defs>
                          <g fill="none">
                            <path d="M1 1h21.77v22H1z"></path>
                            <g>
                              <path
                                fill="#F00"
                                d="M22.54 7.6s-.2-1.5-.86-2.17c-.83-.87-1.75-.88-2.18-.93-3.04-.22-7.6-.2-7.6-.2s-4.56-.02-7.6.2c-.43.05-1.35.06-2.18.93-.65.67-.86 2.18-.86 2.18S1.04 9.4 1 11.18v1.66c.04 1.78.26 3.55.26 3.55s.2 1.5.86 2.18c.83.87 1.9.84 2.4.94 1.7.15 7.2.2 7.38.2 0 0 4.57 0 7.6-.22.43-.05 1.35-.06 2.18-.93.65-.67.86-2.18.86-2.18s.22-1.77.24-3.55v-1.66c-.02-1.78-.24-3.55-.24-3.55z"
                              ></path>
                              <path
                                fill="#FAFAFA"
                                d="M9.68 8.9v6.18l5.84-3.1"
                              ></path>
                              <path
                                fill="#000"
                                d="M9.68 8.88l5.13 3.48.73-.38"
                              ></path>
                              <path
                                fill="#FFF"
                                d="M22.54 7.6s-.2-1.5-.86-2.17c-.83-.87-1.75-.88-2.18-.93-3.04-.22-7.6-.2-7.6-.2s-4.56-.02-7.6.2c-.43.05-1.35.06-2.18.93-.65.67-.86 2.18-.86 2.18S1.04 9.4 1 11.18v.1c.04-1.76.26-3.54.26-3.54s.2-1.5.86-2.17c.83-.88 1.75-.88 2.18-.93 3.04-.22 7.6-.2 7.6-.2s4.56-.02 7.6.2c.43.05 1.35.05 2.18.93.65.66.86 2.17.86 2.17s.22 1.78.23 3.55v-.1c0-1.8-.23-3.56-.23-3.56z"
                              ></path>
                              <path
                                fill="#3E2723"
                                d="M22.54 16.4s-.2 1.5-.86 2.17c-.83.87-1.75.88-2.18.93-3.04.22-7.6.2-7.6.2s-4.56.02-7.6-.2c-.43-.05-1.35-.06-2.18-.93-.65-.67-.86-2.18-.86-2.18s-.22-1.8-.26-3.57v-.1c.04 1.76.26 3.54.26 3.54s.2 1.5.86 2.17c.83.88 1.75.88 2.18.93 3.04.22 7.6.2 7.6.2s4.56.02 7.6-.2c.43-.05 1.35-.05 2.18-.93.65-.66.86-2.17.86-2.17s.22-1.78.23-3.55v.1c0 1.8-.23 3.56-.23 3.56z"
                              ></path>
                              <path
                                fill="#FFF"
                                d="M9.68 15.08v.1l5.84-3.08v-.12"
                              ></path>
                              <path
                                fill="#3E2723"
                                d="M9.68 8.9v-.13l5.84 3.1v.1"
                              ></path>
                              <path
                                fill="url(#youtube_round__a)"
                                d="M21.54 3.4s-.2-1.5-.86-2.18C19.85.35 18.93.35 18.5.3 15.46.07 10.9.1 10.9.1S6.34.07 3.3.3c-.43.05-1.35.05-2.18.92C.47 1.9.26 3.4.26 3.4S.04 5.17 0 6.95V8.6c.04 1.8.26 3.56.26 3.56s.2 1.52.86 2.18c.83.87 1.9.85 2.4.94 1.7.16 7.2.2 7.38.2 0 0 4.57 0 7.6-.2.43-.06 1.35-.07 2.18-.94.65-.66.86-2.18.86-2.18s.22-1.77.24-3.55V6.97c-.02-1.78-.24-3.55-.24-3.55z"
                                transform="translate(1 4.208)"
                              ></path>
                            </g>
                          </g>
                        </svg>
                      </NavLink>

                      <NavLink
                        to="/tst"
                        className=" w-[90%]  mx-auto py-2 flex gap-3 justify-end items-center rounded-xl hover:bg-gray-100 "
                      >
                        <span>YouTube Studio</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          focusable="false"
                          style={{
                            display: "block",
                            width: "24px",
                            height: "24px",
                          }}
                        >
                          <path
                            fill="red"
                            d="M11.13 1.21c.48-.28 1.26-.28 1.74 0l8.01 4.64c.48.28.87.97.87 1.53v9.24c0 .56-.39 1.25-.87 1.53l-8.01 4.64c-.48.28-1.26.28-1.74 0l-8.01-4.64c-.48-.28-.87-.97-.87-1.53V7.38c0-.56.39-1.25.87-1.53l8.01-4.64z"
                          ></path>
                          <path
                            fill="#fff"
                            d="m12.71 18.98 4.9-2.83c.41-.24.64-.77.64-1.24V9.24c0-.47-.23-1-.64-1.24l-4.9-2.82c-.41-.23-1.02-.23-1.42 0L6.39 8c-.4.23-.64.77-.64 1.24v5.67c0 .47.24 1 .64 1.24l4.9 2.83c.2.12.46.18.71.18.26-.01.51-.07.71-.18z"
                          ></path>
                          <path
                            fill="red"
                            d="m12.32 5.73 4.89 2.83c.16.09.41.31.41.67v5.67c0 .37-.25.54-.41.64l-4.89 2.83c-.16.09-.48.09-.64 0l-4.89-2.83c-.16-.09-.41-.34-.41-.64V9.24c.02-.37.25-.58.41-.68l4.89-2.83c.08-.05.2-.07.32-.07s.24.02.32.07z"
                          ></path>
                          <path
                            fill="#fff"
                            d="M9.88 15.25 15.5 12 9.88 8.75z"
                          ></path>
                        </svg>
                      </NavLink>

                      <NavLink
                        to="/tst"
                        className=" w-[90%]  mx-auto py-2 flex gap-3 justify-end items-center rounded-xl hover:bg-gray-100 "
                      >
                        <span>YouTube TV</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          focusable="false"
                          style={{
                            display: "block",
                            width: "24px",
                            height: "24px",
                          }}
                        >
                          <path
                            fill="#FF0000"
                            d="M6,18h12v1H6V18z M22,6.2v9.6c0,0.66-0.54,1.2-1.2,1.2H3.2C2.54,17,2,16.46,2,15.8V6.2C2,5.54,2.54,5,3.2,5 h17.6C21.46,5,22,5.54,22,6.2z"
                          ></path>
                          <polygon
                            fill="#FFFFFF"
                            points="15,11 10,8.35 10,13.65 "
                          ></polygon>
                        </svg>
                      </NavLink>

                      <NavLink
                        to="/tst"
                        className=" w-[90%]  mx-auto py-2 flex gap-3 justify-end items-center rounded-xl hover:bg-gray-100 "
                      >
                        <span>YouTube Music</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          focusable="false"
                          style={{
                            display: "block",
                            width: "24px",
                            height: "24px",
                          }}
                        >
                          <circle
                            fill="#FF0000"
                            cx="12"
                            cy="12"
                            r="10"
                          ></circle>
                          <polygon
                            fill="#FFFFFF"
                            points="10,14.65 10,9.35 15,12 "
                          ></polygon>
                          <path
                            fill="#FFFFFF"
                            d="M12,7c2.76,0,5,2.24,5,5s-2.24,5-5,5s-5-2.24-5-5S9.24,7,12,7 M12,6c-3.31,0-6,2.69-6,6s2.69,6,6,6s6-2.69,6-6 S15.31,6,12,6L12,6z"
                          ></path>
                        </svg>
                      </NavLink>

                      <NavLink
                        to="/tst"
                        className=" w-[90%]  mx-auto py-2 flex gap-3 justify-end items-center rounded-xl hover:bg-gray-100 "
                      >
                        <span>YouTube Kids</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          focusable="false"
                          style={{
                            display: "block",
                            width: "24px",
                            height: "24px",
                          }}
                        >
                          <path
                            fill="#FF0000"
                            d="M21.39,13.19c0-0.08,0-0.15,0-0.22c-0.01-0.86-0.5-5-0.78-5.74c-0.32-0.85-0.76-1.5-1.31-1.91 c-0.9-0.67-1.66-0.82-2.6-0.84l-0.02,0c-0.4,0-3.01,0.32-5.2,0.62C9.28,5.4,6.53,5.8,5.88,6.04c-0.9,0.33-1.62,0.77-2.19,1.33 c-1.05,1.04-1.18,2.11-1.04,3.51c0.1,1.09,0.69,5.37,1.02,6.35c0.45,1.32,1.33,2.12,2.47,2.24c0.28,0.03,0.55,0.05,0.82,0.05 c1,0,1.8-0.21,2.72-0.46c1.45-0.39,3.25-0.87,6.97-0.87l0.09,0h0.02c0.91,0,3.14-0.2,4.16-2.07C21.44,15.12,21.41,13.91,21.39,13.19 z"
                          ></path>
                          <path
                            fill="#000"
                            d="M21.99,13.26c0-0.08,0-0.16-0.01-0.24c-0.01-0.92-0.54-5.32-0.83-6.11c-0.34-0.91-0.81-1.59-1.4-2.03 C18.81,4.17,17.99,4.02,17,4l-0.02,0c-0.43,0-3.21,0.34-5.54,0.66c-2.33,0.32-5.25,0.75-5.95,1C4.53,6.01,3.76,6.48,3.16,7.08 c-1.12,1.1-1.25,2.25-1.11,3.74c0.11,1.16,0.73,5.71,1.08,6.75c0.48,1.41,1.41,2.25,2.63,2.38C6.06,19.98,6.34,20,6.63,20 c1.07,0,1.91-0.23,2.89-0.49c1.54-0.41,3.46-0.93,7.41-0.93l0.1,0h0.02c0.97,0,3.34-0.21,4.42-2.2 C22.04,15.32,22.01,14.03,21.99,13.26z M20.59,15.91c-0.82,1.51-2.75,1.68-3.56,1.68l-0.1,0c-4.09,0-6.07,0.53-7.67,0.96 C8.31,18.8,7.56,19,6.63,19c-0.25,0-0.5-0.01-0.76-0.04c-1.04-0.11-1.54-0.99-1.79-1.71c-0.3-0.88-0.91-5.21-1.04-6.53 C2.9,9.25,3.1,8.54,3.86,7.79c0.5-0.5,1.15-0.89,1.97-1.19c0.17-0.06,1.1-0.32,5.74-0.95C14.2,5.29,16.64,5.01,16.99,5 c0.83,0.02,1.43,0.13,2.17,0.69c0.43,0.32,0.79,0.86,1.06,1.58c0.22,0.58,0.76,4.78,0.77,5.77l0.01,0.25 C21.01,13.96,21.04,15.08,20.59,15.91z"
                          ></path>
                          <path
                            fill="#000"
                            d="M11.59,14.76c-0.48,0.36-0.8,0.45-1.01,0.45c-0.16,0-0.25-0.05-0.3-0.08c-0.34-0.18-0.42-0.61-0.5-1.2l-0.01-0.1 c-0.04-0.31-0.26-2.1-0.38-3.16L9.3,9.94C9.26,9.66,9.2,9.19,9.54,8.94c0.32-0.23,0.75-0.09,0.96-0.03c0.53,0.17,3.6,1.23,4.59,1.73 c0.21,0.09,0.67,0.28,0.68,0.83c0.01,0.5-0.38,0.74-0.53,0.82L11.59,14.76z"
                          ></path>
                          <path
                            fill="#FFF"
                            d="M10.3,9.89c0,0,0.5,4.08,0.51,4.19c0.06-0.04,3.79-2.58,3.79-2.58C13.71,11.07,11.07,10.14,10.3,9.89z"
                          ></path>
                        </svg>
                      </NavLink>

                      <hr />

                      <NavLink
                        to="/tst"
                        className=" w-[90%]  mx-auto py-2 flex gap-3 justify-end items-center rounded-xl hover:bg-gray-100 "
                      >
                        <span>Settings</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="24"
                          viewBox="0 0 24 24"
                          width="24"
                          focusable="false"
                          style={{
                            display: "block",
                            width: "24px",
                            height: "24px",
                          }}
                        >
                          <path d="M12 9.5c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5-2.5-1.12-2.5-2.5 1.12-2.5 2.5-2.5m0-1c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5 3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5zM13.22 3l.55 2.2.13.51.5.18c.61.23 1.19.56 1.72.98l.4.32.5-.14 2.17-.62 1.22 2.11-1.63 1.59-.37.36.08.51c.05.32.08.64.08.98s-.03.66-.08.98l-.08.51.37.36 1.63 1.59-1.22 2.11-2.17-.62-.5-.14-.4.32c-.53.43-1.11.76-1.72.98l-.5.18-.13.51-.55 2.24h-2.44l-.55-2.2-.13-.51-.5-.18c-.6-.23-1.18-.56-1.72-.99l-.4-.32-.5.14-2.17.62-1.21-2.12 1.63-1.59.37-.36-.08-.51c-.05-.32-.08-.65-.08-.98s.03-.66.08-.98l.08-.51-.37-.36L3.6 8.56l1.22-2.11 2.17.62.5.14.4-.32c.53-.44 1.11-.77 1.72-.99l.5-.18.13-.51.54-2.21h2.44M14 2h-4l-.74 2.96c-.73.27-1.4.66-2 1.14l-2.92-.83-2 3.46 2.19 2.13c-.06.37-.09.75-.09 1.14s.03.77.09 1.14l-2.19 2.13 2 3.46 2.92-.83c.6.48 1.27.87 2 1.14L10 22h4l.74-2.96c.73-.27 1.4-.66 2-1.14l2.92.83 2-3.46-2.19-2.13c.06-.37.09-.75.09-1.14s-.03-.77-.09-1.14l2.19-2.13-2-3.46-2.92.83c-.6-.48-1.27-.87-2-1.14L14 2z"></path>
                        </svg>
                      </NavLink>

                      <NavLink
                        to="/tst"
                        className=" w-[90%]  mx-auto py-2 flex gap-3 justify-end items-center rounded-xl hover:bg-gray-100 "
                      >
                        <span>Report history</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="24"
                          viewBox="0 0 24 24"
                          width="24"
                          focusable="false"
                          style={{
                            display: "block",
                            width: "24px",
                            height: "24px",
                          }}
                        >
                          <path d="m13.18 4 .24 1.2.16.8H19v7h-5.18l-.24-1.2-.16-.8H6V4h7.18M14 3H5v18h1v-9h6.6l.4 2h7V5h-5.6L14 3z"></path>
                        </svg>
                      </NavLink>

                      <button className=" w-[90%]  mx-auto py-2 flex gap-3 justify-end items-center rounded-xl hover:bg-gray-100  ">
                        Help
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="24"
                          viewBox="0 0 24 24"
                          width="24"
                          focusable="false"
                          style={{
                            display: "block",
                            width: "24px",
                            height: "24px",
                          }}
                        >
                          <path d="M15.36 9.96c0 1.09-.67 1.67-1.31 2.24-.53.47-1.03.9-1.16 1.6l-.04.2H11.1l.03-.28c.14-1.17.8-1.76 1.47-2.27.52-.4 1.01-.77 1.01-1.49 0-.51-.23-.97-.63-1.29-.4-.31-.92-.42-1.42-.29-.59.15-1.05.67-1.19 1.34l-.05.28H8.57l.06-.42c.2-1.4 1.15-2.53 2.42-2.87 1.05-.29 2.14-.08 2.98.57.85.64 1.33 1.62 1.33 2.68zM12 18c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0-15c-4.96 0-9 4.04-9 9s4.04 9 9 9 9-4.04 9-9-4.04-9-9-9m0-1c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2z"></path>
                        </svg>
                      </button>

                      <button className=" w-[90%]  mx-auto py-2 flex gap-3 justify-end items-center rounded-xl hover:bg-gray-100  ">
                        Send feedback
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="24"
                          viewBox="0 0 24 24"
                          width="24"
                          focusable="false"
                          style={{
                            display: "block",
                            width: "24px",
                            height: "24px",
                          }}
                        >
                          <path d="M13 14h-2v-2h2v2zm0-9h-2v6h2V5zm6-2H5v16.59l3.29-3.29.3-.3H19V3m1-1v15H9l-5 5V2h16z"></path>
                        </svg>
                      </button>

                      <div className="mb-[35px]  w-full bg-red-400 font-medium">
                        <p className="p-1 text-center w-full ">
                          : Front-End Developer
                        </p>
                        <p className="p-1 text-center w-full ">
                          Abolfazl-Mollashahi
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : 
              (
                flagpagevideo ?
                  <div className=" hidden p-3 w-[80px] text-[12px] pt-[10px] h-max md:flex bg-white gap-5 flex-col items-center justify-start">
                      <NavLink className=" w-max h-max flex flex-col items-center ">
                        <IoMdHome size={24} />
                        <span>Home</span>
                      </NavLink>
    
                      <NavLink className=" w-max h-max flex flex-col items-center ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="24"
                          viewBox="0 0 24 24"
                          width="24"
                          focusable="false"
                          style={{
                            display: "block",
                            width: "25px",
                            height: "25px",
                          }}
                        >
                          <path d="M10 14.65v-5.3L15 12l-5 2.65zm7.77-4.33-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94c-1.29.68-2.07 2.04-2 3.49.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93c-1.83.97-2.53 3.24-1.56 5.07.97 1.83 3.24 2.53 5.07 1.56l8.5-4.5c1.29-.68 2.06-2.04 1.99-3.49-.07-1.42-.94-2.68-2.23-3.25zm-.23 5.86-8.5 4.5c-1.34.71-3.01.2-3.72-1.14-.71-1.34-.2-3.01 1.14-3.72l2.04-1.08v-1.21l-.69-.28-1.11-.46c-.99-.41-1.65-1.35-1.7-2.41-.05-1.06.52-2.06 1.46-2.56l8.5-4.5c1.34-.71 3.01-.2 3.72 1.14.71 1.34.2 3.01-1.14 3.72L15.5 9.26v1.21l1.8.74c.99.41 1.65 1.35 1.7 2.41.05 1.06-.52 2.06-1.46 2.56z"></path>
                        </svg>
                        <span>Shorts</span>
                      </NavLink>
    
                      <NavLink className=" w-max h-max flex flex-col items-center ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="24"
                          viewBox="0 0 24 24"
                          width="24"
                          focusable="false"
                          style={{
                            display: "block",
                            width: "27px",
                            height: "27px",
                          }}
                        >
                          <path d="M10 18v-6l5 3-5 3zm7-15H7v1h10V3zm3 3H4v1h16V6zm2 3H2v12h20V9zM3 10h18v10H3V10z"></path>
                        </svg>
                        <span>Subscriptions</span>
                      </NavLink>
    
                      <NavLink className=" w-max h-max flex flex-col items-center ">
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
                          <path d="m11 7 6 3.5-6 3.5V7zm7 13H4V6H3v15h15v-1zm3-2H6V3h15v15zM7 17h13V4H7v13z"></path>
                        </svg>
                        <span>You</span>
                      </NavLink>
                  </div>
                :
                <></>
              )
                
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyNavbar;
