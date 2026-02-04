import React from 'react';
import ScrollBaseAnimation from '../ReactProject/ScrollBaseAnimation';
function index() {
  return (
    <>
      <div className="h-auto grid place-content-center bg-white ">
        <ScrollBaseAnimation
          baseVelocity={2}
          scrollDependent={true}
          className="font-xs tracking-[-0.01em] leading-[90%] bg-white text-black "
        >
         <img src="/Keerai Png (2).png" alt="Keerai World Logo" className="inline-block h-18 md:h-22  ml-32 mb-1"/>
           Fresh Keerai Grown for Healthy Everyday Living 

            
        </ScrollBaseAnimation>
      </div>
    </>
  );
}
export default index;
