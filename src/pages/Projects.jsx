// Projects.jsx
import React from 'react';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: 'Nakshatra Explorers',
      description: 'A platform to explore the beauty of stars and learn about different constellations and celestial events.',
      image: 'https://media.istockphoto.com/id/613320160/photo/international-space-station-in-outer-space.jpg?s=612x612&w=0&k=20&c=PQSutAlO3koC4YFDMgJm9KvnRu0l03PQRr3PMCggJ3I=', // Ensure to correct the path
      link: 'https://jaideep-27.github.io/Nakshatra_Explorers/', // Add the project link
    },
    {
      title: 'Helpers for Elders',
      description: 'An application that connects elderly individuals with nearby helpers for immediate assistance through a simple interface.',
      image: 'https://lifecircle.in/wp-content/uploads/2023/05/Home-Care-Services-for-Elderly-In-Hyderabad-1200x675.png', // Ensure to correct the path
      link: 'https://jaideep-27.github.io/Helpers_for_elders/', // Add the project link
    },
    {
      title: 'Dream Path',
      description: 'An AI web application that helps students find their ideal career path using AI.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfEC_9CJ7LCnY_dzRpV6aQhOl0G5d1mLwNcQ&s', // Add the path for the image
      link: 'https://example.com/dream-path', // Replace with the actual project link
    },
  ];

  return (
    <section
      id="projects"
      className="p-8 min-h-screen scroll-margin-top-20" // This ensures the section isn’t hidden behind the navbar
    >
      <h1 className="text-4xl font-bold text-center mb-10">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
