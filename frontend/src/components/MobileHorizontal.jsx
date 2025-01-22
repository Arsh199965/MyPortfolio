import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Fun from "../assets/Interactive-Screen.svg";
import Design from "../assets/Web-Design.svg";
import Engage from "../assets/Customer-Review.svg";
gsap.registerPlugin(ScrollTrigger);

export default function MobileHorizontal() {
  const containerRef = useRef();
  const sections = useRef([]);
  const ballRef = useRef();
  const textRefs = useRef([]);
  const imageRefs = useRef([]);
  const overlayRefs = useRef([]);

  useGSAP(() => {
    // Hero animations
    const heroTl = gsap.timeline();
    heroTl
      .from("h1 span", {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
      })
      .from(
        "h2",
        {
          y: 50,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.5"
      );

    // Floating ball animation
    gsap.to(ballRef.current, {
      rotate: 360 * 3,
      y: "50px",
      duration: 8,
      ease: "none",
      yoyo: true,
      repeat: -1,
    });

    gsap.to(ballRef.current, {
      scale: 1.2,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "20% top",
        scrub: 1,
      },
    });

    // Section animations
    sections.current.forEach((section, index) => {
      // Text animation
      gsap.from(textRefs.current[index], {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: "top 60%",
          end: "top 40%",
          scrub: 1,
          toggleActions: "play none none reverse",
        },
      });

      // Image container animation
      gsap.from(imageRefs.current[index], {
        scale: 0.8,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          end: "top 30%",
          scrub: 1,
          toggleActions: "play none none reverse",
        },
      });

      // Overlay gradient animation
      gsap.to(overlayRefs.current[index], {
        opacity: 0.7,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: "top 60%",
          end: "bottom 40%",
          scrub: 1,
          toggleActions: "play reverse play reverse",
        },
      });

      // Parallax effect
      gsap.to(imageRefs.current[index], {
        y: 100,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    });
  });

  return (
    <div
      ref={containerRef}
      className="bg-black min-h-screen w-full overflow-hidden"
    >
      <div className="h-screen flex flex-col items-center justify-center relative overflow-hidden">
        <h1 className="text-6xl md:text-8xl font-black tracking-wide text-center px-4 transform transition-transform hover:scale-105">
          <span className="bg-gradient-to-r from-customRed via-customPink to-customBlue text-transparent bg-clip-text inline-block">
            WEBSITES
          </span>
        </h1>
        <h2 className="text-white text-2xl md:text-3xl italic font-handwritten mt-4">
          THAT ARE
        </h2>
        <svg
          ref={ballRef}
          className="absolute w-24 h-24 md:w-32 md:h-32 cursor-pointer"
          viewBox="0 0 113 116"
          style={{
            top: "70%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
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

      <div className="space-y-32 pb-32">
        {["FUN", "DESIGNED WITH CARE", "DELICIOUSLY ENGAGING"].map(
          (text, index) => (
            <div
              key={index}
              ref={(el) => (sections.current[index] = el)}
              className="min-h-screen flex flex-col items-center justify-center px-4 relative"
            >
              {index === 1 ? (
                <div
                  className="relative w-full max-w-md mb-8"
                  ref={(el) => (imageRefs.current[index] = el)}
                >
                  <img
                    src={Design}
                    alt="Design"
                    className="w-full h-auto rounded-lg shadow-2xl transition-transform hover:scale-105"
                  />
                  <div
                    ref={(el) => (overlayRefs.current[index] = el)}
                    className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg opacity-0"
                  />
                </div>
              ) : null}

              <h3
                ref={(el) => (textRefs.current[index] = el)}
                className={`text-5xl md:text-7xl font-bold text-center bg-gradient-to-r 
                ${
                  index === 0
                    ? "from-customRed to-red-800"
                    : index === 1
                    ? "from-blue-500 via-purple-500 to-purple-800"
                    : "from-pink-500 to-purple-800"
                } 
                text-transparent bg-clip-text mb-1 transition-transform hover:scale-105`}
              >
                {text}
              </h3>

              {index !== 1 && (
                <div
                  className="relative w-full max-w-md"
                  ref={(el) => (imageRefs.current[index] = el)}
                >
                  <img
                    src={index === 0 ? Fun : Engage}
                    alt={index === 0 ? "Interactive Screen" : "Engagement"}
                    className="w-full h-auto rounded-lg shadow-2xl transition-transform hover:scale-105"
                  />
                  <div
                    ref={(el) => (overlayRefs.current[index] = el)}
                    className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg opacity-0"
                  />
                </div>
              )}
            </div>
          )
        )}
      </div>
    </div>
  );
}
