import Fun from "../assets/Interactive-Screen.svg";
import Design from "../assets/Web-Design.svg";
import Engage from "../assets/Customer-Review.svg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Horizontal() {
  const main = useRef();
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();
  let sections = [ref1, ref2, ref3, ref4];

  const text1 = useRef();
  const text2 = useRef();
  const text3 = useRef();
  const ball = useRef();
  const [isXs, setIsXs] = useState(false);
  const [isSm, setIsSm] = useState(false);
  const [isMd, setIsMd] = useState(false);
  const [isLg, setIsLg] = useState(false);
  const [isXl, setIsXl] = useState(false);

  useEffect(() => {
    // Function to check screen width
    const checkScreenWidth = () => {
      if (window.innerWidth > 380 && window.innerWidth < 640 ) {
        setIsXs(true);
      } else {
        setIsXs(false);
      }
      if (window.innerWidth > 640 && window.innerWidth < 768) {
        setIsSm(true);
      } else {
        setIsSm(false);
      }
      if (window.innerWidth > 768 && window.innerWidth < 1024) {
        setIsMd(true);
      } else {
        setIsMd(false);
      }
      if (window.innerWidth > 1024 && window.innerWidth < 1280) {
        setIsLg(true);
      } else {
        setIsLg(false);
      }
      if (window.innerWidth > 1280) {
        setIsXl(true);
      } else {
        setIsXl(false);

      };
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

  
    useGSAP(() => {
      let scroll;

    
      scroll = gsap.to(
        sections.map((section) => section.current),
        {
          x: -100 * (sections.length - 1.7) + "vw",
          scrollTrigger: {
            trigger: main.current,
            pin: true,
            scrub: 1,
            end: "+=3000" ,
          },
        }
      );
  

      gsap.to(text1.current, {
        backgroundImage: "linear-gradient(to right, #F87274, #9B2C2C)",
        duration: 1,
        scrollTrigger: {
          trigger: ref2.current,
          start: "left-=300 center",
          toggleActions: "play reverse play reverse",
          containerAnimation: scroll,
        },
      });
      gsap.to(text2.current, {
        backgroundImage: "linear-gradient(to right, #0984E3, #AA0478, #5F0398)",
        duration: 1,
        scrollTrigger: {
          trigger: ref3.current,
          start: "left-=600 center",
          toggleActions: "play reverse play reverse",
          containerAnimation: scroll,
        },
      });
      gsap.to(text3.current, {
        backgroundImage: "linear-gradient(to right, #CA4978, #97266D)",
        duration: 1,
        scrollTrigger: {
          trigger: ref4.current,
          start: "left-=900 center",
          toggleActions: "play reverse play reverse",
          containerAnimation: scroll,
        },
      });

      sections.forEach((section, index) => {
        gsap.from(section.current.querySelector(".illustration"), {
          opacity: 0,
          duration: 0.7,
          y: -30,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: section.current,
            start: `left-=${300 + index * 200} center`,
            toggleActions: "play reverse play reverse",
            containerAnimation: scroll,
          },
        });
        gsap.to(ball.current, {
          rotate: 360 * 3,
          keyframes: {
            x: [
              0, 200, 400, 600, 800, 1000, 1200, 1400, 1600, 1750, 1900, 2100,
              2300, 2500, 2700, 2900, 3100, 3200, 3400,
            ],
            y: [
              0, 0, 0, 0, -112.5, -425, -425, -425, -225, -175, 100, 100, 100,
              -50, -200, -350, -500, -500, -500,
            ],
          },
          ease: "none",
          scrollTrigger: {
            trigger: main.current,
            start: "top+=300 center",
            end: "bottom+=1800 center",
            toggleActions: "play reverse play reverse",
            scrub: 1,
          },
        });
      });
    });

  return (
    <div
      ref={main}
      className="bg-black h-screen overflow-x-hidden flex items-center mt-40 text-center"
    >
      {/* Main Text */}
      <div
        ref={ref1}
        className="min-w-[100vw] flex flex-col items-center justify-center"
      >
        <h1 className="text-[5rem] xs:text-[4rem] sm:text-[6.5rem] xl:text-[10rem] md:text-[8rem] font-black tracking-wide">
          <span className="bg-gradient-to-r from-customRed via-customPink to-customBlue text-transparent bg-clip-text">
            WEBSITES
          </span>
        </h1>
        <h2 className="text-white text-[2rem] xs:text-[1rem] sm:text-[2.5rem] md:text-[3rem] italic translate-x-20 xs:translate-x-32 md:translate-x-[15rem] font-handwritten font-black tracking-widest mt-[-1rem] ">
          THAT ARE
        </h2>
        <svg
          className="xs:scale-50 sm:scale-75 md:scale-90 lg:scale-100"
          width="113"
          height="116"
          viewBox="0 0 113 116"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          ref={ball}
        >
          <path
            d="M112.529 75.7756C108.357 88.4074 99.9342 99.2018 88.6956 106.32C77.4571 113.438 64.0983 116.438 50.8953 114.811C37.6923 113.183 25.462 107.028 16.2884 97.3943C7.11484 87.7604 1.56549 75.2436 0.585923 61.9768C-0.393645 48.71 3.25718 35.514 10.9163 24.6372C18.5755 13.7603 29.7691 5.87572 42.5899 2.32675C55.4107 -1.22222 69.0654 -0.215963 81.2275 5.17407C93.3895 10.5641 103.306 20.0044 109.288 31.8865L57.9298 57.7428L112.529 75.7756Z"
            fill="url(#paint0_linear_66_5)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_66_5"
              x1="115.832"
              y1="49.2987"
              x2="2.03837"
              y2="67.7952"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#F87274" />
              <stop offset="0.553184" stopColor="#CA4978" />
              <stop offset="1" stopColor="#0984E3" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      {/* Image and Description Section */}
      <div
        ref={ref2}
        className="lg:min-w-[70vw] md:min-w-[100vw] sm:min-w-[120vw] xs:min-w-[140vw] xs:scale-[0.75] sm:scale-[0.85] md:scale-[0.95] lg:scale-[1] h-full flex flex-col items-center justify-center"
      >
        <h3
          ref={text1}
          className="text-transparent bg-white translate-y-16 xs:translate-y-32 -translate-x-8 xs:-translate-x-32 font-inter text-5xl xs:text-9xl bg-clip-text font-extrabold"
        >
          FUN
        </h3>
        <img
          src={Fun}
          alt="Interactive Screen"
          className="mt-5 w-[15rem] xs:w-[25rem] md:w-[30rem] illustration h-auto object-cover"
        />
      </div>
      <div
        ref={ref3}
        className="lg:min-w-[70vw] md:min-w-[100vw] sm:min-w-[120vw] xs:min-w-[180vw] xs:scale-[0.75] sm:scale-[0.85] md:scale-[0.95] lg:scale-[1] h-full flex flex-col items-center justify-center"
      >
        <img
          src={Design}
          alt="Designed With Care"
          className="mt-5 w-[15rem] xs:w-[25rem] md:w-[30rem] illustration h-auto object-cover"
        />
        <h3
          ref={text2}
          className="bg-white text-transparent bg-clip-text font-inter -translate-y-12 xs:-translate-y-24 -translate-x-8 xs:-translate-x-16 text-4xl xs:text-6xl font-extrabold"
        >
          DESIGNED WITH <span>CARE</span>
        </h3>
      </div>
      <div
        ref={ref4}
        className="lg:min-w-[70vw] md:min-w-[100vw] sm:min-w-[120vw] xs:min-w-[140vw] xs:scale-[0.75] sm:scale-[0.85] md:scale-[0.95] lg:scale-[1] h-full flex flex-col items-center justify-center"
      >
        <h3
          ref={text3}
          className="text-transparent bg-white bg-clip-text font-inter -translate-x-28 xs:-translate-x-52 translate-y-32 xs:translate-y-56 text-3xl xs:text-[2.7rem] font-extrabold xs:-rotate-90"
        >
          DELICIOUSLY <span>ENGAGING</span>
        </h3>
        <img
          src={Engage}
          alt="Customer Review"
          className="mt-5 w-[15rem] xs:w-[25rem] md:w-[30rem] illustration h-auto object-cover"
        />{" "}
      </div>{" "}
    </div>
  );
}
