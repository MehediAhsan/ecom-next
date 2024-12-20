"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "../../../styles/mostViewedStyle.css";

// import required modules
import { Navigation } from "swiper/modules";
import MostViewedCard from "./MostViewedCard";

// Define the interface for items
interface ProductItem {
  img: string;
  title: string;
  price?: number; // Updated to 'number'
  discount?: number; // Updated to 'number' if needed
}

const items: ProductItem[] = [
  {
    img: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Rich Manifest",
    price: 100,
    discount: 25,
  },
  {
    img: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Rich Manifest",
  },
  {
    img: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Rich Manifest",
    price: 100,
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1709311417346-0497456aef0e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Rich Manifest",
  },
  {
    img: "https://images.unsplash.com/photo-1553835973-dec43bfddbeb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Rich Manifest",
    price: 100,
    discount: 25,
  },
];

const MostViewed = () => {
  return (
    <div className="my-20 relative product">
      <button className="btn-secondary">Most Viewed</button>
      <div className="bg-[#EEEEEE] w-full h-[1.4px] -mt-[1.4px] mb-10"></div>
      <Swiper
        slidesPerView={1}
        spaceBetween={8}
        loop={true}
        // navigation={true}
        navigation={{
          prevEl: ".most-viewed-swiper-button-prev",
          nextEl: ".most-viewed-swiper-button-next",
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        modules={[Navigation]}
        // style={{ padding: '20px', border: '2px solid gray' }}
        className="mySwiper custom-swiper"
      >
        {items.map((item, i) => (
          <SwiperSlide key={i}>
            <MostViewedCard item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="most-viewed-swiper-button-prev swiper-button-prev"></div>
      <div className="most-viewed-swiper-button-next swiper-button-next"></div>
    </div>
  );
};

export default MostViewed;
