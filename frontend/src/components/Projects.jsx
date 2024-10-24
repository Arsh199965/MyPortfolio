import React, { useState, useRef } from "react";
import ProjectLove from "../assets/ProjectLove.png";
import CareerConquest from "../assets/CareerConquest.png";
import Portfolio from "../assets/Portfolio.png";
import BrokenText from "../Imp.jsx";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    name: "Project Love",
    img: ProjectLove,
    link: "https://projectlove.vercel.app",
  },
  {
    name: "Career Conquest",
    img: CareerConquest,
    link: "https://careerconquest.vercel.app",
  },
  {
    name: "Portfolio",
    img: Portfolio,
    link: "https://arshahmad.vercel.app",
  },
];

const colors = ["customRed", "customPink", "customBlue"];

const Projects = React.forwardRef((props, ref) => {
  const [position, setPosition] = useState(2);
  const [dragging, setDragging] = useState(false);
  const dragStartX = useRef(0);

  useGSAP(() => {
    gsap.from(".pro", {
      duration: 0.8,
      opacity: 0,
      stagger: 0.1,
      ease: "sine",
      scrollTrigger: {
        trigger: ".pro",
        toggleActions: "play none none reset",
        start: "top 90%",
      },
    });
  });

  const handleLoop = (newPos) => {
    if (newPos > projects.length) {
      setPosition(1);
    } else if (newPos < 1) {
      setPosition(projects.length);
    } else {
      setPosition(newPos);
    }
  };

  const handleMouseDown = (e) => {
    dragStartX.current = e.clientX;
    setDragging(true);
  };

  const handleMouseMove = (e) => {
    if (!dragging) return;
    const dragDifference = e.clientX - dragStartX.current;
    if (dragDifference > 100) {
      handleLoop(position - 1);
      setDragging(false);
    } else if (dragDifference < -100) {
      handleLoop(position + 1);
      setDragging(false);
    }
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  const handleTouchStart = (e) => {
    dragStartX.current = e.touches[0].clientX;
    setDragging(true);
  };

  const handleTouchMove = (e) => {
    if (!dragging) return;
    const dragDifference = e.touches[0].clientX - dragStartX.current;
    if (dragDifference > 100) {
      handleLoop(position - 1);
      setDragging(false);
    } else if (dragDifference < -100) {
      handleLoop(position + 1);
      setDragging(false);
    }
  };

  const handleTouchEnd = () => {
    setDragging(false);
  };

  const getTransformStyle = (i) => {
    const offset = i + 1;
    const r = position - offset;
    const rotateY = -12 * r;
    const translateX = -420 * r;
    const zIndex = position === offset ? 10 : 5;
    const scale = r === 0 ? 1 : 0.85;
    const blur = r === 0 ? "blur-none" : "blur-md";
    return {
      transform: `rotateY(${rotateY}deg) translateX(${translateX}px) scale(${scale})`,
      zIndex,
      transition: "all 0.7s ease-in-out",
      filter: `${blur}`,
    };
  };

  return (
    <div
      ref={ref}
      className="bg-black h-screen flex flex-col items-center justify-center overflow-x-hidden"
    >
      {/* Title */}
      <h1 className="text-transparent bg-clip-text text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-inter bg-gradient-to-r from-customRed via-customPink to-customBlue font-black mb-8">
        <BrokenText text="PROJECTS" cname="pro" />
      </h1>

      {/* Carousel Section */}
      <main
        className="relative w-full h-52 xs:h-60 sm:h-72 md:h-80 lg:h-96 flex items-center justify-center perspective-600"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {projects.map((project, i) => (
          <div
            key={i}
            className={`absolute w-52 h-32 xs:w-[22rem] xs:h-[12rem] sm:w-[30rem] sm:h-[18rem] md:w-[34rem] md:h-[20rem] lg:w-[40rem] lg:h-[22rem] rounded-lg shadow-2xl bg-cover bg-center p-5 text-center text-white cursor-grab`}
            style={{
              ...getTransformStyle(i),
              backgroundImage: `url(${project.img})`,
            }}
          >
            <div
              onClick={() => window.open(project.link, "_blank")}
              className="absolute inset-x-0 bottom-0 bg-black backdrop-blur-sm bg-opacity-20 p-2 rounded-lg cursor-pointer"
            >
              <h3 className="text-white font-inter font-bold text-xs xs:text-sm sm:text-lg md:text-xl">
                {project.name}
              </h3>
            </div>
          </div>
        ))}
      </main>

      {/* Radio Buttons */}
      <div className="grid grid-cols-3 bg-gradient-to-r from-customRed via-customPink to-customBlue p-1 rounded-2xl gap-3 mt-8">
        {Array.from({ length: projects.length }, (_, i) => (
          <input
            key={i}
            type="radio"
            name="position"
            className={`form-radio cursor-pointer h-2 w-2 md:h-3 md:w-3 text-${
              colors[i % colors.length]
            } bg-text-${colors[i % colors.length]}`}
            checked={position === i + 1}
            onChange={() => handleLoop(i + 1)}
          />
        ))}
      </div>
    </div>
  );
});

export default Projects;
