import React from 'react';
import { FaCss3Alt, FaGithub, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import { FiGithub } from 'react-icons/fi';
import { GiTBrick } from 'react-icons/gi';
import { SiJavascript, SiTailwindcss, SiTypescript, SiAngular, SiMongodb, SiExpress } from 'react-icons/si';

const Skills = () => {
  return (
    <div data-aos="fade-up" className="bg-[#121212] py-8 px-4 sm:py-16 xl:px-14">
      <div data-aos="fade-up" className='text-center text-4xl lg:text-5xl mb-8'>
        <h1 data-aos="fade-up" className='font-bold'>Experience And</h1>
        <span data-aos="fade-up" className='bg-gradient-to-r from-blue-700 via-purple-700 to-indigo-900 text-transparent bg-clip-text font-bold'>Skills</span>
      </div>

      <div className='grid md:grid-cols-2 gap-8 items-start'>
        
      <div>
          <div className="mb-8">
            <p data-aos="fade-up" className='font-bold'>May 2024 – Mar 2025</p>
            <p data-aos="fade-up">Freelance Web Developer</p>
            <h1 data-aos="fade-up" className='font-bold text-2xl text-blue-400'>Dubai, UAE</h1>
            <ul className='list-disc pl-5 text-gray-400 mt-2'>
              <li data-aos="fade-up-right">Developed React e-commerce app with mock data for Dubai retailer.</li>
              <li data-aos="fade-up-right">Boosted user engagement by 20% with streamlined checkout UI.</li>
              <li data-aos="fade-up-right">Designed animated React.js VR interface, enhancing interaction by 20%.</li>
            </ul>
          </div>

          <div className="mb-8">
            <p data-aos="fade-up" className='font-bold'>Mar 2023 - May 2024</p>
            <p data-aos="fade-up">Software Engineer</p>
            <h1 data-aos="fade-up" className='font-bold text-2xl text-blue-400'>Orion Innovation</h1>
            <p data-aos="fade-up" className="text-gray-400 italic">Chennai, India</p>
            <ul className='list-disc pl-5 text-gray-400 mt-2'>
              <li data-aos="fade-up-right">Built Angular UI for Australian Football League (AFL) Tribunal.</li>
              <li data-aos="fade-up-right">Improved UI efficiency by 60% with advanced data visualization.</li>
              <li data-aos="fade-up-right">Developed MERN platform for Football Association (FA), ensuring 99.9% uptime.</li>
            </ul>
          </div>

          <div className="mb-8">
            <p data-aos="fade-up" className='font-bold'>Nov 2020 - Feb 2023</p>
            <p data-aos="fade-up">System Engineer</p>
            <h1 data-aos="fade-up" className='font-bold text-2xl text-blue-400'>Tata Consultancy Services (TCS)</h1>
            <p data-aos="fade-up" className="text-gray-400 italic">Chennai, India</p>
            <ul className='list-disc pl-5 text-gray-400 mt-2'>
              <li data-aos="fade-up-right">Created 50+ Angular components for PayUK, improving fintech UX.</li>
              <li data-aos="fade-up-right">Reduced load times by 25% via architectural enhancements.</li>
              <li data-aos="fade-up-right">Upgraded Citibank’s React portal, cutting bugs by 40%.</li>
            </ul>
          </div>
        </div>


        <div className='grid grid-cols-3 gap-4'>
          {[
            { skill: "HTML", icon: <FaHtml5 className='text-orange-800 text-4xl' /> },
            { skill: "CSS", icon: <FaCss3Alt className='text-indigo-900 text-4xl' /> },
            { skill: "Javascript", icon: <SiJavascript className='text-yellow-600 text-4xl' /> },
            { skill: "Typescript", icon: <SiTypescript className='text-blue-600 text-4xl' /> },
            { skill: "React Js", icon: <FaReact className='text-sky-600 text-4xl' /> },
            { skill: "Angular Js", icon: <SiAngular className='text-red-700 text-4xl' /> },
            { skill: "Node Js", icon: <FaNodeJs className='text-green-700 text-4xl' /> },
            { skill: "Express Js", icon: <SiExpress className='text-gray-200 text-4xl' /> },
            { skill: "MongoDB", icon: <SiMongodb className='text-green-600 text-4xl' /> },
            { skill: "GitHub", icon: <FiGithub className='text-neutral-800 text-4xl' /> },            
            { skill: "Git", icon: <GiTBrick className='text-red-700 text-4xl' /> },
            { skill: "Tailwind CSS", icon: <SiTailwindcss className='text-sky-500 text-4xl' /> },
            
          ].map(({ skill, icon }, index) => (
            <div key={index}>
              <a data-aos="fade-up-right" className='flex flex-col items-center transition-all duration-300 hover:bg-neutral-800 border border-neutral-700 cursor-pointer p-4 rounded-md text-white'>
                {icon}
                <span className='mt-2 text-center text-sm sm:text-base'>{skill}</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills;
