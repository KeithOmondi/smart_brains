import React from 'react'
import Marquee from "react-fast-marquee";

const Partners = () => {
  return (
    
    <div>
        <h1 className='text-center font-bold text-[20px]'>OUR PARTNERS</h1>
        <div className='bg-white mb-8' style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
        
        <Marquee direction='left'>
          <div className='flex gap-7 h-[100px] w-full'>
          <img src="https://www.smartbrainskenya.com/wp-content/uploads/2020/05/download.jpeg" alt=""
           
          />
          <img src="https://www.smartbrainskenya.com/wp-content/uploads/2022/03/rohpine-international.png" 
          alt="" 
          />
          <img src="https://www.smartbrainskenya.com/wp-content/uploads/2020/05/acacia-.jpeg" 
          alt="" />
          <img src="https://www.smartbrainskenya.com/wp-content/uploads/2020/05/whitestar.png" 
          alt="" />
          <img src="https://www.smartbrainskenya.com/wp-content/uploads/2020/05/kinderstart.jpeg" 
          alt="" />
          <img src="https://www.smartbrainskenya.com/wp-content/uploads/2020/05/brainston.png" 
          alt="" />
          <img src="https://www.smartbrainskenya.com/wp-content/uploads/2020/05/creative-integrated.png" 
          
          alt="" />
          <img src="https://www.smartbrainskenya.com/wp-content/uploads/2019/12/Mainflow-school.png" 
          alt="" />
          <img src="https://www.smartbrainskenya.com/wp-content/uploads/2020/05/amini-.jpeg" 
          alt="" />
          <img src="https://www.smartbrainskenya.com/wp-content/uploads/2019/12/pcea-langata.jpeg" 
          alt="" />
          </div>
        </Marquee>
      </div>
    </div>
  )
}

export default Partners
