import React from "react";
import { Link } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Homepage() {
  return (
    <>
      <Header />
      {/* FIRST SCREEN */}
      <div className="h-screen bg-[url('/src/assets/bg-1st.jpg')] bg-contain bg-no-repeat bg-center">
        <div className="text-center text-white font-pfd-regular text-4xl pt-50">
          Crafted For Celebration
        </div>
        <div className="text-center text-white font-pfd-regular text-4xl">
          <Link to="/" className="relative z-10">
            <div className="relative px-6 py-3 text-white group cursor-pointer w-1/5 justify-center mx-auto mt-5">
              <span className="relative z-10">Explore Now</span>
              {/* Border animation layer */}
              <span className="absolute inset-0 border-2 border-transparent group-hover:border-white transition-all duration-500"></span>

              {/* Bottom line first */}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white group-hover:w-full transition-all duration-300"></span>

              {/* Right vertical line */}
              <span className="absolute right-0 bottom-0 w-[2px] h-0 bg-white group-hover:h-full transition-all duration-300 delay-150"></span>

              {/* Top line */}
              <span className="absolute right-0 top-0 w-0 h-[2px] bg-white group-hover:w-full transition-all duration-300 delay-300"></span>

              {/* Left vertical line */}
              <span className="absolute left-0 top-0 w-[2px] h-0 bg-white group-hover:h-full transition-all duration-300 delay-500"></span>
            </div>
          </Link>
        </div>
      </div>
      {/* SECOND SCREEN */}
      <div className="h-screen">
        <div className="text-4xl font-pfd-regular text-center font-bold my-7">
          SHOP BY CATEGORY
        </div>
        <div className="flex mx-7">
          <div className="w-1/3 h-150 bg-[url('/src/assets/grid-traditional.jpg')] bg-contain bg-no-repeat bg-center relative group overflow-hidden">
            {/* Dark overlay */}
            <Link
              to="/"
              className="absolute inset-0 bg-black opacity-0 transition-opacity duration-500 group-hover:opacity-50"
            ></Link>

            {/* Text */}
            <p
              className="absolute top-8 left-1/2 -translate-x-1/2 text-black font-extrabold font-pfd-regular text-4xl
                transition-all duration-700 ease-in-out
                group-hover:top-1/2 group-hover:-translate-y-1/2 group-hover:text-5xl group-hover:text-white"
            >
              Traditionals
            </p>
          </div>

          <div className="w-1/3 h-150 bg-[url('/src/assets/grid-western.jpg')] bg-contain bg-no-repeat bg-center relative group overflow-hidden">
            {/* Dark overlay */}
            <Link
              to="/"
              className="absolute inset-0 bg-black opacity-0 transition-opacity duration-500 group-hover:opacity-50"
            ></Link>

            {/* Text */}
            <p
              className="absolute top-8 left-1/2 -translate-x-1/2 text-black font-extrabold font-pfd-regular text-4xl
                transition-all duration-700 ease-in-out
                group-hover:top-1/2 group-hover:-translate-y-1/2 group-hover:text-6xl group-hover:text-white"
            >
              Western
            </p>
          </div>

          <div className="w-1/3 h-150 bg-[url('/src/assets/grid-rentals.jpg')] bg-contain bg-no-repeat bg-center relative group overflow-hidden">
            {/* Dark overlay */}
            <Link
              to="/"
              className="absolute inset-0 bg-black opacity-0 transition-opacity duration-500 group-hover:opacity-50"
            ></Link>

            {/* Text */}
            <p
              className="absolute top-30 left-10 rotate-[-90deg] origin-bottom-left text-white font-extrabold font-pfd-regular text-4xl 
                transition-all duration-700 ease-in-out 
                group-hover:top-1/2 group-hover:left-1/2 group-hover:-translate-x-1/2 group-hover:-translate-y-1/2 group-hover:rotate-0 group-hover:text-6xl"
            >
              Rentals
            </p>
          </div>

          <div className="w-1/3 h-150 bg-[url('/src/assets/grid-accessories.jpg')] bg-contain bg-no-repeat bg-center relative group overflow-hidden">
            {/* Dark overlay */}
            <Link
              to="/"
              className="absolute inset-0 bg-black opacity-0 transition-opacity duration-500 group-hover:opacity-50"
            ></Link>

            {/* Text */}
            <p
              className="absolute bottom-8 left-1/2 -translate-x-1/2 text-black font-extrabold font-pfd-regular text-4xl
                transition-all duration-700 ease-in-out 
                group-hover:bottom-1/2 group-hover:-translate-y-1/2 group-hover:text-5xl group-hover:text-white"
            >
              Accessories
            </p>
          </div>

          <div className="w-1/3 h-150 bg-[url('/src/assets/grid-ready.jpg')] bg-contain bg-no-repeat bg-center relative group overflow-hidden">
            {/* Dark overlay */}
            <Link
              to="/"
              className="absolute inset-0 bg-black opacity-0 transition-opacity duration-500 group-hover:opacity-50"
            ></Link>

            {/* Text */}
            <p
              className="absolute bottom-16 left-14 text-white font-extrabold font-pfd-regular text-3xl
                transition-all duration-700 ease-in-out
                group-hover:bottom-1/3 group-hover:left-1/2 group-hover:-translate-x-1/2 group-hover:-translate-y-1/2 group-hover:text-5xl"
            >
              Ready To Ship
            </p>
          </div>
        </div>
      </div>
      <hr className="border-t-3 rounded border-gray-300 mx-150" />

      {/* THIRD SCREEN */}
      <div>
        <div className="text-black text-4xl font-bold font-pfd-regular text-center my-10">
          NEW ARRIVALS
        </div>
        <div className="flex">
          {/* Product */}
          {/* Product */}
          {/* Product */}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Homepage;
