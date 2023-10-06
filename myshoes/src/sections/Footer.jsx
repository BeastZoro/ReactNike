import React from "react";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";
import { copyrightSign } from "../assets/icons";

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <img
              src={footerLogo}
              alt="footLogo"
              width={150}
              height={46}
              className="m-0"
            />
          </a>
          <p className="mt-6 text-base leading-7 font-montserrat text-white-500 sm:max-w-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
            voluptatum! Inventore tempore vitae non voluptatibus?
          </p>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((item, index) => (
              <div
                key={index}
                className="flex justify-center items-center w-12 h-12 bg-white rounded-full"
              >
                <img src={item.src} alt={item.alt} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((ele, index) => (
            <div key={index}>
              <h4 className="font-montserrat text-2xl leading-normal font-medium mb-6 text-white">
                {ele.title}
              </h4>
              <ul>
                {ele.links.map((item, index) => (
                  <li
                    key={index}
                    className="mt-3 font-montserrat leading-normal text-base text-white hover:text-slate-gray"
                  >
                    <a href={item.link}>{item.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex justify-between text-white-500 mt-24 max-sm:flex-col max-sm:items-center text-white">
          <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
            <img
              src={copyrightSign}
              alt="copyright"
              width={20}
              height={20}
              className="rounded-full m-0"
            />
            <p>copyright. All rights reserved.</p>
          </div>
          <p className="font-montserrat cursor-pointer ">Terms & conditions</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
