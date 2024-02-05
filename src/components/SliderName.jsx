import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
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
    <div className=" ">
      <Swiper
        modules={[Navigation]}
        spaceBetween={5}
        slidesPerView={5}
        navigation
        // ref={swi}
        breakpoints={{
          640: {
            slidesPerView: 9, // Show 1 slide per view on screens wider than 640px
          },
          768: {
            slidesPerView: 4, // Show 2 slides per view on screens wider than 768px
          },
          1024: {
            slidesPerView: 8, // Show 3 slides per view on screens wider than 1024px
          },
        }}
        className=''
        onSlideChange={() => {}}
      >
        {slides.map((slideContent, index) => (
          <SwiperSlide key={index} className=" " virtualIndex={index}>
            <NavLink
              className=" w-fit h-fit text-[16px]  whitespace-nowrap text-center px-2  rounded-lg bg-gray-100 text-block hover:bg-gray-300"
              to={slideContent.link}
            >
              {slideContent.name}
            </NavLink>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SliderName;

/*


<div className={" items-center rtl p-12 bg-[#0F2650] mt-32"}>
     <Swiper
      modules={[Navigation]}
      spaceBetween={30}
      slidesPerView={8}
      navigation={true}
   
      className=''
      onSlideChange={() =>{
      }}
      breakpoints={{
        640: {
          slidesPerView: 1, // Show 1 slide per view on screens wider than 640px
        },
        768: {
          slidesPerView: 2, // Show 2 slides per view on screens wider than 768px
        },
        1024: {
          slidesPerView: 8, // Show 3 slides per view on screens wider than 1024px
        },
      }}
    >
      {slides.map((slideContent) => (
        <SwiperSlide 
          key={slideContent.id}
          >
          <Link href={slideContent.link} className=' w-fit h-fit text-[16px]  whitespace-nowrap text-center px-2  rounded-lg bg-gray-100 text-block hover:bg-gray-300' >{slideContent.name}</Link>
        </SwiperSlide>
      ))}

      </Swiper>
      </div>

*/
