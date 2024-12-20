"use client";
import React from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import LeftProductCard from "./LeftProductCard";

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

const LatestProducts: React.FC = () => {
  return (
    <div className="">
      <h1 className="left-product-title">Latest Products</h1>
      <div className="">
        <Swiper
          style={{
            "--swiper-pagination-color": "#Ff3e20",
          }}
          modules={[Autoplay, Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          className="mySwiper"
        >
          {items.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="mt-5 pb-5">
                <LeftProductCard item={item} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default LatestProducts;
