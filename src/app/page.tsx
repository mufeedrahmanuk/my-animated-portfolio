'use client'

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import About from './Components/About';
import Hero from './Components/Hero';
import Skills from './Components/Skills';
import Contact from './Components/Contact';
import Work from './Components/Work';
import Education from './Components/Education';
import StickyButton from './Components/StickyButton';

const Page = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
    AOS.refresh();

    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <Education />
      <Work />
      <Contact />
      <StickyButton />
    </div>
  )
}

export default Page;
