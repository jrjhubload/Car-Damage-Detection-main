import React from 'react';

const Footer = () => {
  return (
    <footer className="footer w-full bg-white shadow-inner py-3 fixed bottom-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        
        {/* Left part of Footer */}
        <div className="text-gray-600 text-sm">
          © {new Date().getFullYear()} MyCompany. All rights reserved.
        </div>

        {/* Right part of Footer */}
        <div className="text-gray-600 text-sm">
          Powered by Nest Group
        </div>

      </div>
    </footer>
  );
};

export default Footer;
