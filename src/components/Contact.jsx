import { forwardRef } from "react";

const Contact = forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <div className="max-w-[651px] mx-auto py-20" id="contact">
        <p className="text-center text-[48px] text-[#F1CCFF] font-medium mb-12">
          Contact
        </p>
        <div className="grid grid-cols-2 gap-[18px] gap-y-8">
          <div className="space-y-3">
            <label htmlFor="name" className="text-[14px] ml-6">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Fojle Tuhin"
              className="w-full px-6 py-[18px] rounded-full bg-[#F1CCFF1F] text-white placeholder-gray-500  focus:border-[#F1CCFF] focus:ring-2 focus:ring-[#F1CCFF] outline-none focus:bg-none"
            />
          </div>
          <div className="space-y-3">
            <label htmlFor="email" className="text-[14px] ml-6">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="bro@gmail.com"
              className="w-full px-6 py-[18px] rounded-full bg-[#F1CCFF1F] text-white placeholder-gray-500  focus:border-[#F1CCFF] focus:ring-2 focus:ring-[#F1CCFF] outline-none focus:bg-none"
            />
          </div>
          <div className="space-y-3 col-span-2">
            <label htmlFor="message" className="text-[14px] ml-6">
              Message
            </label>
            <textarea
              id="message"
              type="text"
              placeholder="message"
              className="w-full px-6 py-[18px] rounded-[24px] bg-[#F1CCFF1F] text-white placeholder-gray-500  focus:border-[#F1CCFF] focus:ring-2 focus:ring-[#F1CCFF] outline-none focus:bg-none h-[125px]"
            />
          </div>
        </div>

        <div className="flex mt-12 justify-center">
          <button className="py-3 px-8 rounded-full group bg-[#F1CCFF] text-[18px] font-medium text-[#000] flex items-center gap-[10px] hover:bg-[#fff] hover:gap-[18px]  duration-200 transition-all ease-in-out group">
            <p>Say hello</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
              className="group-hover:-rotate-45 duration-300 transition-all ease-in-out "
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
});

export default Contact;
