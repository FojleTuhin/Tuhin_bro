import React, { forwardRef } from "react";

const WhoAmI = forwardRef((props, ref) => {
  return (
    <div  className="pt-[132px] pb-24 max-w-[1320px] mx-auto px-6 ">
      <div ref={ref} className="grid mob:grid-cols-3 lg:grid-cols-2 gap-y-6 ">
        <div>
          <p className="text-[28px] font-medium">WHO AM I_</p>
        </div>
        <div className="mob:col-span-2 lg:col-span-1">
          <p className="lg:text-[24px] sm:text-[18px] text-[14px] pl-10 mob:pl-0 hover-large">
            I specialize in building fast, responsive, and user-friendly
            websites that not only look great but also perform flawlessly. With
            expertise in modern technologies like React, Next js, ShadCn and Tailwind, I
            create seamless digital experiences that enhance usability and
            engagement.
          </p>
        </div>
      </div>

      <div className="grid xl:grid-cols-2 mt-24">
        <div className="grid mob:grid-cols-2 sm:grid-cols-3 gap-[15px] ">
          <div className="lg:py-[30px] lg:px-8 md:p-6 p-5 rounded-[12px] bg-[#f1ccff24] h-auto w-full grid grid-cols-2 sm:grid-cols-none gap-2">
            <p className="lg:text-[18px] font-medium mb-[62px] text-[#FFFFFF] leading-none lg:leading-normal">
              Education
            </p>
            <div>
              <p className="text-[#FFFFFF] font-medium mb-1 leading-none">
                CSE,
              </p>
              <p className="text-[#FFFFFFB8] text-[12px] lg:text-[16px]">
                Green University of Bangladesh, 2020-2125
              </p>
            </div>
          </div>
          <div className="lg:py-[30px] lg:px-8 md:p-6 p-5 rounded-[12px] bg-[#f1ccff24] h-auto w-full grid grid-cols-2 sm:grid-cols-none gap-2">
            <p className="lg:text-[18px] font-medium mb-[62px] text-[#FFFFFF] leading-none lg:leading-normal">
              Experience
            </p>
            <div>
              <p className="text-[#FFFFFF] font-medium mb-1 leading-none">
                Product Engineer, Frontend
              </p>
              <p className="text-[#FFFFFFB8] text-[12px] lg:text-[16px]">
                Bismo - November 2024 - Currently
              </p>
            </div>
          </div>
          <div className="lg:py-[30px] lg:px-8 md:p-6 p-5 rounded-[12px] bg-[#f1ccff24] h-auto w-full grid grid-cols-2 sm:grid-cols-none gap-2">
            <p className="lg:text-[18px] font-medium mb-[62px] text-[#FFFFFF] leading-none lg:leading-normal">
              I Love
            </p>
            <div>
              <p></p>
              <p className="text-[#FFFFFFB8] text-[12px] lg:text-[16px]">
                Playing Cricket & Keyboard
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default WhoAmI;
