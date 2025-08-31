import React from "react";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: {
        problem:
          "Client needed a modern e-commerce solution with high conversion rates.",
        solution:
          "Built a responsive e-commerce platform with optimized checkout flow.",
        result:
          "Increased conversion rate by 35% and improved page load speed by 50%.",
      },
      tech: ["React", "Next.js", "Tailwind CSS", "Stripe"],
      image: "https://via.placeholder.com/600x400",
      demo: "#",
      github: "#",
    },
    {
      title: "SaaS Dashboard",
      description: {
        problem:
          "Startup needed a dashboard to visualize user analytics and metrics.",
        solution:
          "Created an intuitive dashboard with real-time data visualization.",
        result:
          "Reduced time spent on data analysis by 60% and improved user retention.",
      },
      tech: ["React", "Redux", "Chart.js", "Firebase"],
      image: "https://via.placeholder.com/600x400",
      demo: "#",
      github: "#",
    },
    {
      title: "Restaurant Booking App",
      description: {
        problem:
          "Local restaurant needed an online reservation system to reduce no-shows.",
        solution:
          "Developed a booking system with automated reminders and calendar integration.",
        result:
          "Decreased no-shows by 40% and increased table utilization by 25%.",
      },
      tech: ["React Native", "Node.js", "MongoDB", "Twilio"],
      image: "https://via.placeholder.com/600x400",
      demo: "#",
      github: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and
            approach to problem-solving.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-light rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <div className="mb-4">
                  <p className="font-medium text-gray-700 mb-1">Problem:</p>
                  <p className="text-gray-600 text-sm mb-2">
                    {project.description.problem}
                  </p>
                  <p className="font-medium text-gray-700 mb-1">Solution:</p>
                  <p className="text-gray-600 text-sm mb-2">
                    {project.description.solution}
                  </p>
                  <p className="font-medium text-gray-700 mb-1">Result:</p>
                  <p className="text-gray-600 text-sm">
                    {project.description.result}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-primary bg-opacity-10 text-primary text-xs font-medium px-2.5 py-0.5 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-3">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-purple-600 font-medium text-sm flex items-center"
                  >
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path
                        fillRule="evenodd"
                        d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-gray-900 font-medium text-sm flex items-center"
                  >
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-2 1.03-2.7-.1-.25-.45-1.3.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.34.2 2.39.1 2.64.64.7 1.03 1.6 1.03 2.7 0 3.84-2.34 4.68-4.57 4.93.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"
                      />
                    </svg>
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
