import React from "react";
import home4 from "../../assets/Artboard – 15.jpg";
import { motion } from "framer-motion";
import ImpactCard from "../../components/ImpactCard";
import { impacts } from "../../constants";

const Section2 = () => {
  return (
    <div className="relative mt-10 lg:mt-20 w-full h-screen">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          delay: 0.1,
          x: { type: "spring", stiffness: 60 },
          opacity: { duration: 0.2 },
          ease: "easein",
          duration: 1,
        }}
        className="w-full h-screen"
        style={{
          backgroundImage: `url(${home4})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
        // className="absolute inset-0 bg-gradient-to-t from-[#ff0000] to-transparent rounded-[25px]"
        ></div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.4,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easein",
            duration: 1,
          }}
          className="poppinsBold text-2xl py-3 laptop-sm:h1 text-white lg:pt-20"
        ></motion.div>
        <div className="mt-4 lg:mt-0 p-15  grid grid-cols-2 gap-4 lg:gap-2">
          {impacts.map((impact) => (
            <ImpactCard
              key={impact.label}
              total={impact.total}
              label={impact.label}
            />
          ))}
        </div>

        {/* <motion.button
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.3,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easein",
            duration: 1,
          }}
          className="py-1 px-6 text-sm xl:py-3 xl:px-8 mt-4 lg:mt-0 border-2 border-white rounded-[25px] poppinsSemiBold text-white hover:bg-black hover:text-white"
        >
          Learn more
        </motion.button>*/}
      </motion.div>
    </div>
  );
};

export default Section2;
