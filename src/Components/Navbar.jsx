// import React, { useState, useEffect } from "react";
// import { Link } from "react-scroll";
// import { motion } from "framer-motion";

// const Navbar = () => {
//     const [scrolled, setScrolled] = useState(false);
//     const [isOpen, setIsOpen] = useState(false);

//     useEffect(() => {
//         const handleScroll = () => {
//             if (window.scrollY > 50) {
//                 setScrolled(true);
//             } else {
//                 setScrolled(false);
//             }
//         };

//         window.addEventListener("scroll", handleScroll);
//         return () => {
//             window.removeEventListener("scroll", handleScroll);
//         };
//     }, []);

//     const toggleMenu = () => {
//         setIsOpen(!isOpen);
//     };

//     const navLinks = [
//         { name: "Home", to: "hero" },
//         { name: "Projects", to: "projects" },
//         { name: "Services", to: "services" },
//         { name: "About", to: "about" },
//         { name: "Testimonials", to: "testimonials" },
//         { name: "Process", to: "process" },
//         { name: "Contact", to: "contact" },
//     ];

//     return (
//         <motion.nav
//             initial={{ y: -100 }}
//             animate={{ y: 0 }}
//             transition={{ duration: 0.5 }}
//             className={`sticky top-0 z-50 backdrop-blur-md transition-all py-5 ${
//                 scrolled ? "bg-white/90 shadow-md" : "bg-transparent"
//             }`}
//         >
//             <div className="container mx-auto px-4 flex justify-between items-center">
//                 <div className="text-xl font-bold text-primary">WebSpire</div>

//                 {/* Desktop Navigation */}
//                 <div className="hidden md:flex space-x-8">
//                     {navLinks.map((link) => (
//                         <Link
//                             key={link.name}
//                             to={link.to}
//                             spy={true}
//                             smooth={true}
//                             duration={500}
//                             className="text-dark hover:text-primary transition-colors cursor-pointer font-medium"
//                         >
//                             {link.name}
//                         </Link>
//                     ))}
//                 </div>

//                 {/* Mobile Menu Button */}
//                 <button
//                     className="md:hidden text-dark focus:outline-none"
//                     onClick={toggleMenu}
//                 >
//                     <svg
//                         className="w-6 h-6"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                         xmlns="http://www.w3.org/2000/svg"
//                     >
//                         {isOpen ? (
//                             <path
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 strokeWidth={2}
//                                 d="M6 18L18 6M6 6l12 12"
//                             />
//                         ) : (
//                             <path
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 strokeWidth={2}
//                                 d="M4 6h16M4 12h16M4 18h16"
//                             />
//                         )}
//                     </svg>
//                 </button>
//             </div>

//             {/* Mobile Navigation */}
//             {isOpen && (
//                 <div className="md:hidden bg-white shadow-lg">
//                     <div className="container mx-auto px-4 py-2 flex flex-col space-y-3">
//                         {navLinks.map((link) => (
//                             <Link
//                                 key={link.name}
//                                 to={link.to}
//                                 spy={true}
//                                 smooth={true}
//                                 duration={500}
//                                 className="text-dark hover:text-primary transition-colors cursor-pointer font-medium py-2"
//                                 onClick={toggleMenu}
//                             >
//                                 {link.name}
//                             </Link>
//                         ))}
//                     </div>
//                 </div>
//             )}
//         </motion.nav>
//     );
// };

// export default Navbar;

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Detect scroll to toggle background + shadow
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
                    className="text-2xl font-bold text-purple-600 hover:text-purple-700 transition-colors"
                >
                    <motion.span
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="inline-block"
                    >
                        Dev<span className="text-gray-900">Agency</span>
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
                                className="text-gray-700 hover:text-purple-600 transition-colors hover:underline hover:underline-offset-4"
                            >
                                {item.charAt(0).toUpperCase() + item.slice(1)}
                            </motion.a>
                        )
                    )}
                </div>
                {/* CTA */}
                <Link
                    to="contact"
                    className="hidden md:block bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full font-medium transform hover:scale-105 transition-all shadow-md hover:shadow-lg"
                >
                    Get in Touch
                </Link>
                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-gray-700 hover:text-purple-600 transition-colors"
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
                        {[
                            "projects",
                            "services",
                            "about",
                            "process",
                            "contact",
                        ].map((item, i) => (
                            <motion.a
                                key={i}
                                href={`${item}`}
                                onClick={() => setIsOpen(false)}
                                whileTap={{ scale: 0.95 }}
                                className="text-gray-700 hover:text-purple-600 transition-colors text-lg"
                            >
                                {item.charAt(0).toUpperCase() + item.slice(1)}
                            </motion.a>
                        ))}
                    </div>
                </motion.div>
            )}
        </motion.nav>
    );
}
