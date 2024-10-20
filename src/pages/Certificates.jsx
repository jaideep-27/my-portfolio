import React from 'react';

const Certificates = () => {
  const certificates = [
    {
      title: 'Full-Stack Development',
      image: '/src/assets/certificate1.jpg', // Replace with actual image path
    },
    {
      title: 'Content Writing',
      image: '/src/assets/certificate2.jpg', // Replace with actual image path
    },
    {
      title: 'GradRight Hackathon Winner',
      image: '/src/assets/certificate3.jpg', // Replace with actual image path
    },
  ];

  return (
    <section className="p-8 min-h-screen bg-white"> {/* Background set to white */}
      <h1 className="text-4xl font-bold text-center mb-8">My Certificates</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {certificates.map((cert, index) => (
          <a
            key={index}
            href={cert.image} // Link to the image directly
            target="_blank" // Open the image in a new tab
            rel="noopener noreferrer" // Security best practice
            className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-[0px_10px_20px_rgba(0,0,0,0.3)] cursor-pointer" // Custom shadow on hover
          >
            <img
              src={cert.image}
              alt={cert.title}
              className="w-full h-60 object-contain" // Ensure the image fits well
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{cert.title}</h2>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
