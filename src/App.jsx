import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { FaPython, FaPhp, FaJs, FaJava, FaReact, FaNodeJs } from "react-icons/fa";
import { SiCplusplus, SiMysql } from "react-icons/si";

export default function Portfolio() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-white overflow-hidden">
      
      {/* Background Accent */}
      <div className="hidden sm:block absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-indigo-600 opacity-20 blur-3xl rounded-full" />
      <div className="hidden sm:block absolute bottom-[-120px] right-[-120px] w-[400px] h-[400px] bg-cyan-500 opacity-20 blur-3xl rounded-full" />

      {/* HERO */}
      <section className="relative flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        
        <div className="relative mb-8">
          <div className="absolute inset-0 rounded-full bg-cyan-500 blur-2xl opacity-30"></div>
          <motion.img
            src="/profile.png"
            alt="Profile"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full object-cover border-4 border-cyan-400 shadow-lg shadow-cyan-500/30"
          />
        </div>

        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold mb-6 bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent"
        >
          Aufariq Rajabi F
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-lg text-slate-300 max-w-2xl"
        >
          Informatics Engineer | Machine Learning Engineer | Web System Developer
        </motion.p>
      </section>

      {/* ABOUT */}
      <section className="px-6 py-20 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="text-slate-300 leading-relaxed text-lg">
          I specialize in building data-driven systems using Machine Learning
          and modern web technologies. My focus includes predictive analytics,
          industrial production forecasting, digital evidence management systems,
          and structured information architecture.
        </p>
      </section>

      {/* PROGRAMMING LANGUAGES */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-16 text-center bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
          Programming Languages
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            { name: "Python", icon: <FaPython size={28} />, level: 90 },
            { name: "PHP", icon: <FaPhp size={28} />, level: 85 },
            { name: "JavaScript", icon: <FaJs size={28} />, level: 85 },
            { name: "Java", icon: <FaJava size={28} />, level: 75 },
            { name: "C++", icon: <SiCplusplus size={28} />, level: 70 },
            { name: "MySQL", icon: <SiMysql size={28} />, level: 85 },
            { name: "React", icon: <FaReact size={28} />, level: 85 },
            { name: "Node.js", icon: <FaNodeJs size={28} />, level: 80 },
          ].map((lang, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-800/60 border border-slate-700 hover:border-cyan-400 transition-all duration-300 p-6 rounded-2xl shadow-xl hover:shadow-cyan-500/20"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="text-cyan-400">{lang.icon}</div>
                <h3 className="text-lg font-semibold">{lang.name}</h3>
              </div>

              <div className="w-full bg-slate-700 rounded-full h-2">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${lang.level}%` }}
                  transition={{ duration: 1 }}
                  className="h-2 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400"
                />
              </div>

              <p className="text-sm text-slate-400 mt-2">
                {lang.level}% Proficiency
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TECHNICAL SKILLS */}
      <section className="py-20 px-6 bg-slate-900/60">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-16 text-center">
            Technical Skills
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Laravel 11 & REST API",
              "Random Forest & SVM",
              "Artificial Neural Network",
              "Computer Vision & ResNet",
              "Data Engineering",
              "System Architecture Design",
            ].map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-800 border border-slate-700 hover:border-indigo-500 transition p-6 rounded-2xl text-center"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-16 text-center">
          Featured Projects
        </h2>

        <div className="grid sm:grid-cols-2 gap-10">
          {[
            {
              title: "G-Predict (Future Salary Forecasting)",
              desc: "Machine Learning-based salary prediction system using official statistical data from BPS (Badan Pusat Statistik) to forecast future income trends and economic indicators.",
            },
            {
              title: "Oil Production Prediction System",
              desc: "Random Forest model with hyperparameter optimization for accurate daily production forecasting.",
            },
            {
              title: "Cyber Crime Reporting System (STTP)",
              desc: "Secure Laravel-based reporting system with digital evidence management and audit trail.",
            },
            {
              title: "Sentiment Analysis on Game Reviews",
              desc: "SVM-based sentiment classification system for analyzing public perception.",
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
              className="bg-slate-800 border border-slate-700 hover:border-cyan-400 transition p-8 rounded-2xl shadow-xl hover:shadow-cyan-500/20"
            >
              <h3 className="text-xl font-semibold mb-4">
                {project.title}
              </h3>
              <p className="text-slate-300">
                {project.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-16 text-center bg-slate-900/60">
        <h2 className="text-2xl font-bold mb-8">
          Connect With Me
        </h2>

        <div className="flex justify-center gap-8">
          <Github className="w-7 h-7 cursor-pointer hover:text-indigo-400 transition" />
          <Linkedin className="w-7 h-7 cursor-pointer hover:text-indigo-400 transition" />
          <Mail className="w-7 h-7 cursor-pointer hover:text-indigo-400 transition" />
        </div>
      </section>

      <footer className="text-center py-6 text-sm text-slate-500">
        © 2026 Aufariq Rajabi F. All rights reserved.
      </footer>
    </div>
  );
}
