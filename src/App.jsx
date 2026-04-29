import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaGithub,
  FaSearch,
  FaCode,
} from "react-icons/fa";
import retailImg from "./images/retail.png";
import agriImg from "./images/india_agricultural.png";

const profileImage =
  "https://d3dyfaf3iutrxo.cloudfront.net/thumbnail/user/d8c13c997635450c9f45d98191070df7.jpeg";

function ProjectCard({ title, desc, tags, img, link }) {
  return (
    <motion.a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="block"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        whileHover={{ scale: 1.03, translateY: -5 }}
        whileTap={{ scale: 0.98 }}
        className="bg-[#161b22] border border-gray-800 rounded-xl overflow-hidden hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 cursor-pointer h-full flex flex-col"
      >
        {/* HEADER */}
        <div className="p-4 flex justify-between items-center">
          <h3 className="font-semibold text-lg">{title}</h3>
          <FaGithub className="text-gray-400 hover:text-white transition-colors" />
        </div>

        {/* DESC */}
        <p className="text-gray-400 text-sm px-4">{desc}</p>

        {/* TAGS */}
        <div className="flex gap-2 px-4 mt-2 flex-wrap">
          {tags.map((tag, i) => (
            <span key={i} className="text-xs bg-blue-600 px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>

        {/* IMAGE */}
        <div className="mt-auto overflow-hidden bg-[#0d1117] border-t border-gray-700/70">
          <motion.img 
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
            src={img} 
            alt={`${title} dashboard preview`}
            className="w-full aspect-[16/9] object-contain p-3" 
          />
        </div>
      </motion.div>
    </motion.a>
  );
}

export default function App() {
  const [search, setSearch] = useState("");
  const baseURL = import.meta.env.BASE_URL;

  const projects = [
    {
      title: "Retail Performance Intelligence",
      desc: "Developed a comprehensive retail performance intelligence dashboard using Google Sheets to analyze sales and outlet performance. The dashboard provides insights into revenue distribution, item visibility, and sales trends.",
      tags: ["Google Sheets", "Data Analysis", "Dashboarding"],
      img: retailImg,
      link: "https://github.com/sanath-2512/SecA-G10",
    },
    {
      title: "India Agricultural Productivity",
      desc: "Created an interactive Tableau dashboard to visualize and analyze agricultural productivity trends across India. Data cleaning and preprocessing were performed using Jupyter Notebooks, Python, and Pandas.",
      tags: ["Tableau", "Python", "Jupyter", "Pandas"],
      img: agriImg,
      link: "https://public.tableau.com/app/profile/pushpendra.parihar/viz/Group17_SectionA_Dashboard_Final/1ExecutiveSummary",
    },
  ];

  const filtered = projects.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="flex min-h-screen bg-[#0d1117] text-white selection:bg-blue-500/30">
      {/* SIDEBAR */}
      <motion.div 
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-[300px] p-6 border-r border-gray-800 flex flex-col items-center bg-[#0d1117]/80 backdrop-blur-xl sticky top-0 h-screen overflow-y-auto"
      >
        <motion.div
          whileHover={{ scale: 1.05, rotate: 2 }}
          className="relative mb-4"
        >
          <img
            src={profileImage}
            alt="Sanath Waraikar"
            className="w-40 h-40 rounded-full object-cover border-2 border-gray-800"
          />
        </motion.div>

        <h2 className="text-xl font-bold text-center">Sanath Waraikar</h2>
        <p className="text-gray-400">@sanath-2512</p>

        <p className="text-gray-400 text-sm text-center mt-3 leading-relaxed">
          AI/ML-focused Developer with experience in building full stack applications and deploying machine learning solutions. Strong in Python and Data Structures & Algorithms, with a focus on solving real-world problems.
        </p>

        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full mt-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-500 transition-colors font-medium shadow-lg shadow-blue-500/20"
        >
          Follow
        </motion.button>

        {/* SOCIAL */}
        <div className="flex gap-3 w-full mt-4">
          <motion.a
            whileHover={{ y: -3, backgroundColor: "#1f2937" }}
            href="https://www.linkedin.com/in/sanath-waraikar/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-[#161b22] border border-gray-700 py-3 rounded-lg text-center transition-all"
          >
            <FaLinkedin className="mx-auto text-xl" />
          </motion.a>

          <motion.a
            whileHover={{ y: -3, backgroundColor: "#1f2937" }}
            href="https://github.com/sanath-2512/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-[#161b22] border border-gray-700 py-3 rounded-lg text-center transition-all"
          >
            <FaGithub className="mx-auto text-xl" />
          </motion.a>
        </div>

        <div className="w-full border-t border-gray-800 my-6"></div>

        {/* CONTACT */}
        <div className="w-full text-gray-300 text-sm space-y-4">
          <div className="flex items-center gap-3">
            <FaMapMarkerAlt className="text-lg text-gray-400 flex-shrink-0" />
            <span>Kalyan, Thane, Maharashtra</span>
          </div>

          <div className="flex items-center gap-3">
            <FaEnvelope className="text-lg text-gray-400 flex-shrink-0" />
            <a
              href="mailto:sanath.waraikar2024@nst.rishihood.edu.in"
              className="text-blue-400 hover:text-blue-300 break-all"
            >
              sanath.waraikar2024@nst.rishihood.edu.in
            </a>
          </div>

          <div className="flex items-center gap-3">
            <FaPhone className="text-lg text-gray-400 flex-shrink-0" />
            <a
              href="tel:+919896336088"
              className="text-blue-400 hover:text-blue-300"
            >
              +91 9896336088
            </a>
          </div>
        </div>

        <div className="w-full border-t border-gray-800 my-6"></div>

        {/* TECH STACK */}
        <div className="w-full">
          <p className="text-gray-400 text-sm mb-2">TECH STACK</p>

          <div className="flex flex-wrap gap-2 mt-3">
            {["Tableau", "Python", "Jupyter", "Pandas", "Power BI", "Streamlit", "LLMs", "APIs"].map((t, i) => (
              <motion.span
                whileHover={{ scale: 1.1, backgroundColor: "#2563eb", borderColor: "#3b82f6" }}
                key={i}
                className="px-3 py-1.5 text-xs font-medium border border-gray-700 bg-gray-800/50 rounded-full transition-colors cursor-default"
              >
                {t}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* MAIN */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex-1 p-8 lg:p-12 overflow-y-auto"
      >
        <div className="flex items-center gap-3 pb-4 border-b-2 border-orange-500">
          <FaCode className="text-2xl text-gray-300" />
          <h1 className="text-2xl font-bold">Repositories</h1>
          <span className="bg-gray-700 text-gray-200 px-3 py-1 rounded-full text-sm font-semibold">
            {projects.length}
          </span>
        </div>

        {/* SEARCH */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex items-center gap-3 mt-6 mb-8"
        >
          <div className="flex items-center bg-[#161b22] border border-gray-700 px-4 py-2.5 rounded-lg w-full max-w-md focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 transition-all">
            <FaSearch className="text-gray-400 mr-3" />
            <input
              type="text"
              placeholder="Find a project..."
              className="bg-transparent outline-none text-sm w-full placeholder-gray-500"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-blue-500 transition-colors"
          >
            All
          </motion.button>
        </motion.div>

        {/* PROJECT GRID */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6"
        >
          {filtered.map((p, i) => (
            <ProjectCard key={i} {...p} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
