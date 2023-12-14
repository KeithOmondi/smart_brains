import React from "react";
import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <>
    
    <div className="bg-[#555]">
      
      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 py-7">
        <h1 className="lg:text-2xl text-1xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5">
          <span className="text-[#56d879] text-[20px]">Subscribe</span> to get latest news{" "}
          <br />
          
        </h1>
        <div>
          <input
            type="text"
            required
            placeholder="Enter your email..."
            className="text-gray-800
                sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none"
          />
          <button className="bg-[#56d879] hover:bg-teal-500 duration-300 px-5 py-2.5 rounded-md text-whie md:w-auto w-full">
            Submit
          </button>
        </div>



        
      </div>

      <div className="flex col-4 ml-3 gap-4 justify-between mr-10">
        
        <br />
        
        <div>
          <h3 className="text-[#fff]">Smart Brains Kenya</h3>
          <p className="text-[#000]">We aim to give our children a future <br /> that equips them with Tech
           awareness <br/> which in the fututre will lead to their next stepping stone</p>
        </div>
      <div className="">
        <h1 className="text-[#fff]">Company</h1>
        <div>
          <Link to='/'>Home</Link>
        </div>
      </div>

      <div className="block">
        <h1 className="text-[#fff]">Quick Links</h1>
        <div>
        <Link to='/' className="flex">Home</Link>
        <Link to='/' className="flex">Corses</Link>
        <Link to='/' className="flex">About</Link>
        <Link to='/' className="flex">Team</Link>
        <Link to='/' className="flex">Pricing</Link>
        <Link to='/' className="flex">Journal</Link>
        <Link to='/' className="flex">FAQ</Link>
        <Link to='/' className="flex">Contact</Link>
        </div>
      </div> 

      <div className="">
        <h1 className="text-[#fff]">About</h1>
        <Link to='/'>Home</Link>
      </div>

      <div className="">
        <h1 className="text-[#fff]">Contacts/Location</h1>
        <div>
        
          <Link to='/' className="flex gap-2"><FaLocationDot className="text-[#fff]"/> Nairobi</Link>
          <Link to='/' className="flex agp-2"><FaEnvelope className="text-[#fff]"/> info@smartbrains.com</Link>
          <Link to="/" className="flex gap-2"><FaPhoneAlt className="text-[#fff]"/> +254 724242424</Link>

        </div>
      </div>


      </div>

        <p className="text-white align-center text-center pt-4 bg-black w-full">&copy; 2023 Smart Brains Kenya. All rights reserved.</p>
     
    </div>
    </>
  );
};

export default Footer;
