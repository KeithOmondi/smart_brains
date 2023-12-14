import React from 'react';
import { cardc } from '../../static/data';

const DetailsCard = () => {
  return (
    <div className="container flex">
    {cardc.map((i, index) => (
      <div className="course-card relative w-full md:w-1/2 lg:w-1/6" key={index}>
        <img src={i.cover} alt={`Course ${index + 1}`} className="course-img w-full h-auto" />
        <div className="course-desc p-4">
          <h3>{i.name}</h3>
          <p>{i.desc}</p>
        </div>
      </div>
    ))}
  </div>
  
  );
};

export default DetailsCard;
