import { useRef, useState, useEffect } from "react";
import Me from "../assets/Me.png";
import Horizontal from "../components/Horizontal";
import Projects from "../components/Projects";
import AboutMe from "../components/AboutMe";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import MobileHorizontal from "../components/MobileHorizontal";

export default function HomePage() {
  const projects = useRef();
  const about = useRef();
  const contact = useRef();
  const [isXs, setIsXs] = useState(false);
const scrollToSection = (sectionRef) => {
  window.scrollTo({
    top: sectionRef.current.offsetTop,
    behavior: "smooth",
  });
  };
    const [screenSize, setScreenSize] = useState("default");

    useEffect(() => {
      const handleResize = () => {
        const width = window.innerWidth;
        if (width < 640) setScreenSize("xs");
        else if (width < 768) setScreenSize("sm");
        else if (width < 1024) setScreenSize("md");
        else if (width < 1280) setScreenSize("lg");
        else setScreenSize("xl");
      };

      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

  return (
    <div className="relative min-h-screen bg-black">
      {/* Fixed Top Navigation Bar */}
      <div className="fixed w-full max-w-full flex justify-center items-center rounded-lg z-50">
        <div className="w-full rounded-lg flex justify-between items-center m-3 bg-gray-600 bg-opacity-30 backdrop-blur-md py-4 px-4 sm:px-8 z-50">
          <button
            onClick={() => scrollToSection(projects)}
            className="text-white lg:text-lg md:text-lg sm:text-xs hover:cursor-pointer font-medium"
          >
            PROJECTS
          </button>
          <div className="flex space-x-4 sm:space-x-8 lg:text-lg md:text-lg sm:text-xs ">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(contact);
              }}
              className="text-white  font-medium"
            >
              CONTACT
            </a>
            <a
              href="#about"
              onClick={() => scrollToSection(about)}
              className="text-white font-medium"
            >
              ABOUT ME
            </a>
          </div>
        </div>
      </div>

      {/* Main Content Wrapper */}
      <div className="overflow-auto w-full min-h-screen h-auto items-center bg-black justify-center">
        {/* hero section */}
        <HeroSection />
        {/* Horizontal section */}
        {screenSize === "xs" || screenSize === "sm" || screenSize === "md" ? (
          <MobileHorizontal />
        ) : (
          <Horizontal />
        )}

        {/* Projects Section */}
        <Projects ref={projects} />

        {/* About Me Section */}
        <AboutMe ref={about} />

        {/* Footer Section */}
        <Footer ref={contact} />
      </div>
    </div>
  );
}
