import "@vidstack/react/player/styles/base.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  MediaPlayer,
  MediaProvider,
  Poster,
  PlayButton,
} from "@vidstack/react";
import { PauseIcon, PlayIcon } from "@vidstack/react/icons";

import Section2 from "../components/home/Section2";
import Impactmap from "../components/Impact/ImpactMap";
import ThreeBackground from "../components/global/ThreeBackground";

import program from "../assets/program-1.jpg";
import heroImage from "../assets/peers_6.jpg"; //impactphoto
import home6 from "../assets/Artboard – 3.jpg";

const Impact = () => {
  const videoRef = useRef(null);
  const isInView = useInView(videoRef, { once: true, margin: "-100px" });

  return (
    <div className="relative font-sans bg-white text-gray-800 overflow-hidden">
      {/* Background Animations */}
      {/* Foreground Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <motion.img
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.2, delay: 0.25 }}
          src={heroImage}
          alt="backdrop"
          className="w-full relative lg:mt-9 mt-20 object-cover"
        />
        <div className="-mt-[40%] mb-10 absolute w-full">
          <NavBar />
        </div>

        {/* About Section */}
        <section className="py-16 px-6 md:px-20 grid md:grid-cols-2 gap-12 items-center bg-white">
          <div className="relative">
            {/* Background animation absolutely positioned */}

            {/* Text content with higher z-index */}
            <div className="relative z-10">
              <p className="text-4xl font-bold font-audrey poppinsSemiBold text-center text-blue-800 uppercase mb-2">
                The Impact
              </p>
              <h2 className="text-3xl md:text-4xl poppinsSemiBold font-bold leading-tight mb-4">
                Our Promise To Uphold SRHR
              </h2>
              <p className="text-gray-600 text-sm poppinsSemiBold mb-4">
                Among Young people and Uganda at large for the{" "}
                <span className="text-red-600 font-bold">15+ Years</span>
              </p>
              <p className="text-gray-600 poppinsSemiBold text-base">
                Reach a Hand Uganda (RAHU) started in 2011 as a weekend outreach
                program founded by Humphrey Nabimanya to address HIV/AIDS and
                other sexual health issues among young people.
              </p>
              <p className="text-gray-600 poppinsSemiBold text-base">
                RAHU inspires youth by introducing them to diverse role models
                and mentors in fields like medicine, education, theatre, and
                creative arts entrepreneurship.
              </p>
            </div>
          </div>

          {/* Scroll-triggered animated video */}
          <motion.div
            ref={videoRef}
            initial={{ opacity: 0, x: 200 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-black border-2 border-gray-600 w-full h-[200px] md:h-[350px] lg:h-[700px] rounded-[30px]"
          >
            <MediaPlayer
              className="w-full h-full rounded-[30px] bg-black"
              playsInline
              title="Sprite Fight"
              src="https://www.youtube.com/watch?v=r_ZXOoemDgs&pp=ygUKcmVhY2hhaGFuZA%3D%3D"
              load="eager"
            >
              <MediaProvider>
                <Poster
                  className="absolute inset-0 h-full w-full object-cover rounded-md opacity-0 transition-opacity data-[visible]:opacity-90"
                  src={program}
                  alt="Reachahand video"
                />
              </MediaProvider>
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
          </motion.div>
        </section>

        {/* Section2 and Map Side by Side */}
        <div>
          <h2 className="text-4xl font-bold font-audrey garnetFont text-center text-blue-800">
            OUR REACH ACROSS UGANDA
          </h2>
          <div className="w-screen flex flex-col md:flex-row">
            <div className="w-full h-full md:w-1/2 text-4xl text-white [&_*]:!text-white [&_*]:!text-4xl pb-10">
              <Section2 />
            </div>
            <div className="w-full md:w-2/3 pt-20 pb-10">
              <Impactmap />
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div
          className="w-full h-full relative rounded-[30px] overflow-hidden px-5 lg:px-20 mt-10 lg:mt-[2%] mb-[4%] flex items-center justify-center"
          style={{
            backgroundImage: `url(${home6})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "500px",
          }}
        >
          <div className="absolute inset-0 z-0 rounded-[30px]" />
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
            <h1 className="text-3xl lg:text-6xl font-semibold leading-tight mt-6 lg:mt-10">
              Make more impact
              <br />
              with us
            </h1>
            <h3 className="text-sm lg:text-2xl mt-3 poppinsSemiBold lg:mt-6 leading-tight lg:leading-normal">
              At Reach A Hand we believe in the power of collaboration.
              <br />
              Partner with our programs or become a volunteer.
            </h3>

            <motion.button
              whileHover={{ scale: 1.0 }}
              whileTap={{ scale: 0.95, rotate: "2.5deg" }}
              transition={{ duration: 0.125, ease: "easeInOut" }}
              className="mt-6 lg:mt-10 px-8 py-3 lg:px-10 lg:py-4 garnetFont bg-black text-white rounded-[30px] text-lg font-semibold hover:bg-white hover:text-black border-2 hover:border-black transition"
            >
              Get Involved
            </motion.button>
          </motion.div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Impact;
