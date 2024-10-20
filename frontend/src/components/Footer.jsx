import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";
import React from "react";

const Footer = React.forwardRef((props, ref) => {
  return (
    <footer ref={ref} className="bg-black">
      <div className="text-white rounded-t-3xl pt-12 pb-6 bg-gradient-to-bl from-customRed via-customPink to-customBlue">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          {/* Left Section */}
          <div className="text-5xl font-pacifico  pl-6 font-bold">
            <h1 className="tracking-wide">CREATED WITH CARE</h1>
            <p className="mt-4 font-handwritten text-lg italic">
              "Code is like humor. When you have to explain it, it’s bad." –
              Cory House
            </p>
            <p className="mt-1 font-handwritten text-lg italic">
              "I'm not a great programmer; I'm just a good one with great
              habits." – Kent Beck
            </p>
          </div>

          {/* Right Section */}
          <div className="mt-8 md:mt-0 flex flex-col text-center -translate-x-20 items-center">
            <h2 className="text-2xl font-bold mb-4 -translate-x-9">
              CONTACT ME
            </h2>
            <div className="flex flex-col space-y-2 text-md">
              <div className="flex items-center space-x-2">
                <FaEnvelope />
                <span>arsh199965@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaPhone />
                <span>8800918649</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaLinkedin />
                <a
                  href="https://linkedin.com/in/arsh-ahmad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  linkedin.com/in/arsh-ahmad
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <FaGithub />
                <a
                  href="https://github.com/arsh199965"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  github.com/arsh199965
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white mt-5 pt-3">
          <p className="text-center text-sm">
            "It works on my machine." – Every developer ever
          </p>
          <p className="text-center text-xs mt-2">
            © 2024 Arsh Ahmad. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
});

export default Footer;
