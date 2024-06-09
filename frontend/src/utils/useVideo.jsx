import { useRef, useState } from "react";

export const useVideo =()=>{
  const videoelem = useRef();
  const [showvideo, setshowvideo] = useState(false);
  const [mute, setmute] = useState(false);
  const [totaltime, settotaltime] = useState("");
  const [currenttime, setcurrenttime] = useState("");


  const VideoMousMove = () => {
    if (showvideo) {
      setshowvideo(!showvideo);
      videoelem.current.play();
    } else {
      videoelem.current.play();
      setshowvideo(true);
    }
  };
  const VideoMousLeav = () => {
    videoelem.current.pause();
  };

  const mutefunc = () => {
    setmute(!mute);
    videoelem.current.muted = !videoelem.current.muted;
  };
  
  const lodingZeroFormater = new Intl.NumberFormat(undefined, {
    minimumIntegerDigits: 2,
  });
  
  const formatDuration = (time) => {
    const seconds = Math.floor(time % 60);
    const minutes = Math.floor(time / 60) % 60;
    const hours = Math.floor(time / 3600);
  
    if (hours === 0) {
      return ` ${minutes}:${lodingZeroFormater.format(seconds)} `;
    } else if (minutes === 0) {
      return `${lodingZeroFormater.format(seconds)}`;
    } else {
      return ` ${hours}:${lodingZeroFormater.format(
        minutes
      )}:${lodingZeroFormater.format(seconds)} `;
    }
  };
  
  const updateTimes = () => {
    setcurrenttime(formatDuration(videoelem.current.currentTime));
  };
  
  const loadedData = (e) => {
    settotaltime(formatDuration(e.target.duration));
  };

 
  
  return[videoelem,mute,totaltime,currenttime,VideoMousMove,VideoMousLeav,mutefunc,updateTimes,loadedData ]



}