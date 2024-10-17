import React from 'react';
import { FaCss3Alt, FaGithub, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import { FiGithub } from 'react-icons/fi';
import { GiTBrick } from 'react-icons/gi';
import { SiJavascript, SiNextdotjs, SiTailwindcss, SiTypescript, SiAngular } from 'react-icons/si';

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
            <p data-aos="fade-up" className='font-bold'>Mar 2023 - May 2024</p>
            <p data-aos="fade-up">Software Engineer</p>
            <h1 data-aos="fade-up" className='font-bold text-2xl text-blue-400'>Orion Innovation</h1>
            <p data-aos="fade-up" className="text-gray-400 italic">Chennai, India</p>
            <p data-aos="fade-up" className='mt-2 text-gray-200'>Developed Sports applications tailored to the Australian Football League(AFL).</p>
            <ul className='list-disc pl-5 text-gray-400'>
              <li data-aos="fade-up-right">Led the development of the AFL Tribunal module and various sports applications, focusing on enhancing dynamic UI and functionality.</li>
              <li data-aos="fade-up-right">Improved UI management efficiency by 60% through custom design implementations and advanced data visualization techniques.</li>
              <li data-aos="fade-up-right">Conducted thorough code reviews and mentored junior developers, significantly improving overall team performance and code quality.</li>
              <li data-aos="fade-up-right">Optimized build and test scripts for CI/CD environments, reducing deployment times by 50%.</li>
              <li data-aos="fade-up-right">Managed multiple project screens with a focus on responsive design, ensuring seamless user experiences across all devices.</li>
            </ul>
          </div>

          <div className="mb-8">
            <p data-aos="fade-up" className='font-bold'>Nov 2020 - Feb 2023</p>
            <p data-aos="fade-up">System Engineer</p>
            <h1 data-aos="fade-up" className='font-bold text-2xl text-blue-400'>Tata Consultancy Services (TCS)</h1>
            <p data-aos="fade-up" className="text-gray-400 italic">Chennai, India</p>
            <p data-aos="fade-up" className='mt-2 text-gray-200'>Developed Banking applications</p>
            <ul className='list-disc pl-5 text-gray-400'>
              <li data-aos="fade-up-right">Executed the UI development of over 50 components for PayUK’s PEAP, enhancing user satisfaction and system performance.</li>
              <li data-aos="fade-up-right">Achieved a 20% reduction in load times through architectural enhancements, boosting application responsiveness.</li>
              <li data-aos="fade-up-right">Delivered over 100 tasks ahead of schedule by championing Agile methodologies, fostering collaboration, and ensuring timely project delivery.</li>
              <li data-aos="fade-up-right">Ensured application reliability with extensive unit testing, seamless integration, and proactive bug fixing.</li>
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
            { skill: "Next Js", icon: <SiNextdotjs className='text-purple-800 text-4xl' /> },
            { skill: "GitHub", icon: <FiGithub className='text-neutral-800 text-4xl' /> },
            { skill: "Node Js", icon: <FaNodeJs className='text-green-700 text-4xl' /> },
            { skill: "Angular Js", icon: <SiAngular className='text-red-700 text-4xl' /> },
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
