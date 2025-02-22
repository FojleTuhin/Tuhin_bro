import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="min-h-screen border-b border-[#fff] max-w-[1320px] mx-auto relative pt-[128px] pb-24">
        <div className="flex items-center justify-center h-screen absolute inset-0 z-0">
          <div className="w-[400px] h-[400px] rounded-full relative overflow-hidden">
            {/* Radial Gradient Background */}
            <div className="absolute inset-0 bg-gradient-radial from-[rgba(241,204,255,0.20)] to-transparent opacity-100" />

            {/* Inset Shadow */}
            <div className="absolute inset-0 shadow-[inset_-99px_198px_145px_-60px_rgba(241,204,255,0.40)]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
