import React from 'react';
import { FaDownload } from 'react-icons/fa';

const StickyButton = () => {
  return (
    <a 
    href="https://www.dropbox.com/scl/fi/n9gwl6hl313q219jmi9ci/Mufeed_CV_SoftwareDeveloper.pdf?rlkey=puk0eqyd02ivkmozzb3sronlb&st=ptrnvlib&dl=1" 
      download="Mufeed_Rahman_CV.pdf" 
      className="fixed bottom-3 right-3 z-50 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white p-2 md:p-3 rounded-full shadow-lg hover:scale-105 transform transition-all duration-300 text-xs md:text-sm"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaDownload className="inline mr-1 md:mr-1.5 text-sm md:text-base" />
      Download CV
    </a>
  );
};

export default StickyButton;
