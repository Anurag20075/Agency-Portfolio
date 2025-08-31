import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import Projects from "./Projects";
import Services from "./Services";
import About from "./About";
import Testimonials from "./Testimonials";
import Process from "./Process";
import Contact from "./Contact";
import Footer from "./Footer";

const Hero = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-neutral-100 font-sans">
      <section id="hero" className="min-h-screen flex items-center pt-16 ">
        <div className="container mx-auto px-4 py-20">
          <div className="flex flex-col md:flex-row items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="md:w-1/2 mb-10 md:mb-0"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                We build fast, conversion-focused websites that turn visitors
                into clients.
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-lg">
                With 2 years of frontend development experience and exposure to
                commercial projects, I create digital experiences that drive
                results.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="bg-primary text-white font-medium py-3 px-8 rounded-lg shadow-lg hover:bg-blue-600 transition-colors cursor-pointer inline-block"
                >
                  Let's Work Together
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="md:w-1/2 flex justify-center"
            >
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 bg-primary rounded-full absolute -top-4 -right-4 z-0 opacity-20"></div>
                <div className="w-64 h-64 md:w-80 md:h-80 bg-secondary rounded-full absolute -bottom-4 -left-4 z-0 opacity-20"></div>
                <div className="relative z-10 bg-white rounded-2xl shadow-xl p-2 w-64 h-64 md:w-80 md:h-80 overflow-hidden">
                  <img
                    src="https://via.placeholder.com/400"
                    alt="Developer working"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              </div>
            </motion.div>
          </div>
          <Projects />
          <Services />
          <About />
          <Testimonials />
          <Process />
          <Contact />
          <Footer />
        </div>
      </section>
    </div>
  );
};

export default Hero;
