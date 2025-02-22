const WhoAmI = () => {
  return (
    <div className="pt-[232px] pb-24 max-w-[1320px] mx-auto px-8 ">
      <div className="grid grid-cols-2 gap-y-24">
        <div>
          <p className="text-[28px] font-medium">WHO AM I_</p>
        </div>
        <div>
          <p className="text-[24px]">
            I specialize in building fast, responsive, and user-friendly
            websites that not only look great but also perform flawlessly. With
            expertise in modern technologies like React, Vue, and Tailwind, I
            create seamless digital experiences that enhance usability and
            engagement
          </p>
        </div>

        <div className="grid grid-cols-3 gap-[15px]">
            <div className="py-[30px] px-8 rounded-[12px] bg-[#f1ccff24] h-[271px] w-auto">
                <p className="text-[18px] font-medium mb-[62px] text-[#FFFFFF]">Education</p>
                <p className="text-[#FFFFFF] font-medium mb-1">CSE, </p>
                <p className="text-[#FFFFFFB8]">Green University of Bangladesh,
                2020-2125</p>


            </div>
            <div className="py-[30px] px-8 rounded-[12px] bg-[#f1ccff24] h-[271px] w-auto">
                <p className="text-[18px] font-medium mb-[62px] text-[#FFFFFF]">Experience</p>
                <p className="text-[#FFFFFF] font-medium mb-1">Junior Front-end Developer, </p>
                <p className="text-[#FFFFFFB8]">Bismo - November 2024 - Currently</p>


            </div>
            <div className="py-[30px] px-8 rounded-[12px] bg-[#f1ccff24] h-[271px] w-auto">
                <p className="text-[18px] font-medium mb-[62px] text-[#FFFFFF]">I Love</p>
                {/* <p className="text-[#FFFFFF] font-medium mb-1">Junior Front-end Developer, </p> */}
                <p className="text-[#FFFFFF]">Playing Cricket & Keyboard</p>


            </div>

        </div>
      </div>
    </div>
  );
};

export default WhoAmI;
