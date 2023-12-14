import React from "react";
import { testimonials } from "../../static/data";
import Slider from "react-slick";

const TestimonialsSlide = () => {
  const CustomPrevArrow = (props) => (
    <button
      {...props}
      className="custom-arrow custom-prev-arrow"
      aria-label="Previous"
    />
  );

  const CustomNextArrow = (props) => (
    <button
      {...props}
      className="custom-arrow custom-next-arrow color-[#DC143C]"
      aria-label="Next"
    />
  );

  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <div className="w-full" style={{boxShadow: "0px 0px 10px"}}>
        <h2 className="justify-center text-center text-[20px] font-bold pb-3">PARENTS REVIEW</h2>
      <Slider {...settings}>
        {testimonials.map((item, index) => (
          <div key={index} className="testimonial-item" >
            <img
              src={item.cover}
              alt={`Course ${index + 1}`}
              className="carousel-img"
              style={{boxShadow: "0px 0px 10px"}}
            />
            <div className="carousel-desc">
              <h6 className="font-[10px] mx-auto">{item.name}</h6>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialsSlide;
