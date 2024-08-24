import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import Swiper styles
import 'swiper/css/navigation'; // Import Swiper Navigation styles
import { Navigation } from 'swiper/modules'; // Import Swiper Navigation module
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

const CertificationsSlider = () => {
  return (
    <div className="mt-4">
      <header className="font-semibold text-2xl mt-[30px] pr-0 pb-[20px]">CERTIFICATION</header>
      <div className="relative">
        <Swiper
          modules={[Navigation]} // Include Navigation module only
          navigation={{
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
          }}
          loop={true}
          className="rounded-md border-none bg-gradient-to-t to-gray-800 from-gray-950 px-4 py-6 flex justify-center align-middle flex-col shadow-lg"
        >
             <SwiperSlide>
            <div className="text-center p-4 mb-4">
              <p className="text-bold text-lg font-mono pt-4">Frontend Intern @</p>
              <img
                src="https://senchola.com/wp-content/uploads/2023/03/senchola-logo.png"
                alt="Shenchola"
                className="mx-auto h-20"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-center p-4 my-4">
              <p className="text-bold text-lg font-mono">Fullstack development @</p>
              <img
                src="https://i0.wp.com/login360.in/wp-content/uploads/2024/05/login-360-new-logo-2.png?w=688&ssl=1"
                alt="Login360"
                className="mx-auto h-14 mt-2"
              />
            </div>
          </SwiperSlide>
         
        </Swiper>
        {/* Navigation Buttons */}
        <MdArrowBackIos className="swiper-button-prev absolute left-2 top-[50%] cursor-pointer text-gray-500 hover:text-gray-700 transition-colors" />
        <MdArrowForwardIos className="swiper-button-next absolute right-2 top-[50%] cursor-pointer text-gray-500 hover:text-gray-700 transition-colors" />
        {/* Pagination Dots - Removed */}
      </div>
    </div>
  );
};

export default CertificationsSlider;
