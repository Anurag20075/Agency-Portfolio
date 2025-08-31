function HeroPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-neutral-100 font-sans">
      {/* Navigation */}
      <nav className="absolute w-full bg-white bg-opacity-95 shadow-sm z-50 py-4 backdrop-blur-sm">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <a
            href="#"
            className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 transition-all duration-300"
          >
            Anurag<span className="text-neutral-800">.</span>
          </a>

          <div className="hidden md:flex space-x-8 items-center">
            <a
              href="#home"
              className="hover:text-purple-600 transition-colors duration-300 relative group"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="#projects"
              className="hover:text-purple-600 transition-colors duration-300 relative group"
            >
              Projects
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="#services"
              className="hover:text-purple-600 transition-colors duration-300 relative group"
            >
              Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="#about"
              className="hover:text-purple-600 transition-colors duration-300 relative group"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="#contact"
              className="px-6 py-2 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-md hover:from-purple-600 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
            >
              Contact
            </a>
          </div>

          <button className="md:hidden p-2 rounded-full hover:bg-neutral-100 transition-colors duration-300">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden relative"
      >
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-100 rounded-full opacity-50 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-200 rounded-full opacity-50 blur-3xl"></div>
        <div className="container mx-auto px-4 relative">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-3/5 mb-10 md:mb-0">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 tracking-tight">
                I build{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-purple-700">
                  fast, conversion-focused
                </span>{" "}
                websites that turn visitors into clients.
              </h1>
              <p className="text-neutral-700 text-xl mb-8 max-w-2xl">
                With 2 years of frontend development experience and exposure to
                commercial projects, I craft websites that help businesses grow
                and succeed in the digital landscape.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-md text-lg font-medium hover:from-purple-600 hover:to-purple-700 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                Let's Work Together
                <span className="material-symbols-outlined ml-2 animate-pulse">
                  arrow_forward
                </span>
              </a>
            </div>
            <div className="md:w-2/5">
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full mx-auto overflow-hidden border-4 border-white shadow-xl transform transition-transform duration-500 hover:scale-105">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
                    alt="Anurag portrait"
                    className="w-full h-full object-cover"
                    keywords="developer, professional, portrait, tech professional"
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg animate-pulse">
                  <span className="text-sm text-center">
                    Available for projects
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-20 bg-gradient-to-br from-neutral-50 to-neutral-100 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-80 h-80 bg-purple-100 rounded-full opacity-30 blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="container mx-auto px-4 relative">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-center tracking-tight">
            Featured Projects
          </h2>
          <p className="text-neutral-700 text-xl text-center max-w-2xl mx-auto mb-16">
            A selection of my recent work showcasing my expertise in building
            modern, responsive, and engaging web applications.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="relative h-56 bg-neutral-200 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
                  alt="E-commerce Project"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  keywords="e-commerce, website, responsive design, frontend"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">E-commerce Platform</h3>
                <p className="text-neutral-700 mb-4">
                  <strong>Problem:</strong> Client needed a modern online store
                  with seamless checkout.
                  <br />
                  <strong>Solution:</strong> Built a responsive e-commerce site
                  with optimized user journey.
                  <br />
                  <strong>Result:</strong> 40% increase in conversion rate
                  within first month.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-gradient-to-r from-purple-50 to-purple-100 text-purple-700 rounded-full text-sm">
                    React
                  </span>
                  <span className="px-3 py-1 bg-gradient-to-r from-purple-50 to-purple-100 text-purple-700 rounded-full text-sm">
                    Next.js
                  </span>
                  <span className="px-3 py-1 bg-gradient-to-r from-purple-50 to-purple-100 text-purple-700 rounded-full text-sm">
                    Tailwind
                  </span>
                </div>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="flex items-center text-purple-600 hover:text-purple-700 transition-colors duration-300 font-medium group"
                  >
                    <span className="material-symbols-outlined mr-1 group-hover:translate-x-1 transition-transform duration-300">
                      visibility
                    </span>{" "}
                    Live Demo
                  </a>
                  <a
                    href="#"
                    className="flex items-center text-neutral-700 hover:text-neutral-900 transition-colors duration-300 font-medium group"
                  >
                    <i className="fa-brands fa-github mr-2 group-hover:rotate-12 transition-transform duration-300"></i>{" "}
                    GitHub
                  </a>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="relative h-56 bg-neutral-200 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
                  alt="SaaS Dashboard"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  keywords="SaaS, dashboard, UI/UX, data visualization"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">SaaS Dashboard</h3>
                <p className="text-neutral-700 mb-4">
                  <strong>Problem:</strong> SaaS company needed intuitive
                  analytics dashboard.
                  <br />
                  <strong>Solution:</strong> Designed data-rich yet
                  user-friendly interface with real-time updates.
                  <br />
                  <strong>Result:</strong> Improved user engagement and reduced
                  support tickets by 30%.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-gradient-to-r from-purple-50 to-purple-100 text-purple-700 rounded-full text-sm">
                    React
                  </span>
                  <span className="px-3 py-1 bg-gradient-to-r from-purple-50 to-purple-100 text-purple-700 rounded-full text-sm">
                    TypeScript
                  </span>
                  <span className="px-3 py-1 bg-gradient-to-r from-purple-50 to-purple-100 text-purple-700 rounded-full text-sm">
                    ChartJS
                  </span>
                </div>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="flex items-center text-purple-600 hover:text-purple-700 transition-colors duration-300 font-medium group"
                  >
                    <span className="material-symbols-outlined mr-1 group-hover:translate-x-1 transition-transform duration-300">
                      visibility
                    </span>{" "}
                    Live Demo
                  </a>
                  <a
                    href="#"
                    className="flex items-center text-neutral-700 hover:text-neutral-900 transition-colors duration-300 font-medium group"
                  >
                    <i className="fa-brands fa-github mr-2 group-hover:rotate-12 transition-transform duration-300"></i>{" "}
                    GitHub
                  </a>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="relative h-56 bg-neutral-200 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1481487196290-c152efe083f5"
                  alt="Portfolio Website"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  keywords="portfolio, personal website, responsive design"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">AI-Enhanced Blog</h3>
                <p className="text-neutral-700 mb-4">
                  <strong>Problem:</strong> Content creator needed modern blog
                  with AI features.
                  <br />
                  <strong>Solution:</strong> Implemented clean design with
                  AI-powered content recommendations.
                  <br />
                  <strong>Result:</strong> 65% increase in average session
                  duration and higher engagement.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-gradient-to-r from-purple-50 to-purple-100 text-purple-700 rounded-full text-sm">
                    Next.js
                  </span>
                  <span className="px-3 py-1 bg-gradient-to-r from-purple-50 to-purple-100 text-purple-700 rounded-full text-sm">
                    Tailwind
                  </span>
                  <span className="px-3 py-1 bg-gradient-to-r from-purple-50 to-purple-100 text-purple-700 rounded-full text-sm">
                    OpenAI
                  </span>
                </div>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="flex items-center text-purple-600 hover:text-purple-700 transition-colors duration-300 font-medium group"
                  >
                    <span className="material-symbols-outlined mr-1 group-hover:translate-x-1 transition-transform duration-300">
                      visibility
                    </span>{" "}
                    Live Demo
                  </a>
                  <a
                    href="#"
                    className="flex items-center text-neutral-700 hover:text-neutral-900 transition-colors duration-300 font-medium group"
                  >
                    <i className="fa-brands fa-github mr-2 group-hover:rotate-12 transition-transform duration-300"></i>{" "}
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="#"
              className="inline-flex items-center text-purple-600 hover:text-purple-700 transition-colors duration-300 font-medium text-lg group"
            >
              View all projects{" "}
              <span className="material-symbols-outlined ml-1 group-hover:translate-x-2 transition-transform duration-300">
                arrow_forward
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 relative overflow-hidden border">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100 rounded-full opacity-30 blur-3xl translate-y-1/2 -translate-x-1/3"></div>
        <div className="container mx-auto px-4 relative">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-center tracking-tight">
            What I Offer
          </h2>
          <p className="text-neutral-700 text-xl text-center max-w-2xl mx-auto mb-16">
            I provide end-to-end solutions to help businesses establish a strong
            online presence and achieve their digital goals.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-neutral-100 transform hover:-translate-y-2 group">
              <span className="material-symbols-outlined text-5xl text-purple-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                computer
              </span>
              <h3 className="text-2xl font-bold mb-4">Website Development</h3>
              <p className="text-neutral-700 mb-4">
                Custom, responsive websites built with modern technologies that
                load fast and convert visitors into customers.
              </p>
              <div className="mt-6 pt-6 border-t border-neutral-100">
                <p className="font-medium text-lg">Starting at $1,500</p>
                <p className="text-sm text-neutral-600">
                  Includes responsive design, SEO setup, and basic analytics
                </p>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-neutral-100 transform hover:-translate-y-2 group">
              <span className="material-symbols-outlined text-5xl text-purple-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                palette
              </span>
              <h3 className="text-2xl font-bold mb-4">UI/UX Design</h3>
              <p className="text-neutral-700 mb-4">
                User-centered design that creates intuitive, engaging
                experiences to increase conversion rates and customer
                satisfaction.
              </p>
              <div className="mt-6 pt-6 border-t border-neutral-100">
                <p className="font-medium text-lg">Starting at $1,200</p>
                <p className="text-sm text-neutral-600">
                  Includes wireframes, prototypes, and user testing
                </p>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-neutral-100 transform hover:-translate-y-2 group">
              <span className="material-symbols-outlined text-5xl text-purple-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                speed
              </span>
              <h3 className="text-2xl font-bold mb-4">
                Performance Optimization
              </h3>
              <p className="text-neutral-700 mb-4">
                Speed up your website, improve Core Web Vitals, and enhance SEO
                rankings to drive more organic traffic.
              </p>
              <div className="mt-6 pt-6 border-t border-neutral-100">
                <p className="font-medium text-lg">Starting at $800</p>
                <p className="text-sm text-neutral-600">
                  Includes performance audit, optimizations, and before/after
                  reports
                </p>
              </div>
            </div>

            {/* Service 4 */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-neutral-100 transform hover:-translate-y-2 group">
              <span className="material-symbols-outlined text-5xl text-purple-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                smart_toy
              </span>
              <h3 className="text-2xl font-bold mb-4">
                AI-Driven Enhancements
              </h3>
              <p className="text-neutral-700 mb-4">
                Integrate AI technologies to personalize user experiences,
                automate tasks, and provide smart recommendations.
              </p>
              <div className="mt-6 pt-6 border-t border-neutral-100">
                <p className="font-medium text-lg">Starting at $1,800</p>
                <p className="text-sm text-neutral-600">
                  Includes AI integration, training, and performance monitoring
                </p>
              </div>
            </div>

            {/* Service 5 */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-neutral-100 transform hover:-translate-y-2 group">
              <span className="material-symbols-outlined text-5xl text-purple-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                shopping_cart
              </span>
              <h3 className="text-2xl font-bold mb-4">E-commerce Solutions</h3>
              <p className="text-neutral-700 mb-4">
                Create seamless online shopping experiences with secure payment
                gateways and inventory management systems.
              </p>
              <div className="mt-6 pt-6 border-t border-neutral-100">
                <p className="font-medium text-lg">Starting at $2,500</p>
                <p className="text-sm text-neutral-600">
                  Includes product setup, payment integration, and basic
                  training
                </p>
              </div>
            </div>

            {/* Service 6 */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-neutral-100 transform hover:-translate-y-2 group">
              <span className="material-symbols-outlined text-5xl text-purple-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                landscape
              </span>
              <h3 className="text-2xl font-bold mb-4">Maintenance & Support</h3>
              <p className="text-neutral-700 mb-4">
                Keep your website running smoothly with regular updates,
                security patches, and technical support.
              </p>
              <div className="mt-6 pt-6 border-t border-neutral-100">
                <p className="font-medium text-lg">Starting at $300/month</p>
                <p className="text-sm text-neutral-600">
                  Includes regular backups, updates, and priority support
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Plan Section */}

        <div className="mt-16">
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Service Packages
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Basic Package */}
              <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100 hover:shadow-lg transition-shadow">
                <h4 className="text-xl font-bold mb-2">Basic</h4>
                <p className="text-gray-600 mb-6">
                  Perfect for small businesses just starting online.
                </p>
                <p className="text-3xl font-bold mb-6">$1,499</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <span className="material-symbols-outlined text-purple-600 mr-2">
                      check
                    </span>
                    5-page responsive website
                  </li>
                  <li className="flex items-start">
                    <span className="material-symbols-outlined text-purple-600 mr-2">
                      check
                    </span>
                    Basic SEO setup
                  </li>
                  <li className="flex items-start">
                    <span className="material-symbols-outlined text-purple-600 mr-2">
                      check
                    </span>
                    Contact form integration
                  </li>
                  <li className="flex items-start">
                    <span className="material-symbols-outlined text-purple-600 mr-2">
                      check
                    </span>
                    Mobile optimization
                  </li>
                </ul>
                <a
                  href="#contact"
                  className="block text-center bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-3 px-6 rounded-lg transition-colors"
                >
                  Get Started
                </a>
              </div>

              {/* Pro Package */}
              <div className="bg-white rounded-xl shadow-md p-8 border border-purple-200 ring-2 ring-purple-500 hover:shadow-lg transition-shadow relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
                <h4 className="text-xl font-bold mb-2">Professional</h4>
                <p className="text-gray-600 mb-6">
                  Comprehensive solution for established businesses.
                </p>
                <p className="text-3xl font-bold mb-6">$3,499</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <span className="material-symbols-outlined text-purple-600 mr-2">
                      check
                    </span>
                    Up to 10-page custom website
                  </li>
                  <li className="flex items-start">
                    <span className="material-symbols-outlined text-purple-600 mr-2">
                      check
                    </span>
                    Advanced SEO optimization
                  </li>
                  <li className="flex items-start">
                    <span className="material-symbols-outlined text-purple-600 mr-2">
                      check
                    </span>
                    CMS integration
                  </li>
                  <li className="flex items-start">
                    <span className="material-symbols-outlined text-purple-600 mr-2">
                      check
                    </span>
                    Performance optimization
                  </li>
                  <li className="flex items-start">
                    <span className="material-symbols-outlined text-purple-600 mr-2">
                      check
                    </span>
                    Basic analytics setup
                  </li>
                </ul>
                <a
                  href="#contact"
                  className="block text-center bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
                >
                  Get Started
                </a>
              </div>

              {/* Premium Package */}
              <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100 hover:shadow-lg transition-shadow">
                <h4 className="text-xl font-bold mb-2">Enterprise</h4>
                <p className="text-gray-600 mb-6">
                  All-inclusive solution with advanced features.
                </p>
                <p className="text-3xl font-bold mb-6">$7,999</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <span className="material-symbols-outlined text-purple-600 mr-2">
                      check
                    </span>
                    Unlimited pages
                  </li>
                  <li className="flex items-start">
                    <span className="material-symbols-outlined text-purple-600 mr-2">
                      check
                    </span>
                    E-commerce functionality
                  </li>
                  <li className="flex items-start">
                    <span className="material-symbols-outlined text-purple-600 mr-2">
                      check
                    </span>
                    Custom animations
                  </li>
                  <li className="flex items-start">
                    <span className="material-symbols-outlined text-purple-600 mr-2">
                      check
                    </span>
                    AI chatbot integration
                  </li>
                  <li className="flex items-start">
                    <span className="material-symbols-outlined text-purple-600 mr-2">
                      check
                    </span>
                    3 months of maintenance
                  </li>
                </ul>
                <a
                  href="#contact"
                  className="block text-center bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-3 px-6 rounded-lg transition-colors"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 bg-gradient-to-br from-neutral-50 to-neutral-100 relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-80 h-80 bg-purple-100 rounded-full opacity-30 blur-3xl -translate-y-1/2 -translate-x-1/3"></div>
        <div className="container mx-auto px-4 relative">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/5 mb-10 md:mb-0">
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-xl overflow-hidden border-4 border-white shadow-xl transform transition-all duration-500 hover:scale-105 hover:rotate-2">
                  <img
                    src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6"
                    alt="Anurag working"
                    className="w-full h-full object-cover"
                    keywords="developer working, focus, programming, coding"
                  />
                </div>
                <div className="absolute top-4 -right-4 w-40 h-40 bg-gradient-to-r from-purple-100 to-purple-200 rounded-lg p-4 shadow-lg transform rotate-6 transition-transform duration-300 hover:rotate-0">
                  <div className="text-sm font-medium">
                    <div className="flex items-center mb-2 group">
                      <span className="material-symbols-outlined text-purple-600 mr-2 group-hover:scale-110 transition-transform duration-300">
                        code
                      </span>
                      <span>Frontend Expert</span>
                    </div>
                    <div className="flex items-center mb-2 group">
                      <span className="material-symbols-outlined text-purple-600 mr-2 group-hover:scale-110 transition-transform duration-300">
                        design_services
                      </span>
                      <span>UI/UX Enthusiast</span>
                    </div>
                    <div className="flex items-center group">
                      <span className="material-symbols-outlined text-purple-600 mr-2 group-hover:scale-110 transition-transform duration-300">
                        rocket_launch
                      </span>
                      <span>Problem Solver</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-3/5 md:pl-12">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
                About Me
              </h2>
              <p className="text-neutral-700 text-lg mb-4">
                I'm Anurag, a passionate frontend developer on a journey toward
                full-stack mastery. With 2 years of hands-on experience, I've
                had the privilege of working with real clients to solve real
                business problems through technology.
              </p>
              <p className="text-neutral-700 text-lg mb-4">
                My mission is to help businesses grow by creating websites that
                not only look good but also convert visitors into customers. I
                believe that great design combined with clean, efficient code is
                the key to delivering exceptional digital experiences.
              </p>
              <p className="text-neutral-700 text-lg mb-6">
                When I'm not coding, you'll find me exploring the latest design
                trends, experimenting with new technologies, or enjoying a good
                book. I'm currently preparing for my MCA and continuously
                expanding my skill set to better serve my clients.
              </p>

              <div className="flex flex-wrap gap-3"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default HeroPage;
