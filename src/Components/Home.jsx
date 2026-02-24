import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-[#f8fafc] overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[500px] h-[500px] bg-indigo-50 rounded-full blur-3xl opacity-50" />
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Left Column - Content */}
          <motion.div 
            className="lg:w-1/2 text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 
              variants={itemVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-6"
            >
              I build <span className="text-indigo-600">conversion-focused</span> websites.
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="text-lg md:text-xl text-slate-600 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Specializing in React development and UI/UX design to create 
              exceptional digital experiences that turn ideas into reality.
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <button className="w-full sm:w-auto px-10 py-4 bg-indigo-600 text-white font-bold rounded-2xl hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-200 hover:shadow-indigo-300 transform hover:-translate-y-1">
                View My Work
              </button>
              <button className="w-full sm:w-auto px-10 py-4 bg-white text-slate-900 font-bold rounded-2xl border border-slate-200 hover:border-indigo-600 transition-all transform hover:-translate-y-1">
                Let's Talk
              </button>
            </motion.div>
          </motion.div>

          {/* Right Column - The Image Block (Layout Kept Same, CSS Enhanced) */}
          <motion.div 
            className="lg:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="relative">
              {/* Abstract geometric background */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-3xl opacity-20 blur-2xl animate-pulse"></div>

              {/* Main image container */}
              <div className="relative bg-white rounded-3xl shadow-2xl p-3 border border-slate-100">
                <div className="rounded-2xl overflow-hidden bg-slate-50">
                  <div className="w-full h-72 md:h-96 lg:w-[500px] bg-gradient-to-br from-indigo-50 to-white flex items-center justify-center">
                    <div className="text-center">
                      <motion.div 
                        animate={{ y: [0, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                        className="inline-block p-5 bg-white rounded-2xl shadow-lg mb-4"
                      >
                        <svg className="h-12 w-12 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                      </motion.div>
                      <p className="text-slate-400 font-semibold uppercase tracking-widest text-xs">
                        Engineer // Designer
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <motion.div 
                animate={{ y: [0, 20, 0], rotate: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="absolute -top-6 -right-6 w-20 h-20 bg-indigo-600 rounded-2xl opacity-90 shadow-xl flex items-center justify-center text-white font-bold text-3xl"
              >
                JS
              </motion.div>
              
              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ repeat: Infinity, duration: 5, delay: 1 }}
                className="absolute -bottom-8 -left-8 w-16 h-16 bg-white rounded-full shadow-xl flex items-center justify-center border border-slate-100"
              >
                <div className="w-8 h-8 bg-indigo-100 rounded-full animate-ping" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;