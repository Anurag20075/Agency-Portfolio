import React from "react";
import { motion } from "framer-motion";

const Process = () => {
  const processSteps = [
    {
      title: "Discovery",
      description: "Understanding your business goals, target audience, and project requirements.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
    },
    {
      title: "Design",
      description: "Creating wireframes, mockups, and prototypes that align with your vision.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      ),
    },
    {
      title: "Development",
      description: "Bringing the design to life with clean, efficient code and modern technologies.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      title: "Launch",
      description: "Deploying your website, optimizing for performance, and providing support.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  // Animation Variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  };

  const stepVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="process" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">My Process</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            A transparent and results-driven workflow designed to take your idea from concept to a high-performing reality.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
        >
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              variants={stepVariants}
              whileHover={{ y: -10 }}
              className="relative group text-center lg:text-left"
            >
              {/* Step Number Background */}
              <span className="absolute -top-6 left-1/2 lg:left-0 -translate-x-1/2 lg:translate-x-0 text-8xl font-black text-slate-200/50 select-none z-0">
                0{index + 1}
              </span>

              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-2xl bg-white text-indigo-600 shadow-xl group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                  {step.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-slate-900">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Final CTA Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-24 p-1 rounded-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 max-w-4xl mx-auto shadow-2xl"
        >
          <div className="bg-white rounded-[22px] p-10 text-center">
            <h3 className="text-3xl font-bold mb-4 text-slate-900">Ready to build something great?</h3>
            <p className="text-slate-600 mb-8 text-lg max-w-xl mx-auto">
              I'm currently accepting new projects and would love to hear about yours.
            </p>
            <button className="bg-slate-900 text-white font-semibold py-4 px-10 rounded-xl hover:bg-indigo-600 transform transition-all active:scale-95 shadow-lg">
              Get a Free Consultation
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;