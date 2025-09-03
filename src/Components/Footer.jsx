import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white py-12 border-t">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-6 md:mb-0"
          >
            <div className="text-2xl font-bold text-indigo-600 hover:text-indigo-700 transition-colors mb-2">
              <motion.span
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="inline-block"
              >
                Web<span className="text-indigo-900">Spire</span>
              </motion.span>
            </div>
            <p className="text-3xl text-black max-w-md">
              Building fast, conversion-focused websites that turn visitors into
              clients.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-6 md:mb-0"
          >
            <h3 className="text-2xl text-black  font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="text-black text-xl font-semibold  transition-colors cursor-pointer"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="projects"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="text-black text-xl font-semibold  transition-colors cursor-pointer"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="services"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="text-black text-xl font-semibold  transition-colors cursor-pointer"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="text-black text-xl font-semibold  transition-colors cursor-pointer"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl text-black font-semibold mb-4">
              Let's Connect
            </h3>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              className="inline-block bg-primary text-black text-xl font-medium py-2 px-6 rounded-lg hover:bg-blue-600 hover:text-white transition-colors cursor-pointer shadow-md hover:shadow-lg"
            >
              Get In Touch
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="  mt-8 pt-8 text-center text-indigo-400"
        >
          <p>&copy; {currentYear} DevPortfolio. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
