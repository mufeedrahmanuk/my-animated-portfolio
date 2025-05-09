"use client";

import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { VscGithub } from "react-icons/vsc";
import { FaWhatsapp } from "react-icons/fa";
import { TiSocialInstagramCircular } from "react-icons/ti";
import Link from "next/link";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 700,
      delay: 50,
      once: true,
    });
  }, []);

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="700"
      className="bg-[#121212] py-12 px-4 sm:py-16 sm:px-6 xl:px-20"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white font-bold mb-8 sm:mb-12">
          Contact Me
        </h1>
        <ul className="space-y-8 sm:space-y-10 mb-8 sm:mb-12">
          <li className="contact-item">
            <a
              href="https://www.google.com/maps/place/Dubai,+United+Arab+Emirates"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-3"
            >
              <FaLocationDot className="contact-icon text-3xl sm:text-4xl lg:text-5xl" />
              <h1 className="contact-text text-lg sm:text-xl md:text-2xl lg:text-3xl">
                Abu Dhabi, United Arab Emirates
              </h1>
            </a>
          </li>
          <li className="contact-item">
            <a href="mailto:mufeedrahmanuk@gmail.com?subject=Contact%20Request&body=Hello%20Mufeed,%0A%0AI%20would%20like%20to%20get%20in%20touch%20with%20you." className="flex items-center justify-center space-x-3">
              <MdEmail className="contact-icon text-3xl sm:text-4xl lg:text-5xl" />
              <h1 className="contact-text text-lg sm:text-xl md:text-2xl lg:text-3xl">
                mufeedrahmanuk@gmail.com
              </h1>
            </a>
          </li>
          <li className="contact-item">
            <a href="tel:+971559917501" className="flex items-center justify-center space-x-3">
              <IoMdCall className="contact-icon text-3xl sm:text-4xl lg:text-5xl" />
              <h1 className="contact-text text-lg sm:text-xl md:text-2xl lg:text-3xl">
                +971 55 991 7501
              </h1>
            </a>
          </li>
        </ul>

        <div className="border-t border-neutral-700 py-4 mb-6 sm:mb-8"></div>

        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8">
          <Link href={"https://www.linkedin.com/in/mufeedrahmanuk"}>
            <TiSocialLinkedinCircular
              size={50}
              className="text-neutral-600 hover:text-purple-500 transition-all duration-300 cursor-pointer transform hover:scale-110"
            />
          </Link>
          <Link href={"https://wa.me/971559917501"}>
            <FaWhatsapp
              size={50}
              className="text-neutral-600 hover:text-green-500 transition-all duration-300 cursor-pointer transform hover:scale-110"
            />
          </Link>
          <Link href={"https://github.com/mufeedrahmanuk"}>
            <VscGithub
              size={50}
              className="text-neutral-600 hover:text-purple-500 transition-all duration-300 cursor-pointer transform hover:scale-110"
            />
          </Link>
          <Link href={"https://www.instagram.com/mufeedrahmanuk/"}>
            <TiSocialInstagramCircular
              size={50}
              className="text-neutral-600 hover:text-purple-500 transition-all duration-300 cursor-pointer transform hover:scale-110"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
