import React from "react";
import Projects from "./Projects";
import Services from "./Services";
import About from "./About";
import Testimonials from "./Testimonials";
import Process from "./Process";
import Contact from "./Contact";
import Footer from "./Footer";
const Hero = () => {
  return (
    <div className="min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left Column - Text Content */}
          <div className="md:w-1/2 mb-12 md:mb-0 md:pr-12">
            {/* Headline with fade-in animation */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight mb-6 animate-fade-in">
              I build fast, conversion-focused websites that turn ideas into
              reality.
            </h1>

            {/* Subtext with slide-up animation */}
            <p className="text-lg md:text-xl text-gray-600 mb-8 animate-slide-up">
              Specializing in frontend development, React, and UI/UX design to
              create exceptional digital experiences.
            </p>

            {/* CTA Buttons with fade-in animation */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in animation-delay-300">
              <button className="px-8 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 hover:scale-105">
                View My Work
              </button>
              <button className="px-8 py-3 bg-white text-indigo-600 font-medium rounded-lg border-2 border-indigo-600 hover:bg-indigo-50 transition-colors duration-300">
                Hire Me
              </button>
            </div>
          </div>

          {/* Right Column - Image/Illustration */}
          <div className="md:w-1/2 flex justify-center animate-fade-in animation-delay-500">
            <div className="relative">
              {/* Abstract geometric background */}
              <div className="absolute -inset-4 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-2xl opacity-20 blur-xl"></div>

              {/* Main image container */}
              <div className="relative bg-white rounded-2xl shadow-xl p-2">
                <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden">
                  {/* Placeholder for actual image */}
                  <div className="w-full h-64 md:h-80 lg:h-96 bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center">
                    <div className="text-center">
                      <div className="inline-block p-4 bg-white rounded-full shadow-md mb-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-12 w-12 text-indigo-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                          />
                        </svg>
                      </div>
                      <p className="text-gray-700 font-medium">
                        Professional Portfolio Image
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements for visual interest */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-indigo-500 rounded-lg opacity-80 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-purple-500 rounded-full opacity-80 animate-pulse animation-delay-1000"></div>
            </div>
          </div>
        </div>
        <Projects />
        <Services />
        <About />
        <Testimonials />
        <Process />
        <Contact />
        <Footer />
      </div>

      {/* Custom animation styles */}
      <style jsx global>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
        }

        .animation-delay-300 {
          animation-delay: 0.3s;
          opacity: 0;
        }

        .animation-delay-500 {
          animation-delay: 0.5s;
          opacity: 0;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </div>
  );
};

export default Hero;
