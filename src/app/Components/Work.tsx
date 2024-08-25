import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

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
  // {
  //   image: '/panaverse.PNG',
  //   link: 'https://panaverse-daoclone--lime.vercel.app/',
  // },
  
  // {
  //   image: '/cloudinary.PNG',
  //   link: 'https://photo-album-drab.vercel.app/',
  // },
  // {
  //   image: '/website2.JPG',
  //   link: 'https://seaside-escape-gateways.vercel.app/',
  // },
  // {
  //   image: '/webdev.JPG',
  //   link: 'https://agencywebsite-xi.vercel.app/',
  // },
];

const Work = () => {
  return (
    <div data-aos="fade-up" className='flex items-center justify-center'>
      <div>
        <h1 data-aos="fade-up-right" className='text-5xl lg:text-6xl font-bold text-center py-6 text-white'>
          Work
        </h1>
        <div data-aos="fade-in" className='grid sm:grid-cols-1 md:grid-cols-2 gap-8 py-4 w-auto px-4'>
          {data.map((item, i) => (
            <Link
              data-aos="fade-up-right"
              href={item.link}
              target='_blank'
              rel='noopener noreferrer'
              key={i}
              className='relative group'
            >
              <Image
                src={item.image}
                alt={`Project ${i + 1}`}
                width={600}
                height={600}
                className='rounded-xl group-hover:scale-105 transition duration-300 ease-in-out transform group-hover:shadow-lg'
              />
              <div className='absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-xl flex items-center justify-center'>
                <p className='text-white font-semibold text-xl'>View Project</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
