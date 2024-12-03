"use client";

import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import '../../style/clientStyle.css';

// Import required modules
import { Navigation } from 'swiper/modules';
import Image from 'next/image';

// Define the type for the item
interface Item {
    img: string;
}

const Clients: React.FC = () => {
    const items: Item[] = [
        {
            img: 'https://plus.unsplash.com/premium_photo-1675249004097-633caac71fbd?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            img: 'https://images.unsplash.com/photo-1590874315261-788881621f7a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            img: 'https://plus.unsplash.com/premium_photo-1675249004097-633caac71fbd?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            img: 'https://plus.unsplash.com/premium_photo-1709311417346-0497456aef0e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            img: 'https://images.unsplash.com/photo-1553835973-dec43bfddbeb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            img: 'https://plus.unsplash.com/premium_photo-1675249004097-633caac71fbd?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            img: 'https://plus.unsplash.com/premium_photo-1675249004097-633caac71fbd?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            img: 'https://plus.unsplash.com/premium_photo-1675249004097-633caac71fbd?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            img: 'https://plus.unsplash.com/premium_photo-1675249004097-633caac71fbd?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
    ];

    return (
        <div className="my-20 relative client">
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                loop={true}
                navigation={{
                    prevEl: '.client-swiper-button-prev',
                    nextEl: '.client-swiper-button-next',
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 7,
                        spaceBetween: 40,
                    },
                }}
                modules={[Navigation]}
                style={{ padding: '20px', border: '2px solid #EEEEEE' }}
                className="mySwiper custom-swiper"
            >
                {items.map((item, i) => (
                    <SwiperSlide key={i}>
                        <Image
                            width={100}
                            height={0} // Set to 0 since it's dynamically styled via Tailwind
                            className="w-full h-28 object-cover"
                            src={item.img}
                            alt={`Client ${i + 1}`}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="client-swiper-button-prev swiper-button-prev"></div>
            <div className="client-swiper-button-next swiper-button-next"></div>
        </div>
    );
};

export default Clients;
