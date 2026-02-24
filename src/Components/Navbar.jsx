import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Change background on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // The Magic Function: Scrolls to ID without breaking the URL
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      // Offset for the fixed navbar (adjust 80 to your navbar height)
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsOpen(false); // Close mobile menu
  };

  const navLinks = ["projects", "services", "about", "process"];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 shadow-md backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo - Scrolls back to top */}
        <a 
          href="#/" 
          onClick={(e) => scrollToSection(e, "home")}
          className="text-2xl font-bold text-indigo-600"
        >
          Web<span className="text-gray-900">Spire</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={(e) => scrollToSection(e, item)}
              className="text-gray-700 font-medium capitalize hover:text-indigo-600 transition-colors"
            >
              {item}
            </a>
          ))}
          
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, "contact")}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-full font-medium transition-all"
          >
            Get in Touch
          </a>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-700">
          <span className="material-symbols-outlined text-3xl">
            {isOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t overflow-hidden"
          >
            <div className="flex flex-col space-y-4 px-8 py-6">
              {navLinks.map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  onClick={(e) => scrollToSection(e, item)}
                  className="text-gray-700 text-lg capitalize font-medium"
                >
                  {item}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, "contact")}
                className="text-indigo-600 font-bold text-lg"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}