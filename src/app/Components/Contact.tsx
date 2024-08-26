import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { VscGithub } from "react-icons/vsc";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { TiSocialInstagramCircular } from "react-icons/ti";
import Link from "next/link";

const Contact = () => {
  return (
    <div
      data-aos="fade-up" // Unified animation for the entire section
      data-aos-duration="600" // Adjusted duration for smooth animation
      className="bg-[#121212] py-12 px-4 sm:py-16 sm:px-6 xl:px-20"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h1
          className="text-4xl sm:text-5xl lg:text-6xl text-white font-bold mb-8 sm:mb-12"
        >
          Contact Me
        </h1>
        <ul className="space-y-8 sm:space-y-10 mb-8 sm:mb-12">
          <li className="contact-item">
            <FaLocationDot className="contact-icon text-3xl sm:text-4xl lg:text-5xl" />
            <h1 className="contact-text text-lg sm:text-xl md:text-2xl lg:text-3xl">
              Dubai, United Arab Emirates
            </h1>
          </li>
          <li className="contact-item">
            <MdEmail className="contact-icon text-3xl sm:text-4xl lg:text-5xl" />
            <h1 className="contact-text text-lg sm:text-xl md:text-2xl lg:text-3xl">
              mufeedrahmanuk@gmail.com
            </h1>
          </li>
          <li className="contact-item">
            <IoMdCall className="contact-icon text-3xl sm:text-4xl lg:text-5xl" />
            <h1 className="contact-text text-lg sm:text-xl md:text-2xl lg:text-3xl">
              +971 55 991 7501
            </h1>
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
          <Link href={"https://github.com/mufeedrahmanuk"}>
            <VscGithub
              size={40}
              className="text-neutral-600 hover:text-purple-500 transition-all duration-300 cursor-pointer transform hover:scale-110"
            />
          </Link>
          <Link href={"https://www.instagram.com/mufeedrahmanuk/"}>
            <TiSocialInstagramCircular
              size={50}
              className="text-neutral-600 hover:text-purple-500 transition-all duration-300 cursor-pointer transform hover:scale-110"
            />
          </Link>
          <Link href={"https://www.facebook.com/mufeedrahmanuk"}>
            <TiSocialFacebookCircular
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
