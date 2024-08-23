import Image from 'next/image';
import React from 'react';

const About = () => {
  return (
    <div 
      data-aos="fade-up" 
      className='md:grid md:grid-cols-2 gap-8 py-8 px-4 sm:py-12 xl:px-14 items-center mt-12 sm:mt-20'
    >
      <div className="flex justify-center mb-6 md:mb-0">
        <Image 
          data-aos="fade-up-right" 
          src='/About-Image.jpg' 
          alt='A photo of Mufeed Rahman' 
          width={400} 
          height={400} 
          className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 max-w-full h-auto" 
        /> 
      </div>
      <div>
        <h1 data-aos="fade-up" className='font-bold text-4xl lg:text-5xl mt-4 text-white mb-4'>
          About Me
        </h1>
        <p data-aos="fade-up" className='text-base lg:text-lg'>
          As a passionate Frontend Developer from Kerala, India, I specialize in transforming ideas into clean, efficient code using HTML, CSS, JavaScript, TypeScript, and frameworks like React, Next.js, and Angular.
        </p>
        <p data-aos="fade-up" className='text-base lg:text-lg mt-4'>
          My journey in web development has taken me through exciting projects in the Sports and BFSI domains, where I&rsquo;ve driven user engagement and business growth through innovative solutions, such as enhancing the AFL platform and revolutionizing online banking for PayUK.
        </p>
        <p data-aos="fade-up" className='text-base lg:text-lg mt-4'>
          I hold a B.E. in Computer Science and Engineering from Anna University, where my curiosity for technology was matched by a love for exploration. Whether it&rsquo;s traveling, discovering new music, or culinary adventures, these experiences fuel my creativity and problem-solving skills.
        </p>
        <a 
          data-aos="fade-up" 
          href="/Contact"
          className="inline-block mt-6 px-6 py-2 text-sm sm:px-6 sm:py-3 sm:text-base w-fit sm:w-auto rounded-md bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 hover:bg-slate-200 text-white hover:scale-105 transition-transform duration-300"
        >
          Contact Me
        </a>
      </div>
    </div>
  )
}

export default About;
