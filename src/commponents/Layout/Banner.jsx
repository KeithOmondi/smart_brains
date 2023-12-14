import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const Banner = () => {
  return (
    <>
      <section className="hero bg-gray-800 text-white py-16">
        <h2 className="pl-28 text-[30px] font-bold">Welcome to Smart Brains</h2>
        <div className="container left-0">
          <div className="lg:flex lg:flex-col lg:items-start pl-5">
            <p className="text-lg mb-8 lg:w-1/2 lg:text-left">
              We aim to provide a unique education system that will equip our
              young learners with the skills to build their next career.
            </p>
            <div className="button flex lg:text-left gap-3">
              <Link
                to="#"
                className="block primary-btn mb-4 lg:mb-0 flex gap-2 bg-blue-500 p-4 rounded-md"
              >
                GET STARTED NOW <FaArrowRight size={20} className="mr-2" />
              </Link>
              <Link
                to="#"
                className="block text-gray-300 hover:text-white bg-green-500 p-4 rounded-md flex gap-2"
              >
                VIEW COURSE <FaArrowRight size={20} className="mr-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div className="margin"></div>
    </>
  );
};

export default Banner;
