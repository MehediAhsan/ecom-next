import Image from 'next/image';
import React from 'react';
import { IoIosCall } from "react-icons/io";

interface MostViewedCardProps {
  item: {
    img: string;
    title: string;
    price?: number; // Optional price
  };
}

const MostViewedCard: React.FC<MostViewedCardProps> = ({ item }) => {
  return (
    <div className="bg-fourth p-4">
      <div className="flex gap-5 items-center">
        <Image
          width={100}
          height={0}
          className="w-28 h-28 object-cover"
          src={item.img}
          alt=""
        />
        <div>
          <h1 className="product-name mb-2">{item.title}</h1>
          {item.price ? (
            <p className="product-price">${item.price}</p>
          ) : (
            <div className="font-bold flex text-xs items-center text-primary">
              <IoIosCall />
              <span className="">Call for Price</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MostViewedCard;
