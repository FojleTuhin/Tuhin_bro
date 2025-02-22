import React from "react";
import Marquee from "react-fast-marquee";
import img from "../../public/mingcute_sunflower-fill.svg";
import Image from "next/image";
const TextMarque = () => {
  return (
    <div className=" bg-[#F1CCFF]">
      <Marquee speed={150}>
        <div className="flex gap-16">
          <div className="flex items-center gap-16">
            <p className="text-[100px] font-medium text-[#000000] ">
              OPEN FOR WORK
            </p>
            <Image src={img} alt="sunflower" className="" />
          </div>
          <div className="flex items-center gap-16">
            <p className="text-[100px] font-medium text-[#000000] ">
              OPEN FOR WORK
            </p>
            <Image src={img} alt="sunflower" className="" />
          </div>
          <div className="flex items-center gap-16">
            <p className="text-[100px] font-medium text-[#000000] ">
              OPEN FOR WORK
            </p>
            <Image src={img} alt="sunflower" className="" />
          </div>
          <div className="flex items-center gap-16">
            <p className="text-[100px] font-medium text-[#000000] ">
              OPEN FOR WORK
            </p>
            <Image src={img} alt="sunflower" className="" />
          </div>
          <div className="flex items-center gap-16">
            <p className="text-[100px] font-medium text-[#000000] ">
              OPEN FOR WORK
            </p>
            <Image src={img} alt="sunflower" className="" />
          </div>
        </div>
      </Marquee>
    </div>
  );
};

export default TextMarque;
