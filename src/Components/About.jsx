import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const skills = [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Framer Motion",
    "Node.js",
    "MongoDB",
    "Firebase",
    "WordPress",
    "Figma to Code",
  ];

  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Column: Image & Experience Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-2/5 relative"
          >
            <div className="relative z-10 group">
              {/* Decorative Background Element */}
              <div className="absolute -top-6 -left-6 w-full h-full border-2 border-indigo-100 rounded-3xl z-0 transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2"></div>

              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800"
                  alt="[Your Name] - Web Developer"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>

              {/* Experience Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-6 -right-6 bg-indigo-600 text-white p-6 rounded-2xl shadow-xl z-20"
              >
                <p className="text-3xl font-black leading-none">2+</p>
                <p className="text-xs uppercase tracking-widest font-bold opacity-80">
                  Years of
                  <br />
                  Experience
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-3/5"
          >
            <h2 className="text-indigo-600 font-bold tracking-widest uppercase text-sm mb-3">
              About Me
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              I build websites that{" "}
              <span className="text-indigo-600">
                grow your business.
              </span>
            </h3>

            <p className="text-xl text-slate-700 font-medium mb-6">
              I'm [Your Name] — a Web Developer & Freelancer from [Your
              City], India, helping startups and small businesses turn their
              online presence into a customer-generating machine.
            </p>

            <div className="space-y-4 text-slate-600 mb-8 leading-relaxed">
              <p>
                What started as a curiosity about how lines of code transform
                into stunning visuals has now become my mission — to help
                businesses stand out online. I specialize in{" "}
                <strong>React, Next.js, and modern web technologies</strong>{" "}
                to build fast, responsive, and conversion-focused websites
                that don't just look great — they deliver real results.
              </p>
              <p>
                I don't believe in one-size-fits-all. Every business is
                unique, and so should be its website. From{" "}
                <strong>
                  e-commerce stores and landing pages to full-stack web
                  applications
                </strong>
                , I work closely with my clients to understand their goals and
                craft digital solutions that help them attract more customers,
                build trust, and scale faster.
              </p>
              <p>
                Currently pursuing my <strong>MCA</strong> while
                simultaneously scaling my freelance operations — because I
                believe the best way to learn is by building real products for
                real people.
              </p>
            </div>

            {/* Skills Mini-Grid */}
            <div className="flex flex-wrap gap-3 mb-10">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-slate-50 border border-slate-100 px-4 py-2 rounded-xl text-sm font-semibold text-slate-700 hover:bg-indigo-50 hover:border-indigo-200 hover:text-indigo-700 transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Stat Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {/* Education Card */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-indigo-50/50 border border-indigo-100">
                <div className="p-2 bg-white rounded-lg shadow-sm text-indigo-600">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 14l9-5-9-5-9 5 9 5z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Education</h4>
                  <p className="text-sm text-slate-600">
                    BSc Computer Science
                    <br />
                    (MCA Pursuing)
                  </p>
                </div>
              </div>

              {/* Projects Card */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-indigo-50/50 border border-indigo-100">
                <div className="p-2 bg-white rounded-lg shadow-sm text-indigo-600">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Projects</h4>
                  <p className="text-sm text-slate-600">
                    20+ Websites
                    <br />
                    Delivered Successfully
                  </p>
                </div>
              </div>

              {/* Satisfaction Card */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-indigo-50/50 border border-indigo-100">
                <div className="p-2 bg-white rounded-lg shadow-sm text-indigo-600">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Satisfaction</h4>
                  <p className="text-sm text-slate-600">
                    100% Client
                    <br />
                    Satisfaction Rate
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;