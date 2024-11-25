/* eslint-disable no-unused-vars */
import React from "react";
import email from "../../assets/icon/email.png";
import phone from "../../assets/icon/telephone.png";
import fb from "../../assets/icon/facebook.png";
import location from "../../assets/icon/travel.png";

const Footer = () => {
  return (
    <div className="w-[100%] bg-gray-100 py-10 relative sm:pl-10">
      <div className="container mx-auto px-4">
     
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
         
          <div className="flex items-center">
            <img src={email} className="w-6 lg:w-8" alt="Email Icon" />
            <a
              href="mailto:azulcorp@gmail.com"
              className="ml-4 underline font-medium text-sm md:text-base text-gray-700 hover:text-primary transition-colors">
              azulcorp@gmail.com
            </a>
          </div>

          {/* Location */}
          <div className="flex items-center">
            <img src={location} className="w-6 lg:w-8" alt="Location Icon" />
            <a
              href="#"
              className="ml-4 underline font-medium text-sm md:text-base text-gray-700 hover:text-primary transition-colors">
              Panabo City, Davao del Norte, Philippines
            </a>
          </div>

          {/* Phone */}
          <div className="flex items-center">
            <img src={phone} className="w-6 lg:w-8" alt="Phone Icon" />
            <a
              href="tel:+639026906967"
              className="ml-4 underline font-medium text-sm md:text-base text-gray-700 hover:text-primary transition-colors">
              +63-902-690-6967
            </a>
          </div>

          {/* Facebook */}
          <div className="flex items-center">
            <img src={fb} className="w-6 lg:w-8" alt="Facebook Icon" />
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 underline font-medium text-sm md:text-base text-gray-700 hover:text-primary transition-colors">
              AZUL Corps.
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
