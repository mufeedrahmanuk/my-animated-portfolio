"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';

const data = [
  {
    image: '/virtualweb.JPG',
    link: 'https://virtualreality-vr.vercel.app/',
  },
  {
    image: '/sportweb.jpg',
    link: 'https://sportswebsite-opal.vercel.app/',
  },
  {
    image: '/ecommerce.jpg',
    link: 'https://e-commerce-website-three-sigma.vercel.app/',
  },
  {
    image: '/todo.jpg',
    link: 'https://todo-list-nu-black-15.vercel.app/',
  },
];

const Work = () => {
  useEffect(() => {
    AOS.init({
      duration: 700, 
      delay: 50, 
      once: true, 
    });
  }, []);

  return (
    <div data-aos="fade-up" className='flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-12 bg-[#121212]'>
      <h1 data-aos="fade-up-right" className='text-5xl lg:text-6xl font-bold text-center py-6 text-white'>
        Work
      </h1>
      <div data-aos="fade-in" className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-4 w-full max-w-7xl'>
        {data.map((item, i) => (
          <Link
            href={item.link}
            target='_blank'
            rel='noopener noreferrer'
            key={i}
            className='relative group'
            data-aos="fade-up-right"
          >
            <Image
              src={item.image}
              alt={`Project ${i + 1}`}
              width={600}
              height={400}
              className='rounded-xl group-hover:scale-105 transition-transform duration-300 ease-in-out transform group-hover:shadow-lg'
            />
            <div className='absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-xl flex items-center justify-center'>
              <p className='text-white font-semibold text-xl'>View Project</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Work;
