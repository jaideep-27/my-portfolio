import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ project }) => {
  return (
    <motion.a // Change to anchor tag for clickable link
      href={project.link} // Use the link from the project data
      target="_blank" // Open in a new tab
      rel="noopener noreferrer" // Security best practice
      className="bg-white p-6 shadow-lg rounded-lg transform transition-transform flex flex-col h-full" // Use flexbox and full height
      whileHover={{ scale: 1.05, boxShadow: "0px 10px 26px rgba(0, 0, 0, 0.28)" }}
      transition={{ type: 'spring', stiffness: 200, damping: 10 }}
    >
      <motion.img
        src={project.image}
        alt={project.title}
        className="w-full h-60 object-contain flex-grow" // Use object-contain for images
        whileHover={{ scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 200 }}
      />
      <h2 className="text-2xl font-bold mt-4 text-gray-900 hover:text-red-600 transition-colors">
        {project.title}
      </h2>
      <p className="mt-2 text-gray-600 text-sm flex-grow"> {/* Allow description to grow */}
        {project.description}
      </p>
    </motion.a>
  );
};

export default ProjectCard;
