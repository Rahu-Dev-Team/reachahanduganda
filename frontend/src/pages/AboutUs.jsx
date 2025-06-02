import React from 'react';
mport React, { useEffect, useRef, useState } from "react";
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
import heroImage from '../assets/hero.jpg';
import campaignImage from '../assets/campaign.jpg';
import historyImage from '../assets/history.jpg';
import povertyImage from '../assets/poverty.jpg';
import equityImage from '../assets/equity.jpg';
import climateImage from '../assets/climate.jpg';

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
            We are an advocacy platform dedicated to achieving the end of extreme poverty, powered by a community of millions of Global Citizens.
          </p>
        </div>
      </section>

      {/* What Are Global Citizens */}
      <section className="bg-white py-16 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-blue-800 mb-6">
          What Are Global Citizens?
        </h2>
        <p className="text-lg max-w-4xl mx-auto">
          Being a Global Citizen means believing that extreme poverty can be eliminated and taking action to overcome the systemic inequalities that fuel poverty.
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
              { title: 'Campaigns', text: 'Global Citizen is a platform that millions use to help achieve the end of poverty.', img: campaignImage },
              { title: 'Convening', text: 'We convene leaders across sectors to address challenges through impactful action.', img: campaignImage },
              { title: 'Events & Broadcasts', text: 'We use pop culture and policy to drive progress toward our mission.', img: campaignImage },
            ].map(({ title, text, img }, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-md">
                <img src={img} alt={title} className="w-full h-48 object-cover rounded mb-4" />
                <h3 className="text-2xl font-bold text-green-600 mb-2">{title}</h3>
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
        <img src={historyImage} alt="Our History" className="w-full max-w-4xl mx-auto rounded mb-6" />
        <p className="text-lg max-w-3xl mx-auto">
          Founded in 2008, Global Citizen has grown into a worldwide platform advocating for the end of extreme poverty, with offices across six countries.
        </p>
      </section>

      {/* Our Issues */}
      <section className="bg-gray-100 py-16 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-blue-800 mb-10">
          Our Issues
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { title: 'Defeat Poverty', img: povertyImage, desc: 'Over 700 million people live in extreme poverty. We believe collective action can change this.' },
            { title: 'Demand Equity', img: equityImage, desc: 'Everyone deserves equal opportunity regardless of gender, race, or background.' },
            { title: 'Defend the Planet', img: climateImage, desc: 'The world’s poorest suffer most from the climate crisis, despite contributing the least.' },
          ].map(({ title, img, desc }, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow-md">
              <img src={img} alt={title} className="w-full h-48 object-cover rounded mb-4" />
              <h3 className="text-2xl font-bold text-green-600 mb-2">{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Join the Movement */}
      <section className="bg-blue-800 py-16 px-6 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">
          Join the Movement
        </h2>
        <p className="text-lg mb-6">
          Support our mission to end extreme poverty, demand equity, and defend the planet.
        </p>
        <button className="bg-white text-blue-800 font-bold py-2 px-6 rounded-full hover:bg-gray-200 transition duration-300">
          Donate Now
        </button>
      </section>
    </div>
  );
};

export default WhoWeArePage;
