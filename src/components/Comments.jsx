import { NavLink } from "react-router-dom";
import { SlLike } from "react-icons/sl";
import { SlDislike } from "react-icons/sl";
import { CiMenuKebab } from "react-icons/ci";

import imgreact from "../assets/react.svg";
import { useState } from "react";

function Comments({coment}) {
  const [commentlike, setcommentlike] = useState(coment.comentlike);
  const [commentdislike, setcommentdislike] = useState(coment.comentdislike);
  const [chengeflag, setchengeflag] = useState(false);
  const [replyflag, setreplyflag] = useState(false);

  const setcomentlike = () => {
    if(chengeflag){
      setcommentlike(commentlike + 1);
    }else{
      setchengeflag(true)
    }
  };
  const setcomentdislike = () => {
    if(chengeflag){
      setcommentdislike(commentdislike + 1);
    }else{
      setchengeflag(false)
    }
  };
  const replyfunc =()=>{
    setreplyflag(!replyflag)
  }

  return (
    <div className=" w-full h-max flex gap-3 p-1 items-start border-b-2 ">
      <img src={coment.imgprof} alt="" />
      <div className="w-full text-[14px] pr-3 flex justify-between">
        <div className="w-full flex gap-1 flex-col">
          <div className="flex gap-1 items-end">
            <NavLink className=" " to={`/${coment.user}`}>{coment.user}</NavLink>
            <span className=" text-[10px]">{coment.date}</span>
          </div>
          <span className=" ">{coment.textcoment}</span>
          <div className=" flex gap-4 ">
            <button
              onClick={setcomentlike}
              className=" flex gap-2 items-center"
            >
              <SlLike size={20} /> {commentlike}
            </button>
            <button onClick={setcomentdislike} className=" flex gap-2 items-center">
              <SlDislike size={20} /> {commentdislike}
            </button>
            <button onClick={replyfunc}>Reply</button>
          </div>
          {
            replyflag ?
            <div className=" w-full p-1 flex gap-1 flex-col ">
              <div className="w-full flex gap-2 items-center">
                <img className=" w-[25px] h-[25px]" src={imgreact} alt="" />
                <input className=" w-full h-[20px] border-b-2 border-violet-400 bg-transparent outline-none p-1" placeholder="Add a reply..." type="text" name="" id="" />
              </div>
              <div className="w-full flex gap-4 justify-end">
                <button onClick={()=>setreplyflag(false)}>Cancel</button>
                <button>Reply</button>
              </div>
            </div>
            : <></>
          }
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
