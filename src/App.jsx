import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Portfolio() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-white overflow-hidden">
      
      {/* Background Accent (responsive safe) */}
      <div className="hidden sm:block absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-indigo-600 opacity-20 blur-3xl rounded-full" />
      <div className="hidden sm:block absolute bottom-[-120px] right-[-120px] w-[400px] h-[400px] bg-cyan-500 opacity-20 blur-3xl rounded-full" />

      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent leading-tight"
        >
          Aufariq Rajabi F
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-base sm:text-lg md:text-xl text-slate-300 max-w-xl sm:max-w-2xl"
        >
          Informatics Engineer | Machine Learning | Web System Developer
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto"
        >
          <button className="w-full sm:w-auto rounded-2xl px-6 py-3 bg-indigo-600 hover:bg-indigo-500 shadow-lg shadow-indigo-600/40 transition">
            View Projects
          </button>
          <button className="w-full sm:w-auto rounded-2xl px-6 py-3 border border-indigo-400 text-indigo-300 hover:bg-indigo-500 hover:text-white transition">
            Download CV
          </button>
        </motion.div>
      </section>

      {/* About */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16 sm:py-24 max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8"
        >
          About Me
        </motion.h2>
        <p className="text-slate-300 leading-relaxed text-base sm:text-lg">
          I specialize in building data-driven systems using Machine Learning
          and modern web technologies. My focus includes predictive analytics,
          industrial production forecasting, digital evidence management systems,
          and structured information architecture.
        </p>
      </section>

      {/* Skills */}
      <section className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/60 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 sm:mb-16 text-center bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">
            {[
              "Laravel 11 & PHP",
              "Random Forest & SVM",
              "MySQL & Data Engineering",
              "Artificial Neural Network",
              "Bootstrap & REST API",
              "Computer Vision & ResNet",
            ].map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="rounded-2xl bg-slate-800 border border-slate-700 hover:border-indigo-500 transition-all duration-300 shadow-xl hover:shadow-indigo-600/20 p-6 sm:p-8 text-center">
                  <p className="text-base sm:text-lg text-slate-200">
                    {skill}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 sm:mb-16 text-center">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-12">
          {[
            {
              title: "Oil Production Prediction System",
              desc: "Random Forest model with hyperparameter optimization for accurate daily production forecasting.",
            },
            {
              title: "Cyber Crime Reporting System (STTP)",
              desc: "Secure Laravel-based reporting and digital evidence management system with audit trail.",
            },
            {
              title: "Sentiment Analysis on Game Reviews",
              desc: "SVM-based sentiment classification system for public perception analysis.",
            },
            {
              title: "Roblox Game Development",
              desc: "Interactive multi-level game using structured Game Development Life Cycle methodology.",
            },
          ].map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="rounded-2xl bg-slate-800 border border-slate-700 hover:border-cyan-400 transition-all duration-300 shadow-2xl hover:shadow-cyan-500/20 p-6 sm:p-10">
                <h3 className="text-lg sm:text-xl font-semibold mb-4">
                  {project.title}
                </h3>
                <p className="text-slate-300 text-sm sm:text-base">
                  {project.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="relative py-16 sm:py-20 text-center bg-slate-900/60 backdrop-blur-sm px-4">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8">
          Connect With Me
        </h2>

        <div className="flex justify-center gap-6 sm:gap-8">
          <Github className="w-6 h-6 sm:w-7 sm:h-7 cursor-pointer text-slate-300 hover:text-indigo-400 transition" />
          <Linkedin className="w-6 h-6 sm:w-7 sm:h-7 cursor-pointer text-slate-300 hover:text-indigo-400 transition" />
          <Mail className="w-6 h-6 sm:w-7 sm:h-7 cursor-pointer text-slate-300 hover:text-indigo-400 transition" />
        </div>
      </section>

      <footer className="text-center py-6 sm:py-8 text-xs sm:text-sm text-slate-500 px-4">
        © 2026 Aufariq Rajabi F. All rights reserved.
      </footer>
    </div>
  );
}