import { useRef, useState, useEffect } from "react";
import Me from "../assets/Me.png";
import Horizontal from "../components/Horizontal";
import Projects from "../components/Projects";
import AboutMe from "../components/AboutMe";
import Footer from "../components/Footer";

export default function HomePage() {
  const projects = useRef();
  const about = useRef();
  const contact = useRef();
  const [isXs, setIsXs] = useState(false);

  useEffect(() => {
    // Function to check screen width
    const checkScreenWidth = () => {
      if (window.innerWidth < 480) {
        setIsXs(true);
      } else {
        setIsXs(false);
      }
    };

    // Initial check
    checkScreenWidth();

    // Add event listener to check screen width on resize
    window.addEventListener("resize", checkScreenWidth);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", checkScreenWidth);
    };
  }, []);

  // Scroll to section function
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

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
              onClick={() => scrollToSection(contact)}
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
        <div className=" ">
          {/* Main Text Section */}
          <div className="pt-24 xs:pl-10 lg:pl-40 flex items-center justify-center px-4 sm:pt-36 sm:px-16">
            <div className="  text-3xl sm:text-4xl md:text-5xl lg:text-[3.8rem] xl:text-[5.1rem] font-black font-inter lg:leading-[1.2]  md:leading-[1.4] sm:leading-[1.65] tracking-widest text-white">
              <span className="lg:leading-[1.2] md:leading-[1.4] xs:leading-[1.65] pr-2  ">
                JUST A GUY WHO LOVES CREATING
              </span>
              {isXs && <br />}
              <span className="text-customPink lg:leading-[1.2] md:leading-[1.4] xs:leading-[1.65] ">
                BEAUTIFULLY
              </span>
              <br />
              <span className="text-customRed lg:leading-[1.2]  md:leading-[1.4] xs:leading-[1.65] ">
                ENGAGING
              </span>{" "}
              AND
              <span className="text-customBlue lg:leading-[1.2] md:leading-[1.4] xs:leading-[1.65] block">
                INTERACTIVE
              </span>
              WEBSITES
            </div>
          </div>

          {/* Image Section */}
          <div className="flex lg:absolute top-[18rem] right-16 justify-center sm:p-4  sm:mt-20 md:mt-4 xs:mt-20 lg:mt-8 z-10 ">
            <div className="xl:w-[510px] lg:w-[450px] md:w-[490px] sm:w-[390px] xs:w-[300px] rounded-xl h-auto overflow-hidden shadow-lg   ">
              <img
                src={Me}
                alt="Me at event"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
        {/* Horizontal section */}
        <Horizontal />

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
