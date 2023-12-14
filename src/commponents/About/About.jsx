import React from 'react';
import { about } from "../../static/data";
import Wrapper from './Wrapper';

const About = () => {
  return (
    <>
      <section className='w-full p-14 mb-14 auto'>
        <div className='flex'>
          <div className='left md:800px:hidden w-[100%] h-full pt-11'>
            {/* Image on the left */}
            <img src="https://images.pexels.com/photos/5428003/pexels-photo-5428003.jpeg?auto=compress&cs=tinysrgb&w=600" alt="About Us" />
          </div>
          <div className='ml-2 rounded-lg'>
            {/* Content on the right */}
            <h1 className='mb-4 text-[19px] font-bold text-center'>BENEFITS OF BECOMING PART OF OUR COMMUNITY</h1>
            <div className="items">
              {about.map((i, index) => (
                <div  key={index} className='flex mb-10 bg-white p-2 margin-auto' style={{borderRadius:".4rem"}}>
                  <div className="img">
                    <img src={i.image} alt=""  />
                  </div>
                  <div className="text ml-5">
                    <h2 className="font-bold">{i.title}</h2>
                    <h4>{i.desc}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      <Wrapper />
    </>
  );
}

export default About;
