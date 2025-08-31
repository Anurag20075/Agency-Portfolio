import React from "react";
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      title: "Website Development",
      description:
        "Custom websites built with modern technologies that load fast, convert visitors, and represent your brand professionally.",
      features: [
        "Responsive Design",
        "SEO Optimization",
        "Performance Tuning",
        "Cross-browser Compatibility",
      ],
    },
    {
      title: "UI/UX Design",
      description:
        "User-centered design solutions that create intuitive experiences and guide visitors toward conversion.",
      features: [
        "User Research",
        "Wireframing",
        "Prototyping",
        "Design Systems",
      ],
    },
    {
      title: "Performance Optimization",
      description:
        "Speed up your website to improve user experience, reduce bounce rates, and increase search rankings.",
      features: [
        "Code Optimization",
        "Image Optimization",
        "Caching Strategies",
        "CDN Implementation",
      ],
    },
    {
      title: "AI-driven Enhancements",
      description:
        "Leverage artificial intelligence to create smarter, more personalized user experiences.",
      features: [
        "Chatbots",
        "Personalization Engines",
        "Content Generation",
        "Predictive Analytics",
      ],
    },
  ];

  const packages = [
    {
      name: "Starter",
      price: "$1,500",
      features: [
        "Custom Design",
        "Up to 5 Pages",
        "Mobile Responsive",
        "Contact Form",
        "Basic SEO",
      ],
      highlighted: false,
    },
    {
      name: "Professional",
      price: "$3,000",
      features: [
        "Everything in Starter",
        "Up to 10 Pages",
        "CMS Integration",
        "Advanced SEO",
        "Performance Optimization",
        "3 Months Support",
      ],
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "Custom Quote",
      features: [
        "Everything in Professional",
        "Unlimited Pages",
        "E-commerce Functionality",
        "Custom Features",
        "API Integration",
        "6 Months Support",
        "Priority Service",
      ],
      highlighted: false,
    },
  ];

  return (
    <section id="services" className="py-20 bg-light">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What I Offer</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Outcome-driven solutions tailored to your business needs, not just
            technical services.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-bold mb-3 text-primary">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-secondary mr-2 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl font-bold mb-4">Service Packages</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Transparent pricing for projects of all sizes. Choose the package
            that fits your needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`rounded-xl overflow-hidden shadow-lg ${
                pkg.highlighted ? "ring-2 ring-primary transform scale-105" : ""
              }`}
            >
              <div
                className={`p-6 ${
                  pkg.highlighted ? "bg-primary text-white" : "bg-white"
                }`}
              >
                <h3 className="text-xl font-bold mb-2">{pkg.name}</h3>
                <p
                  className={`text-2xl font-bold mb-4 ${
                    pkg.highlighted ? "text-white" : "text-primary"
                  }`}
                >
                  {pkg.price}
                </p>
              </div>
              <div className="bg-white p-6">
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-secondary mr-2 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-2 px-4 rounded-lg font-medium ${
                    pkg.highlighted
                      ? "bg-primary text-white hover:bg-purple-600"
                      : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                  } transition-colors`}
                >
                  Get Started
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
