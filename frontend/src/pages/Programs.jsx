import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { thematic } from "../constants";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import line from "../assets/images/prog1.jpg";
import cover from "../assets/images/prog2.jpg";
import top from "../assets/images/prog7.jpeg";
import backdrop from "../assets/images/prog5.jpg";
import { useNavigate } from "react-router-dom";
import { FaRegPlayCircle } from "react-icons/fa";
import ReactPlayer from "react-player";
import ModalPrograms from "../components/ModalPrograms";

const Programs = () => {
  const navigate = useNavigate();
  const [partners, setPartners] = useState([]);
  const [strategicPartners, setStrategicPartners] = useState([]);
  const [implementingPartners, setImplementingPartners] = useState([]);
  const [corporatePartners, setCorporatePartners] = useState([]);
  const [playing, setPlaying] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedStaff, setSelectedStaff] = useState(null);

  const handlePlayClick = () => {
    setPlaying(true);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setPlaying(false);
    setShowPopup(false);
  };

  const handleStaffClick = (staffMember) => {
    setSelectedStaff(staffMember);
  };

  const handleCloseModal = () => {
    setSelectedStaff(null);
  };

  // Image Slider Logic
  const sliderImages = [backdrop, cover, top, line];
  const [currentImage, setCurrentImage] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentImage((prev) => (prev + 1) % sliderImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const fetchPartners = async () => {
      try {
        const response = await fetch("http://rahu.reachahand.org/api/partners");
        if (!response.ok) throw new Error("Failed to fetch data");
        const data = await response.json();
        setPartners(data);
        setStrategicPartners(
          data.filter((p) => p.partner_category === "strategic")
        );
        setImplementingPartners(
          data.filter((p) => p.partner_category === "implementing")
        );
        setCorporatePartners(
          data.filter((p) => p.partner_category === "corporate")
        );
      } catch (error) {
        console.error("Error fetching partners:", error);
      }
    };
    fetchPartners();
  }, []);

  const imageVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
    }),
    center: {
      x: 0,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
    exit: (direction) => ({
      x: direction > 0 ? -300 : 300,
      transition: { duration: 0.6, ease: "easeInOut" },
    }),
  };

  useEffect(() => {
    if (showPopup) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [showPopup]);

  return (
    <div className="w-full">
      <div className="w-full  content-center text-center relative">
        {/* Slider */}
        <AnimatePresence mode="wait" custom={direction}>
          <motion.img
            key={currentImage}
            src={sliderImages[currentImage]}
            custom={direction}
            variants={imageVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="w-full h-[80vh] object-cover rounded-[30px]"
          />
        </AnimatePresence>

        <div className="absolute top-0 left-0 w-full z-10">
          <NavBar />
        </div>

        {/* Heading & Play Button */}
        <motion.div
          initial={{ opacity: 0, y: 75 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="absolute w-full top-[30%] text-center text-darkBlue"
        >
          <FaRegPlayCircle
            size={90}
            className="mx-auto text-blue-500 cursor-pointer animate-pulse"
            onClick={handlePlayClick}
          />
        </motion.div>
      </div>

      {/* Video Modal */}
      {showPopup && (
        <motion.div
          initial={{ opacity: 0, y: 75 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
        >
          <div className="relative w-3/4 max-w-4xl bg-white p-4 rounded-2xl shadow-xl">
            <button
              className="absolute top-2 right-4 text-2xl text-black font-bold"
              onClick={handleClosePopup}
            >
              ×
            </button>
            <ReactPlayer
              url="https://www.youtube.com/watch?v=zjbqwvIh5LU"
              playing={playing}
              controls
              width="100%"
              height="60vh"
              className="rounded-lg"
            />
          </div>
        </motion.div>
      )}

      {/*  programs content below from the backend */}

      <div className="bg-[#E5F2FF] rounded-[30px] xl:mx-20 ">
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.25 }}
          className="bg-[#E5F2FF] grid grid-cols-1 w-full h-full px-10 justify-items-left items-center mt-20 xl:mt-[10%] mb-20 rounded-[30px]"
        >
          <div className=" w-full">
            <div className=" rounded-[30px] xl:pl-10 xl:pr-10 ">
              <h1 className="text-2xl font-bold uppercase  justify-center mb-4 p-10">
                Our Programs
              </h1>
              <h3 className="text-lg lg:text-2xl font-light mb-6">
                Each of RAHU's programs, campaigns, and projects is tailored to
                impact nuggets of information.
              </h3>
              <p className="poppinsSemiBold h3 leading-normal text-left mt-20">
                SRHR
              </p>
              <p className="text-left poppinsRegular text-sm lg:text-[22px] leading-normal mb-20 lg:pr-[40%]">
                Under this program, RAHU seeks to remain the leading SRHR hub in
                Uganda that is responsive to the changing and diverse needs of
                its target groups and ensure that access to SRHR services,
                information,
              </p>
            </div>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.25 }}
              className="grid grid-cols-4 gap-6 lg:grid lg:grid-cols-6 lg:gap-6 w-full justify-center items-center mb-[10%] xl:mt-20 ml-10 overflow-x-auto whitespace-nowrap no-scrollbar"
            >
              <div className="flex w-full cursor-pointer">
                {strategicPartners.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => handleStaffClick(item)}
                    className="flex-shrink-0 mr-[8%] w-[70%] flex justify-center items-center bg-white px-2 py-2 rounded-3xl"
                  >
                    <img
                      src={item.cover_pic_url}
                      alt="team"
                      width={135}
                      className=""
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
          <div className=" w-full">
            <div className=" rounded-[30px] xl:pl-10 xl:pr-10 ">
              <p className="poppinsSemiBold h3 leading-normal text-left mt-5">
                Youth Livelihoods and Innovations (YLI)
              </p>
              <p className="text-left poppinsRegular text-sm lg:text-[22px] leading-normal mb-20 xl:pr-[40%]">
                Under this program, RAHU seeks to remain the leading SRHR hub in
                Uganda that is responsive to the changing and diverse needs of
                its target groups and ensure that access to SRHR
              </p>
            </div>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.25 }}
              className="grid grid-cols-4 gap-6 lg:grid lg:grid-cols-6 lg:gap-6 w-full justify-center items-center mb-[10%] mt-20 ml-10 overflow-x-auto whitespace-nowrap no-scrollbar"
            >
              <div className="flex w-full cursor-pointer">
                {implementingPartners.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => handleStaffClick(item)}
                    className="flex-shrink-0 mr-[8%] w-[70%] flex justify-center items-center bg-white px-2 py-2 rounded-3xl"
                  >
                    <img
                      src={item.cover_pic_url}
                      alt="team"
                      width={135}
                      className=""
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
          <div className=" w-full">
            <div className=" rounded-[30px] xl:pl-10 xl:pr-10 ">
              <p className="poppinsSemiBold h3 leading-normal text-left mt-5">
                SautiPlus Media Hub
              </p>
              <p className="text-left poppinsRegular text-sm lg:text-[22px] leading-normal mb-20 xl:pr-[40%]">
                Under this Program, RAHU seeks to invest itself in evolving
                itself into a centre of excellence on health communications,
                knowledge management and innovations.
              </p>
            </div>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.25 }}
              className="grid grid-cols-4 lg:grid lg:grid-cols-6 gap-6 w-full justify-center items-center mb-[10%] mt-20 ml-10 overflow-x-auto whitespace-nowrap no-scrollbar"
            >
              <div className="flex w-full cursor-pointer">
                {corporatePartners.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => handleStaffClick(item)}
                    className="flex-shrink-0 mr-[8%] w-[70%] flex justify-center items-center bg-white px-2 py-2 rounded-3xl"
                  >
                    <img
                      src={item.cover_pic_url}
                      alt="team"
                      width={135}
                      className=""
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
          <div className=" w-full">
            <div className=" rounded-[30px] xl:pl-10 xl:pr-10 ">
              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 75 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.5, delay: 0.25 }}
                className="poppinsSemiBold h4 leading-normal text-left mt-5"
              >
                Institutional Development, Engagement and Sustainability (IDEAS)
              </motion.p>
              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 75 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.5, delay: 0.25 }}
                className="text-left poppinsRegular text-sm lg:text-[22px] leading-normal mb-20 xl:pr-[40%]"
              >
                RAHU as a youth organisation acknowledges that it’s a
                fast-growing institution characterised by exponential growth
                programmatically and in terms of geographical spread across 3
                continents (Africa, Europe and USA) – which necessitates
                consciously and intentionally managing our growth.
              </motion.p>
            </div>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.25 }}
              className="grid grid-cols-4 lg:grid lg:grid-cols-6 gap-6 w-full justify-center items-center mb-[10%] xl:mt-20 ml-10 overflow-x-auto whitespace-nowrap no-scrollbar"
            >
              <div className="flex w-full cursor-pointer">
                {strategicPartners.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => handleStaffClick(item)}
                    className="flex-shrink-0 mr-[8%] w-[70%] flex justify-center items-center bg-white px-2 py-2 rounded-3xl"
                  >
                    <img
                      src={item.cover_pic_url}
                      alt="team"
                      width={135}
                      className=""
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
          <ModalPrograms
            isVisible={!!selectedStaff}
            onClose={handleCloseModal}
            staffMember={selectedStaff}
          />
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default Programs;
