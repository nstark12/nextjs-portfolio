"use client";
import Image from "next/image";

import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl lg:text-6xl sm:text-5xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-900 via-pink-500 to-pink-300">
              Hello, I&#39;m
            </span>
            <br />
            <div className="mt-4">
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  "Nicole",
                  1000, // wait 1s before replacing "Mice" with "Hamsters"
                  "a Web Developer",
                  1000,
                  "a Mobile Developer",
                  1000,
                  "a UI/UX Designer",
                  1000,
                ]}
                wrapper="span"
                speed={30}
                repeat={Infinity}
              />
            </div>
          </h1>
          <p className="text-[#ADB7BE] text-lg lg:text-xl mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            tempore nesciunt doloremque, eveniet commodi nulla.
          </p>
          <div>
            <button className="px-6 py-3 rounded-full mr-4 w-full sm:w-fit bg-gradient-to-br from-pink-950 via-pink-500 to-pink-300 text-white hover:bg-slate-200 mt-4">
              Hire Me
            </button>
            <button className="px-1 py-1 rounded-full mr-4 w-full sm:w-fit bg-gradient-to-br from-pink-950 via-pink-500 to-pink-300 text-white mt-4">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download Resum&eacute;
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full relative bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px]">
            <Image
              src="/background.png"
              alt="hero image"
              width={375}
              height={375}
              className="absolute transform -translate-x-1/4 -translate-y-1/2 top-1/3 left-1/4"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
