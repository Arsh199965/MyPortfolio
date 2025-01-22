import React, { useState, useEffect } from "react";
import {
  Code,
  Laptop,
  Brain,
  Sparkles,
  Rocket,
  ArrowRight,
} from "lucide-react";

const AboutMe = React.forwardRef((props, ref) => {
  const [activeTab, setActiveTab] = useState("story");
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsIntersecting(entry.isIntersecting),
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [ref]);

  const tabs = [
    {
      id: "story",
      label: "My Story",
      icon: Brain,
      content: (
        <div className="space-y-4 text-gray-300">
          <p className="leading-relaxed">
            I'm a passionate web developer and an aspiring machine learning engineer,
            driven by the art of creating modern, interactive digital
            experiences. My journey in tech has been fueled by curiosity and a
            relentless desire to innovate.
          </p>
          <p className="leading-relaxed">
            What started as a fascination with code has evolved into a mission
            to build digital solutions that make a real-world impact, one pixel
            at a time.
          </p>
        </div>
      ),
    },
    {
      id: "skills",
      label: "Expertise",
      icon: Code,
      content: (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { label: "React", level: 90 },
            { label: "Tailwind", level: 85 },
            { label: "JavaScript", level: 88 },
            { label: "TypeScript", level: 70 },
            { label: "Machine Learning", level: 50 },
            { label: "UI/UX", level: 80 },
          ].map((skill) => (
            <div key={skill.label} className="group">
              <div className="relative h-32 bg-gray-900/50 rounded-lg p-4 backdrop-blur-sm border border-gray-800/50 hover:border-customBlue/50 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-t from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
                <div className="relative h-full flex flex-col justify-between">
                  <span className="text-sm text-gray-400">{skill.label}</span>
                  <div className="w-full bg-gray-800 h-1 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-customBlue to-customPink transition-all duration-1000 ease-out"
                      style={{
                        width: isIntersecting ? `${skill.level}%` : "0%",
                      }}
                    />
                  </div>
                  <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-customBlue to-customPink">
                    {isIntersecting ? skill.level : 0}%
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ),
    },
    {
      id: "projects",
      label: "Experience",
      icon: Laptop,
      content: (
        <div className="space-y-6">
          {[
            {
              role: "Frontend Developer",
              project: "Employment Platform",
              description:
                "Led frontend development of a comprehensive job platform, implementing modern UI patterns and optimizing performance.",
            },
            {
              role: "Machine Learning Engineer",
              project: "Recommendation System",
              description:
                "Developed a recommendation system using ML techniques.",
            },
          ].map((exp, index) => (
            <div
              key={index}
              className="group relative bg-gray-900/50 rounded-lg p-6 backdrop-blur-sm border border-gray-800/50 hover:border-customBlue/50 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
              <div className="relative">
                <h4 className="text-lg font-semibold text-white mb-2">
                  {exp.role}
                </h4>
                <p className="text-sm text-customBlue mb-3">{exp.project}</p>
                <p className="text-gray-400">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      ),
    },
  ];

  return (
    <section
      ref={ref}
      className="relative bg-black text-white py-24 overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-customPink/20 to-transparent opacity-30" />
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-customPink/10 rounded-full w-64 h-64 animate-blob"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${Math.random() * 10 + 10}s`,
            }}
          />
        ))}
      </div>

      <div className="relative container mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 inline-flex items-center justify-center">
            <span className="bg-gradient-to-r font-extrabold from-customPink via-customRed to-customPink bg-clip-text text-transparent">
              About Me
            </span>
            <Sparkles className="w-6 h-6 ml-2 text-customPink animate-pulse" />
          </h2>
          <p className="text-gray-400 text-lg">
            Transforming ideas into elegant, interactive digital experiences
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-gray-900/50 backdrop-blur-sm rounded-lg p-1 border border-gray-800/50">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-customBlue/20 text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                <tab.icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={`transition-all duration-500 ${
                activeTab === tab.id
                  ? "opacity-100 transform translate-y-0"
                  : "opacity-0 absolute transform translate-y-4 pointer-events-none"
              }`}
            >
              {activeTab === tab.id && tab.content}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default AboutMe;
