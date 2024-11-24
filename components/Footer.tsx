import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>

        {/* <!-- Contact Information --> */}
        <div className="space-y-4 text-center md:text-left">
          <h2 className="text-lg font-semibold text-white text-center">Contact Information</h2>
          <div className="flex items-center justify-center md:justify-start space-x-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H5a2 2 0 00-2 2v5a2 2 0 002 2z" />
            </svg>
            <span className="text-center">talhahafiz145@gmail.com</span>
          </div>
          <div className="flex items-center justify-center md:justify-start space-x-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10l1.65 1.53c.72.66 1.85.68 2.57.03l3.92-3.39c.71-.62 1.85-.61 2.56.02l3.92 3.4a2 2 0 002.57-.03L21 10m-9 11v-3a2 2 0 112 2m-6 0v-3a2 2 0 10-2 2m12 0h2m-2 0h-4" />
            </svg>
            <span>+92 308 5867 567</span>
          </div>
        </div>
    <a href="mailto:talhahafiz145@gmail.com"> 
         <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          /> 
      </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Hafiz Talha
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
                           <a href={info.url}>
              <img src={info.img} alt="icons" width={20} height={20} />
                
              </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
