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

const Projects= React.forwardRef((props, ref) => {
  const [position, setPosition] = useState(2); // Default position to center
  const [dragging, setDragging] = useState(false);
  const dragStartX = useRef(0);

  useGSAP(() => {
    gsap.from(".pro", {
      duration: 0.8,
      y: 50,
      opacity: 0,
      stagger: 0.15,
      ease: "sine",
      // repeat: -1,
      // yoyo: true,
      scrollTrigger: {
        trigger: ".pro",
        toggleActions: "play none none reset",
        start: "top 80%",

      },
    
    });
  });



  // Handle looping the carousel
  const handleLoop = (newPos) => {
    if (newPos > projects.length) {
      setPosition(1);
    } else if (newPos < 1) {
      setPosition(projects.length);
    } else {
      setPosition(newPos);
    }
  };

  // Handle dragging for desktop
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

  // Handle dragging for mobile touch devices
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
  let [blur,setBlur] = useState('blur-none');
  setBlur = (r) => {
    if(r === 0){
      setBlur('blur-none');
    }else{
      setBlur('blur-md');
    }
  }
  
  const getTransformStyle = (i) => {
    const offset = i + 1;
    const r = position - offset;
    const absR = Math.abs(r);
    const rotateY = -12 * r; // Reduced rotation for smoother effect
    const translateX = -420 * r; // Increased spacing between cards
    const zIndex = position === offset ? 10 : 5;
    const scale = r === 0 ? 1 : 0.85; // Middle card appears larger
    const blur = r === 0 ? "blur-none" : "blur-md";
    return {
      transform: `rotateY(${rotateY}deg) translateX(${translateX}px) scale(${scale})`,
      zIndex: zIndex,
      transition: "all 0.7s ease-in-out", // Smoothen the transition a bit more
      filter: `${blur}`,
    };
  };

  return (
    <div ref={ref} className="bg-black h-screen flex overflow-x-hidden flex-col items-center justify-center">
      {/* Title */}
      <h1 className="text-transparent bg-clip-text text-7xl font-inter bg-gradient-to-r from-customRed via-customPink to-customBlue font-black mb-8"><BrokenText text='PROJECTS' cname='pro' /></h1>

      {/* Carousel Section */}
      <main
        className="relative w-full h-96 flex items-center justify-center perspective-600"
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
            className={`absolute w-[40rem] h-[20rem] rounded-lg shadow-2xl bg-cover ${blur} bg-center p-5 text-center text-white cursor-grab`}
            style={{
              ...getTransformStyle(i),
              backgroundImage: `url(${project.img})`,
            }}
          >
            <div
              onClick={() => window.open(project.link, "_blank")}
              className="absolute inset-x-0 bottom-0 bg-black backdrop-blur-sm bg-opacity-20 p-2 rounded-lg cursor-pointer"
            >
              <h3 className="text-white font-inter font-bold text-lg">
                {project.name}
              </h3>
            </div>
          </div>
        ))}
      </main>

      {/* Radio Buttons */}
      <div className="grid grid-cols-3 bg-gradient-to-r from-customRed via-customPink to-customBlue p-1 rounded-2xl  gap-3 mt-8">
        {Array.from({ length: projects.length }, (_, i) => (
          <input
            key={i}
            type="radio"
            name="position"
            className={`form-radio cursor-pointer h-3 w-3 text-${
              colors[i % colors.length]
            } bg-text-${colors[i % colors.length]}`}
            checked={position === i + 1}
            onChange={() => handleLoop(i + 1)}
          />
        ))}
      </div>
    </div>
  );
})
export default Projects;
