import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: "Home", target: "/" },
    { name: "Projects", target: "projects" },
    { name: "Services", target: "services" },
    { name: "Contact", target: "contact" },
  ];

  // Animation Variants
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  };

  return (
    <footer className="bg-slate-900 text-gray-300 py-12 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          
          {/* Brand Section */}
          <motion.div {...fadeInUp}>
            <Link to="/" smooth={true} className="cursor-pointer">
              <div className="text-2xl font-bold mb-4">
                <span className="text-indigo-500">Web</span>
                <span className="text-white">Spire</span>
              </div>
            </Link>
            <p className="text-lg leading-relaxed max-w-sm">
              Building fast, conversion-focused websites that turn visitors into clients.
            </p>
          </motion.div>

          {/* Navigation Links */}
          <motion.div 
            {...fadeInUp} 
            transition={{ ...fadeInUp.transition, delay: 0.2 }}
            className="flex flex-col"
          >
            <h3 className="text-white text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.target}
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="hover:text-indigo-400 transition-colors cursor-pointer text-lg"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* CTA Section */}
          <motion.div 
            {...fadeInUp} 
            transition={{ ...fadeInUp.transition, delay: 0.4 }}
          >
            <h3 className="text-white text-xl font-semibold mb-6">Ready to start?</h3>
            <Link
              to="contact"
              smooth={true}
              className="inline-block bg-indigo-600 text-white font-medium py-3 px-8 rounded-full hover:bg-indigo-500 transition-all cursor-pointer shadow-lg hover:shadow-indigo-500/20"
            >
              Get In Touch
            </Link>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 pt-8 border-t border-slate-800 text-center text-sm"
        >
          <p>&copy; {currentYear} DevPortfolio. Crafted with passion.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;