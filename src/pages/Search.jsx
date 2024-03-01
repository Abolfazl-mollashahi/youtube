import { useRef, useState } from "react";
import MyNavbar from "../components/MyNavbar";
import VideoComponentShow from '../components/VideoComponentShow'

function Serachpage() {

  const [toggleflag, settoggleflag] = useState(false);
  const divcontiner = useRef({});
  const tst =[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];

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
    if(toggleflag){
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

      <div ref={divcontiner} className=" h-[300px] p-3 md:pl-[85px] flex flex-col relative top-[50px] ">

        <div className="p-3 flex flex-col gap-3 items-center justify-center">
          {
           tst.map(()=>(
             <VideoComponentShow classdiv={` flex flex-col gap-2 md:flex-row md:items-center `} classdivchild={` flex flex-col md:gap-5`} classvideo={` w-[450px] h-[230px] rounded-xl object-cover `} Wvideo={`200px`} Hvideo={`250px`} />
           )) 
          }
        </div>
      
      
      
      </div>
    
    </div>
  );
}

export default Serachpage;