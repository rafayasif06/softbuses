import React from "react";
import SoftBuses from "./SoftBuses";

export const Hero = () => {
  return (
    <section className="pt-32 relative z-[1]">
      <div className="w-full mx-auto max-w-[1660px] flex flex-col items-center justify-center  px-4 text-center gap-y-10 lg:gap-y-14">
        {/* Logo */}
        <div className="w-[110px] h-auto">
          <img src="verticalLogo.svg" alt="" className="w-full h-auto" />
        </div>
        {/* Main Text */}
        <div className="">
          <h1 className="~sm/xl:~text-2xl/6xl font-bold">
            Empowering businesses with <br />
            <span className="text-primary">optimal solutions!</span>
          </h1>
        </div>
        {/* Sub Text */}
        <div className="w-full flex  items-center justify-center">
          <h2 className="text-sm md:text-base text-wrap md:w-1/2 text-center text-white/80 tracking-widest">
            <SoftBuses /> builds exceptional web and mobile apps using cutting-edge
            technology and a passionate, talented team.
          </h2>
        </div>
        {/* Call to Action */}
        <div className="flex flex-col md:flex-row gap-x-20 w-4/5 sm:w-2/3 md:w-auto gap-y-6 ">
          <div className="relative group ">
            <button className="relative  ~sm/xl:~px-5/16 py-3  w-full bg-primary group-hover:bg-transparent group-hover:border-white border-2 border-black text-black group-hover:text-primary text-lg font-bold transition-all duration-300 cursor-pointer shadow-[4px_4px_0_0_#fff] hover:shadow-[4px_4px_0_0_#69FF00]">
              Get a Quote
            </button>
          </div>
          <div className="relative group ">
            <button className="relative ~sm/xl:~px-5/16 py-3  w-full group-hover:bg-primary group-hover:border-black border-2 border-white text-primary group-hover:text-black text-lg font-bold transition-all duration-300  cursor-pointer shadow-[4px_4px_0_0_#69FF00] hover:shadow-[4px_4px_0_0_#fff]">
              See All Projects
            </button>
          </div>
        </div>
      </div>
      <div className="mx-auto ~sm/xl:~mt-8/16 w-[75%] h-[1px] bg-white/20 " />
    </section>
  );
};
