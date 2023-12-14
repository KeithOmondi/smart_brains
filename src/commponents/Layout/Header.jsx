import React, { useState } from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { navItems } from "../../static/data"
import { RxCross2 } from "react-icons/rx";
import { FaBars } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaClock } from "react-icons/fa6";

const Header = () => {
    const [click, setClick] = useState(false)
  return (
    <>
    <div className="head">
        <div className="justify-between flex">
            <div className="flex pl-2 gap-2">
                <h5 className='flex gap-1'><FaLocationDot className='pt-1' size={20}/> Nairobi, Embakasi</h5> 
                <h5 className='flex gap-1'><FaClock className='pt-1' size={20}/> Mon - Fri | 8am - 5pm </h5>
            </div>

            <div className="social pr-2">
            <FaFacebook size={20} />
            <FaInstagram size={20} />
            <FaTwitter size={20} />
            <FaYoutube size={20} />
            </div>
        </div>
    </div>

    <header>
        <nav className="nav">
        <div>
        <img src="https://media.publit.io/file/SmartChacho/Round-Logo-3.png" 
        alt="" 
        className='h-[50px] w-[120px] flex'
        />
      </div>
        <div className={click ? "mobile-nav" : "text-[#fff] space-x-4"} onClick={() =>setClick(false)}> {/* Adjust space-x to control the spacing between links */}
  {
    navItems.map((i, index) => (
      <Link to={i.url} key={index} className="text-[#fff] hover:text-gray-300"> {/* Set link text color and hover color */}
        {i.title}
      </Link>
    ))
  }
</div>

            <div className="get">
                <Link to="/register">GET STARTED</Link>
            </div>

            <button className='toggle' onClick={() =>setClick(!click)}>
                {click ? <RxCross2 /> : <FaBars />}
            </button>
        </nav>
    </header>
    </>
  )
}

export default Header
