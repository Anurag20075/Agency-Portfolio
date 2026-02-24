import React from "react";
import { motion } from "framer-motion";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Director @ TechStart",
      result: "35% Conversion Boost",
      content:
        "The new architecture transformed our site from a brochure into a sales machine. The attention to performance and user flow was exactly what we needed to scale.",
      avatar: "https://i.pravatar.cc/150?u=sarah",
    },
    {
      name: "Michael Chen",
      role: "CEO @ GreenLeaf",
      result: "60% Faster Load Time",
      content:
        "Talented, communicative, and technically brilliant. Our complex dashboard was delivered ahead of schedule and our users are raving about the new speed.",
      avatar: "https://i.pravatar.cc/150?u=michael",
    },
    {
      name: "Emily Rodriguez",
      role: "Founder @ Bloom",
      result: "Successful Brand Launch",
      content:
        "I had a vision for a high-end boutique experience, and they brought it to life with incredible design precision. It’s rare to find someone who handles both code and UX so well.",
      avatar: "https://i.pravatar.cc/150?u=emily",
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-white relative overflow-hidden">
      {/* Subtle Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-slate-50/50 -z-10" />

      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-indigo-600 font-bold tracking-widest uppercase text-sm mb-3">Proof</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 italic">Success Stories</h3>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            I measure my success by the results my clients achieve. Here is what happens when code meets strategy.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500"
            >
              {/* Large Quote Icon Overlay */}
              <div className="absolute top-6 right-10 text-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <svg className="w-20 h-20 fill-current" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.154c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Result Badge */}
              <div className="inline-block mb-6 px-4 py-1.5 bg-indigo-50 text-indigo-600 text-[10px] font-black uppercase tracking-widest rounded-full">
                {t.result}
              </div>

              <p className="text-slate-700 leading-relaxed text-lg mb-8 relative z-10 italic font-medium">
                "{t.content}"
              </p>

              <div className="flex items-center gap-4 border-t border-slate-50 pt-8">
                <div className="relative">
                  <div className="absolute -inset-1 bg-indigo-100 rounded-full scale-0 group-hover:scale-110 transition-transform duration-500"></div>
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-14 h-14 rounded-full border-2 border-white shadow-md relative z-10"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 leading-tight">{t.name}</h4>
                  <p className="text-sm text-slate-500">{t.role}</p>
                </div>
              </div>

              {/* Star Rating */}
              <div className="flex gap-1 mt-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action for Social Proof */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 text-center"
        >
          <p className="text-slate-400 text-sm font-semibold uppercase tracking-[0.2em]">
            Trusted by founders at companies like
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 mt-8 grayscale opacity-40">
            {/* You can put real/placeholder company logos here */}
            <span className="text-2xl font-bold">TECHSTART</span>
            <span className="text-2xl font-bold">GREENLEAF</span>
            <span className="text-2xl font-bold">BLOOM</span>
            <span className="text-2xl font-bold">SQUAREFLOW</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;