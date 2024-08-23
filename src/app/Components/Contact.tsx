import { MdEmail } from "react-icons/md";
import { FaGreaterThan } from "react-icons/fa6";
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
      data-aos="fade-up"
      className="bg-[#121212] py-8 px-4 sm:py-16 xl:px-16"
    >
      <div>
        <h1
          data-aos="fade-up"
          className="text-center text-5xl lg:text-6xl text-white font-bold"
        >
          Contact
        </h1>
        <ul data-aos="fade-up" className="space-y-8 md:px-4 py-16 lg:py-16">
        <li className="flex items-center space-x-4 lg:space-x-6">
            <FaLocationDot className="text-indigo-600 text-3xl lg:text-5xl" />
            <FaGreaterThan className="text-indigo-600 text-2xl lg:text-4xl" />
            <h1 className="text-white text-[16px] sm:text-[19px] md:text-[21px] lg:text-[22px]">
              Dubai, United Arab Emirates
            </h1>
          </li>
          
          <li className="flex items-center space-x-4 lg:space-x-6">
            <MdEmail className="text-indigo-600 text-3xl lg:text-5xl" />
            <FaGreaterThan className="text-indigo-600 text-2xl lg:text-4xl" />
            <h1 className="text-white text-[16px] sm:text-[19px] md:text-[21px] lg:text-[22px]">
              mufeedrahmanuk@gmail.com
            </h1>
          </li>

          <li className="flex items-center space-x-4 lg:space-x-6">
            <IoMdCall className="text-indigo-600 text-3xl lg:text-5xl" />
            <FaGreaterThan className="text-indigo-600 text-2xl lg:text-4xl" />
            <h1 className="text-white text-[16px] sm:text-[19px] md:text-[21px] lg:text-[22px]">
              +971 55 991 7501
            </h1>
          </li>
        </ul>

        <div
          data-aos="fade-up"
          className="border-t border-neutral-700 py-2"
        ></div>

        <div
          data-aos="fade-up"
          className="flex justify-center items-center space-x-6"
        >
          <Link href={"https://www.linkedin.com/in/mufeedrahmanuk"}>
            <TiSocialLinkedinCircular
              data-aos="fade-up"
              size={53}
              className="text-neutral-600 hover:text-purple-500 transition-all duration-200 cursor-pointer"
            />
          </Link>
          <Link href={"https://github.com/mufeedrahmanuk"}>
            <VscGithub
              data-aos="fade-up"
              size={40}
              className="text-neutral-600 hover:text-purple-500 transition-all duration-200 cursor-pointer"
            />
          </Link>
          <Link href={"https://www.instagram.com/mufeedrahmanuk/"}>
            <TiSocialInstagramCircular
              data-aos="fade-up"
              size={40}
              className="text-neutral-600 hover:text-purple-500 transition-all duration-200 cursor-pointer"
            />
          </Link>
          <Link href={"https://www.facebook.com/mufeedrahmanuk"}>
            <TiSocialFacebookCircular
              data-aos="fade-up"
              size={53}
              className="text-neutral-600 hover:text-purple-500 transition-all duration-200 cursor-pointer"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
