import React from 'react';
import { achievements } from '../../static/data';

const Wrapper = () => {
  return (
    <section className='wrapper'>
      <div className='container flex cols-4 justify-center gap-4 md:flex-row'>
        {achievements.map((i, index) => (
          <div className="box flex flex-col md:flex-row items-center md:items-start p-4 border-b border-gray-200" key={index}>
            <div className="img">
              <img src={i.image} alt="" className="rounded-full w-20 h-20 md:w-16 md:h-16 " />
            </div>
            <div className="text mt-4 md:ml-4 md:mt-0">
              <h1 className="font-bold text-lg md:text-xl">{i.title}</h1>
              <h3 className="text-sm md:text-base text-[#DC143C]">{i.desc}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Wrapper;
