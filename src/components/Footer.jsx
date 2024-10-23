import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white text-center p-4"> {/* Black background, white text */}
      <p className="text-sm">© {new Date().getFullYear()} Jaideep Amrabad. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
