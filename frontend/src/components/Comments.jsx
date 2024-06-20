import { NavLink } from "react-router-dom";
import { SlLike } from "react-icons/sl";
import { SlDislike } from "react-icons/sl";
import { CiMenuKebab } from "react-icons/ci";

import personimg from '../assets/person.jpg'
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
    <div className=" w-full h-max flex mt-2  gap-3 p-1 py-3 items-start border-b-2 rounded-b-3xl bg ">
      <img className=" w-[70px] h-[70px] bg-blue-700 mask mask-hexagon  object-cover rounded-full "  src={coment.imgprof} alt="" />
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
            <button className=" p-2 scale-100 hover:scale-110  border  bg"   onClick={replyfunc}>Reply</button>
          </div>
          {replyflag && (
            <div className=" w-full p-1 flex gap-2 flex-col ">
              <div className="w-full flex gap-2 items-center">
                <img className=" w-[30px] h-[30px] rounded-full object-cover" src={personimg} alt="" />
                <input
                  className="inputreply w-full h-[30px] px-2 border-b-2 rounded-b-lg border-violet-400 dark:border-violet-800  bg-transparent outline-none p-1"
                  placeholder="Add a reply..."
                  type="text"
                  name=""
                  id=""
                />
              </div>
              <div className="w-full flex gap-4 justify-end">
                <button
                  className=" bg-red-700 text-white  px-3 py-1 rounded-lg"
                  onClick={() => setreplyflag(false)}
                >
                  Cancel
                </button>
                <button
                  className={`${ true ? " bg-blue-700 text-white " : " "
                  } px-3 py-1 rounded-lg`}
                >
                  Reply
                </button>
              </div>
            </div>
          )}
        </div>
        <div className="">
          <button className=" p-1.5 border scale-100 hover:scale-110  bg"  >
            <CiMenuKebab size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Comments;
