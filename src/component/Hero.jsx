import React from "react";

const Hero = () => {
   const Goto = () => {
    window.scrollTo({
      top: 630,
      behavior: "smooth",
    });
  };
  
  return (
    <div>
      <div className="bg-[url('./Assets/hero.png')] bg-cover bg-center bg-no-repeat sm:h-[200px] h-[500px]  relative  ">
        <div className=" font-display flex items-center flex-col gap-10 text-white font-black absolute left-[750px] top-[190px] sm:left-[160px] sm:top-[80px] sm:gap-[10px] md:left-[450px] md:top-[250px]">
          <h1 className="font-bold text-center text-[50px] sm:text-[20px] md:text-[30px]">
            STYLIST PICKS BEAT <br></br> THE HEAT
          </h1>
          <button
            className="border-4 w-[200px] h-[50px]  font-bold text-2xl sm:text-[10px] sm:h-[35px]  sm:pt-[-6px] sm:py-[-16px] sm:w-[140px] mt-[-10px]  sm:mt-[10px] px-[15px]"
            onClick={Goto}>
            SHOP NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
