"use client";

import React from 'react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import Image from 'next/image';
import '../../../styles/bestDeals.css';

import 'swiper/css';
import 'swiper/css/pagination';

interface Item {
    img: string;
}

const BestDeals: React.FC = () => {
    const items: Item[] = [
        {
            img: "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            img: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            img: "https://images.unsplash.com/photo-1584798448292-5e7ba13a0826?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            img: "https://plus.unsplash.com/premium_photo-1672883551967-ab11316526b4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
    ];

    return (
        <div>
            <Swiper
                // Install Swiper modules
                modules={[Autoplay, Pagination]}
                spaceBetween={50}
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
                className='customSwiper'
            >
                {items.map((item, index) => (
                    <SwiperSlide key={index}>
                        <Image
                            src={item.img}
                            className='w-full object-cover h-[424px]'
                            height={424} // Adjusted to match your height styling
                            width={1000} // Adjusted to match your width styling
                            alt='best deal today'
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default BestDeals;
