import { NavLink } from "react-router-dom";
import { SlLike } from "react-icons/sl";
import { SlDislike } from "react-icons/sl";
import { CiMenuKebab } from "react-icons/ci";

import imgreact from "../assets/react.svg";
import { useState } from "react";

function Comments({ coment }) {
  const [commentlike, setcommentlike] = useState(coment.comentlike);
  const [commentdislike, setcommentdislike] = useState(coment.comentdislike);
  const [chengelikeflag, setchengelikeflag] = useState(false);
  const [chengedislikeflag, setchengedislikeflag] = useState(false);
  const [replyflag, setreplyflag] = useState(false);

  const setcomentlike = () => {
    if (!chengelikeflag) setcommentlike(commentlike + 1);
    if (chengedislikeflag) setcommentdislike(commentdislike - 1);
    setchengelikeflag(true);
    setchengedislikeflag(false);
  };
  const setcomentdislike = () => {
    if (!chengedislikeflag) setcommentdislike(commentdislike + 1);
    if (chengelikeflag) setcommentlike(commentlike - 1);
    setchengedislikeflag(true);
    setchengelikeflag(false);
  };
  const replyfunc = () => {
    setreplyflag(!replyflag);
  };


  return (
    <div className=" w-full h-max flex  gap-3 p-1 py-3 items-start border-b-2 rounded-b-3xl ">
      <img src={coment.imgprof} alt="" />
      <div className="w-full text-[14px] pr-3 flex justify-between">
        <div className="w-full flex gap-1 flex-col">
          <div className="flex gap-1 items-end">
            <NavLink className=" " to={`/${coment.user}`}>
              {coment.user}
            </NavLink>
            <span className=" text-[10px]">{coment.date}</span>
          </div>
          <span className=" ">{coment.textcoment}</span>
          <div className=" flex gap-4 ">
            <button
              onClick={setcomentlike}
              className=" flex gap-2 items-center"
            >
              <SlLike
                className={`${chengelikeflag ? "text-green-700" : " "}`}
                size={22}
              />
              {commentlike}
            </button>
            <button
              onClick={setcomentdislike}
              className=" flex gap-2 items-center"
            >
              <SlDislike
                className={`${chengedislikeflag ? "text-red-700 " : ""}`}
                size={22}
              />
              {commentdislike}
            </button>
            <button onClick={replyfunc}>Reply</button>
          </div>
          {replyflag ? (
            <div className=" w-full p-1 flex gap-2 flex-col ">
              <div className="w-full flex gap-2 items-center">
                <img className=" w-[30px] h-[30px]" src={imgreact} alt="" />
                <input
                  className="inputreply w-full h-[30px] px-2 border-b-2 rounded-b-lg border-violet-400 bg-transparent outline-none p-1"
                  placeholder="Add a reply..."
                  type="text"
                  name=""
                  id=""
                />
              </div>
              <div className="w-full flex gap-4 justify-end">
                <button
                  className=" bg-gray-200 px-3 py-1 rounded-lg"
                  onClick={() => setreplyflag(false)}
                >
                  Cancel
                </button>
                <button
                  className={`${ true ? " bg-blue-600 text-white " : " "
                  } px-3 py-1 rounded-lg`}
                >
                  Reply
                </button>
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
        <div className="">
          <button>
            <CiMenuKebab size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Comments;
