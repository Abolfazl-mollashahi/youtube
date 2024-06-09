import { SlBell } from "react-icons/sl";
import { PiBatteryPlus } from "react-icons/pi";
import { FaMicrophone, FaBarsStaggered } from "react-icons/fa6";
import { IoMdSearch, IoMdHome } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
import { LuChevronRight } from "react-icons/lu";
import { useRef, useState } from "react";
import { BsPersonFillAdd } from "react-icons/bs";
import NavbarItem from "./NavbarItem";
import { TbLogout2 } from "react-icons/tb";
import { CiSettings } from "react-icons/ci";
import { IoLanguage } from "react-icons/io5";
import { LuSunMedium } from "react-icons/lu";
import { CiDark } from "react-icons/ci";
import { useContext } from "react";
import { darkmodecontext } from "../context";
import personimg from "../assets/person.jpg";
import Login from "./Login";

function MyNavbar({ toggleflag, settoggleflag, togglefunc, flagpagevideo }) {
  const { darkmode, setdarkmode } = useContext(darkmodecontext);
  const [flag1, setflag1] = useState(false);
  const [flaglogin, setflaglogin] = useState(false);
  const btnmore = useRef({});
  const btnless = useRef({});
  const btnnav = useRef();
  const div2 = useRef({});

  const showmore = (e) => {
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
      className=" px-2 pt-1 flex justify-between items-center w-full fixed top-0 left-0 z-[100] bg  dark:!text-white  border !rounded-none  border-t-0 border-x-0  "
    >
      <div className="div-1 flex gap-4 items-center ">
        {/* div-acant */}
        <div className=" relative father">
          <button className=" w-[40px] h-[40px] mask mask-hexagon  ">
            <img
              className=" w-full h-full  rounded-full  object-cover"
              src={personimg}
              alt=""
            />
          </button>
          <div className="hidden child w-[280px] p-2 h-max absolute  top-[45px] right-0 flex-col rounded-xl border-2 bordder-black bg dark:text-white text-[15px] ">
            <div className="w-full flex mb-1 flex-row-reverse items-center gap-2">
              <img
                className={`w-[50px] h-[50px] mask mask-hexagon  rounded-full`}
                src={personimg}
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

            {/* <div className=" w-full flex gap-1  justify-between items-center">
              <button className=" w-8 h-8 rounded-full  flex justify-center items-center border  bg dark:text-white ">
                <LuChevronRight />
              </button>
              <NavLink
                to="/tst"
                className=" w-[90%]  mx-auto py-2 flex gap-3 justify-end items-center rounded-xl mt-1  hover:bg-violet-100 dark:hover:bg-violet-950 "
              >
                <span>Switch account</span>
                <BsPersonFillAdd className="ml-[10px] w-6 h-6 text-gray-700 dark:text-white " />
              </NavLink>
            </div> */}

            <div className=" w-full flex gap-1  justify-between items-center">
              <button onClick={()=>setflaglogin(true)}  className=" w-[100%]  mx-auto py-2 flex gap-3 justify-end items-center rounded-xl mt-1  hover:bg-violet-100 dark:hover:bg-violet-950 ">
                <span>Login</span>
                <BsPersonFillAdd className="ml-[10px] w-6 h-6 text-gray-700 dark:text-white " />
              </button>
            </div>

            <NavLink
              to="/tst"
              className=" w-[100%]  mx-auto py-2 flex gap-3 justify-end items-center rounded-xl my-1  hover:bg-violet-100 dark:hover:bg-violet-950 "
            >
              <span>Sign out</span>
              <TbLogout2 className="ml-[10px] w-6 h-6  text-red-600 " />
            </NavLink>

            <div className=" w-full flex gap-1 justify-between items-center">
              <button
                onClick={() => setdarkmode(!darkmode)}
                className=" w-[100%]  mx-auto py-2 flex gap-3 justify-end items-center rounded-xl mt-1  hover:bg-violet-100 dark:hover:bg-violet-950 "
              >
                <span>
                  Appearance:{" "}
                  {darkmode ? <span>Light</span> : <span>Dark</span>}
                </span>
                {darkmode ? (
                  <LuSunMedium className="ml-[10px] w-6 h-6  text-white " />
                ) : (
                  <CiDark className="ml-[10px] w-6 h-6 text-black " />
                )}
              </button>
            </div>

            <div className=" w-full flex gap-1 justify-between items-center">
              <button className="w-8 h-8 rounded-full  flex justify-center items-center border  bg dark:text-white">
                <LuChevronRight />
              </button>
              <NavLink
                to="/tst"
                className=" w-[90%]  mx-auto py-2 flex gap-3 justify-end items-center rounded-xl mt-1  hover:bg-violet-100 dark:hover:bg-violet-950 "
              >
                <span>
                  Language: <span>English</span>
                </span>
                <IoLanguage className="ml-[10px] w-6 h-6 text-gray-700 dark:text-white  " />
              </NavLink>
            </div>

            <NavLink
              to="/tst"
              className=" w-[100%]  mx-auto py-2 flex gap-3 justify-end items-center rounded-xl my-1  hover:bg-violet-100 dark:hover:bg-violet-950 "
            >
              <span>Settings</span>
              <CiSettings className="ml-[10px] w-6 h-6  dark:text-white " />
            </NavLink>
          </div>
        </div>

        {/* div-notifications */}
        <div className=" relative father">
          <button className=" w-8 h-8 flex items-center justify-center  border  bg dark:text-white   ">
            <SlBell size={20} />
          </button>
          <div className="hidden child bg w-[320px] md:w-[500px] text-[14px]  h-max absolute  top-[34px] right-0 flex-col rounded-xl border-2 dark:text-white ">
            {/* notif-1 */}
            {[0, 0, 0, 0, 0].map((index, key) => (
              <NavLink key={key} to={`/ddd`} className={` mt-2 `}>
                <div className=" w-full  md:w-[450px] mx-auto  scale-100 hover:scale-90   h-[100px] flex gap-2 items-center justify-center border-y-[1px] rounded-xl border-violet-400 dark:border-violet-800  dark:text-white ">
                  <img
                    className="w-[40px] h-[40px] mask mask-hexagon"
                    src={personimg}
                    alt=""
                  />
                  <div className=" w-full md:w-[300px]  flex flex-col items-end">
                    <p className=" text-left">
                      incidunt in aut tenetur sint debitis error pariatur
                      provident consequuntur
                    </p>
                    <span> 2 weeks ago</span>
                  </div>
                  <img
                    className="w-[90px] h-[70px] rounded-lg bg-red-500"
                    src={personimg}
                    alt=""
                  />
                </div>
              </NavLink>
            ))}
          </div>
        </div>

        {/* div-upload video */}
        <div className="relative father">
          <button className="w-8 h-8 flex items-center justify-center  border  bg dark:text-white ">
            <PiBatteryPlus size={23} />
          </button>

          <div className="hidden child w-[150px] text-[14px] p-2 h-max absolute  top-[30px] right-0 flex-col rounded-xl border-2 bordder-black bg dark:text-white ">
            <NavLink
              to="/shorts"
              className=" w-[100%]  mx-auto py-1 flex gap-3 justify-end items-center rounded-xl hover:bg-violet-200 dark:hover:bg-violet-950 "
            >
              <span>Upload video</span>
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
                <path
                  fill="red"
                  d="M10 14.65v-5.3L15 12l-5 2.65zm7.77-4.33-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94c-1.29.68-2.07 2.04-2 3.49.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93c-1.83.97-2.53 3.24-1.56 5.07.97 1.83 3.24 2.53 5.07 1.56l8.5-4.5c1.29-.68 2.06-2.04 1.99-3.49-.07-1.42-.94-2.68-2.23-3.25zm-.23 5.86-8.5 4.5c-1.34.71-3.01.2-3.72-1.14-.71-1.34-.2-3.01 1.14-3.72l2.04-1.08v-1.21l-.69-.28-1.11-.46c-.99-.41-1.65-1.35-1.7-2.41-.05-1.06.52-2.06 1.46-2.56l8.5-4.5c1.34-.71 3.01-.2 3.72 1.14.71 1.34.2 3.01-1.14 3.72L15.5 9.26v1.21l1.8.74c.99.41 1.65 1.35 1.7 2.41.05 1.06-.52 2.06-1.46 2.56z"
                ></path>
              </svg>
            </NavLink>

            <NavLink
              to="/shorts"
              className=" w-[100%]  mx-auto py-1 flex gap-3 justify-end items-center rounded-xl hover:bg-violet-200 dark:hover:bg-violet-950 "
            >
              <span>Go live</span>
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
                <path
                  fill="red"
                  d="M10 14.65v-5.3L15 12l-5 2.65zm7.77-4.33-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94c-1.29.68-2.07 2.04-2 3.49.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93c-1.83.97-2.53 3.24-1.56 5.07.97 1.83 3.24 2.53 5.07 1.56l8.5-4.5c1.29-.68 2.06-2.04 1.99-3.49-.07-1.42-.94-2.68-2.23-3.25zm-.23 5.86-8.5 4.5c-1.34.71-3.01.2-3.72-1.14-.71-1.34-.2-3.01 1.14-3.72l2.04-1.08v-1.21l-.69-.28-1.11-.46c-.99-.41-1.65-1.35-1.7-2.41-.05-1.06.52-2.06 1.46-2.56l8.5-4.5c1.34-.71 3.01-.2 3.72 1.14.71 1.34.2 3.01-1.14 3.72L15.5 9.26v1.21l1.8.74c.99.41 1.65 1.35 1.7 2.41.05 1.06-.52 2.06-1.46 2.56z"
                ></path>
              </svg>
            </NavLink>
          </div>
        </div>

        <div className=" w-8 h-8 flex items-center justify-center  sm:hidden border  bg dark:text-white">
          <button>
            <FaMicrophone size={23} />
          </button>
        </div>

        <div className=" w-8 h-8 flex items-center justify-center  sm:hidden border  bg dark:text-white">
          <button className="">
            <IoMdSearch size={23} />
          </button>
        </div>
      </div>

      {/* div-serch-md */}
      <div className=" div-2 px-3 w-full hidden sm:flex justify-center gap-3 items-center">
        <div className=" w-9 h-9 cursor-pointer flex justify-center items-center border bg dark:text-white dark:hover:bg-violet-950 ">
          <button>
            <FaMicrophone size={23} />
          </button>
        </div>

        <div className=" w-[100%] md:w-[400px] lg:w-[600px] h-[40px] flex items-center border-2 rounded-3xl border-gray-300 overflow-hidden shadow-md shadow-violet-200 dark:shadow  dark:rounded-none  dark:border-0 dark:gap-1">
          <button className=" w-[37px] h-[37px] px-1.5 cursor-pointer  border-l-2 border-violet-300 rounded-r-3xl  hover:bg-gray-300 dark:hover:bg-violet-950    dark:text-white dark:border dark:rounded-3xl gdark:rounded-xl  bg ">
            <IoMdSearch size={25} />
          </button>
          <input
            dir="ltr"
            className=" w-[100%] px-3 h-[95%] outline-none placeholder:text-left dark:border  bg  dark:text-white "
            placeholder="Search"
            type="text"
            name=""
            id=""
          />
          <span className="hidden px-2 mx-2 bg-red-400">X</span>
        </div>
      </div>

      {/* menus */}
      <div className="div-3 pl-2 flex items-center gap-4">
        <NavLink className=" w-[100px] h-[45px]  scale-100 hover:scale-105">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="external-icon bg-slate-50 rounded-xl px-2  border  dark:border-violet-700 shadow-sm  dark:shadow-red-500   dark:bg-[#c9c5cc]  "
            viewBox="0 0 90 20"
            style={{
              pointerEvents: "none",
              display: "block",
              width: "100%",
              height: "90%",
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
        <div className="flex flex-col pl-3 relative ">
          <button ref={btnnav} onClick={togglefunc} className="   ">
            <FaBarsStaggered
              size={30}
              className=" dark:text-violet-700 hover:bg-violet-300 p-1  dark:hover:bg-violet-950 scale-100 hover:scale-110 bg "
            />
          </button>

          <div className=" absolute top-8 -left-4">
            <div className="div-tst ">
              {toggleflag ? (
                <div ref={div2} className=" relative top-2 left-1 bg ">
                  <div className=" menuscroll py-2 w-[225px] h-screen flex flex-col items-end overflow-scroll overflow-x-auto ">
                    <div className="divmenu  w-[225px] h-max flex flex-col gap-3 items-end ">
                      <NavLink
                        to="/"
                        className="border border-t-0 linkitemmenu bg "
                      >
                        <span>Home</span>
                        <IoMdHome
                          className="ml-[10px] text-red-600 "
                          size={24}
                        />
                      </NavLink>

                      <NavLink
                        to="/shorts"
                        className="border border-t-0  linkitemmenu bg "
                      >
                        <span>Shorts</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="24"
                          className="ml-[10px]  "
                          viewBox="0 0 24 24"
                          width="24"
                          focusable="false"
                          style={{
                            display: "block",
                            width: "25px",
                            height: "25px",
                          }}
                        >
                          <path
                            fill="red"
                            d="M10 14.65v-5.3L15 12l-5 2.65zm7.77-4.33-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94c-1.29.68-2.07 2.04-2 3.49.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93c-1.83.97-2.53 3.24-1.56 5.07.97 1.83 3.24 2.53 5.07 1.56l8.5-4.5c1.29-.68 2.06-2.04 1.99-3.49-.07-1.42-.94-2.68-2.23-3.25zm-.23 5.86-8.5 4.5c-1.34.71-3.01.2-3.72-1.14-.71-1.34-.2-3.01 1.14-3.72l2.04-1.08v-1.21l-.69-.28-1.11-.46c-.99-.41-1.65-1.35-1.7-2.41-.05-1.06.52-2.06 1.46-2.56l8.5-4.5c1.34-.71 3.01-.2 3.72 1.14.71 1.34.2 3.01-1.14 3.72L15.5 9.26v1.21l1.8.74c.99.41 1.65 1.35 1.7 2.41.05 1.06-.52 2.06-1.46 2.56z"
                          ></path>
                        </svg>
                      </NavLink>

                      <NavLink
                        to="/subscribe"
                        className="border border-t-0  linkitemmenu bg"
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
                          <path
                            fill="red"
                            d="M10 18v-6l5 3-5 3zm7-15H7v1h10V3zm3 3H4v1h16V6zm2 3H2v12h20V9zM3 10h18v10H3V10z"
                          ></path>
                        </svg>
                      </NavLink>

                      <hr />

                      <NavLink
                        to="/tst"
                        className="border border-t-0  linkitemmenu bg "
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
                          <path
                            fill="red"
                            d="M4.97 12.65 9.62 8 4.97 3.35l.71-.71L11.03 8l-5.35 5.35-.71-.7z"
                          ></path>
                        </svg>
                        <span className=" pl-3">You</span>
                      </NavLink>

                      <NavLink
                        to="/tst"
                        className="border border-t-0  linkitemmenu bg "
                      >
                        <span>Your channel</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          focusable="false"
                          className="ml-[10px]"
                          style={{
                            display: "block",
                            width: "25px",
                            height: "25px",
                          }}
                        >
                          <path
                            fill="red"
                            d="M3,3v18h18V3H3z M4.99,20c0.39-2.62,2.38-5.1,7.01-5.1s6.62,2.48,7.01,5.1H4.99z M9,10c0-1.65,1.35-3,3-3s3,1.35,3,3 c0,1.65-1.35,3-3,3S9,11.65,9,10z M12.72,13.93C14.58,13.59,16,11.96,16,10c0-2.21-1.79-4-4-4c-2.21,0-4,1.79-4,4 c0,1.96,1.42,3.59,3.28,3.93c-4.42,0.25-6.84,2.8-7.28,6V4h16v15.93C19.56,16.73,17.14,14.18,12.72,13.93z"
                          ></path>
                        </svg>
                      </NavLink>

                      <NavLink
                        to="/tst"
                        className="border border-t-0  linkitemmenu bg"
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
                            <path
                              fill="red"
                              d="M14.97 16.95 10 13.87V7h2v5.76l4.03 2.49-1.06 1.7zM22 12c0 5.51-4.49 10-10 10S2 17.51 2 12h1c0 4.96 4.04 9 9 9s9-4.04 9-9-4.04-9-9-9C8.81 3 5.92 4.64 4.28 7.38c-.11.18-.22.37-.31.56L3.94 8H8v1H1.96V3h1v4.74c.04-.09.07-.17.11-.25.11-.22.23-.42.35-.63C5.22 3.86 8.51 2 12 2c5.51 0 10 4.49 10 10z"
                            ></path>
                          </g>
                        </svg>
                      </NavLink>

                      <NavLink
                        to="/tst"
                        className=" border border-t-0 linkitemmenu bg "
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
                          <path
                            fill="red"
                            d="m10 8 6 4-6 4V8zm11-5v18H3V3h18zm-1 1H4v16h16V4z"
                          ></path>
                        </svg>
                      </NavLink>

                      <NavLink
                        to="/tst"
                        className=" border border-t-0 linkitemmenu bg "
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
                          <path
                            fill="red"
                            d="M14.97 16.95 10 13.87V7h2v5.76l4.03 2.49-1.06 1.7zM12 3c-4.96 0-9 4.04-9 9s4.04 9 9 9 9-4.04 9-9-4.04-9-9-9m0-1c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2z"
                          ></path>
                        </svg>
                      </NavLink>

                      <button
                        ref={btnmore}
                        onClick={showmore}
                        className=" border border-t-0 linkitemmenu bg  "
                      >
                        Show more
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="24"
                          viewBox="0 0 24 24"
                          width="24"
                          className="ml-[10px]"
                          style={{
                            display: "block",
                            width: "24px",
                            height: "24px",
                          }}
                        >
                          <path
                            fill="red"
                            d="m18 9.28-6.35 6.35-6.37-6.35.72-.71 5.64 5.65 5.65-5.65z"
                          ></path>
                        </svg>
                      </button>

                      {flag1 || (
                        <div className=" px-4 w-[225px]  mx-auto flex flex-col gap-3 items-end">
                          <NavLink
                            to="/tst"
                            className=" border border-t-0 linkitemmenu bg "
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
                              <path
                                fill="red"
                                d="M18.77,11h-4.23l1.52-4.94C16.38,5.03,15.54,4,14.38,4c-0.58,0-1.14,0.24-1.52,0.65L7,11H3v10h4h1h9.43 c1.06,0,1.98-0.67,2.19-1.61l1.34-6C21.23,12.15,20.18,11,18.77,11z M7,20H4v-8h3V20z M19.98,13.17l-1.34,6 C18.54,19.65,18.03,20,17.43,20H8v-8.61l5.6-6.06C13.79,5.12,14.08,5,14.38,5c0.26,0,0.5,0.11,0.63,0.3 c0.07,0.1,0.15,0.26,0.09,0.47l-1.52,4.94L13.18,12h1.35h4.23c0.41,0,0.8,0.17,1.03,0.46C19.92,12.61,20.05,12.86,19.98,13.17z"
                              ></path>
                            </svg>
                          </NavLink>

                          <NavLink
                            to="/tst"
                            className=" border border-t-0 linkitemmenu bg "
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
                              <path
                                fill="red"
                                d="M22 7H2v1h20V7zm-9 5H2v-1h11v1zm0 4H2v-1h11v1zm2 3v-8l7 4-7 4z"
                              ></path>
                            </svg>
                          </NavLink>

                          <button
                            ref={btnless}
                            onClick={showmore}
                            className=" border border-t-0 linkitemmenu bg  "
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
                              <path
                                fill="red"
                                d="M18.4 14.6 12 8.3l-6.4 6.3.8.8L12 9.7l5.6 5.7z"
                              ></path>
                            </svg>
                          </button>
                        </div>
                      )}

                      <hr />

                      <p className="pl-2">Subscriptions</p>

                      <div className="w-full">
                        {[0, 0, 0, 0, 0].map(() => (
                          <NavLink
                            to="/tst"
                            className=" border border-t-0 linkitemmenu bg mt-2 "
                          >
                            <div className=" w-[5px] h-[5px] rounded-full bg-blue-600 dark:bg-violet-700"></div>
                            <span>tst-1</span>
                            <img
                              className=" w-[40px] h-[40px] mask mask-hexagon translate-x-1 "
                              src={personimg}
                              alt=""
                            />
                          </NavLink>
                        ))}
                      </div>

                      <NavLink
                        to="/tst"
                        className=" border border-t-0 linkitemmenu bg "
                      >
                        <span>Browse channels</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="24"
                          className="ml-2"
                          viewBox="0 0 24 24"
                          width="24"
                          focusable="false"
                          style={{
                            display: "block",
                            width: "24px",
                            height: "24px",
                          }}
                        >
                          <path
                            fill="red"
                            d="M17 13h-4v4h-2v-4H7v-2h4V7h2v4h4v2zM12 3c-4.96 0-9 4.04-9 9s4.04 9 9 9 9-4.04 9-9-4.04-9-9-9m0-1c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2z"
                          ></path>
                        </svg>
                      </NavLink>

                      <button className=" border border-t-0 linkitemmenu bg  ">
                        Show less
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="24"
                          viewBox="0 0 24 24"
                          width="24"
                          className="ml-2"
                          focusable="false"
                          style={{
                            display: "block",
                            width: "24px",
                            height: "24px",
                          }}
                        >
                          <path
                            fill="red"
                            d="M18.4 14.6 12 8.3l-6.4 6.3.8.8L12 9.7l5.6 5.7z"
                          ></path>
                        </svg>
                      </button>

                      <hr />

                      <NavLink
                        to="/tst"
                        className=" border border-t-0 linkitemmenu bg "
                      >
                        <span>Settings</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="24"
                          className="ml-2"
                          viewBox="0 0 24 24"
                          width="24"
                          focusable="false"
                          style={{
                            display: "block",
                            width: "24px",
                            height: "24px",
                          }}
                        >
                          <path
                            fill="red"
                            d="M12 9.5c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5-2.5-1.12-2.5-2.5 1.12-2.5 2.5-2.5m0-1c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5 3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5zM13.22 3l.55 2.2.13.51.5.18c.61.23 1.19.56 1.72.98l.4.32.5-.14 2.17-.62 1.22 2.11-1.63 1.59-.37.36.08.51c.05.32.08.64.08.98s-.03.66-.08.98l-.08.51.37.36 1.63 1.59-1.22 2.11-2.17-.62-.5-.14-.4.32c-.53.43-1.11.76-1.72.98l-.5.18-.13.51-.55 2.24h-2.44l-.55-2.2-.13-.51-.5-.18c-.6-.23-1.18-.56-1.72-.99l-.4-.32-.5.14-2.17.62-1.21-2.12 1.63-1.59.37-.36-.08-.51c-.05-.32-.08-.65-.08-.98s.03-.66.08-.98l.08-.51-.37-.36L3.6 8.56l1.22-2.11 2.17.62.5.14.4-.32c.53-.44 1.11-.77 1.72-.99l.5-.18.13-.51.54-2.21h2.44M14 2h-4l-.74 2.96c-.73.27-1.4.66-2 1.14l-2.92-.83-2 3.46 2.19 2.13c-.06.37-.09.75-.09 1.14s.03.77.09 1.14l-2.19 2.13 2 3.46 2.92-.83c.6.48 1.27.87 2 1.14L10 22h4l.74-2.96c.73-.27 1.4-.66 2-1.14l2.92.83 2-3.46-2.19-2.13c.06-.37.09-.75.09-1.14s-.03-.77-.09-1.14l2.19-2.13-2-3.46-2.92.83c-.6-.48-1.27-.87-2-1.14L14 2z"
                          ></path>
                        </svg>
                      </NavLink>

                      <NavLink
                        to="/tst"
                        className=" border border-t-0 linkitemmenu bg "
                      >
                        <span>Report history</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="24"
                          className="ml-2"
                          viewBox="0 0 24 24"
                          width="24"
                          focusable="false"
                          style={{
                            display: "block",
                            width: "24px",
                            height: "24px",
                          }}
                        >
                          <path
                            fill="red"
                            d="m13.18 4 .24 1.2.16.8H19v7h-5.18l-.24-1.2-.16-.8H6V4h7.18M14 3H5v18h1v-9h6.6l.4 2h7V5h-5.6L14 3z"
                          ></path>
                        </svg>
                      </NavLink>

                      <button className=" border border-t-0 linkitemmenu bg  ">
                        Help
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="24"
                          viewBox="0 0 24 24"
                          width="24"
                          className="ml-2"
                          focusable="false"
                          style={{
                            display: "block",
                            width: "24px",
                            height: "24px",
                          }}
                        >
                          <path
                            fill="red"
                            d="M15.36 9.96c0 1.09-.67 1.67-1.31 2.24-.53.47-1.03.9-1.16 1.6l-.04.2H11.1l.03-.28c.14-1.17.8-1.76 1.47-2.27.52-.4 1.01-.77 1.01-1.49 0-.51-.23-.97-.63-1.29-.4-.31-.92-.42-1.42-.29-.59.15-1.05.67-1.19 1.34l-.05.28H8.57l.06-.42c.2-1.4 1.15-2.53 2.42-2.87 1.05-.29 2.14-.08 2.98.57.85.64 1.33 1.62 1.33 2.68zM12 18c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0-15c-4.96 0-9 4.04-9 9s4.04 9 9 9 9-4.04 9-9-4.04-9-9-9m0-1c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2z"
                          ></path>
                        </svg>
                      </button>

                      <button className=" border border-t-0 linkitemmenu bg  ">
                        Send feedback
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="24"
                          className="ml-2"
                          viewBox="0 0 24 24"
                          width="24"
                          focusable="false"
                          style={{
                            display: "block",
                            width: "24px",
                            height: "24px",
                          }}
                        >
                          <path
                            fill="red"
                            d="M13 14h-2v-2h2v2zm0-9h-2v6h2V5zm6-2H5v16.59l3.29-3.29.3-.3H19V3m1-1v15H9l-5 5V2h16z"
                          ></path>
                        </svg>
                      </button>

                      <div className=" mb-[50px] ml-2  w-[90%] bg-violet-600 rounded-xl ">
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
              ) : flagpagevideo ? (
                <div className=" menu  hidden ml-[1px] mt-3  p-1 w-[78px] text-[12px] pt-[10px] h-max md:flex   gap-5 flex-col items-center justify-start border  border-t-0 rounded-xl border-slate-300  bg">
                  <NavLink
                    to={`/`}
                    className=" scale-100 hover:scale-110  w-[70px] bg-violet-950 hover:bg-violet-900 shadow  h-[60px] flex flex-col items-center justify-center  rounded-xl mask mask-hexagon"
                  >
                    <IoMdHome size={25} className="text-red-700" />
                    <span className=" text-black dark:text-white ">Home</span>
                  </NavLink>

                  <NavLink
                    to={`/shorts`}
                    className=" scale-100 hover:scale-110  w-[70px] bg-violet-950  hover:bg-violet-900 shadow  h-[60px] flex flex-col items-center justify-center  rounded-xl mask mask-hexagon"
                  >
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
                        color: "white",
                      }}
                    >
                      <path
                        fill="red"
                        d="M10 14.65v-5.3L15 12l-5 2.65zm7.77-4.33-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94c-1.29.68-2.07 2.04-2 3.49.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93c-1.83.97-2.53 3.24-1.56 5.07.97 1.83 3.24 2.53 5.07 1.56l8.5-4.5c1.29-.68 2.06-2.04 1.99-3.49-.07-1.42-.94-2.68-2.23-3.25zm-.23 5.86-8.5 4.5c-1.34.71-3.01.2-3.72-1.14-.71-1.34-.2-3.01 1.14-3.72l2.04-1.08v-1.21l-.69-.28-1.11-.46c-.99-.41-1.65-1.35-1.7-2.41-.05-1.06.52-2.06 1.46-2.56l8.5-4.5c1.34-.71 3.01-.2 3.72 1.14.71 1.34.2 3.01-1.14 3.72L15.5 9.26v1.21l1.8.74c.99.41 1.65 1.35 1.7 2.41.05 1.06-.52 2.06-1.46 2.56z"
                      ></path>
                    </svg>
                    <span className=" text-black dark:text-white ">Shorts</span>
                  </NavLink>

                  <NavLink
                    to={`/Subscribe`}
                    className=" scale-100 hover:scale-110  w-[70px] bg-violet-950  hover:bg-violet-900 shadow  h-[60px] flex flex-col items-center justify-center  rounded-xl mask mask-hexagon"
                  >
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
                      <path
                        fill="red"
                        d="M10 18v-6l5 3-5 3zm7-15H7v1h10V3zm3 3H4v1h16V6zm2 3H2v12h20V9zM3 10h18v10H3V10z"
                      ></path>
                    </svg>
                    <span className="  text-black dark:text-white ">Sub</span>
                  </NavLink>

                  <NavLink
                    to={`/you`}
                    className=" scale-100 hover:scale-110  w-[70px] bg-violet-950  hover:bg-violet-900 shadow  h-[60px] flex flex-col items-center justify-center  rounded-xl mask mask-hexagon" 
                  >
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
                      <path
                        fill="red"
                        d="m11 7 6 3.5-6 3.5V7zm7 13H4V6H3v15h15v-1zm3-2H6V3h15v15zM7 17h13V4H7v13z"
                      ></path>
                    </svg>
                    <span className=" text-black dark:text-white ">You</span>
                  </NavLink>
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </div>

      {flaglogin && <Login setflaglogin={setflaglogin}  />}
    </div>

  );
}

export default MyNavbar;
