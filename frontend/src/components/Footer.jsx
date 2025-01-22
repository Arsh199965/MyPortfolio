import React, { useState, useEffect } from "react";
import {
  Github,
  Mail,
  Linkedin,
  Phone,
  ArrowUpCircle,
  Sparkles,
  Heart,
  Code,
  Coffee,
  ExternalLink,
} from "lucide-react";

const Footer = React.forwardRef((props,ref) => {
  
  // Previous state and effects remain the same
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [quote, setQuote] = useState("I turn coffee into code");

  const quotes = [
    "I turn coffee into code",
    "Debug is not a bug's life",
    "404: Sleep not found",
    "While (alive) { code(); }",
    "CSS is my cardio",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setQuote((prev) => {
        const newQuotes = quotes.filter((q) => q !== prev);
        return newQuotes[Math.floor(Math.random() * newQuotes.length)];
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "arsh199965@gmail.com",
      href: "mailto:arsh199965@gmail.com",
      animation: "hover:scale-[1.02]",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8800918649",
      href: "tel:+918800918649",
      animation: "hover:scale-[1.02]",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/arsh-ahmad",
      href: "https://linkedin.com/in/arsh-ahmad",
      animation: "group-hover:translate-x-1",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/arsh199965",
      href: "https://github.com/arsh199965",
      animation: "group-hover:translate-x-1",
    },
  ];

  return (
    <footer ref={ref} className="relative bg-black text-gray-300 pt-24 pb-12 overflow-hidden">
      {/* Previous spotlight, floating code symbols, and gradient border remain the same */}
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 92, 246, 0.15), transparent 10%)`,
        }}
      />

      <div className="absolute inset-0 overflow-hidden">
        {["{ }", "< >", "//", "[]", "&&", "=>"].map((symbol, i) => (
          <div
            key={i}
            className="absolute text-purple-500/20 font-mono animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `1.5s`,
              fontSize: `${Math.random() * 20 + 10}px`,
            }}
          >
            {symbol}
          </div>
        ))}
      </div>

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-customPink to-transparent animate-gradient-x" />

      {/* Main content */}
      <div className="relative container mx-auto px-6">
        {/* Top section with animated quote */}
        <div className="flex justify-between items-center mb-20">
          <div className="group relative">
            <div className="flex items-center space-x-2">
              <Coffee className="w-6 h-6 text-customBlue animate-bounce" />
              <h2 className="text-xl font-mono bg-gradient-to-r from-customRed via-pink-400 to-customBlue bg-300% bg-clip-text text-transparent animate-gradient-x">
                {quote}
              </h2>
            </div>
            <Sparkles className="absolute -top-4 -right-4 w-6 h-6 text-customBlue opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          <button
            onClick={scrollToTop}
            className={`group transition-all duration-500 ease-in-out transform ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <ArrowUpCircle className="w-12 h-12 text-customBlue group-hover:text-white transform group-hover:-translate-y-2 transition-all duration-300" />
          </button>
        </div>

        {/* Grid section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
          {/* About section */}
          <div className="space-y-6 group">
            <h3 className="text-white text-xl font-semibold mb-8 relative">
              About Me
              <span className="absolute bottom-0 left-0 w-0 h-px bg-customBlue transition-all duration-300 group-hover:w-full" />
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Passionate developer crafting digital experiences with a touch of
              creativity and a sprinkle of animation magic. Always learning,
              forever coding.
            </p>
          </div>

          {/* Contact Links */}
          <div className="space-y-6">
            <h3 className="text-white text-xl font-semibold relative inline-block group">
              Get In Touch
              <span className="absolute bottom-0 left-0 w-0 h-px bg-customBlue transition-all duration-300 group-hover:w-full" />
            </h3>
            <div className="space-y-4">
              {contactLinks.map((contact) => (
                <a
                  key={contact.label}
                  href={contact.href}
                  target={
                    contact.label !== "Phone" && contact.label !== "Email"
                      ? "_blank"
                      : undefined
                  }
                  rel={
                    contact.label !== "Phone" && contact.label !== "Email"
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="group flex items-center space-x-3 p-3 rounded-lg hover:bg-purple-500/10 transition-all duration-300"
                >
                  <contact.icon className="w-5 h-5 text-customBlue transition-all duration-300" />
                  <div className="flex-1">
                    <div className="text-sm text-gray-500">{contact.label}</div>
                    <div
                      className={`text-gray-300 transition-all duration-300 ${contact.animation}`}
                    >
                      {contact.value}
                    </div>
                  </div>
                  {(contact.label === "LinkedIn" ||
                    contact.label === "GitHub") && (
                    <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-900/20 to-transparent animate-pulse" />
          <div className="relative border-t border-gray-800/50 pt-8">
            <div className="flex flex-col justify-between items-center space-y-4 md:space-y-0">
              <div className="text-sm flex items-center space-x-2">
                <Code className="w-4 h-4 text-customBlue" />
                <span>Made with</span>
                <Heart className="w-4 h-4 text-red-400 animate-pulse" />
                <span>© {new Date().getFullYear()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});

export default Footer;
