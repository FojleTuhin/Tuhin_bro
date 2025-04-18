import React, { forwardRef } from "react";

const Projects = forwardRef((props, ref) => {
  const projects = [
    {
      no: "1",
      title: "Nutritionist",
      description: "It's a Personalized Nutrition Coaching based website.",
      tech: "Tailwind, ShadCn, Next Js.",
      link: "https://nutritionisttuhin.vercel.app/",
    },
    {
      no: "2",
      title: "ParcelPioneer",
      description: "It's a Parcel Delivery and management website.",
      tech: "React, Node Js., Express Js., MongoDB, Stripe",
      link: "https://parcelpioneer.netlify.app/",
    },
    {
      no: "3",
      title: "InsureCow",
      description: "It's a Parcel Delivery and management website.",
      tech: "Tailwind, ShadCn, Next Js.",
      link: "https://insure-cow.vercel.app/",
    },
    {
      no: "4",
      title: "ZEP",
      description: "It's a Agency based website.",
      tech: "Tailwind, ShadCn, Next Js.",
      link: "https://zep.vercel.app/",
    },
  ];
  return (
    <div ref={ref} className="max-w-[1320px] mx-auto pb-[196px] z-20 px-6">
      <div className="grid tab:grid-cols-2 mb-16 ">
        <p className="sm:text-[112px] text-[58px] sMob:text-[68px] mob:text-[86px]  tab:order-1 order-2 font-medium leading-[86%] tracking-[-6px]">
          MY PROJECTS
        </p>
        <div className="flex justify-center tab:justify-end tab:items-end tab:order-2 order-1 mb-12 tab:mb-0">
          <p className="tab:text-[58px] text-[32px] font-medium leading-[86%]  tracking-[-2px]">
            20+ <br /> PROJECTS <br /> COMPLETED
          </p>
        </div>
      </div>

      {projects.map((project, index) => (
        <a
          href={project.link}
          key={index}
          target="_blank"
          rel="noreferrer"
          className="block hover-medium projects-id"
        >
          <div className="group tab:py-12 py-8 px-4 mob:px-0  border-y border-[#F1CCFF] flex justify-between gap-[18px] transition-all duration-700 ease-in-out hover:bg-[#F1CCFF] hover:cursor-pointer">
            <div className="hidden mob:flex items-center">
              <p className="flex group-hover:pl-6 duration-700 transition-all items-center lg:w-[200px] md:w-[70px] text-white group-hover:text-black">
                {project.no}/
              </p>
            </div>
            <div className="flex-1">
              <div className="flex flex-col tab:flex-row w-full gap-4 gap-y-6">
                <div className="tab:w-[65%] ">
                  <p className="tab:text-[48px] text-[24px] font-medium text-[#F1CCFF] group-hover:text-black leading-none">
                    {project.title}
                  </p>
                  <p className="tab:mt-3 mt-1 text-[14px] tab:text-[16px] text-[#FFFFFFB8] group-hover:text-[#000000B8] leading-none">
                    {project.description}
                  </p>
                </div>
                <div className="flex text-[14px] tab:text-[16px] items-end tab:w-[35%]">
                  <p className="text-white group-hover:text-black leading-none">
                    {project.tech}
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:w-[200px] md:w-[70px] flex justify-end tab:items-end items-center tab:ease-in-out tab:transform tab:group-hover:pr-6 tab:duration-700 tab:transition-all ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="70"
                height="70"
                viewBox="0 0 100 100"
                fill="none"
                className=" ease-in-out transform md:hover:pr-6 duration-700 transition-all"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M86.2052 8.08081H0V0H100V100H91.9192V13.7948L5.71399 100L0 94.286L86.2052 8.08081Z"
                  className="fill-white transition-colors duration-300 ease-in-out group-hover:fill-black"
                />
              </svg>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
});

export default Projects;
