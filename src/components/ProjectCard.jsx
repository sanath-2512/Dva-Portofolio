import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

export default function ProjectCard({ title, desc, tags, img, link }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-[#161b22] border border-gray-800 rounded-xl overflow-hidden hover:border-blue-500 transition"
    >
      {/* HEADER */}
      <div className="p-4 flex justify-between items-center">
        <h3 className="font-semibold">{title}</h3>
        <a href={link} target="_blank">
          <FaGithub className="text-gray-400 hover:text-white" />
        </a>
      </div>

      {/* DESC */}
      <p className="text-gray-400 text-sm px-4">{desc}</p>

      {/* TAGS */}
      <div className="flex gap-2 px-4 mt-2 flex-wrap">
        {tags.map((tag, i) => (
          <span
            key={i}
            className="text-xs bg-blue-600 px-2 py-1 rounded"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* IMAGE */}
      <div className="mt-3 overflow-hidden bg-[#0d1117] border-t border-gray-700/70">
        <img
          src={img}
          alt={`${title} dashboard preview`}
          className="w-full aspect-[16/9] object-contain p-3"
        />
      </div>
    </motion.div>
  );
}
