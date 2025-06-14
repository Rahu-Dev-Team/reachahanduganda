import React, { useRef } from "react";
import { motion } from "framer-motion";
import home1 from "/Users/nkangi/Desktop/reachahanduganda/frontend/src/assets/peers_3.jpg";
import home2 from "/Users/nkangi/Desktop/reachahanduganda/frontend/src/assets/peers_2.jpg";
import home3 from "/Users/nkangi/Desktop/reachahanduganda/frontend/src/assets/peers_4.jpg";
import home4 from "/Users/nkangi/Desktop/reachahanduganda/frontend/src/assets/peers_5.jpg";
import home6 from "/Users/nkangi/Desktop/reachahanduganda/frontend/src/assets/peers_6.jpg";
import home7 from "/Users/nkangi/Desktop/reachahanduganda/frontend/src/assets/peers_7.jpg";
import home8 from "/Users/nkangi/Desktop/reachahanduganda/frontend/src/assets/peers_8.jpg";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Section1 = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const images = [ home6, home7, home8];
  const images2 = [home1, home2, home3];

  return (
    <div className="grid laptop-sm:grid-cols-2 mobile-sm:grid-cols-1 gap-4 ">
      {/* Get involved */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          delay: 0.2,
          x: { type: "spring", stiffness: 60 },
          opacity: { duration: 2},
          ease: "easein",
          duration: 2,
        }}
        className="bg-[#0e2d5c] mobile-sm:h-[80vh] laptop-sm:h-auto rounded-3xl relative overflow-hidden"
      >
        <div className="relative h-[100vh] w-full">
          <Slider ref={sliderRef} {...settings}>
            {images.map((img, index) => (
              <div key={index} className="relative w-full h-[100vh]">
                <img
                  src={img}
                  alt={`slide-${index}`}
                  className="absolute top-0 left-0 w-full h-full object-cover"
                />
              </div>
            ))}
          </Slider>

          <div className="absolute inset-0 bg-black bg-opacity-40">
            <div className="absolute bottom-[20%] left-[10%] text-white">
              <h1 className="poppinsBold uppercase text-4xl md:text-5xl mb-6">
                <span>We empower young</span>
                <br />
                <span>people in Uganda</span>
              </h1>
              <p className="poppinsRegular text-md md:body-1 mb-4">
                We recognize that young people's concern can only be addressed
                by young people
              </p>
              
              <a href="GetInvolved">
                <button className="ring-2 ring-white text-darkBlue py-2 px-6 md:py-3 md:px-8 rounded-[25px] garnetFont hover:bg-black hover:text-white hover:border-2 hover:border-white">
                  Get involved
                </button>
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="grid laptop-lg:grid-rows-2 gap-4">
        {/* We inspire */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easein",
            duration: 1,
          }}
          className="bg-[#0064e6] rounded-3xl relative flex flex-col justify-center items-start p-10"
          style={{
            backgroundImage: `url(${home4})`,
            backgroundSize: "cover",
            backgroundPosition: "top center",
          }}
        >
          <div className="">
            <p className="poppinsSemiBold text-white h3 mb-2">We inspire</p>
            <p className="poppinsRegular text-white body-1">
              RAHU inspires youth by introducing them to diverse role models and
              mentors in fields like medicine, education, theatre and creative
              arts entrepreneurship.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.4,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easein",
            duration: 1,
          }}
          className="grid laptop-sm:grid-cols-2 tablet:grid-cols-2 mobile-sm:grid-cols-1 gap-4"
        >
          {/* Our programs */}
          <div className="bg-[#0a9ede] rounded-3xl relative flex flex-col justify-center items-start p-10">
            <div className="flex items-start">
              <p className="poppinsRegular text-[90px] md:text-[100px] text-white">
                20
              </p>
              <div className="flex flex-col ml-4">
                <p className="poppinsRegular text-[40px] md:text-[50px] text-white">
                  +
                </p>
                <p className="poppinsRegular body-2 text-white mt-4">
                  programs
                </p>
              </div>
            </div>
            <p className="poppinsRegular text-sm md:body-1 text-white mt-4">
              Each of RAHU's programs, campaigns or project is tailored to
              impact the youth.
            </p>
            <a href="Programs" className="mt-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95, rotate: "2.5deg" }}
                transition={{ duration: 0.125, ease: "easeInOut" }}
                className="border-2 border-white body-1 text-white hover:text-white hover:bg-black hover:border-2 hover:border-white py-2 px-6 lg:py-3 lg:px-8 rounded-[25px] poppinsSemiBold"
              >
                Our Programs
              </motion.button>
            </a>
          </div>

          {/* Our Events */}

          

        <div className=" rounded-3xl h-full overflow-hidden relative">
          <div className="">
            <Slider ref={sliderRef} {...settings}>
              {images2.map((img, index) => (
                <div key={index} className="w-full h-[31rem]">
                  <img
                    src={img}
                    alt={`slide-${index}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </Slider>
          </div>

          <div className="absolute inset-0 flex items-end justify-center p-6">
            <button className="w-2/3 text-center rounded-full py-3 px-3 ring-2 ring-white garnetFont text-white hover:bg-black transition duration-300">
              Our Events
            </button>
          </div>

        </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Section1;