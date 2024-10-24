import React, { useRef, useEffect } from "react";
import MyPic from "../assets/Me.svg";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutMe = React.forwardRef((props, ref) => {
  const img = useRef();
  const heading = useRef();

  useGSAP(() => {
    gsap.from(heading.current, {
      duration: 1.3,
      y: 100,
      opacity: 0,
      delay: 0.2,
      ease: "back",
      scrollTrigger: {
        trigger: heading.current,
        start: "top 80%",
        toggleActions: "play none none reset",
      },
    });
    gsap.from(img.current, {
      duration: 1.0,
      scale: 0.7,
      opacity: 0.5,
      delay: 0.2,
      ease: "power2.inout",
      scrollTrigger: {
        trigger: img.current,
        start: "top 80%",
        toggleActions: "play none none reset",
      },
    });
  }, []);

  return (
    <section
      ref={ref}
      className="bg-black text-white flex flex-col items-center pt-16 pb-20 md:pb-40"
    >
      <h2
        ref={heading}
        className="text-5xl xs:text-6xl md:text-[6rem] xl:-translate-x-[20rem] lg:-translate-x-[15rem] font-inter font-black text-transparent bg-clip-text bg-gradient-to-r from-customBlue via-customPink to-customRed mb-8"
      >
        ABOUT ME
      </h2>
      <div className="container flex flex-col md:flex-row justify-center space-y-10 md:space-x-24 md:space-y-0 items-center">
        {/* Text Section */}
        <div className="w-full px-5 md:px-0 md:w-1/2 lg:w-[40rem] space-y-6">
          <ul className="list-disc text-[0.88rem] md:text-[1rem] font-inter list-inside space-y-4">
            <li>
              I'm a passionate web developer and an aspiring software engineer with
              experience in building modern, interactive websites and web
              applications.
            </li>
            <li>
              I specialize in using React, Vite, Tailwind CSS, and other
              cutting-edge technologies to create seamless user experiences.
            </li>
            <li>
              My journey began with a curiosity for coding, and now I love to create
              digital solutions that make a real-world impact.
            </li>
            <li>
              I've worked on a variety of projects, ranging from small
              portfolios to frontend of comprehensive employment platform.
            </li>
            <li>
              I'm constantly exploring new ways to push the boundaries of
              frontend development while staying updated with the latest
              industry trends.
            </li>
          </ul>
        </div>

        {/* Image Section */}
        <div
          ref={img}
          className="w-full xs:w-[22rem] md:w-[45%] lg:w-[29rem] -translate-y-10 mt-8 md:mt-0"
        >
          <img
            src={MyPic}
            alt="My Picture"
            className="rounded-lg shadow-lg w-full"
          />
        </div>
      </div>
    </section>
  );
});

export default AboutMe;
