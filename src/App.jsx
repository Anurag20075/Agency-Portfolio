import React from "react";
import { HashRouter as Router } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Home"; // Assuming this is your main Hero
import Projects from "./Components/Projects";
import Services from "./Components/Services";
import About from "./Components/About";
import Testimonials from "./Components/Testimonials";
import Process from "./Components/Process";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <Router>
      <div className="bg-white selection:bg-indigo-100 selection:text-indigo-900">
        <Navbar />
        
        {/* All sections stacked for smooth scrolling */}
        <main>
          <Hero />
          <Services />
          <Projects />
          <About />
          <Process />
          <Testimonials />
          <Contact />
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;