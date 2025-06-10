import React from "react";
import { useEffect, useRef, useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { MediaPlayer, MediaProvider } from "@vidstack/react";
import program from "../assets/program-1.jpg";
import { Poster } from "@vidstack/react";
import { PlayButton } from "@vidstack/react";
import { PauseIcon, PlayIcon } from "@vidstack/react/icons";
import "@vidstack/react/player/styles/base.css";
import Modal from "../components/Modal";
import heroImage from "../assets/Abouthero.jpg";
import campaignImage from "../assets/impact.jpg";
import campaignImage1 from "../assets/program-3.jpg";
import campaignImage2 from "../assets/we-one.jpg";
import campaignImage3 from "../assets/getinvolved.jpg";
import Mission from "../assets/mission.jpg";
import Vision from "../assets/vision.jpg";
import coreValues from "../assets/corevalues.jpg";
import impactImage from "../assets/LJ4B5813 copy.png";
import home4 from "../assets/aboutbg.jpg";
import home6 from "../assets/Artboard – 3.jpg";

const WhoWeArePage = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Navbar */}
      <div className="content-center text-center w-full">
        <div className="-mt-[40%] mb-10 absolute w-full">
          <NavBar />
        </div>
      </div>
      {/* Hero Section */}
      <section
        className="bg-cover  w-full h-screen  text-white py-20 px-6 text-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="pt-40 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Empowerment for Youth by Youth
          </h1>
          {/* <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Reach a Hand Uganda is a youth centered organisation focusing on
            youth empowerment programs with emphasis on Livelihoods & Skills
            Development, Behavior Change Communication, Sexual Reproductive
            Health & Rights, and HIV/AIDS awareness and prevention
          </p>*/}
        </div>
      </section>

      {/* About Section */}

      <section className=" py-16 px-6 md:px-20 grid md:grid-cols-2 gap-12 items-center">
        <div className="text-black  w-full h-[200px] md:h-[350px] lg:h-[600px] overflow-hidden">
          <img
            src={impactImage}
            alt="RAHU Impact"
            className="w-full h-full object-cover"
          />
        </div>

        <div>
          <h2 className="text-5xl font-bold font-audrey text-center p-10 text-blue-800">
            Who are we ?
          </h2>
          <p className="text-gray-600  text-lg max-w-4xl mx-auto">
            Reach A Hand Uganda (RAHU) is an Indigenous Youth-centered,
            non-profit organisation. Founded in 2011, with a vision to create a
            world of young people making informed choices, RAHU’s work is
            focused on youth empowerment programs with an emphasis on Adolescent
            and Youth Sexual Reproductive Health and Rights (AYSRHR), HIV/AIDS
            awareness and prevention including (prevention of teenage
            pregnancies, early marriages, Gender-based violence, mental health
            issues, the impact of climate change and increasing access to family
            planning and contraception for young people).<br></br>
            <br></br> RAHU’s innovations and programs focus on addressing the
            underlying factors that limit access to SRHR information and
            services for young people aged 10 - 30 years. Our work is delivered
            through a peer-to-peer approach, integrated into social behavioural
            change communication and advocacy interventions under 4 core
            programming areas as follows (Strategic plan 2022 -2026 - Amplifying
            the Hand Print!);
          </p>
          <br></br>
          <p className="text-gray-600 text-lg max-w-4xl mx-auto">
            Through innovative campaigns, strategic partnerships, and youth-led
            initiatives, RAHU amplifies young voices, supports informed
            decision-making, and builds inclusive spaces where every young
            person can thrive.
          </p>
        </div>
      </section>

      {/* How Do We Create Change */}
      <section
        className=" py-16 px-4"
        style={{
          backgroundImage: `url(${home4})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-4xl  font-bold font-audrey text-black text-center mb-10">
            How Do We Create Change?
          </h2>
          <p className="text-lg max-w-4xl   text-black mx-auto">
            Our efforts are timely to make a contribution to ensuring that every
            young person in Uganda can access the accurate information to aid
            and direct them in taking that crucial life decision regarding their
            life skills and development, behavior change communication and
            sexual reproductive health and rights.
          </p>
          <div className="grid md:grid-cols-4  p-5 gap-5">
            {[
              {
                title:
                  "Sexual Reproductive Health and Rights Information, Services and Advocacy",
                text: " Key Strategies (i). Capacity Building (ii). SRHR Advocacy (iii). SRHR Service Delivery (iv). Peer-to-Peer Engagements (v). Research and use of SRHR Data (vi). Multi-Sectoral Stakeholder Engagements and (vii). Gender Transformation for Young People.",
                img: campaignImage,
              },
              {
                title:
                  "Youth Empowerment and  Youth Livelihoods and Innovations (YLI)",
                text: "Key Strategies (i). Entrepreneurship Incubation (Capacity Building) (ii). Mindset Change towards Prudent Livelihoods (iii). ICT Innovation, Integration and Transfer of Skills (iv). Research and Development and; (vi). Partnerships and Resource Mobilization. ",
                img: campaignImage1,
              },
              {
                title: "Communication and Innovation Sauti Plus Media Hub!",
                text: "Key Strategies:(i). Behavioural Change Communications (BCC) (ii). Special Projects (iii). Resource Mobilization through Communications, Media and Branding Consultancy and; (iv). Community Engagement.",
                img: campaignImage2,
              },
              {
                title:
                  "Institutional Development, Engagement and Sustainability (IDEAS)",
                text: "Priority Areas: (i) Strengthened Governance (ii) Strengthened Resource Mobilization (iii) Explore RAHU Sustainability (iv) Strengthened Human Resources and Staff Wellness and; (vi) Maintain Robust Monitoring, Evaluation, Learning, Accountability (MEAL) and Financial Systems.",
                img: campaignImage3,
              },
            ].map(({ title, text, img }, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-md">
                <img
                  src={img}
                  alt={title}
                  className="w-full h-48 object-cover rounded mb-4"
                />
                <h3 className="text-1xl font-bold font-audrey text-blue-800 mb-2">
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
        <h2 className="text-3xl md:text-4xl font-bold font-audrey text-black mb-6">
          The Rahu story
        </h2>
        <div className="text-black border-2 border-gray-600 w-full h-[200px] md:h-[350px] lg:h-[700px] rounded-[30px]">
          <MediaPlayer
            className="w-full h-full rounded-[30px] bg-black"
            playsInline
            title="Sprite Fight"
            src=" https://www.youtube.com/watch?v=8nf_GlNcgGs?si=T-ean5fs89c55Uz7"
            load="eager"
          >
            <MediaProvider></MediaProvider>
            <PlayButton className="group ring-sky-400 relative inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-md outline-none ring-inset hover:bg-white/20 data-[focus]:ring-4">
              <PlayIcon
                size={100}
                className="bg-white rounded-full hidden group-data-[paused]:block"
              />
              <PauseIcon
                size={100}
                className="bg-white rounded-full group-data-[paused]:hidden"
              />
            </PlayButton>
          </MediaPlayer>
        </div>
      </section>

      {/* Our Issues */}
      <section className=" py-16 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-audrey text-blue-800 mb-10">
          What we stand for
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto text-lg">
          {[
            {
              title: "Mission",
              img: Mission,
              desc: "To equip young people in all thier diversities with timely and appropriate information,skills,knowledge and means to enable them live healthy and productive lives.",
            },
            {
              title: "Vision",
              img: Vision,
              desc: "We envision a world of young people making informed life choices.",
            },
            {
              title: "Core values",
              img: coreValues,
              desc: "Belief in young people, Youth driven,Transparency & Openness ,Inclusivity and Diversity ,Team work",
            },
          ].map(({ title, img, desc }, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow-md">
              <img
                src={img}
                alt={title}
                className="w-full h-60 object-cover rounded mb-4"
              />
              <h3 className="text-2xl font-bold font-audrey text-blue-800 mb-2">
                {title}
              </h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </section>
      {/* Join the Movement */}
      <div
        className="w-full  h-full relative rounded-[30px] overflow-hidden px-5 lg:px-20 mt-10 lg:mt-[2%] mb-[4%] flex items-center justify-center"
        style={{
          backgroundImage: `url(${home6})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "500px", // Adjust height as needed
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 z-0 rounded-[30px]" />

        {/* Content */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.25 }}
          className="relative z-10 text-center text-black w-full flex flex-col items-center"
        >
          <h1 className="text-3xl lg:text-6xl font-bold font-audrey leading-tight mt-6 lg:mt-10">
            Make more impact
            <br />
            with us
          </h1>
          <h3 className="text-sm lg:text-2xl mt-3 lg:mt-6 leading-tight lg:leading-normal">
            At Reach A Hand we believe in the power of collaboration.
            <br />
            Partner with our programs or become a volunteer.
          </h3>

          <motion.button
            whileHover={{ scale: 1.0 }}
            whileTap={{ scale: 0.95, rotate: "2.5deg" }}
            transition={{ duration: 0.125, ease: "easeInOut" }}
            className="mt-6 lg:mt-10 px-8 py-3 lg:px-10 lg:py-4 bg-black text-white rounded-[30px] text-lg font-semibold hover:bg-white hover:text-black border-2 hover:border-black transition"
          >
            Get Involved
          </motion.button>
        </motion.div>
      </div>
      <div className=" w-full">
        <Footer />
      </div>
    </div>
  );
};

export default WhoWeArePage;
