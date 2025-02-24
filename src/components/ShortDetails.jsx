"use client";
import moment from "moment";
import { useEffect, useState } from "react";

const ShortDetails = () => {
  const [time, setTime] = useState("");

  const handleClick = () => {
    window.open(
      "https://drive.google.com/file/d/14r0vGFas0RUFMGZWydNPzjdU5Z3DsSO5/view",
      "_blank"
    );
  };

  useEffect(() => {
    // Update the time every second
    const interval = setInterval(() => {
      setTime(moment().format("LTS"));
    }, 1000);

    // Cleanup interval on unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 min-h-screen w-full z-50 pointer-events-none text-[12px] mob:text-[14px]">
      <div className="flex justify-between h-full thirteenPx:px-5">
        <div className="flex flex-col items-center justify-center h-full gap-8">
          <p className=" font-medium rotate-180 [writing-mode:vertical-lr] tracking-wider">
            Born 2001
          </p>
          <p className=" font-medium rotate-180 [writing-mode:vertical-lr] tracking-wider">
            BASED IN DHAKA
          </p>
          <div className="flex flex-col items-center justify-center gap-3 pointer-events-auto">
            {/* facebook */}
            <a
              href="https://www.facebook.com/fojla.tuhin"
              target="_blank"
              rel="noreferrer"
              className="hover:opacity-80 transition-opacity text-[12px] mob:text-[14px] hidden sm:block"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M20 10C20 4.48 15.52 0 10 0C4.48 0 0 4.48 0 10C0 14.84 3.44 18.87 8 19.8V13H6V10H8V7.5C8 5.57 9.57 4 11.5 4H14V7H12C11.45 7 11 7.45 11 8V10H14V13H11V19.95C16.05 19.45 20 15.19 20 10Z"
                  fill="white"
                />
              </svg>
            </a>

            {/* linkedin  */}
            <a
              href="https://www.linkedin.com/in/fojle-tuhin"
              target="_blank"
              rel="noreferrer"
              className="hover:opacity-80 transition-opacity text-[12px] mob:text-[14px] hidden sm:block"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  d="M16 0C16.5304 0 17.0391 0.210714 17.4142 0.585786C17.7893 0.960859 18 1.46957 18 2V16C18 16.5304 17.7893 17.0391 17.4142 17.4142C17.0391 17.7893 16.5304 18 16 18H2C1.46957 18 0.960859 17.7893 0.585786 17.4142C0.210714 17.0391 0 16.5304 0 16V2C0 1.46957 0.210714 0.960859 0.585786 0.585786C0.960859 0.210714 1.46957 0 2 0H16ZM15.5 15.5V10.2C15.5 9.33539 15.1565 8.5062 14.5452 7.89483C13.9338 7.28346 13.1046 6.94 12.24 6.94C11.39 6.94 10.4 7.46 9.92 8.24V7.13H7.13V15.5H9.92V10.57C9.92 9.8 10.54 9.17 11.31 9.17C11.6813 9.17 12.0374 9.3175 12.2999 9.58005C12.5625 9.8426 12.71 10.1987 12.71 10.57V15.5H15.5ZM3.88 5.56C4.32556 5.56 4.75288 5.383 5.06794 5.06794C5.383 4.75288 5.56 4.32556 5.56 3.88C5.56 2.95 4.81 2.19 3.88 2.19C3.43178 2.19 3.00193 2.36805 2.68499 2.68499C2.36805 3.00193 2.19 3.43178 2.19 3.88C2.19 4.81 2.95 5.56 3.88 5.56ZM5.27 15.5V7.13H2.5V15.5H5.27Z"
                  fill="white"
                />
              </svg>
            </a>

            {/* github  */}
            <a
              href="https://github.com/FojleTuhin"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                className="group-hover:text-[#F1CCFF] sm:hidden"
              >
                <path
                  d="M12 2C10.6868 2 9.38642 2.25866 8.17317 2.7612C6.95991 3.26375 5.85752 4.00035 4.92893 4.92893C3.05357 6.8043 2 9.34784 2 12C2 16.42 4.87 20.17 8.84 21.5C9.34 21.58 9.5 21.27 9.5 21V19.31C6.73 19.91 6.14 17.97 6.14 17.97C5.68 16.81 5.03 16.5 5.03 16.5C4.12 15.88 5.1 15.9 5.1 15.9C6.1 15.97 6.63 16.93 6.63 16.93C7.5 18.45 8.97 18 9.54 17.76C9.63 17.11 9.89 16.67 10.17 16.42C7.95 16.17 5.62 15.31 5.62 11.5C5.62 10.39 6 9.5 6.65 8.79C6.55 8.54 6.2 7.5 6.75 6.15C6.75 6.15 7.59 5.88 9.5 7.17C10.29 6.95 11.15 6.84 12 6.84C12.85 6.84 13.71 6.95 14.5 7.17C16.41 5.88 17.25 6.15 17.25 6.15C17.8 7.5 17.45 8.54 17.35 8.79C18 9.5 18.38 10.39 18.38 11.5C18.38 15.32 16.04 16.16 13.81 16.41C14.17 16.72 14.5 17.33 14.5 18.26V21C14.5 21.27 14.66 21.59 15.17 21.5C19.14 20.16 22 16.42 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2Z"
                  fill="currentColor"
                />
              </svg>
            </a>

            {/* download  */}
            <button onClick={handleClick}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                className="group-hover:text-[#F1CCFF] sm:hidden"
              >
                <path
                  d="M12 16L7 11L8.4 9.55L11 12.15V4H13V12.15L15.6 9.55L17 11L12 16ZM4 20V15H6V18H18V15H20V20H4Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center h-full gap-8">
          <p className=" font-medium rotate-270 [writing-mode:vertical-rl] tracking-wider hidden md:block">
            GMT + 6,{" "}
          </p>
          <p className=" font-medium rotate-270 [writing-mode:vertical-rl] tracking-wider">
            {time}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShortDetails;
