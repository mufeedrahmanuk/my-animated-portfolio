'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { HiMenuAlt3 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  const toggleNavbar = () => {
    setOpenNav(!openNav);
  };

  return (
    <nav className='sticky bg-[#121212] top-0 left-0 right-0 z-10 w-full px-4 xl:px-8 shadow-lg'>
      <div className='flex justify-between items-center mx-auto px-4 py-4'>
        <Link href='/'>
          <p className='text-xl md:text-4xl lg:text-5xl font-bold cursor-pointer hover:text-indigo-500 transition-all duration-300'>Mufeed</p>
        </Link>
        <div className='hidden md:block'>
          <ul className='flex space-x-8 text-[#ADB7BE] font-semibold'>
            <Link href='/'><li className='hover:text-white transition-all duration-200'>Home</li></Link>
            <Link href='/About'><li className='hover:text-white transition-all duration-200'>About</li></Link>
            <Link href='/Skills'><li className='hover:text-white transition-all duration-200'>Experience</li></Link>
            <Link href='/Education'><li className='hover:text-white transition-all duration-200'>Education</li></Link>
            <Link href='/Work'><li className='hover:text-white transition-all duration-200'>Work</li></Link>
            <Link href='/Contact'><li className='hover:text-white transition-all duration-200'>Contact</li></Link>
          </ul>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleNavbar} className="text-2xl focus:outline-none">
            {openNav ? <RxCross2 /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>

      {openNav && (
        <div className="fixed inset-0 bg-[#121212] bg-opacity-95 flex flex-col justify-start items-start p-8 space-y-6 z-20 transition-transform transform md:hidden">
          <button onClick={toggleNavbar} className="self-end text-2xl focus:outline-none">
            <RxCross2 />
          </button>
          <ul className='text-[#ADB7BE] font-semibold w-full'>
            <Link href='/'><li onClick={toggleNavbar} className='hover:text-white transition-all duration-200 py-2'>Home</li></Link>
            <Link href='/About'><li onClick={toggleNavbar} className='hover:text-white transition-all duration-200 py-2'>About</li></Link>
            <Link href='/Skills'><li onClick={toggleNavbar} className='hover:text-white transition-all duration-200 py-2'>Experience</li></Link>
            <Link href='/Education'><li onClick={toggleNavbar} className='hover:text-white transition-all duration-200 py-2'>Education</li></Link>
            <Link href='/Work'><li onClick={toggleNavbar} className='hover:text-white transition-all duration-200 py-2'>Work</li></Link>
            <Link href='/Contact'><li onClick={toggleNavbar} className='hover:text-white transition-all duration-200 py-2'>Contact</li></Link>
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar;
