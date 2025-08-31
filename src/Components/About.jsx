import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get to know me, my journey, and what drives my passion for creating
            exceptional digital experiences.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="md:w-1/3 flex justify-center"
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-primary shadow-xl">
                <img
                  src="https://via.placeholder.com/400"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-secondary text-white rounded-full w-24 h-24 flex items-center justify-center shadow-lg">
                <span className="text-xl font-bold">2+ Yrs</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="md:w-2/3"
          >
            <h3 className="text-2xl font-bold mb-4">
              Frontend Developer & Aspiring Agency Founder
            </h3>
            <p className="text-gray-600 mb-4">
              Hi, I'm a passionate frontend developer with a keen eye for design
              and a commitment to creating websites that not only look great but
              also deliver results. With 2 years of experience in the field,
              I've worked on various commercial projects that have helped
              businesses grow their online presence.
            </p>
            <p className="text-gray-600 mb-4">
              My journey began with a fascination for how websites work, which
              led me to dive deep into HTML, CSS, and JavaScript. Over time, I
              expanded my skillset to include modern frameworks like React and
              Next.js, and I'm now on the path to becoming a full-stack
              developer as I prepare to launch my own agency.
            </p>
            <p className="text-gray-600 mb-6">
              When I'm not coding, you can find me exploring the latest design
              trends, experimenting with new technologies, or enjoying the
              outdoors. I'm constantly curious about how technology and design
              can intersect to solve real-world problems and help businesses
              thrive in the digital landscape.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-light p-4 rounded-lg">
                <h4 className="font-bold text-primary mb-2">Education</h4>
                <p className="text-gray-700">BSc in Computer Science</p>
                <p className="text-gray-600 text-sm">MCA Preparation</p>
              </div>
              <div className="bg-light p-4 rounded-lg">
                <h4 className="font-bold text-primary mb-2">Experience</h4>
                <p className="text-gray-700">Frontend Development</p>
                <p className="text-gray-600 text-sm">Freelance Projects</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
