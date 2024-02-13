import tstvideo from "../assets/videos/video.mp4";
import { CiMenuKebab } from "react-icons/ci";

function VideoComponentShow() {
  return (
    <div className=" flex gap-1">
      <video
        className=" w-[160px] h-[100px] object-cover rounded-lg bg-red-500"
        src={tstvideo}
      ></video>
      <div className="flex flex-col gap-1">
        <span className=" text-[15px]">Lorem, ipsum dolor sit amet</span>
        <span className=" text-[12px]">name acant</span>
        <span className=" text-[12px]">130K views . 1 weeks ago</span>
      </div>
      <button className=" w-[30px] h-[30px] rounded-full hover:bg-gray-300 "><CiMenuKebab/></button>
    </div>
  );
}

export default VideoComponentShow;
