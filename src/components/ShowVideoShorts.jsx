import { SlLike } from "react-icons/sl";
import { SlDislike } from "react-icons/sl";
import { MdComment } from "react-icons/md";
import { RiShareForwardFill } from "react-icons/ri";
import { CiMenuKebab } from "react-icons/ci";
import { IoPlayOutline } from "react-icons/io5";
import { GoUnmute } from "react-icons/go";
import { GoMute } from "react-icons/go";
import { TbPlayerPause } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import videoshorts from "../assets/videos/shorts.mp4";
import imgreact from "../assets/react.svg";
import { useEffect, useRef, useState } from "react";
import Comments from "./Comments";

function ShowVideoShorts() {
  const [likeflag, setlikeflag] = useState(false);
  const [shareflag, setshareflag] = useState(false);
  const [dislikeflag, setdislikeflag] = useState(false);
  const [menulitems, setmenulitems] = useState(false);
  const [showcomments, setshowcomments] = useState(false);
  const [videomeutflag, setvideomeutflag] = useState(false);
  const [dialogsub, setdialogsub] = useState(false);
  const [flagplay, setflagplay] = useState(false);
  const [sub, setsub] = useState(false);
  const [likenumber, setlikenumber] = useState(435);
  const divshowmenu = useRef({});
  const btnmenuitem = useRef({});
  const videotag = useRef({});
  const loadingtag = useRef()

  const listcoments = [
    {
      id: 1,
      imgprof: imgreact,
      user: "@abolfzl-1",
      textcoment: "tstcoment-1",
      comentlike: 10,
      comentdislike: 50,
      date: "1 months ago",
      replys: [],
    },
    {
      id: 2,
      imgprof: imgreact,
      user: "@abolfzl-2",
      textcoment: "tstcoment-2",
      comentlike: 45,
      comentdislike: 3,
      date: "2 months ago",
      replys: [],
    },
    {
      id: 3,
      imgprof: imgreact,
      user: "@abolfzl-3",
      textcoment: "tstcoment-3",
      comentlike: 23,
      comentdislike: 30,
      date: "3 months ago",
      replys: [],
    },
    {
      id: 4,
      imgprof: imgreact,
      user: "@abolfzl-4",
      textcoment: "tstcoment-4",
      comentlike: 98,
      comentdislike: 5,
      date: "4 months ago",
      replys: [],
    },
    {
      id: 5,
      imgprof: imgreact,
      user: "@abolfzl-5",
      textcoment: "tstcoment-5",
      comentlike: 21,
      comentdislike: 32,
      date: "5 months ago",
      replys: [],
    },
    {
      id: 6,
      imgprof: imgreact,
      user: "@abolfzl-6",
      textcoment: "tstcoment-6",
      comentlike: 90,
      comentdislike: 45,
      date: "6 months ago",
      replys: [],
    },
    {
      id: 7,
      imgprof: imgreact,
      user: "@abolfzl-7",
      textcoment: "tstcoment-7",
      comentlike: 130,
      comentdislike: 12,
      date: "7 months ago",
      replys: [],
    },
    {
      id: 8,
      imgprof: imgreact,
      user: "@abolfzl-8",
      textcoment: "tstcoment-8",
      comentlike: 40,
      comentdislike: 39,
      date: "8 months ago",
      replys: [],
    },
    {
      id: 9,
      imgprof: imgreact,
      user: "@abolfzl-9",
      textcoment: "tstcoment-9",
      comentlike: 120,
      comentdislike: 2,
      date: "9 months ago",
      replys: [],
    },
    {
      id: 10,
      imgprof: imgreact,
      user: "@abolfzl-10",
      textcoment: "tstcoment-10",
      comentlike: 730,
      comentdislike: 8,
      date: "10 months ago",
      replys: [],
    },
    {
      id: 11,
      imgprof: imgreact,
      user: "@abolfzl-11",
      textcoment: "tstcoment-11",
      comentlike: 260,
      comentdislike: 26,
      date: "11 months ago",
      replys: [],
    },
    {
      id: 12,
      imgprof: imgreact,
      user: "@abolfzl-12",
      textcoment: "tstcoment-12",
      comentlike: 430,
      comentdislike: 16,
      date: "12 months ago",
      replys: [],
    },
  ];

  const setlikefunc = () => {
    if (!likeflag) {
      setlikenumber(likenumber + 1);
    } else {
      setlikenumber(likenumber - 1);
    }
    setlikeflag(!likeflag);
    setdislikeflag(false);
  };
  const setdislikefunc = () => {
    if (likeflag) {
      setlikeflag(false);
      setlikenumber(likenumber - 1);
    }
    setdislikeflag(!dislikeflag);
  };
  const setshareflagfunc = () => {
    setshareflag(!shareflag);
  };

  const videomeutfunc = () => {
    setvideomeutflag(!videomeutflag);
    videotag.current.muted = !videotag.current.muted;
    console.log(videotag.current);
  };

  // اینجا تعقییرات لازمه
  const move = () => {
    let num = 0
    if (flagplay) {
      videotag.current.pause();
    } else {
      setInterval(() => {
       num++
       if(num == 100){
         num = 100
        //  loadingtag.current.style.width = "0px"
        }
       loadingtag.current.style.width = `${num} %`
       setTimeout(() => {
         videotag.current.play();
       }, 4000);
      },50);
    }
    setflagplay(!flagplay);
  };
  const leve = () => {
    videotag.current.pause();
    setflagplay(false);
  };

  const menuitemsfunc = (event) => {
    if (
      btnmenuitem.current.contains(event.target) ||
      divshowmenu.current.contains(event.target)
    ) {
      divshowmenu.current.style.display = "flex";
      setmenulitems(true);
    } else {
      divshowmenu.current.style.display = "none";
      setmenulitems(false);
    }
  };
  useEffect(() => {
    document.addEventListener("click", menuitemsfunc);
    return () => {
      document.removeEventListener("click", menuitemsfunc);
    };
  });

  const subscribefunc = () => {
    if (sub) {
      setdialogsub(true);
    } else {
      setsub(true);
    }
  };

  return (
    <div className="w-[450px] sm:w-[550px] md:w-[750px] md:flex md:justify-center h-[620px] overflow-y-auto shareshortspage overflow-scroll">
      <div
        className={` ${
          showcomments ? "w-max" : " "
        } h-[570px]  flex justify-center gap-2`}
      >
        <div
          onMouseDown={move}
          onMouseLeave={leve}
          className=" w-[340px] z-[6] relative mx-auto father flex flex-col h-[570px] rounded-2xl shadow-lg shadow-violet-500"
        >
          <video
            ref={videotag}
            className=" h-full z-[6] w-full object-cover rounded-2xl "
            src={videoshorts}
          ></video>

          <div className="z-[6] child absolute top-0 left-0 w-full px-3 pt-3 flex justify-between">
            <div className="left">
              <button
                onClick={move}
                className="hiddenn w-[35px] h-[35px] flex items-center justify-center text-white rounded-full bg-[#0000004a] "
              >
                {flagplay ? (
                  <TbPlayerPause size={22} />
                ) : (
                  <IoPlayOutline size={22} />
                )}
              </button>
            </div>
            <div className="right">
              <button
                onClick={videomeutfunc}
                className=" w-[35px] h-[35px] flex items-center justify-center text-white rounded-full bg-[#0000004a] "
              >
                {videomeutflag ? <GoMute size={22} /> : <GoUnmute size={22} />}
              </button>
            </div>
          </div>

          <div
            className={` ${
              showcomments ? "sm:-right-[0px] " : " sm:-right-[65px]"
            } absolute z-[6] text-[13px]  bottom-0 right-0  w-[60px] h-max flex flex-col gap-3 items-center justify-center `}
          >
            {/* btn-like */}
            <div className="p-1 w-[100%] text-center h-max like">
              <button
                onClick={setlikefunc}
                className={` ${
                  likeflag
                    ? " bg-[#ffffff] border border-black text-black  "
                    : "bg-[#4e4e4e4a] text-white "
                } p-1 w-[45px] h-[45px] flex items-center justify-center rounded-full `}
              >
                <SlLike size={20} />
              </button>
              <p className={` ${
                showcomments ? 'text-white' : ' text-white sm:text-black'
              } `}>{likenumber}</p>
            </div>
            {/* btn-dislike */}
            <div className="p-1 w-[100%] text-center h-max dislike">
              <button
                onClick={setdislikefunc}
                className={` ${
                  dislikeflag
                  ? " bg-[#ffffff] border border-black text-black  "
                  : "bg-[#4e4e4e4a] text-white "
                } p-1 w-[45px] h-[45px] flex items-center justify-center rounded-full `}
              >
                <SlDislike size={20} />
              </button>
              <p className={` ${
                showcomments ? 'text-white' : ' text-white sm:text-black'
              } `}>Dislike</p>
            </div>
            {/* btn-comment */}
            <div className="p-1 w-[100%] text-center h-max comment">
              <div className="">
                <button
                  onClick={() => setshowcomments(!showcomments)}
                  className={`${
                    showcomments
                    ? " bg-[#ffffff] border border-black text-black  "
                    : "bg-[#4e4e4e4a] text-white "
                  } p-1 w-[45px] h-[45px] flex items-center justify-center rounded-full `}
                >
                  <MdComment size={20} />
                </button>
                <p className={` ${
                showcomments ? 'text-white' : ' text-white sm:text-black'
              } `}>4.3K</p>
              </div>
            </div>
            {/* btn-share */}
            <div className="p-1 w-[100%] text-center h-max share">
              <button
                onClick={setshareflagfunc}
                className={` ${
                  shareflag
                  ? " bg-[#ffffff] border border-black text-black  "
                  : "bg-[#4e4e4e4a] text-white "
                } p-1 w-[45px] h-[45px] flex items-center justify-center rounded-full `}
              >
                <RiShareForwardFill size={20} />
              </button>
              <p className={` ${
                showcomments ? 'text-white' : ' text-white sm:text-black'
              } `}>Share</p>
            </div>
            {/* btn-menu */}
            <div className="p-1 w-[100%] text-center h-max menu">
              <button
                ref={btnmenuitem}
                onClick={menuitemsfunc}
                className={`${
                  menulitems
                  ? " bg-[#ffffff] border border-black text-black  "
                  : "bg-[#4e4e4e4a] text-white "
                }  p-1 w-[45px] btn-tst h-[45px] flex items-center justify-center rounded-full `}
              >
                <CiMenuKebab size={20} />
              </button>
            </div>
            {/* link-profile */}
            <div className="p-1 w-[100%] text-center h-max img-prof">
              <img
                className=" w-[45px] h-[45px] mx-auto "
                src={imgreact}
                alt=""
              />
            </div>

            {/* poopup-menu */}
            <div
              ref={divshowmenu}
              style={{ display: "none" }}
              className=" text-black w-[300px] h-max z-[100] absolute flex flex-col gap-2 p-2 bottom-28 right-3 rounded-xl bg-gray-200 shadow-lg shadow-gray-800 "
            >
              <button className="flex gap-1 items-center hover:bg-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ display: "block", width: "25px", height: "25px" }}
                  focusable="false"
                >
                  <path d="M21 6H3V5h18v1zm-8 3-9.99.01V10L13 9.99V9zm8 4H3v1h18v-1zm-8 4H3v1h10v-1z"></path>
                </svg>
                Description
              </button>

              <button className="flex gap-1 items-center hover:bg-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  focusable="false"
                  style={{ display: "block", width: "25px", height: "25px" }}
                >
                  <path d="M4 20h14v1H3V6h1v14zm14-10h-4V6h-1v4H9v1h4v4h1v-4h4v-1zm3-7v15H6V3h15zm-1 1H7v13h13V4z"></path>
                </svg>
                Save to playlist
              </button>

              <button className="flex gap-1 items-center hover:bg-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  focusable="false"
                  style={{ display: "block", width: "25px", height: "25px" }}
                >
                  <path d="M6 14v-4c0-.55.45-1 1-1h3c.55 0 1 .45 1 1v1H9.5v-.5h-2v3h2V13H11v1c0 .55-.45 1-1 1H7c-.55 0-1-.45-1-1zm8 1h3c.55 0 1-.45 1-1v-1h-1.5v.5h-2v-3h2v.5H18v-1c0-.55-.45-1-1-1h-3c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1zm6-11H4v16h16V4m1-1v18H3V3.01C3 3 3 3 3.01 3H21z"></path>
                </svg>
                Captions
              </button>

              <button className="flex gap-1 items-center hover:bg-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  focusable="false"
                  style={{ display: "block", width: "25px", height: "25px" }}
                >
                  <g>
                    <path d="M12 3c-4.96 0-9 4.04-9 9s4.04 9 9 9 9-4.04 9-9-4.04-9-9-9m0-1c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm7 11H5v-2h14v2z"></path>
                  </g>
                </svg>
                Don't recommend this channel
              </button>

              <button className="flex gap-1 items-center hover:bg-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  focusable="false"
                  style={{ display: "block", width: "25px", height: "25px" }}
                >
                  <path d="m13.18 4 .24 1.2.16.8H19v7h-5.18l-.24-1.2-.16-.8H6V4h7.18M14 3H5v18h1v-9h6.6l.4 2h7V5h-5.6L14 3z"></path>
                </svg>
                Report
              </button>
            </div>
          </div>

          <div className=" z-[6] absolute bottom-0 left-0 px-3 w-[250px] h-[100px] flex gap-2 flex-col justify-center items-start">
            <div className=" w-full flex items-center gap-3">
              <img src={imgreact} alt="" />
              <NavLink className=" text-white" to={`/`}>
                abolfazl-tst
              </NavLink>
              <button
                onClick={subscribefunc}
                className={` ${
                  sub ? " bg-[#25232385] text-white" : " bg-yellow-50"
                } px-2 py-1  rounded-2xl `}
              >
                Subscribe
              </button>
            </div>
            <p className="text-white text-[13px]">
              انواع شعبده بازی کلوز آپ چین؟
            </p>
          </div>
        </div>

        {/* show-comments */}
        {showcomments ? (
          <div className=" w-[340px] h-[570px] rounded-2xl shadow-lg shadow-violet-500">
            <div className="px-2 flex justify-between items-center">
              <p>
                Comments <span>{listcoments.length}</span>
              </p>
              <div className="">
                <button className=" w-[30px] h-[30px] rounded-full hover:bg-gray-200">
                  X
                </button>
              </div>
            </div>

            <div className=" w-full h-[450px] overflow-scroll widthscroll overflow-x-auto bg-red-100f">
              <div className="flex flex-col gap-2">
                {listcoments.length > 0 ?
                  listcoments.map((item) => (
                    <Comments key={item.id} coment={item} />
                  )): <p className=" relative top-3 text-center">Nothing comment</p> }
              </div>
            </div>

            <div className="p-2">
            <div className=" w-full p-1 flex gap-1 flex-col ">
              <div className="w-full flex gap-2 items-center">
                <img className=" w-[30px] h-[30px]" src={imgreact} alt="" />
                <input className=" w-full h-[20px] border-b-2 border-violet-400 bg-transparent outline-none p-1" placeholder="Add a reply..." type="text" name="" id="" />
              </div>
              <div className="w-full flex gap-4 justify-end">
                <button className="py-1 px-2 bg-blue-500 rounded-lg text-white">Reply</button>
              </div>
            </div>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>

      {/* share */}
      {shareflag ? (
        <div className=" w-full h-full fixed z-[200] top-0 left-0 flex justify-center items-center bg-[#00000085]">
          <div className=" w-[420px] h-[210px] p-2 bg-[#ffffff] shadow-lg shadow-gray-800 rounded-2xl">
            <div className="px-1 mt-1 flex items-center justify-between">
              <span>Share</span>
              <button
                onClick={() => setshareflag(false)}
                className=" w-[35px] h-[35px] text-[15px] hover:text-black hover:bg-gray-200 rounded-full"
              >
                X
              </button>
            </div>

            <div className=" w-full flex shareshortspage overflow-scroll overflow-y-auto">
              <div className="h-[100px] flex gap-4 justify-center items-center">
                <button className="w-[60px] h-[85px] text-[12px] flex flex-col justify-center ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    focusable="false"
                    style={{ width: "70px", height: "70px" }}
                  >
                    <g fill="none">
                      <circle cx="30" cy="30" r="30" fill="#25D366"></circle>
                      <path
                        d="M39.7746 19.3513C37.0512 16.5467 33.42 15 29.5578 15C21.6022 15 15.1155 21.6629 15.1155 29.8725C15.1155 32.4901 15.7758 35.0567 17.0467 37.3003L15 45L22.6585 42.9263C24.7712 44.1161 27.148 44.728 29.5578 44.728C37.5134 44.728 44 38.0652 44 29.8555C44 25.8952 42.498 22.1558 39.7746 19.3513ZM29.5578 42.2295C27.3956 42.2295 25.2829 41.6346 23.4508 40.5127L23.0051 40.2408L18.4661 41.4646L19.671 36.9093L19.3904 36.4334C18.1855 34.4618 17.5583 32.1841 17.5583 29.8555C17.5583 23.0397 22.9556 17.4986 29.5743 17.4986C32.7763 17.4986 35.7968 18.7904 38.0581 21.119C40.3193 23.4476 41.5737 26.5581 41.5737 29.8555C41.5572 36.6884 36.1764 42.2295 29.5578 42.2295ZM36.1434 32.966C35.7803 32.779 34.0142 31.8782 33.6841 31.7592C33.354 31.6402 33.1064 31.5722 32.8754 31.9462C32.6278 32.3201 31.9511 33.153 31.7365 33.4079C31.5219 33.6629 31.3238 33.6799 30.9607 33.4929C30.5976 33.306 29.4422 32.915 28.0558 31.6572C26.9829 30.6714 26.2567 29.4476 26.0421 29.0907C25.8275 28.7167 26.0256 28.5127 26.2072 28.3258C26.3722 28.1558 26.5703 27.8839 26.7518 27.6799C26.9334 27.4589 26.9994 27.3059 27.115 27.068C27.2305 26.813 27.181 26.6091 27.082 26.4221C26.9994 26.2351 26.2732 24.3994 25.9761 23.6686C25.679 22.9377 25.3819 23.0397 25.1673 23.0227C24.9528 23.0057 24.7217 23.0057 24.4741 23.0057C24.2265 23.0057 23.8469 23.0907 23.5168 23.4646C23.1867 23.8385 22.2459 24.7394 22.2459 26.5581C22.2459 28.3938 23.5333 30.1445 23.7149 30.3994C23.8964 30.6544 26.2567 34.3938 29.8714 36.0085C30.7297 36.3994 31.4064 36.6204 31.9345 36.7904C32.7928 37.0793 33.5851 37.0283 34.2123 36.9433C34.9055 36.8414 36.3415 36.0425 36.6551 35.1756C36.9522 34.3088 36.9522 33.5609 36.8697 33.4079C36.7541 33.255 36.5065 33.153 36.1434 32.966Z"
                        fill="white"
                      ></path>
                    </g>
                  </svg>
                  <span className=" mx-auto">WhatsApp</span>
                </button>

                <button className="w-[60px] h-[85px] text-[12px] flex flex-col justify-center ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    focusable="false"
                    style={{ display: "block", width: "70px", height: "70px" }}
                  >
                    <g fill="none">
                      <path
                        d="M28.4863253 59.9692983c-6.6364044-.569063-11.5630204-2.3269561-16.3219736-5.8239327C4.44376366 48.4721168 3e-7 39.6467924 3e-7 29.9869344c0-14.8753747 10.506778-27.18854591 25.2744118-29.61975392 6.0281072-.9924119 12.7038532.04926445 18.2879399 2.85362966C57.1386273 10.0389054 63.3436516 25.7618627 58.2050229 40.3239688 54.677067 50.3216743 45.4153135 57.9417536 34.81395 59.5689067c-2.0856252.3201125-5.0651487.5086456-6.3276247.4003916z"
                        fill="#3B5998"
                      ></path>
                      <path
                        d="M25.7305108 45h5.4583577V30.0073333h4.0947673l.8098295-4.6846666h-4.9045968V21.928c0-1.0943333.7076019-2.2433333 1.7188899-2.2433333h2.7874519V15h-3.4161354v.021c-5.3451414.194-6.4433395 3.2896667-6.5385744 6.5413333h-.0099897v3.7603334H23v4.6846666h2.7305108V45z"
                        fill="#FFF"
                      ></path>
                    </g>
                  </svg>
                  <span className=" mx-auto">Facebook</span>
                </button>

                <button className="w-[60px] h-[85px] text-[12px] flex flex-col justify-center ">
                  <span className=" mx-auto">X</span>
                </button>

                <button className="w-[60px] h-[85px] text-[12px] flex flex-col justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    focusable="false"
                    style={{ display: "block", width: "70px", height: "70px" }}
                  >
                    <g fill="none">
                      <path
                        d="M28.4863253 59.9692983c-6.6364044-.569063-11.5630204-2.3269561-16.3219736-5.8239327C4.44376366 48.4721168 3e-7 39.6467924 3e-7 29.9869344c0-14.8753747 10.506778-27.18854591 25.2744118-29.61975392 6.0281072-.9924119 12.7038532.04926445 18.2879399 2.85362966C57.1386273 10.0389054 63.3436516 25.7618627 58.2050229 40.3239688 54.677067 50.3216743 45.4153135 57.9417536 34.81395 59.5689067c-2.0856252.3201125-5.0651487.5086456-6.3276247.4003916z"
                        fill="#888"
                      ></path>
                      <path
                        d="M40.531502 19.160814h-22c-1.74 0-2.986 1.2375-3 3v16c0 1.7625 1.26 3 3 3h22c1.74 0 3-1.2375 3-3v-16c0-1.7625-1.26-3-3-3zm0 6l-11 7-11-7v-3l11 7 11-7v3z"
                        fill="#FFF"
                      ></path>
                    </g>
                  </svg>
                  <span className=" mx-auto">Email</span>
                </button>

                <button className="w-[60px] h-[85px]  text-[12px] flex flex-col justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    focusable="false"
                    style={{ display: "block", width: "70px", height: "70px" }}
                  >
                    <g fill="none">
                      <path
                        d="M28.4863253 59.9692983c-6.6364044-.569063-11.5630204-2.3269561-16.3219736-5.8239327C4.44376366 48.4721168 3e-7 39.6467924 3e-7 29.9869344c0-14.8753747 10.506778-27.18854591 25.2744118-29.61975392 6.0281072-.9924119 12.7038532.04926445 18.2879399 2.85362966C57.1386273 10.0389054 63.3436516 25.7618627 58.2050229 40.3239688 54.677067 50.3216743 45.4153135 57.9417536 34.81395 59.5689067c-2.0856252.3201125-5.0651487.5086456-6.3276247.4003916z"
                        fill="#FF4500"
                      ></path>
                      <path
                        d="M34.1335847 43.9991814c1.6336774-.3831682 2.81654-.7939438 3.9781753-1.3815065 3.6153903-1.8286959 5.8788354-4.8645264 5.8788354-7.8849481 0-.9131088.0196207-.9556355.780668-1.6923265.6040409-.5847092.8404012-.962515 1.044679-1.6698428.2433185-.8425206.2441028-.9826228.0100139-1.7878614-.6566532-2.2588075-3.0054252-3.2764371-5.1075029-2.212882l-.8124519.4110627-.837264-.5151716c-1.6101652-.9907471-4.473974-1.96108051-6.3205111-2.14155924-.5059537-.04945042-1.143803-.1235464-1.4174535-.16465815l-.4975382-.07474783.2136595-1.06953332c.1175125-.5882423.3623778-1.7491883.5441475-2.57987956.181767-.83069153.4095191-1.95749071.5061138-2.50399817.1396137-.78991765.2348596-.99365031.4645331-.99365031.1589005 0 1.2955101.21462853 2.5257988.4769522 1.2302915.26232367 2.2622022.47695193 2.293134.47695193.0309345 0 .1003234.23497925.154203.52217616.1363137.72661143.4902897 1.17780487 1.2134714 1.54674469 1.7356128.8854428 3.6891485-.29431302 3.6891485-2.22790474 0-2.3956262-2.9538443-3.44186625-4.4550019-1.57794377-.2901205.36022881-.4356746.42625561-.7154284.32453216-.1931649-.07023833-1.5202546-.3669593-2.9490951-.65938053-1.8923676-.38728585-2.6686067-.48706487-2.8582979-.36740978-.2896185.1826864-.2522224.047706-1.0501419 3.79055007-.9490696 4.45187338-1.0064011 4.70400786-1.0882029 4.78580828-.0432388.04324046-.729551.14596475-1.5251367.22827402-2.413687.24971784-5.06621906 1.10194849-6.8544721 2.20227189l-.8268564.5087695-.81204644-.4046587c-2.11972653-1.0563058-4.47243958-.0382468-5.1287215 2.2192841-.23408885.8052386-.23330375.9453408.0100166 1.7878614.20427624.7073278.44063816 1.0851336 1.04467744 1.6698428.76105187.736691.78066878.7792177.78066878 1.6923265 0 4.172347 4.28816886 8.1540991 10.01599352 9.3002929 1.8975637.3797217 2.0263168.3894072 4.4515526.3349143 1.5849893-.0356103 2.7274992-.1508298 3.6566327-.3687526zm-6.6864685-3.0300366c-1.3154638-.2961613-2.8032079-.9569232-3.2391341-1.4386156-.34760429-.384099-.198986-.9659493.246724-.9659493.1736296 0 .5801788.1805458.9034441.4012095 2.1828306 1.4900284 7.1085991 1.484628 9.2987021-.0101767.7054363-.4814861 1.2827246-.468194 1.3538857.0311679.0334854.234998-.1164569.4687666-.4771278.7438635-1.7511846 1.3356924-5.2646974 1.8738181-8.086494 1.2385197v-.000019zm-4.01196195-5.9075609c-.81902983-.4443886-1.22403999-1.1532958-1.22477787-2.143771-.000787-1.135302.52653614-1.8699603 1.59778946-2.2257735.76240766-.253232.85344696-.2532238 1.51689516.0001492 1.785415.6818561 2.1507834 2.909296.6724678 4.0996229-.7705198.6204159-1.7299516.7214286-2.56237455.2697724zm11.09588945.0732995c-.7590038-.3947507-1.1832989-.8746601-1.3628596-1.5414995-.3321829-1.2336253.2931784-2.4377233 1.5067529-2.9011953.6634485-.253373.754488-.2533812 1.5168976-.0001492 1.0712525.3558132 1.5986343 1.0904715 1.5977903 2.2257735-.0008141 1.0085002-.4138259 1.7116813-1.2587076 2.1427072-.7599699.3877084-1.3548626.4098285-1.9998736.0743633z"
                        fill="#FDFDFD"
                      ></path>
                    </g>
                  </svg>
                  <span className=" mx-auto">Reddit</span>
                </button>

                <button className="w-[60px] h-[85px] text-[12px] flex flex-col justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    focusable="false"
                    style={{ display: "block", width: "70px", height: "70px" }}
                  >
                    <g fill="none">
                      <circle fill="#4680C2" cx="30" cy="30" r="30"></circle>
                      <path
                        d="M49.06121 21.60996c.28897-.90818 0-1.56868-1.27972-1.56868h-4.25195c-1.07331 0-1.56869.57794-1.85765 1.19715 0 0-2.1879 5.28399-5.2427 8.71032-.99076.99075-1.44485 1.321-1.9815 1.321-.28897 0-.6605-.33025-.6605-1.23843v-8.46264c0-1.0733-.33025-1.56868-1.23844-1.56868h-6.68754c-.6605 0-1.07331.49537-1.07331.99075 0 1.03203 1.5274 1.27971 1.69253 4.1694v6.27473c0 1.36227-.24769 1.60996-.78434 1.60996-1.44484 0-4.95374-5.32527-7.05908-11.3936C18.2242 20.4541 17.8114 20 16.73808 20h-4.29324C11.20641 20 11 20.57794 11 21.19715c0 1.1146 1.44484 6.72883 6.72883 14.15943 3.5089 5.07758 8.50391 7.80214 13.00355 7.80214 2.72456 0 3.0548-.61922 3.0548-1.65125v-3.83914c0-1.23844.2477-1.44484 1.1146-1.44484.61922 0 1.7338.33025 4.25196 2.76583C42.04342 41.879 42.53879 43.2 44.14875 43.2h4.25196c1.23844 0 1.81637-.61922 1.48612-1.81637-.37153-1.19715-1.77509-2.93096-3.59146-4.99502-.99074-1.15587-2.47686-2.43559-2.93096-3.0548-.61921-.82562-.45409-1.15587 0-1.89893-.04128 0 5.16015-7.34805 5.6968-9.82492"
                        fill="#FFFFFF"
                      ></path>
                    </g>
                  </svg>
                  <span className=" mx-auto">Vk</span>
                </button>

                <button className="w-[60px] h-[85px] text-[12px] flex flex-col justify-center ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    focusable="false"
                    style={{ width: "70px", height: "70px" }}
                  >
                    <g fill="none">
                      <circle fill="#F7931F" cx="30" cy="30" r="30"></circle>
                      <path
                        d="M30.02666667 16.01333333c3.71666663.01 6.70333333 3.05 6.68333333 6.81333334C36.69 26.5 33.6566667 29.4766667 29.94333333 29.4633333c-3.67666666-.0133333-6.69-3.06-6.66666666-6.73999997.02333333-3.72333333 3.04-6.72 6.75-6.71zm-.01 10.01666667C31.84 26.0233333 33.2933333 24.56 33.2866667 22.73333333 33.28 20.90666667 31.82333333 19.45 30 19.45c-1.84-.00333333-3.31 1.48-3.29333333 3.32333333.01333333 1.82 1.48333333 3.26333337 3.31 3.25666667zM37.56 32.1066667C36.7366667 32.95 35.7466667 33.5633333 34.65 33.99c-1.04.4033333-2.1766667.6066667-3.30666667.74.17.1866667.25.2766667.35666667.3833333 1.53 1.5366667 3.0666667 3.07 4.5933333 4.61.52.5266667.63 1.1766667.3433334 1.7866667-.3133334.67-1.0133334 1.1066667-1.7 1.06-.4366667-.03-.7733334-.2466667-1.0766667-.55-1.1566667-1.1633333-2.33333333-2.3033333-3.46333333-3.4866667-.33-.3433333-.48666667-.28-.78.02-1.16333334 1.1966667-2.34 2.3733334-3.53 3.5433334-.53333334.5266666-1.16666667.62-1.78666667.32-.65666667-.32-1.07666667-.99-1.04333333-1.6633334.02333333-.4566666.24666666-.8033333.56-1.1166666C25.33 38.1233333 26.84 36.61 28.35333333 35.0933333c.1-.1.19333334-.2066666.34-.3633333-2.06-.2166667-3.91666666-.7233333-5.50666666-1.9666667-.19666667-.1533333-.4-.3033333-.58333334-.4766666-.69666666-.67-.76666666-1.4333334-.21333333-2.2233334.47-.6733333 1.26333333-.8566666 2.08333333-.47.16.0733334.31.17.45666667.27 2.96333333 2.0366667 7.03666667 2.0933334 10.01.0933334.2933333-.2233334.61-.41.9766667-.5033334.71-.1833333 1.37.0766667 1.7533333.7.4333333.71.4266667 1.4-.11 1.9533334z"
                        fill="#FFF"
                      ></path>
                    </g>
                  </svg>
                  <span className=" mx-auto">Ok</span>
                </button>

                <button className="w-[60px] h-[85px] text-[12px] flex flex-col justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    focusable="false"
                    style={{ display: "block", width: "70px", height: "70px" }}
                  >
                    <g fill="none">
                      <path
                        d="M28.4863253 59.9692983c-6.6364044-.569063-11.5630204-2.3269561-16.3219736-5.8239327C4.44376366 48.4721168 3e-7 39.6467924 3e-7 29.9869344c0-14.8753747 10.506778-27.18854591 25.2744118-29.61975392 6.0281072-.9924119 12.7038532.04926445 18.2879399 2.85362966C57.1386273 10.0389054 63.3436516 25.7618627 58.2050229 40.3239688 54.677067 50.3216743 45.4153135 57.9417536 34.81395 59.5689067c-2.0856252.3201125-5.0651487.5086456-6.3276247.4003916z"
                        fill="#BD081C"
                      ></path>
                      <path
                        d="M30 14c-8.8359111 0-16 7.1714944-16 16.0165392 0 6.5927634 3.9804444 12.254788 9.6650667 14.7135047-.0408889-1.1165307-.0010667-2.448039.2812444-3.6553302.3104-1.3030344 2.0682667-8.7589113 2.0682667-8.7589113s-.5134222-1.02755-.5134222-2.5444942c0-2.3797018 1.3806222-4.160741 3.0965333-4.160741 1.4609778 0 2.1671111 1.1005142 2.1671111 2.41565 0 1.4692506-.9365333 3.6667197-1.4200889 5.7022439-.4003555 1.7048716.8576 3.0968868 2.5372445 3.0968868 3.04 0 5.0876444-3.9112388 5.0876444-8.547849 0-3.5211471-2.3669333-6.159605-6.6794667-6.159605-4.8693333 0-7.9072 3.6364662-7.9072 7.6993283 0 1.3998456.4138667 2.3889558 1.0613334 3.1524109.2968889.3512961.3370666.4929535.2286222.897638-.0782222.2939925-.2510222 1.0058387-.3253333 1.2902212-.1063112.4068201-.4373334.5495453-.8046223.4000576-2.2421333-.9150783-3.2888889-3.3748628-3.2888889-6.1393174 0-4.5672052 3.8474667-10.042726 11.4766223-10.042726 6.1326222 0 10.1667555 4.4422761 10.1667555 9.2070185 0 6.3090928-3.5029333 11.0179553-8.6641778 11.0179553-1.7340444 0-3.3660444-.9385692-3.9217777-2.0020674 0 0-.9354667 3.7001765-1.1306667 4.4177174-.3370667 1.2211722-.9863111 2.4412765-1.5879111 3.4019129 1.3984.4000576 2.8768.6150352 4.4071111.6150352 8.8359111 0 16-7.1714944 16-16.0165392S38.8359111 14 30 14"
                        fill="#FFF"
                      ></path>
                    </g>
                  </svg>
                  <span className=" mx-auto">Pinterest</span>
                </button>

                <button className="w-[60px] h-[85px] text-[12px] flex flex-col justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    focusable="false"
                    style={{ display: "block", width: "70px", height: "70px" }}
                  >
                    <g fill="none">
                      <path
                        d="M28.486325 59.969298c-6.636404-.569063-11.56302-2.326956-16.321973-5.823932C4.443764 48.472116 0 39.646792 0 29.986934 0 15.11156 10.506778 2.798388 25.274412.36718c6.028107-.992411 12.703853.049265 18.28794 2.85363 13.576275 6.818095 19.7813 22.541053 14.64267 37.103159-3.527955 9.997705-12.789708 17.617785-23.391072 19.244938-2.085625.320112-5.065149.508645-6.327625.400391z"
                        fill="#35465C"
                      ></path>
                      <path
                        d="M25.96539 14c0 6.948267-5.96539 8.206933-5.96539 8.206933v4.750934h4.023219v11.788089C24.023219 42.70791 27.676687 46 32.121159 46c4.444828 0 6.882486-1.768533 6.882486-1.768533v-5.240178s-1.341547 1.7664-4.08147 1.7664c-2.739568 0-3.924832-2.132622-3.924832-3.778133v-9.992178h7.00325v-5.025422h-7.00325V14H25.96539z"
                        fill="#FFF"
                      ></path>
                    </g>
                  </svg>
                  <span className=" mx-auto">Tumblr</span>
                </button>

                <button className="w-[60px] h-[85px] text-[12px] flex flex-col justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    focusable="false"
                    style={{ display: "block", width: "70px", height: "70px" }}
                  >
                    <g fill="none">
                      <path
                        d="M28.4863253 59.9692983c-6.6364044-.569063-11.5630204-2.3269561-16.3219736-5.8239327C4.44376366 48.4721168 3e-7 39.6467924 3e-7 29.9869344c0-14.8753747 10.506778-27.18854591 25.2744118-29.61975392 6.0281072-.9924119 12.7038532.04926445 18.2879399 2.85362966C57.1386273 10.0389054 63.3436516 25.7618627 58.2050229 40.3239688 54.677067 50.3216743 45.4153135 57.9417536 34.81395 59.5689067c-2.0856252.3201125-5.0651487.5086456-6.3276247.4003916z"
                        fill="#0077B5"
                      ></path>
                      <g fill="#FFF">
                        <path d="M17.88024691 22.0816337c2.14182716 0 3.87817284-1.58346229 3.87817284-3.53891365C21.75841975 16.58553851 20.02207407 15 17.88024691 15 15.73634568 15 14 16.58553851 14 18.54272005c0 1.95545136 1.73634568 3.53891365 3.88024691 3.53891365M14.88888889 44.8468474h6.95851852V24.77777778h-6.95851852zM31.6137778 33.6848316c0-2.3014877 1.0888889-4.552108 3.6925432-4.552108 2.6036543 0 3.2438518 2.2506203 3.2438518 4.4970883v10.960701h6.9274074V33.1816948c0-7.9263084-4.6853333-9.29280591-7.5676049-9.29280591-2.8798518 0-4.4682469.9740923-6.2961975 3.33440621v-2.70185178h-6.9471111V44.5905129h6.9471111V33.6848316z"></path>
                      </g>
                    </g>
                  </svg>
                  <span className=" mx-auto">Linkedin</span>
                </button>

                <button className="w-[60px] h-[85px] text-[12px] flex flex-col justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    focusable="false"
                    style={{ display: "block", width: "70px", height: "70px" }}
                  >
                    <g fill="none">
                      <g>
                        <circle fill="#FF8226" cx="30" cy="30" r="30"></circle>
                        <g
                          transform="translate(16.000000, 16.000000)"
                          fill="#FFFFFF"
                        >
                          <path
                            d="M0,15.2225809 L0,25.1910701 C0,26.7287731 1.26040471,27.9752991 2.81528027,27.9752991 C4.37015582,27.9752991 5.63056053,26.7287731 5.63056053,25.1910701 L5.63056053,9.9538317 C5.46855813,12.8905403 3.00985687,15.2225809 0,15.2225809"
                            opacity="0.299999982"
                          ></path>
                          <path
                            d="M27.7743298,0 C21.648207,0 16.6819432,4.91150508 16.6819432,10.9702166 L16.6819432,14.3849279 C16.6819432,12.8472249 17.942565,11.6006989 19.4974406,11.6006989 C21.052099,11.6006989 22.3125037,12.8472249 22.3125037,14.3849279 L22.3125037,15.8020911 C22.3125037,17.339794 23.5731256,18.5863201 25.1280011,18.5863201 C26.6828767,18.5863201 27.9432814,17.339794 27.9432814,15.8020911 L27.9432814,0.00218765537 C27.8870366,0.00131259322 27.8307918,0 27.7743298,0"
                            opacity="0.299999982"
                          ></path>
                          <path
                            d="M0,15.2860232 C3.00985687,15.2860232 5.46855813,12.9539825 5.63056053,10.017274 L5.63056053,7.4054322 C5.63056053,7.33367711 5.63425227,7.26279707 5.63968131,7.19257334 C5.74956497,5.75418993 6.96349714,4.62098444 8.4458408,4.62098444 C10.0007164,4.62098444 11.2611211,5.86751048 11.2611211,7.4054322 L11.2611211,18.2990809 C11.2615554,19.8363463 12.5217429,21.0826536 14.0764013,21.0826536 C15.6310597,21.0826536 16.8912473,19.8365651 16.8918988,18.2992997 L16.8918988,10.9702166 C16.8918988,4.91150508 21.8579454,0 27.9840683,0 L0,0 L0,15.2860232 Z"
                            opacity="0.699999988"
                          ></path>
                          <path
                            d="M0,15.2225809 L0,25.1910701 C0,26.7287731 1.26040471,27.9752991 2.81528027,27.9752991 C4.37015582,27.9752991 5.63056053,26.7287731 5.63056053,25.1910701 L5.63056053,9.9538317 C5.46855813,12.8905403 3.00985687,15.2225809 0,15.2225809"
                            opacity="0.5"
                          ></path>
                          <path
                            d="M27.7743298,0 C21.648207,0 16.6819432,4.91150508 16.6819432,10.9702166 L16.6819432,14.3849279 C16.6819432,12.8472249 17.942565,11.6006989 19.4974406,11.6006989 C21.052099,11.6006989 22.3125037,12.8472249 22.3125037,14.3849279 L22.3125037,15.8020911 C22.3125037,17.339794 23.5731256,18.5863201 25.1280011,18.5863201 C26.6828767,18.5863201 27.9432814,17.339794 27.9432814,15.8020911 L27.9432814,0.00218765537 C27.8870366,0.00131259322 27.8307918,0 27.7743298,0"
                            opacity="0.5"
                          ></path>
                          <path d="M0,15.2860232 C3.00985687,15.2860232 5.46855813,12.9539825 5.63056053,10.017274 L5.63056053,7.4054322 C5.63056053,7.33367711 5.63425227,7.26279707 5.63968131,7.19257334 C5.74956497,5.75418993 6.96349714,4.62098444 8.4458408,4.62098444 C10.0007164,4.62098444 11.2611211,5.86751048 11.2611211,7.4054322 L11.2611211,18.2990809 C11.2615554,19.8363463 12.5217429,21.0826536 14.0764013,21.0826536 C15.6310597,21.0826536 16.8912473,19.8365651 16.8918988,18.2992997 L16.8918988,10.9702166 C16.8918988,4.91150508 21.8579454,0 27.9840683,0 L0,0 L0,15.2860232 Z"></path>
                        </g>
                      </g>
                    </g>
                  </svg>
                  <span className=" mx-auto">Mix</span>
                </button>
              </div>
            </div>

            <div className=" w-full mt-2 flex gap-2 justify-center items-center">
              <p className=" px-2 outline-none">http://tst/shorts</p>
              <button className="px-2 py-1 bg-blue-600 text-white rounded-xl">
                copy
              </button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}

      {/* dialog-sub */}
      {dialogsub ? (
        <div className=" w-full h-full fixed z-[200] top-0 left-0 flex justify-center items-center bg-[#00000036] ">
          <div className="w-[270px] h-[100px] p-2 flex flex-col gap-3 justify-center bg-[#f5f5f8] shadow-lg shadow-gray-800 rounded-2xl">
            <span className=" w-max mx-auto">
              {" "}
              UnSubscribe from @abolfazl-tst?
            </span>
            <div className=" w-full flex justify-center gap-5">
              <button
                onClick={() => setdialogsub(false)}
                className=" px-2 py-1 rounded-lg hover:bg-gray-200 text-black"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setsub(false), setdialogsub(false);
                }}
                className=" px-2 py-1 rounded-lg hover:bg-gray-200 text-blue-600"
              >
                UnSubscribe
              </button>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
      {/* loading-tag */}
    <p ref={loadingtag} className="w-0 h-[5px] absolute top-0 left-0 bg-red-500 z-[100]"></p>
    </div>
  );
}

export default ShowVideoShorts;
