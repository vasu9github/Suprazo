import React from 'react';
import Slider from '../component/Slider'; 

const Services = () => {
  return (
    <section id='services' className="w-full py-16 md:py-24">
      <div className="flex flex-col justify-center items-center w-full mx-auto max-w-6xl px-4">
        <div className="flex flex-col justify-center items-center gap-4 text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Our Services
          </h1>
          <p className="text-base md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl">
            We offer a comprehensive range of IT solutions tailored to meet the diverse needs of modern businesses.
          </p>
        </div>

        <div className="w-full mt-10">
          <Slider />
        </div>
      </div>
    </section>
  );
};

export default Services;