import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { NavLink } from "react-router-dom";
import { useEffect, useRef } from "react";

function SliderName({ toggle, elem }) {
  const slides = [
    { id: 1, link: "/", name: "All" },
    { id: 2, link: "/tst", name: "Hidden cameras" },
    { id: 3, link: "/tst", name: "Sketch comedy" },
    { id: 4, link: "/tst", name: "Television series" },
    { id: 5, link: "/tst", name: "Sports entertainment" },
    { id: 6, link: "/tst", name: "Music" },
    { id: 7, link: "/tst", name: "Gaming" },
    { id: 8, link: "/tst", name: "Satire" },
    { id: 9, link: "/tst", name: "Got Talent" },
    { id: 10, link: "/tst", name: "Amir Tataloo" },
    { id: 11, link: "/tst", name: "Animated films" },
    { id: 12, link: "/tst", name: "Live" },
    { id: 13, link: "/tst", name: "Mixes" },
    { id: 14, link: "/tst", name: "Thrillers" },
    { id: 15, link: "/tst", name: "Cars" },
    { id: 16, link: "/tst", name: "Lessons" },
    { id: 17, link: "/tst", name: "Recently uploaded" },
    { id: 18, link: "/tst", name: "Watched" },
    { id: 19, link: "/tst", name: "New to you" },
  ];

  return (
    <Swiper
      slidesPerView={40}
      // centeredSlides={true}
      // slidesPerView={20}
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper -translate-x-16 md:translate-x-[10px] bg-slate-50  p-1.5 px-0  border  dark:border-violet-700 shadow-sm rounded-lg dark:shadow-red-700   dark:bg-[#0d0417] dark:text-white"
    >
      <SwiperSlide>
        {slides.map((slideContent, index) => (
          <NavLink
          key={index}
            className=" w-full text-[16px] mx-[2px]  whitespace-nowrap text-center px-2 py-1  rounded-lg bg-slate-200 text-block hover:bg-gray-300 dark:hover:bg-violet-950  dark:border-violet-700 shadow-sm  dark:shadow-red-700   dark:bg-[#270c47ac]  "
            to={slideContent.link}
          >
            {slideContent.name}
          </NavLink>
        ))}
      </SwiperSlide>
    </Swiper>
  );
}

export default SliderName;
