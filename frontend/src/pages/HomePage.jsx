import BrokenText from "../Imp"; 
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Me from "../assets/Me.png";
import Horizontal from "../components/Horizontal";
import Projects from "../components/Projects";
gsap.registerPlugin(ScrollTrigger);





// HomePage.jsx

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-black">
      {/* Fixed Top Navigation Bar */}
      <div className="fixed w-[98%] rounded-lg flex justify-between items-center m-4 bg-gray-600 bg-opacity-30 backdrop-blur-md py-4 px-8 z-50">
        <a href="#projects" className="text-white text-lg font-medium">
          PROJECTS
        </a>
        <div className="flex space-x-8">
          <a href="#contact" className="text-white text-lg font-medium">
            CONTACT
          </a>
          <a href="#about" className="text-white text-lg font-medium">
            ABOUT ME
          </a>
        </div>
      </div>

      {/* Main Content Wrapper */}
      <div className="relative w-full min-h-screen h-screen items-center bg-black justify-between">
        {/* Main Text Section */}
        <div className="text-left pt-36 pl-28">
          <div className="text-4xl sm:text-5xl md:text-6xl lg:text-[5.1rem] font-black font-inter leading-[1.2] tracking-widest text-white">
            <span className="leading-[1.2]">JUST A GUY WHO LOVES CREATING</span>
            <span className="text-customPink leading-[1.2]">BEAUTIFULLY</span>
            <br /> <span className="text-customRed leading-[1.2]">ENGAGING</span> AND <br />
            <span className="text-customBlue leading-[1.2]">INTERACTIVE</span>
            <br /> WEBSITES
          </div>
        </div>

        {/* Image Section */}
        <div className="flex rounded-xl absolute top-[21rem] right-[8rem] bg-black justify-end">
          <div className="w-[130px] sm:w-[280px] md:w-[330px] lg:w-[430px] xl:w-[480px] rounded-lg overflow-hidden shadow-lg">
            <img
              src={Me}
              alt="Me at event"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
        <Horizontal />
        <Projects />
      </div>
    </div>
  );
}



