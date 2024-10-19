import { useRef } from "react";

export default function Projects() {
  const carouselRef = useRef(null);

  const handleScroll = (direction) => {
    if (direction === "left") {
      carouselRef.current.scrollBy({
        left: -300, // Adjust the scroll distance as per your need
        behavior: "smooth",
      });
    } else {
      carouselRef.current.scrollBy({
        left: 300, // Adjust the scroll distance as per your need
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="bg-black h-screen flex flex-col items-center justify-center">
      {/* Title */}
      <h1 className="text-white text-8xl font-bold mb-10">PROJECTS</h1>

      {/* Carousel Wrapper */}
      <div className="relative w-full flex items-center justify-center">
        {/* Left Arrow */}
        <button
          className="absolute left-0 bg-gray-500 hover:bg-gray-600 text-white rounded-full p-3"
          onClick={() => handleScroll("left")}
        >
          &#8249;
        </button>

        {/* Carousel Section */}
        <div
          className="flex overflow-x-auto space-x-10 w-[80%] h-[30rem] scrollbar-hide"
          ref={carouselRef}
        >
          {/* Placeholder left */}
          <div className="bg-gray-700 rounded-lg w-64 h-full flex-shrink-0"></div>

          {/* Main Project Card */}
          <div className="bg-gray-700 rounded-lg w-96 h-full flex items-center justify-center flex-shrink-0">
            <h2 className="text-white text-2xl font-bold">CAREER CONQUEST</h2>
          </div>

          {/* Placeholder right */}
          <div className="bg-gray-700 rounded-lg w-64 h-full flex-shrink-0"></div>

          {/* Additional placeholders if needed */}
          <div className="bg-gray-700 rounded-lg w-64 h-full flex-shrink-0"></div>
          <div className="bg-gray-700 rounded-lg w-64 h-full flex-shrink-0"></div>
        </div>

        {/* Right Arrow */}
        <button
          className="absolute right-0 bg-gray-500 hover:bg-gray-600 text-white rounded-full p-3"
          onClick={() => handleScroll("right")}
        >
          &#8250;
        </button>
      </div>
    </div>
  );
}
