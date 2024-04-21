import React from "react";
import heroimage from "../assets/profilepic7.jpeg";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] md:h-[70vh] mx-auto py-8 bg-black">
      <div className="col-span-1 my-auto mx-auto w-[300px] h-auto sm:w-[495px]">
        <img src={heroimage} alt="hero" className="max-w-full" />
      </div>
      <div className="col-span-2 px-5 my-auto">
        <h1 className="text-white text-4xl sm:text-5xl lg:text-8xl font-extrabold">
          <span className="primary-color">I'm a</span> <br />
        </h1>
        <TypeAnimation
          sequence={["Frontend Dev", 1000, "Web designer", 1000]}
          wrapper="span"
          speed={50}
          className="text-5xl text-white font-bold block mt-5"
          repeat={Infinity}
        />
        <p className="text-white sm:text-lg my-6 lg:text-xl">
          I`m Mohd Arif, an aspiring web developer ready to learn, innovate, and
          contribute.
        </p>

        <div className="my-8">
          <a
            href="https://peach-helaine-36.tiiny.site" target="_blank"
            className="px-6 py-3 w-full rounded-xl mr-4 bg-gradient-to-br from-orange-500 to-pink-500 text-white btn-download"
          >
            Download CV
          </a>
          <a
            href="#contact"
            className="px-6 py-3 w-full rounded-xl mr-4 border border-gray-400 hover:bg-gradient-to-br  from-orange-500 to-pink-500 text-white hover:border-none"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;