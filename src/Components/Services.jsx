import React from "react";
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      title: "Web Development",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      description: "Custom websites built with modern technologies that load fast and represent your brand professionally.",
      features: ["Responsive Design", "Next.js / React", "Performance Tuning"],
    },
    {
      title: "UI/UX Design",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6z" />
        </svg>
      ),
      description: "User-centered design solutions that create intuitive experiences and guide visitors toward conversion.",
      features: ["Wireframing", "Design Systems", "Prototyping"],
    },
    {
      title: "SEO & Speed",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      description: "Speed up your website to improve user experience, reduce bounce rates, and increase search rankings.",
      features: ["Code Optimization", "Core Web Vitals", "Caching"],
    },
    {
      title: "AI Solutions",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      description: "Leverage artificial intelligence to create smarter, more personalized user experiences.",
      features: ["Custom Chatbots", "Personalization", "Automation"],
    },
  ];

  const packages = [
    {
      name: "Starter",
      price: "$1,500",
      features: ["Custom Design", "Up to 5 Pages", "Mobile Responsive", "Basic SEO"],
      highlighted: false,
    },
    {
      name: "Professional",
      price: "$3,000",
      features: ["Everything in Starter", "CMS Integration", "Advanced SEO", "3 Months Support"],
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      features: ["Everything in Pro", "E-commerce Hub", "API Integration", "Priority Service"],
      highlighted: false,
    },
  ];

  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-indigo-600 font-bold tracking-widest uppercase text-sm mb-3">Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Service Offerings</h3>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            I don't just build websites; I build digital tools that solve business problems and generate revenue.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-indigo-500/5 transition-all group"
            >
              <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((f, i) => (
                  <li key={i} className="text-xs font-bold text-slate-400 flex items-center">
                    <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2" /> {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Pricing Section */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-slate-900">Project Packages</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className={`relative p-8 rounded-[2rem] transition-all ${
                pkg.highlighted 
                ? "bg-slate-900 text-white shadow-2xl scale-105 z-10" 
                : "bg-white text-slate-900 border border-slate-200"
              }`}
            >
              {pkg.highlighted && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest">
                  Most Popular
                </span>
              )}
              <h4 className={`text-xl font-bold mb-2 ${pkg.highlighted ? "text-indigo-400" : "text-slate-900"}`}>
                {pkg.name}
              </h4>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-4xl font-black">{pkg.price}</span>
                {pkg.price !== "Custom" && <span className="text-sm opacity-60">/project</span>}
              </div>
              <ul className="space-y-4 mb-10">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-sm">
                    <svg className={`w-5 h-5 mr-3 ${pkg.highlighted ? "text-indigo-400" : "text-indigo-600"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className={pkg.highlighted ? "text-slate-300" : "text-slate-600"}>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className={`w-full py-4 rounded-xl font-bold text-sm transition-all ${
                pkg.highlighted 
                ? "bg-indigo-600 hover:bg-indigo-500 text-white" 
                : "bg-slate-100 hover:bg-slate-200 text-slate-900"
              }`}>
                Start Project
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;