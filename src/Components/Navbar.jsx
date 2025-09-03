import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`sticky top-0 z-50 backdrop-blur-md transition-all ${
        scrolled ? "bg-white/90 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#"
          className="text-2xl font-bold text-indigo-600 hover:text-indigo-700 transition-colors"
        >
          <motion.span
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="inline-block"
          >
            Web<span className="text-gray-900">Spire</span>
          </motion.span>
        </a>
        <div className="md:flex space-x-8">
          {["Home", "projects", "services", "about", "process"].map(
            (item, i) => (
              <motion.a
                key={i}
                href={`#${item}`}
                whileHover={{ scale: 1.05, color: "#9333EA" }}
                transition={{ duration: 0.2 }}
                className="text-gray-700 hover:text-indigo-800 transition-colors hover:underline hover:underline-offset-4"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </motion.a>
            )
          )}
        </div>
        {/* CTA */}
        <Link
          to="contact"
          className="hidden md:block bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-full font-medium transform hover:scale-105 transition-all shadow-md hover:shadow-lg"
        >
          Get in Touch
        </Link>
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 hover:text-indigo-600 transition-colors"
        >
          <span className="material-symbols-outlined">
            {isOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white/95 shadow-lg backdrop-blur-md"
        >
          <div className="flex flex-col space-y-4 px-6 py-6">
            {["projects", "services", "about", "process", "contact"].map(
              (item, i) => (
                <motion.a
                  key={i}
                  href={`${item}`}
                  onClick={() => setIsOpen(false)}
                  whileTap={{ scale: 0.95 }}
                  className="text-gray-700 hover:text-indigo-600 transition-colors text-lg"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </motion.a>
              )
            )}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
