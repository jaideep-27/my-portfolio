// Skills.jsx
import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  'JavaScript',
  'React',
  'Node.js',
  'HTML',
  'CSS',
  'Tailwind',
  'Framer Motion',
  'MERN Stack',
  'UI/UX Design',
  'Machine Learning',
  'Generative AI',
  'Writing',
  'MongoDB',
];

const containerVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: 'easeOut' },
  },
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="h-auto flex flex-col items-center justify-center bg-white text-black pb-10 px-5"
    >
      <motion.h1
        className="text-4xl font-bold mb-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        My Skills
      </motion.h1>

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="bg-gray-100 shadow-lg p-4 rounded-lg text-center hover:bg-black hover:text-white transition duration-300"
            variants={itemVariants}
          >
            <p className="text-lg font-semibold">{skill}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
