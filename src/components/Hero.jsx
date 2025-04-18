"use client";
import { useState } from "react";

const Hero = ({ contactRef }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    window.open(
      "https://drive.google.com/file/d/14r0vGFas0RUFMGZWydNPzjdU5Z3DsSO5/view",
      "_blank"
    );
    setTimeout(() => setIsClicked(false), 1000);
  };

  const handleScrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <div className="max-w-[1320px] mx-auto pt-[110px] sm:pb-4 px-6 relative h-svh min-h-[640px] overflow-hidden">
        {/* Circle background - moved to top of component with lower z-index */}
        <div className="absolute inset-0 flex items-center justify-center -z-10 pointer-events-none">
          <div className="tab:w-[500px] tab:h-[500px] w-[450px] h-[450px] max-h-[500px] rounded-full relative overflow-hidden mx-auto sm:w-[350px] sm:h-[350px] flex-shrink-0">
            {/* Radial Gradient Background */}
            <div className="absolute inset-0 bg-gradient-radial from-[rgba(241,204,255,0.20)] to-transparent opacity-100" />
            {/* Inset Shadow */}
            <div className="absolute inset-0 shadow-[inset_-99px_198px_145px_-60px_rgba(241,204,255,0.40)]" />
          </div>
        </div>

        {/* Main content - removed explicit z-index */}
        <div className="grid sm:grid-cols-2 h-[calc(100%-60px)] sm:h-[100%]">
          <div className="bg-[url('https://i.ibb.co.com/rf5Q8szP/tuhin.png')] h-full bg-no-repeat bg-contain w-full pb-5">
            <div className="flex justify-end flex-col h-full ml-5">
              <p className="tab:text-[24px] text-[18px] tab:mb-3 mb-2 leading-none">
                This is,
              </p>
              <div className="tab:text-[130px] sm:text-[90px] text-[64px] mb-8 sm:mb-0 flex leading-[86%] uppercase tracking-[-6px] font-medium">
                <p className="hover-large">Tuhin</p>
              </div>

              <div className="flex justify-center sm:hidden">
                <div className="flex flex-col justify-center h-full">
                  <p className="tab:text-[24px] text-[18px] mb-3 hover-large flex">
                    Front-end Developer
                  </p>
                  <p className="tab:text-[58px] sm:text-[50px] text-[32px] font-medium uppercase leading-[86%] tracking-[-2px] hover-large flex">
                    Creating <br /> Web-magic <br /> with Code
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className=" flex-col justify-between h-full gap-8 pb-5 hidden sm:flex">
            <div className="flex-1 ">
              <div className="flex flex-col justify-center h-full">
                <p className="tab:text-[24px] text-[18px] mb-3 hover-large flex">
                  Front-end Developer
                </p>
                <p className="tab:text-[58px] sm:text-[50px] text-[32px] font-medium uppercase leading-[86%] tracking-[-2px] hover-large flex">
                  Creating <br /> Web-magic <br /> with Code
                </p>
              </div>
            </div>

            <div className="tab:h-[130px]  flex flex-col justify-between tab:py-4">
              <div className="flex sm:gap-[58px] sm:justify-normal justify-between tab:mb-6 mb-3">
                {/* github  */}
                <a
                  href="https://github.com/FojleTuhin"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="flex gap-[10px] hover:text-[#F1CCFF] group">
                    <p className="md:text-[18px] font-medium hover:text-[#F1CCFF] duration-300 transition-all ease-in-out">
                      Github
                    </p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="group-hover:text-[#F1CCFF]"
                    >
                      <path
                        d="M12 2C10.6868 2 9.38642 2.25866 8.17317 2.7612C6.95991 3.26375 5.85752 4.00035 4.92893 4.92893C3.05357 6.8043 2 9.34784 2 12C2 16.42 4.87 20.17 8.84 21.5C9.34 21.58 9.5 21.27 9.5 21V19.31C6.73 19.91 6.14 17.97 6.14 17.97C5.68 16.81 5.03 16.5 5.03 16.5C4.12 15.88 5.1 15.9 5.1 15.9C6.1 15.97 6.63 16.93 6.63 16.93C7.5 18.45 8.97 18 9.54 17.76C9.63 17.11 9.89 16.67 10.17 16.42C7.95 16.17 5.62 15.31 5.62 11.5C5.62 10.39 6 9.5 6.65 8.79C6.55 8.54 6.2 7.5 6.75 6.15C6.75 6.15 7.59 5.88 9.5 7.17C10.29 6.95 11.15 6.84 12 6.84C12.85 6.84 13.71 6.95 14.5 7.17C16.41 5.88 17.25 6.15 17.25 6.15C17.8 7.5 17.45 8.54 17.35 8.79C18 9.5 18.38 10.39 18.38 11.5C18.38 15.32 16.04 16.16 13.81 16.41C14.17 16.72 14.5 17.33 14.5 18.26V21C14.5 21.27 14.66 21.59 15.17 21.5C19.14 20.16 22 16.42 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2Z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                </a>

                {/* download resume  */}
                <button
                  className="flex gap-[10px] hover:text-[#F1CCFF] group"
                  onClick={handleClick}
                  disabled={isClicked}
                >
                  <p className="md:text-[18px] font-medium">Download Resume</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="group-hover:text-[#F1CCFF]"
                  >
                    <path
                      d="M12 16L7 11L8.4 9.55L11 12.15V4H13V12.15L15.6 9.55L17 11L12 16ZM4 20V15H6V18H18V15H20V20H4Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex">
                <button
                  onClick={handleScrollToContact}
                  className="py-2 px-3 rounded-full bg-[#F1CCFF] tab:text-[18px] font-medium text-[#000] flex items-center gap-[10px] hover:bg-[#fff] hover:gap-[18px] duration-200 transition-all ease-in-out group"
                >
                  <p className="">Say hello</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                    className="group-hover:-rotate-45 duration-300 transition-all ease-in-out"
                  >
                    <g clipPath="url(#clip0_1_210)">
                      <path
                        d="M15.662 8.50006L0.684021 16.3151L1.98602 8.50006L0.684021 0.685059L15.662 8.50006ZM3.84702 9.50006L3.31702 12.6851L11.337 8.50006L3.31602 4.31506L3.84702 7.50006H7.00002V9.50006H3.84702Z"
                        fill="black"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_210">
                        <rect
                          width="16"
                          height="16"
                          fill="white"
                          transform="translate(0 0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* design */}

      <div className="sm:hidden  grid grid-cols-2 px-6 -mt-10">
        <div className="space-y-3">
          <a
            href="https://github.com/FojleTuhin"
            target="_blank"
            rel="noreferrer"
          >
            <button className="flex gap-[10px] hover:text-[#F1CCFF] group">
              <p className="text-[12px] sm:text-[16px] md:text-[18px] font-medium hover:text-[#F1CCFF] duration-300 transition-all ease-in-out">
                Github
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                className="group-hover:text-[#F1CCFF]"
              >
                <path
                  d="M12 2C10.6868 2 9.38642 2.25866 8.17317 2.7612C6.95991 3.26375 5.85752 4.00035 4.92893 4.92893C3.05357 6.8043 2 9.34784 2 12C2 16.42 4.87 20.17 8.84 21.5C9.34 21.58 9.5 21.27 9.5 21V19.31C6.73 19.91 6.14 17.97 6.14 17.97C5.68 16.81 5.03 16.5 5.03 16.5C4.12 15.88 5.1 15.9 5.1 15.9C6.1 15.97 6.63 16.93 6.63 16.93C7.5 18.45 8.97 18 9.54 17.76C9.63 17.11 9.89 16.67 10.17 16.42C7.95 16.17 5.62 15.31 5.62 11.5C5.62 10.39 6 9.5 6.65 8.79C6.55 8.54 6.2 7.5 6.75 6.15C6.75 6.15 7.59 5.88 9.5 7.17C10.29 6.95 11.15 6.84 12 6.84C12.85 6.84 13.71 6.95 14.5 7.17C16.41 5.88 17.25 6.15 17.25 6.15C17.8 7.5 17.45 8.54 17.35 8.79C18 9.5 18.38 10.39 18.38 11.5C18.38 15.32 16.04 16.16 13.81 16.41C14.17 16.72 14.5 17.33 14.5 18.26V21C14.5 21.27 14.66 21.59 15.17 21.5C19.14 20.16 22 16.42 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </a>

          <button
            className="flex gap-[10px] hover:text-[#F1CCFF] group"
            onClick={handleClick}
            disabled={isClicked}
          >
            <p className="text-[12px] sm:text-[16px] md:text-[18px] font-medium">Download Resume</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              className="group-hover:text-[#F1CCFF]"
            >
              <path
                d="M12 16L7 11L8.4 9.55L11 12.15V4H13V12.15L15.6 9.55L17 11L12 16ZM4 20V15H6V18H18V15H20V20H4Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>

        <div className="flex w-full justify-end items-end">
          <button
            onClick={handleScrollToContact}
            className="py-2 px-3 rounded-full bg-[#F1CCFF] text-[12px] sm:text-[16px] tab:text-[18px] font-medium text-[#000] flex items-center gap-[10px] hover:bg-[#fff] hover:gap-[18px] duration-200 transition-all ease-in-out group"
          >
            <p className="">Say hello</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
              className="group-hover:-rotate-45 duration-300 transition-all ease-in-out"
            >
              <g clipPath="url(#clip0_1_210)">
                <path
                  d="M15.662 8.50006L0.684021 16.3151L1.98602 8.50006L0.684021 0.685059L15.662 8.50006ZM3.84702 9.50006L3.31702 12.6851L11.337 8.50006L3.31602 4.31506L3.84702 7.50006H7.00002V9.50006H3.84702Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_210">
                  <rect
                    width="16"
                    height="16"
                    fill="white"
                    transform="translate(0 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
