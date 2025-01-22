import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Me from "../assets/Me.png";

const HeroSection = () => {
  const [isXs, setIsXs] = useState(false);

  useEffect(() => {
    const checkScreenWidth = () => {
      setIsXs(window.innerWidth < 480);
    };

    checkScreenWidth();
    window.addEventListener("resize", checkScreenWidth);
    return () => window.removeEventListener("resize", checkScreenWidth);
  }, []);

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: "easeOut", delay: 0.2 },
    },
  };

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Hero Content */}
      <div className="container mx-auto px-4 lg:px-8">
        <div className="min-h-screen">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="pt-24 lg:pt-24 sm:pl-10 lg:pl-[7.5rem]"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.8rem] xl:text-[5.1rem] font-black tracking-widest text-white leading-tight block">
              JUST A GUY WHO LOVES CREATING
            </h1>
          </motion.div>
          <div className="md:flex justify-center ">
            <div className="lg:pl-20 items-top">
              {/* Text Content */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={textVariants}
                className=" sm:pl-10"
              >
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.8rem] xl:text-[5.1rem] font-black tracking-widest text-white leading-tight">
                  <motion.span
                    className="text-customPink inline-block"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    BEAUTIFULLY
                  </motion.span>
                  <br />
                  <motion.span
                    className="text-customRed inline-block"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    ENGAGING
                  </motion.span>{" "}
                  AND{" "}
                  <motion.span
                    className="text-customBlue inline-block"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    INTERACTIVE
                  </motion.span>
                  <br />
                  WEBSITES
                </h1>
              </motion.div>
            </div>
            {/* Image Section */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={imageVariants}
              className="w-[80%] sm:w-full  max-w-[510px] z-50"
            >
              <div className="relative group">
                <div className=" bg-gradient-to-r from-customPink via-customRed to-customBlue rounded-xl blur opacity-30 group-hover:opacity-60 transition duration-1000"></div>
                <div className="relative rounded-xl overflow-hidden shadow-2xl">
                  <img
                    src={Me}
                    alt="Profile"
                    className="w-[100%] h-auto object-cover transform transition duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Background Gradient Effect */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-customPink opacity-10 blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-customBlue opacity-10 blur-[100px] animate-pulse delay-1000"></div>
      </div>
    </div>
  );
};

export default HeroSection;
