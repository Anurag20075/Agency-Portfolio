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
            {/* Main Headline */}
            <motion.h1 
              variants={itemVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-4"
            >
              I build <span className="text-indigo-600">conversion-focused</span> websites.
            </motion.h1>

            {/* Subheading */}
            <motion.p 
              variants={itemVariants}
              className="text-lg md:text-xl text-indigo-600 font-semibold mb-6"
            >
              For agencies and SaaS companies that want measurable results.
            </motion.p>

            {/* Description */}
            <motion.p 
              variants={itemVariants}
              className="text-lg md:text-xl text-slate-600 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Specializing in React development and UI/UX design to create 
              exceptional digital experiences that turn ideas into reality.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12"
            >
              <button className="w-full sm:w-auto px-10 py-4 bg-indigo-600 text-white font-bold rounded-2xl hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-200 hover:shadow-indigo-300 transform hover:-translate-y-1 active:translate-y-0">
                See My Projects
              </button>
              <button className="w-full sm:w-auto px-10 py-4 bg-white text-slate-900 font-bold rounded-2xl border-2 border-slate-200 hover:border-indigo-600 hover:bg-indigo-50 transition-all transform hover:-translate-y-1 active:translate-y-0">
                Schedule a Call
              </button>
            </motion.div>

          </motion.div>

          {/* Right Column - Image (IMPROVED) */}
          <motion.div 
            className="lg:w-1/2 w-full flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {/* OPTION 1: 3D Perspective Website Mockup (Recommended) */}
            <div className="relative w-full max-w-lg perspective">
              {/* Glow background */}
              <div className="absolute -inset-8 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-3xl opacity-30 blur-3xl animate-pulse"></div>

              {/* Main card container with perspective */}
              <motion.div
                className="relative"
                whileHover={{ rotateY: 5, rotateX: -5 }}
                transition={{ type: "spring", stiffness: 100 }}
              >
                {/* Card */}
                <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100">
                  {/* Card header (browser-like) */}
                  <div className="bg-gradient-to-r from-slate-100 to-slate-50 px-6 py-4 border-b border-slate-200 flex items-center gap-3">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                    <div className="ml-4 text-xs text-slate-500 font-medium">yourportfolio.com</div>
                  </div>

                  {/* Main image content area */}
                  <div className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 aspect-video flex items-center justify-center relative overflow-hidden">
                    {/* Animated gradient overlay */}
                    <motion.div
                      className="absolute inset-0 opacity-40"
                      style={{
                        background: "radial-gradient(circle at 30% 50%, rgba(79, 70, 229, 0.3), transparent 50%)"
                      }}
                      animate={{
                        backgroundPosition: ["0% 0%", "100% 100%"],
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 8,
                        ease: "linear",
                      }}
                    />

                    {/* Floating image with better animation */}
                    <motion.div 
                      className="relative z-10"
                      animate={{ y: [0, -20, 0], scale: [1, 1.05, 1] }}
                      transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    >
                      <img 
                        src="https://i.pinimg.com/736x/77/b3/ab/77b3abd02c7e4079c91068d0204ed4b9.jpg" 
                        alt="Project Showcase" 
                        className="h-100 w-auto object-contain drop-shadow-2xl"
                      />
                    </motion.div>
                  </div>

                  {/* Card footer with stats */}
                  <div className="px-6 py-4 bg-gradient-to-r from-slate-50 to-slate-100/50 border-t border-slate-200 flex justify-between items-center">
                    <div className="text-center">
                      <p className="text-xs text-slate-500 uppercase tracking-wider">Performance</p>
                      <p className="text-lg font-bold text-indigo-600">98/100</p>
                    </div>
                    <div className="h-8 w-px bg-slate-200"></div>
                    <div className="text-center">
                      <p className="text-xs text-slate-500 uppercase tracking-wider">Load Time</p>
                      <p className="text-lg font-bold text-indigo-600">1.2s</p>
                    </div>
                    <div className="h-8 w-px bg-slate-200"></div>
                    <div className="text-center">
                      <p className="text-xs text-slate-500 uppercase tracking-wider">SEO Score</p>
                      <p className="text-lg font-bold text-indigo-600">100</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Tech Stack Badges */}
              <motion.div 
                animate={{ y: [0, 15, 0] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="absolute -top-6 -right-6 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl shadow-2xl px-5 py-3 text-white font-semibold z-20"
              >
                <div className="text-sm">React + Next.js</div>
              </motion.div>

              {/* Performance Badge */}
              {/* <motion.div 
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ repeat: Infinity, duration: 5 }}
                className="absolute -bottom-6 -left-6 bg-white rounded-full shadow-2xl w-20 h-20 flex flex-col items-center justify-center border-2 border-indigo-100 z-20"
              >
                <div className="text-3xl font-bold text-indigo-600">98</div>
                <div className="text-xs text-slate-600 font-semibold text-center">Lighthouse<br/>Score</div>
              </motion.div> */}
            </div>
          </motion.div>
        </div>

      
      </div>
    </section>
  );
};

export default Hero;