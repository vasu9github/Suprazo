import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import "swiper/css";
import "swiper/css/pagination";

import "./Slider.css"; 

const Slider = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);

  const cards = [
    {
      title: "Campus/HR Management Tools",
      desc: "Specialized tools for educational institutions and HR departments to simplify management and improve productivity.",
      gradient: "from-blue-600 to-indigo-500",
      icon: "🏫",
    },
    {
      title: "ERP / Admin Dashboards",
      desc: "Comprehensive enterprise resource planning solutions and intuitive admin dashboards to streamline your business operations.",
      gradient: "from-pink-600 to-purple-600",
      icon: "📊",
    },
    {
      title: "UI/UX & Branding",
      desc: "Creative and strategic design services that elevate your brand identity and deliver exceptional user experiences.",
      gradient: "from-sky-600 to-blue-600",
      icon: "🎨",
    },
    {
      title: "AI/ML Automation",
      desc: "Robust and scalable e-commerce platforms tailored to your business needs, from storefront to checkout.",
      gradient: "from-green-500 to-teal-500",
      icon: "🤖",
    },
    {
      title: "Custom Web & Mobile App Development", // This title is longer and might wrap
      desc: "Tailored web and mobile applications designed to meet your specific business requirements and enhance user experience.",
      gradient: "from-orange-500 to-amber-500",
      icon: "👨‍💻",
    },
  ];

  return (
    <div className="w-full relative">
      <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        onSwiper={setSwiperInstance}
        pagination={{ clickable: true }}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 30 },
          1024: { slidesPerView: 3, spaceBetween: 40 },
        }}
        className="!pb-16"
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index}> 
            <div
              className={`rounded-2xl p-8 text-white bg-gradient-to-br ${card.gradient} shadow-2xl flex flex-col h-full transition-transform duration-300 hover:-translate-y-2 cursor-pointer`}
            >
              <div className="text-5xl mb-6">{card.icon}</div>
              <div className="min-h-[5rem]">
                <h3 className="text-2xl font-bold mb-3">{card.title}</h3>
              </div>
              <p className="text-base opacity-90 flex-grow">{card.desc}</p>
              <a
                href="#"
                className="mt-6 inline-flex items-center text-sm font-semibold hover:underline"
              >
                Learn more →
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        onClick={() => swiperInstance?.slidePrev()}
        className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-6 z-10 p-2 bg-white/50 dark:bg-white/10 backdrop-blur-sm rounded-full text-gray-800 dark:text-white hover:bg-white dark:hover:bg-white/20 transition-all duration-300"
        aria-label="Previous slide"
      >
        <FiChevronLeft size={24} />
      </button>

      <button
        onClick={() => swiperInstance?.slideNext()}
        className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-6 z-10 p-2 bg-white/50 dark:bg-white/10 backdrop-blur-sm rounded-full text-gray-800 dark:text-white hover:bg-white dark:hover:bg-white/20 transition-all duration-300"
        aria-label="Next slide"
      >
        <FiChevronRight size={24} />
      </button>
    </div>
  );
};

export default Slider;