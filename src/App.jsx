import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Home";
import Projects from "./Components/Projects";
import Services from "./Components/Services";
import About from "./Components/About";
import Testimonials from "./Components/Testimonials";
import Process from "./Components/Process";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
// import HeroPage from "./Components/Hero";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <Hero />
                        </>
                    }
                />
                <Route path="/home" element={<Hero />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/services" element={<Services />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/process" element={<Process />} />
            </Routes>
        </Router>
        // <Router>
        //   <Routes>
        //     <Route path="/" element={<HeroPage />} />
        //   </Routes>
        //   <Footer />
        // </Router>
    );
}

export default App;
