import React from "react";
import logo from "../../public/logo.svg";
import Image from "next/image";

const Navbar = ({ aboutRef, projectsRef, contactRef }) => {

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="my-[18px] fixed w-full z-50">
      <div className="max-w-[613px] mx-auto flex justify-between items-center pl-[26px] pr-4 bg-[#8C8C8C29] rounded-full backdrop-blur-md">
        <div>
          <Image src={logo} alt="logo " className="h-5 w-auto"/>
        </div>
        <div>
          <ul className="flex">
            <li onClick={() => scrollToSection(aboutRef)} className="px-4 py-3 text-[#FFFFFFB2] cursor-pointer">About</li>
            <li onClick={() => scrollToSection(projectsRef)} className="px-4 py-3 text-[#FFFFFFB2] cursor-pointer">Works</li>
            <li onClick={() => scrollToSection(contactRef)} className="px-4 py-3 text-[#FFFFFFB2] cursor-pointer">Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;