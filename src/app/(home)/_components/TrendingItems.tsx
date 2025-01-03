"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Navigation, Pagination } from "swiper/modules";
import TrendingItemsCard from "./TrendingItemsCard";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "../../../styles/trendingItems.css";
import HeroCard from "./HeroCard";

const categories = [
  {
    name: "All product",
    id: 1,
  },
  {
    name: "Bathroom",
    id: 1,
  },
  {
    name: "Bedroom",
    id: 1,
  },
  {
    name: "Decor",
    id: 1,
  },
  {
    name: "Furniture",
    id: 1,
  },
  {
    name: "Living Room",
    id: 1,
  },
];

const TrendingItems = () => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div className="mt-12">
      <div>
        <div className="flex justify-between items-end">
          <button className="btn-secondary">Trending Items</button>
          <ul className="lg:flex gap-5 text-sm mb-[2px] hidden">
            {categories.map((category, i) => (
              <li key={i} className="group cursor-pointer hover:text-primary">
                {category.name}
                <div className="h-[2px] mt-2 w-0 bg-primary group-hover:w-full transition-all duration-500"></div>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-[#EEEEEE] w-full h-[1.4px] -mt-[1.4px] mb-10"></div>
      </div>

      <div className="relative trend">
        <Swiper
          slidesPerView={2}
          spaceBetween={10}
          navigation={{
            prevEl: ".trending-items-swiper-button-prev",
            nextEl: ".trending-items-swiper-button-next",
          }}
          modules={[Grid, Pagination, Navigation]}
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
              slidesPerView: 5,
              spaceBetween: 30,
            },
          }}
          className="trendingSwiper"
        >
          {data.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="space-y-6">
                <TrendingItemsCard
                  img={
                    "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  }
                  rating={i % 2 === 0}
                />
                <TrendingItemsCard rating={i % 2 !== 0} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="trending-items-swiper-button-prev swiper-button-prev"></div>
        <div className="trending-items-swiper-button-next swiper-button-next"></div>
        {/* {
                    data.map((item, i) =><TrendingItemsCard rating={true} key={i}/>)
                } */}
      </div>

      {/* group hero items */}
      <div className="grid grid-cols-4 gap-5 my-16">
        <div>
          <HeroCard
            img={
              "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            height={100}
          />
        </div>
        <div className="col-span-2 row-span-2">
          <HeroCard
            img={
              "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            height={100}
          />
        </div>
        <div>
          <HeroCard
            img={
              "https://images.unsplash.com/photo-1575320975929-e746674947a0?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            height={100}
          />
        </div>
        <div>
          <HeroCard
            img={
              "https://images.unsplash.com/photo-1555487505-8603a1a69755?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            height={100}
          />
        </div>
        <div>
          <HeroCard
            img={
              "https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            height={100}
          />
        </div>
      </div>
    </div>
  );
};

export default TrendingItems;
