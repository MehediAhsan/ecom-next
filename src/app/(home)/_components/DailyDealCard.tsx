'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { RiShoppingBasketLine } from "react-icons/ri";
import { IoHeartSharp } from "react-icons/io5";
import { TfiReload } from "react-icons/tfi";
import { ImEye } from "react-icons/im";

// Define the props interface for the component
interface DailyDealCardProps {
    offer?: number;
    img?: string;
    cardTitle?: string;
    currentPrice?: number;
    previousPrice?: number;
    data?: {
        available: number;
        sold: number;
    }[];
}

const DailyDealCard: React.FC<DailyDealCardProps> = ({
    offer = 20,
    img = '',
    cardTitle = 'Card Title',
    currentPrice = 450,
    previousPrice = 500,
    data = [{ available: 500, sold: 50 }],
}) => {
    const [countdown, setCountdown] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });
    const [isHover, setIsHover] = useState(false);

    useEffect(() => {
        const targetDate = new Date();
        targetDate.setDate(targetDate.getDate() + 7);

        const interval = setInterval(() => {
            const currentDate = new Date();
            const timeDifference = targetDate.getTime() - currentDate.getTime();

            if (timeDifference <= 0) {
                clearInterval(interval);
            } else {
                const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
                const hours = Math.floor(
                    (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
                );
                const minutes = Math.floor(
                    (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
                );
                const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

                setCountdown({ days, hours, minutes, seconds });
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div
            className="flex gap-10 text-black mb-16 items-center"
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
        >
            <div className="bg-fourth p-4 relative">
                <div className="z-[15] hover:cursor-pointer text-white">
                    <div
                        className={`absolute z-20 left-2 top-7 flex flex-col gap-2 ${isHover ? 'block' : 'hidden'}`}
                    >
                        <div className="group relative bg-third transition-colors duration-500 ease-out hover:bg-primary p-[6px] rounded font-bold text-xs flex gap-1 animate-[horizontalWave_0.3s_ease-in-out]">
                            <RiShoppingBasketLine />
                            <span className="absolute w-20 p-1 -z-10 rounded-e bg-third top-0 left-0 group-hover:left-5 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-500 ease-out group-hover:bg-primary">
                                Add to cart
                            </span>
                        </div>
                        <div className="group relative bg-third transition-colors duration-500 ease-in-out hover:bg-primary p-[6px] rounded font-bold text-xs flex gap-1 animate-[horizontalWave_0.5s_ease-in-out]">
                            <IoHeartSharp />
                            <span className="absolute w-28 p-1 -z-10 rounded-e bg-third top-0 left-0 group-hover:left-5 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-500 ease-in-out group-hover:bg-primary">
                                Add to whitelist
                            </span>
                        </div>
                        <div className="group relative bg-third transition-colors duration-500 ease-in-out hover:bg-primary p-[6px] rounded font-bold text-xs flex gap-1 animate-[horizontalWave_0.7s_ease-in-out]">
                            <TfiReload />
                            <span className="absolute w-36 p-1 -z-10 rounded-e bg-third top-0 left-0 group-hover:left-5 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-500 ease-in-out group-hover:bg-primary">
                                Compare this product
                            </span>
                        </div>
                        <div className="group relative bg-third transition-colors duration-500 ease-in-out hover:bg-primary p-[6px] rounded font-bold text-xs flex gap-1 animate-[horizontalWave_0.9s_ease-in-out]">
                            <ImEye />
                            <span className="absolute w-16 p-1 -z-10 rounded-e bg-third top-0 left-0 group-hover:left-5 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-500 ease-in-out group-hover:bg-primary">
                                Preview
                            </span>
                        </div>
                    </div>
                    {offer !== 0 && (
                        <div className="absolute top-5 right-5 size-10 rounded-full bg-primary pt-3 text-xs text-center font-bold">
                            <span className="mt-3">-{offer}%</span>
                        </div>
                    )}
                    <Image
                        src={
                            img ||
                            'https://images.unsplash.com/photo-1561677978-583a8c7a4b43?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                        }
                        width={200}
                        height={200}
                        alt=""
                        className="h-[270px] object-cover"
                    />
                </div>
            </div>

            <div className="space-y-4">
                <p className="text-xl font-bold hover:text-primary cursor-pointer">{cardTitle}</p>
                <p className="text-xl text-primary font-bold">
                    ${currentPrice}{' '}
                    {previousPrice !== 0 && (
                        <span className="text-sm font-normal line-through text-fourth">${previousPrice}</span>
                    )}
                </p>
                <div className="flex gap-10 justify-between items-center text-sm">
                    <p>
                        Available: <span className="text-primary">{data[0]?.available}</span>
                    </p>
                    <p>
                        Sold: <span className="font-bold">{data[0]?.sold}</span>
                    </p>
                </div>
                <div className="w-full h-[10px] bg-fourth rounded-full">
                    <div className={`h-[10px] bg-primary rounded-full w-[calc(20%)]`}></div>
                </div>

                <div className="flex gap-5">
                    <div className="flex flex-col items-center">
                        <p className="bg-fourth rounded-full size-10 p-2 text-center">{countdown.days}</p>
                        <p className="text-xs uppercase">Days</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="bg-fourth rounded-full size-10 p-2 text-center">{countdown.hours}</p>
                        <p className="text-xs uppercase">Hours</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="bg-fourth rounded-full size-10 p-2 text-center">{countdown.minutes}</p>
                        <p className="text-xs uppercase">Mins</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="bg-fourth rounded-full size-10 p-2 text-center">{countdown.seconds}</p>
                        <p className="text-xs uppercase">Secs</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DailyDealCard;