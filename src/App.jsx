import React from 'react';
import Navbar from './components/navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Skills from './pages/Skills';
import Certificates from './pages/Certificates';

function App() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow">
        {/* Home Section */}
        <div id="home">
          <Home />
        </div>
        
        {/* Projects Section */}
        <div id="projects" className="mt-32">
          <Projects />
        </div>
        
        {/* Skills Section */}
        <div id="skills" className="mt-32">
          <Skills />
        </div>
        
        {/* Certificates Section */}
        <div id="certificates" className="mt-32">
          <Certificates />
        </div>
        
        {/* Contact Section */}
        <div id="contact" className="mt-32">
          <Contact />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
