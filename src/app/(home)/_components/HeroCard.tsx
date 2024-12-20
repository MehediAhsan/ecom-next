import Image from "next/image";
import React from "react";

// Define the props interface for the component
interface HeroCardProps {
  img: string;
  height: string | number;
}

const HeroCard: React.FC<HeroCardProps> = ({ img, height }) => {
  return (
    <div className="relative group">
      <div className="animate-expanded"></div>
      <Image
        alt=""
        src={img}
        height={100}
        width={1000}
        className={`w-full object-cover ${height}`}
      />
    </div>
  );
};

export default HeroCard;
