import React from "react";
import React, { useEffect, useRef, useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import line from "../assets/Artboard – 5.png";
import top from "../assets/LJ4B5813 copy.png";
import cover from "../assets/drop-yellow.jpg";
import backdrop from "../assets/Artboard – 6.jpg";
import team from "../assets/rahu-team-collage.jpg";
import crystal from "../assets/Teams elements/crytsal.png";
import yellow from "../assets/Teams elements/yellow.png";
import purple from "../assets/Teams elements/purple.png";
import firsts from "../assets/Teams elements/boards.png";
import managers from "../assets/Teams elements/managers.png";
import officers from "../assets/Teams elements/officers.png";
import backdrop2 from "../assets/Artboard – 15.jpg";
import backdrop3 from "../assets/Artboard – 17.jpg";
import afri from "../assets/Artboard – 6.jpg";
import { MediaPlayer, MediaProvider } from "@vidstack/react";
import program from "../assets/program-1.jpg";
import { Poster } from "@vidstack/react";
import { PlayButton } from "@vidstack/react";
import { PauseIcon, PlayIcon } from "@vidstack/react/icons";
import "@vidstack/react/player/styles/base.css";
import Modal from "../components/Modal";
import heroImage from "../assets/hero.jpg";
import campaignImage from "../assets/campaign.jpg";
import historyImage from "../assets/history.jpg";
import povertyImage from "../assets/poverty.jpg";
import equityImage from "../assets/equity.jpg";
import climateImage from "../assets/climate.jpg";

const WhoWeArePage = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <section
        className="bg-cover bg-center text-white py-20 px-6 text-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="bg-black bg-opacity-50 py-20 px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            We envision a world free from extreme poverty. NOW.
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            We are an advocacy platform dedicated to achieving the end of
            extreme poverty, powered by a community of millions of Global
            Citizens.
          </p>
        </div>
      </section>

      {/* What Are Global Citizens */}
      <section className="bg-white py-16 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-blue-800 mb-6">
          What Are Global Citizens?
        </h2>
        <p className="text-lg max-w-4xl mx-auto">
          Being a Global Citizen means believing that extreme poverty can be
          eliminated and taking action to overcome the systemic inequalities
          that fuel poverty.
        </p>
      </section>

      {/* How Do We Create Change */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-blue-800 text-center mb-10">
            How Do We Create Change?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Campaigns",
                text: "Global Citizen is a platform that millions use to help achieve the end of poverty.",
                img: campaignImage,
              },
              {
                title: "Convening",
                text: "We convene leaders across sectors to address challenges through impactful action.",
                img: campaignImage,
              },
              {
                title: "Events & Broadcasts",
                text: "We use pop culture and policy to drive progress toward our mission.",
                img: campaignImage,
              },
            ].map(({ title, text, img }, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-md">
                <img
                  src={img}
                  alt={title}
                  className="w-full h-48 object-cover rounded mb-4"
                />
                <h3 className="text-2xl font-bold text-green-600 mb-2">
                  {title}
                </h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our History */}
      <section className="bg-white py-16 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-blue-800 mb-6">
          Our History
        </h2>
        <img
          src={historyImage}
          alt="Our History"
          className="w-full max-w-4xl mx-auto rounded mb-6"
        />
        <p className="text-lg max-w-3xl mx-auto">
          Founded in 2008, Global Citizen has grown into a worldwide platform
          advocating for the end of extreme poverty, with offices across six
          countries.
        </p>
      </section>

      {/* Our Issues */}
      <section className="bg-gray-100 py-16 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-blue-800 mb-10">
          Our Issues
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Defeat Poverty",
              img: povertyImage,
              desc: "Over 700 million people live in extreme poverty. We believe collective action can change this.",
            },
            {
              title: "Demand Equity",
              img: equityImage,
              desc: "Everyone deserves equal opportunity regardless of gender, race, or background.",
            },
            {
              title: "Defend the Planet",
              img: climateImage,
              desc: "The world’s poorest suffer most from the climate crisis, despite contributing the least.",
            },
          ].map(({ title, img, desc }, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow-md">
              <img
                src={img}
                alt={title}
                className="w-full h-48 object-cover rounded mb-4"
              />
              <h3 className="text-2xl font-bold text-green-600 mb-2">
                {title}
              </h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5, delay: 0.25 }}
        className="grid grid-cols-5 gap-6 w-full h-full ml-[5%] justify-items-center items-center mt-[2%] mb-[4%] overflow-x-auto whitespace-nowrap no-scrollbar"
      >
        <div className="w-full">
          <div className="flex">
            {staff.map((item, index) => (
              <div
                key={index}
                className="flex-shrink-0 mr-10 w-full justify-center items-center"
              >
                <div className="items-center justify-center w-full mt-20">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{
                      duration: 0.5,
                      loop: Infinity,
                      ease: "linear",
                    }}
                  >
                    {" "}
                    <motion.img
                      whileHover={{ rotate: 360 }}
                      transition={{
                        duration: 2,
                        loop: Infinity,
                        ease: "linear",
                      }}
                      src={purple}
                      alt="team"
                      className="ml-10 mt-[10%]"
                    />
                  </motion.div>
                  <img
                    src={officers}
                    alt="team"
                    className="-mt-[114%] ml-[40px]"
                  />
                </div>
                <h3 className="poppinsSemiBold body-1 ml-[60px] lg:ml-20 leading-6 text-center mt-4 ">
                  {item.first_name}
                  <br />
                  {item.last_name}
                </h3>
                <p className="poppinsRegular text-[10px] ml-10 lg:body-2 leading-normal text-gray-500 text-center lg:ml-20">
                  {item.position.substring(0, 30)}...
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5, delay: 0.25 }}
        className="xl:flex xl:flex-cols-2 gap-6 mt-20 xl:h-[500px] w-full px-10 lg:mt-[10%] lg:mb-40 lg:px-40"
      >
        <div className="bg-white border-2 border-gray-400 mb-4 xl:w-[45%] rounded-[30px]">
          <img
            src={backdrop2}
            alt="drop"
            className="xl:w-[100%] xl:object-cover xl:h-[500px] rounded-[30px]"
          />
        </div>
        <div className="bg-color-gold border-2 border-gray-400 sm:mt-10 xl:mt-0 xl:w-[55%] rounded-[30px] justify-center items-center">
          <img
            src={backdrop3}
            alt="drop"
            className="xl:w-[100%] xl:object-cover h-[400px] xl:h-[500px] relative rounded-[30px]"
          />
          <div className="px-10 xl:px-20">
            <p className=" ring-4 poppinsBold uppercase h1 leading-tight xl:leading-normal text-center lg:text-left -mt-[65%] md:-mt-[30%] xl:-mt-[22%] relative">
              Make more impact
              <br /> with us
            </p>
            <p className="text-center lg:text-left poppinsRegular body-1 leading-tight -mt-[43%] pr-20 xl:leading-normal xl:-mt-[13%] xl:pr-60 ">
              RAHU inspires youth by introducing them to diverse role <br />
              models and mentors in fields like medicine, education, theatre and
              creative arts entrepreneurship
            </p>
            <a href="/GetInvolved">
              <button className="poppinsSemiBold ml-[23%] px-4 py-2 xl:px-8 xl:py-4 bg-black absolute -mt-[20%] flex xl:-mt-[7%] text-white border-2 border-black mb-20 rounded-[30px] body-1 justify-center hover:bg-white hover:text-darkBlue hover:border-darkMaroon hover:border-2">
                Get involved
              </button>
            </a>
          </div>
        </div>
      </motion.div>
      <Modal
        isVisible={!!selectedStaff}
        onClose={handleCloseModal}
        staffMember={selectedStaff}
      />

      <div className="mt-10 xl:px-20 items-center">
        <Footer />
      </div>
    </div>
  );
};

export default WhoWeArePage;
