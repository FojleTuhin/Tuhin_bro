"use client";
import { ArrowUp } from "lucide-react";
import Image from "next/image";
import vector from "../../public/Vector.svg";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="px-6">
      <div className="bg-[#F1CCFF] rounded-[12px] max-w-[1320px]  mx-auto py-20 px-20 mb-6">
        <div className="grid grid-cols-2 gap-[18px]">
          <div className="flex flex-col justify-between h-[322px]">
            <div className="flex">
              <button
                onClick={scrollToTop}
                className="bg-[#0000001A] text-[#000000] rounded-[12px] py-5 px-6 flex gap-[10px]"
              >
                <p className="text-[18px] font-medium">Back to top</p>
                <ArrowUp />
              </button>
            </div>

            <Image src={vector} alt="logo" className="w-[324px] h-auto" />
          </div>

          <div className="text-[#000000] flex flex-col justify-between h-[322px]">
            <div>
              <p className="text-[18px] font-medium mb-12">
                Built with passion & code.
              </p>
              <p className="mb-[10px] text-[18px] font-medium underline cursor-pointer">
                Skills
              </p>
              <p className="mb-[10px] text-[18px] font-medium underline cursor-pointer">
                Projects
              </p>
            </div>

            <div>
              <a
                href="mailto:fojletuhin@gmail.com"
                className="text-[32px] font-medium mb-6"
              >
                fojletuhin@gmail.com
              </a>

              <p className="pt-3 border-t border-black text-[#000000] text-[18px] font-medium ">
                © Fojle Rabbi Tuhin 2025. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
