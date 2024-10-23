import React from 'react';
import { motion } from 'framer-motion';
import profileImage from '/assets/profileImage.jpg'; // Your profile image
import { FaGithub, FaLinkedin, FaTwitter, FaDownload } from 'react-icons/fa';
import resumeFile from '/assets/Jaideep_Resume.pdf'; // Path to your resume file

const textVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5 + i * 0.2,
      ease: 'easeOut',
    },
  }),
};

const Home = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-center h-screen bg-white px-10 lg:px-24">
      
      {/* Image Section with Bounce */}
      <motion.div
        className="rounded-full overflow-hidden shadow-lg mb-8 lg:mb-0 lg:mr-16"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <img
          src={profileImage}
          alt="Profile"
          className="w-60 h-60 lg:w-80 lg:h-80 object-cover rounded-full"
        />
      </motion.div>

      {/* Text Section */}
      <div className="flex flex-col items-center lg:items-start space-y-6">
        
        {/* Flowing in Type Animation */}
        <motion.h1
          initial="hidden"
          animate="visible"
          custom={0}
          variants={textVariant}
          className="text-5xl font-bold text-black"
        >
          Hi, I'm Jaideep!
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="visible"
          custom={1}
          variants={textVariant}
          className="text-xl text-gray-700"
        >
          Welcome to my portfolio.
        </motion.p>

        {/* Social Links */}
        <motion.div
          className="flex space-x-6"
          initial="hidden"
          animate="visible"
          custom={2}
          variants={textVariant}
        >
          <a href="https://github.com/jaideep-27" target="_blank" rel="noreferrer" className="text-black text-3xl hover:text-red-600 transition-transform transform hover:scale-125">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/jaideep-amrabad" target="_blank" rel="noreferrer" className="text-black text-3xl hover:text-red-600 transition-transform transform hover:scale-125">
            <FaLinkedin />
          </a>
          <a href="https://x.com/Jaideep_7_?t=Ivv0fgOtfQd54e8ncaOZGA&s=09" target="_blank" rel="noreferrer" className="text-black text-3xl hover:text-red-600 transition-transform transform hover:scale-125">
            <FaTwitter />
          </a>
        </motion.div>

        {/* Modified CTA Button with Download Icon */}
        <motion.a
          href={resumeFile} // Link to your resume
          download="Jaideep_Resume.pdf"
          className="px-6 py-3 bg-black text-white rounded-full shadow-lg hover:bg-red-700 transition-transform transform hover:scale-110 flex items-center"
          initial="hidden"
          animate="visible"
          custom={3}
          variants={textVariant}
        >
          <FaDownload className="mr-2" /> {/* Download icon added */}
          My Resume
        </motion.a>
      </div>
    </section>
  );
};

export default Home;
