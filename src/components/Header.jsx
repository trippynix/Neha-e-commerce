import React from "react";
import { Link } from "react-router";

function Header() {
  return (
    <>
      <header className="font-pfd-regular bg-white">
        <div className="flex justify-around">
          <div className="text-3xl">NR</div>
          <div>Neha Rajput</div>
          <div className="">
            {/* search icon */}
            {/* profile icon */}
            {/* heart icon */}
            {/* cart icon */}
            {/* whatsapp icon */}
          </div>
        </div>
        <div className="flex flex-col items-center">
          <hr className="w-1/24 border-0.8 border-red-100 mb-2" />
          <div className="flex justify-center space-x-8">
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
