'use client'
import Link from 'next/link';
import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import { FaGithub } from "react-icons/fa";
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Hero = () => {
  const router = useRouter();
  return (
    <div data-aos="fade-up" className='grid grid-cols-1 sm:grid-cols-12 h-screen bg-[#121212]'>
      <div className='col-span-7 px-12 md:px-14 text-center sm:text-left'>
        <h1 className='text-xl md:text-2xl lg:text-3xl mt-6 md:mt-12 sm:text-2xl text-gray-400 tracking-wider'>
          <span className='inline-block animate-wave'>👋🏻</span>Hello, I am
        </h1>
        <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-blue-700 via-purple-700 to-indigo-900 text-transparent bg-clip-text font-serif font-bold md:mt-7 lg:mt-8 mt-4'>
          Mufeed Rahman
        </h1>
        <h1 className='text-2xl mt-4 sm:text-3xl md:text-4xl lg:text-5xl text-white font-semibold md:mt-5'>
          <TypeAnimation 
            sequence={[
              'Web Developer',
              1000,
              'Frontend Developer',
              1000,
              'Full Stack Developer',
              1000
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="inline-block animate-pulse"
          />
        </h1>
        <p data-aos="fade-up" className='text-[#ADB7BE] md:mt-4 mt-4 text-base sm:text-lg lg:text-xl'>
          Hey, I’m Mufeed, a Frontend Developer with over 4 years of experience in React, Next.js, and Angular, 
          building dynamic websites that engage users. My projects in Dubai boosted user engagement by 20%. 
          Explore my work to see how I can add value!
        </p>


        <div className='flex justify-center sm:justify-start mb-2.5'>
          <a 
            data-aos="fade-up-right" 
            href='https://github.com/mufeedrahmanuk' 
            className='flex items-center justify-center mt-6 sm:mt-8 px-8 py-2 text-sm sm:px-6 sm:py-3 sm:text-base w-fit sm:w-auto rounded-md bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 hover:bg-slate-200 text-white hover:scale-105 transition-transform duration-300'
          >
            Github Profile
          </a>
        </div>
      </div>

      <div className='col-span-5 place-self-center mb-16 sm:mb-20'>
        <div className='bg-[#181818] rounded-full w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] relative mx-auto'>
          <Image 
            src={'/Hero-Img.png'}
            alt='Mufeed Rahman smiling, representing his profile image'
            className='absolute animate-heroImage transform scale-125 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
            width={300}
            height={300} 
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
