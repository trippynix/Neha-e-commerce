import React from "react";
import logo from "../assets/center_logo.png";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { AiOutlineFacebook } from "react-icons/ai";

function Footer() {
  return (
    <>
      <footer className="bg-black text-white pt-15">
        <div className="flex items-center justify-between">
          <div className="pl-20 space-y-2">
            <img src={logo} className="h-12" />
            <div className="font-pfd-regular font-thin text-2xl">
              Fashion Designer
            </div>
            <div className="font-pfd-regular font-thin text-base">
              Creating Timeless Fashion
            </div>
            <div className="font-pfd-regular font-thin text-base">
              Pieces That Celebrate The
            </div>
            <div className="font-pfd-regular font-thin text-base">
              Beauty Of Traditional
            </div>
            <div className="font-pfd-regular font-thin text-base">
              Craftsmanship And Modern
            </div>
            <div className="font-pfd-regular font-thin text-base">Elegance</div>
          </div>
          <div className="space-y-3">
            <div className="font-pfd-regular font-thin text-lg">
              Quick Links
            </div>
            <div className="font-pfd-regular font-thin text-lg">
              Traditional
            </div>
            <div className="font-pfd-regular font-thin text-lg">Western</div>
            <div className="font-pfd-regular font-thin text-lg">
              Accessories
            </div>
            <div className="font-pfd-regular font-thin text-lg">Rentals</div>
            <div className="font-pfd-regular font-thin text-lg">
              Ready to Ship
            </div>
          </div>
          <div className="space-y-3">
            <div className="font-pfd-regular font-thin text-lg">Services</div>
            <div className="font-pfd-regular font-thin text-lg">
              Custom Design
            </div>
            <div className="font-pfd-regular font-thin text-lg">
              Outfit & Jewelry Rental
            </div>
            <div className="font-pfd-regular font-thin text-lg">
              Accessories
            </div>
            <div className="font-pfd-regular font-thin text-lg">
              Personal Styling
            </div>
            <div className="font-pfd-regular font-thin text-lg">
              Ready To Ship
            </div>
          </div>
          <div className="pr-20 space-y-3 mt-[-80px]">
            <div className="font-pfd-regular font-thin text-lg">Contact Us</div>
            <div className="font-pfd-regular font-thin text-lg">
              <div className="flex">
                <MdOutlineEmail className="text-2xl mr-2 mt-1" />
                neharajput@gmail.com
              </div>
            </div>
            <div className="font-pfd-regular font-thin text-lg">
              <div className="flex">
                <FaPhone className="text-2xl mr-2 mt-1" />
                +91 9420087800
              </div>
            </div>
            <div className="font-pfd-regular font-thin text-lg">
              <div className="flex">
                <FaLocationDot className="text-2xl mr-2 mt-1" />
                Nashik, India
              </div>
            </div>
          </div>
        </div>
        <div className="flex ms-20 mt-8 space-x-7">
          <FaInstagram className="text-4xl" />
          <FaWhatsapp className="text-4xl" />
          <AiOutlineFacebook className="text-4xl" />
        </div>
        <hr className="mx-20 my-7" />
        <div className="ms-20 font-pfd-regular font-thin pb-6">
          &copy; 2025 Neha Rajput. All rights reserved.
        </div>
      </footer>
    </>
  );
}

export default Footer;
