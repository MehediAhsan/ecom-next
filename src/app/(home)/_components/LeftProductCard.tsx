import Image from "next/image";
import React from "react";
import { Rating, RoundedStar } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

// Define the props interface for the component
interface ProductItem {
  img: string;
  title: string;
  price?: number;
}

interface LeftProductCardProps {
  item: ProductItem;
}

const LeftProductCard: React.FC<LeftProductCardProps> = ({ item }) => {
  const myStyle = {
    itemShapes: RoundedStar,
    activeFillColor: "#ffb700",
    inactiveFillColor: "#BBBBBB",
  };

  return (
    <div className="flex gap-4">
      <Image
        width={100}
        height={0}
        className="w-20 h-20 object-cover"
        src={item.img}
        alt={item.title}
      />
      <div className="pb-10">
        <h1 className="product-name mb-2">{item.title}</h1>
        <div>
          <Rating
            style={{ maxWidth: 60 }}
            value={4}
            itemStyles={myStyle}
            readOnly
          />
        </div>
        <p className="product-price mt-2">${item.price ?? "50"}</p>
      </div>
    </div>
  );
};

export default LeftProductCard;
