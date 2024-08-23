import React from 'react';
import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
  return (
    <div data-aos="fade-up" className="bg-[#121212] py-8 px-4 sm:py-16 xl:px-14">
      <div data-aos="fade-up" className='text-center text-4xl lg:text-5xl mb-8'>
        <h1 data-aos="fade-up" className='font-bold drop-shadow-lg'>Education</h1>
        <span data-aos="fade-up" className='bg-gradient-to-r from-blue-700 via-purple-700 to-indigo-900 text-transparent bg-clip-text font-bold'>Journey</span>
      </div>

      <div className='grid gap-8 sm:grid-cols-1 lg:grid-cols-3'>
        {/* Education Items */}
        {[
          {
            degree: "Bachelor of Engineering (B.E.)",
            field: "Computer Science and Engineering",
            school: "AAMEC, Affiliated Anna University, Tamil Nadu, India",
            date: "November 2020",
          },
          {
            degree: "Higher Secondary Certificate (HSC)",
            field: "KMM English School, Kerala, India",
            school: "Central Board of Secondary Education (CBSE)",
            date: "March 2016",
          },
          {
            degree: "Secondary School Leaving Certificate (SSLC)",
            field: "KMM English School, Kerala, India",
            school: "Central Board of Secondary Education (CBSE)",
            date: "March 2014",
          },
        ].map(({ degree, field, school, date }, index) => (
          <div key={index} className="w-full">
            <div data-aos="fade-up-right" className='flex flex-col transition-all duration-300 hover:bg-gradient-to-r from-neutral-700 to-neutral-800 border border-neutral-700 cursor-pointer px-6 py-4 w-full rounded-md text-white shadow-lg'>
              <div className='flex-grow'>
                <p className='font-bold text-lg sm:text-xl lg:text-2xl'>{degree}</p>
                <p className='text-gray-400 text-base sm:text-lg'>{field}</p>
                <p className='mt-2 text-sm sm:text-base'>{school}</p>
              </div>
              <div className='flex items-center justify-between mt-4'>
                <p className='italic text-gray-400 text-xs sm:text-sm'>{date}</p>
                <FaGraduationCap className='text-indigo-600' style={{ fontSize: '2.5rem' }} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;
