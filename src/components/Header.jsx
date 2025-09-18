import React from "react";
import { Link } from "react-router";
import left_logo from "../assets/left_logo.png";
import center_logo from "../assets/center_logo.png";
import { CiSearch } from "react-icons/ci";
import { IoPerson } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { GiShoppingBag } from "react-icons/gi";
import { IoLogoWhatsapp } from "react-icons/io";

function Header() {
  return (
    <>
      <header className="font-pfd-regular bg-white">
        <div className="flex items-center justify-between mt-5">
          <img src={left_logo} className="h-12 mt-2 pl-10" />
          <img src={center_logo} className="h-12 pl-25" />
          <div className="flex space-x-4 pr-10">
            {/* search icon */}
            <Link to="/">
              <CiSearch className="text-[27px]" />
            </Link>
            {/* profile icon */}
            <Link to="/">
              <IoPerson className="text-[27px]" />
            </Link>
            {/* heart icon */}
            <Link to="/">
              <CiHeart className="text-[27px]" />
            </Link>
            {/* cart icon */}
            <Link to="/">
              <GiShoppingBag className="text-[27px]" />
            </Link>
            {/* whatsapp icon */}
            <Link to="/">
              <IoLogoWhatsapp className="text-[27px] text-green-500" />
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <hr className="w-1/20 border-[1.2px] border-gray-300 mb-2" />
          <div className="flex justify-center space-x-15 text-xl font-semibold">
            <Link to="/">TRADITIONAL</Link>
            <Link to="/">WESTERN</Link>
            <Link to="/">ACCESSORIES</Link>
            <Link to="/">RENTALS</Link>
            <Link to="/">READY TO SHIP</Link>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
