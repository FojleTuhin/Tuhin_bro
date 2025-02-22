import React from "react";
import logo from "../../public/logo.svg";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="my-6 fixed w-full z-50">
      <div className="max-w-[613px] mx-auto flex justify-between items-center  h-16 pl-[26px] pr-4 bg-[#8C8C8C29] rounded-full backdrop-blur-md pointer-events-none">
        <div>
          <Image src={logo} alt="logo" />
        </div>
        <div>
          <ul className="flex ">
            <li className="px-4 py-3 text-[#FFFFFFB2] cursor-pointer">About</li>
            <li className="px-4 py-3 text-[#FFFFFFB2] cursor-pointer">Works</li>
            <li className="px-4 py-3 text-[#FFFFFFB2] cursor-pointer">
              Contact
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
