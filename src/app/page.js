"use client";
import React, { useEffect, useState } from "react";
import Confetti from "react-dom-confetti";
import { motion } from "framer-motion";
import arunsir from "./assets/arunsir.png";
import Image from "next/image";

const Homepage = () => {
  const [isClicked, setIsClicked] = useState(true);

  const handleButtonClick = () => {
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 1000); // Reset animation after 1 second
  };

  useEffect(() => {
    setTimeout(() => {
      setIsClicked(true);
    }, 1000);
    setTimeout(() => {
      setIsClicked(false);
    }, 2000);
    setTimeout(() => {
      return;
    }, 10000);
  }, [isClicked]);

  return (
    <motion.div className="bg-gray-100 min-h-screen flex items-center justify-center overflow-hidden">
      <motion.button
        onClick={handleButtonClick}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ ease: "linear", duration: 2, repeat: Infinity }}
        className="  py-2 rounded-lg mx-auto"
      >
        <div className="bg-white rounded-lg shadow-lg relative w-[40rem] py-12">
          <div className="">
            <Image
              src={arunsir}
              height={400}
              width={400}
              alt="Birthday Image"
              className="mb-4 rounded-lg mx-auto"
            />
          </div>
          <h1 className="text-3xl font-bold mb-4">Happy Birthday!</h1>
          <p className="text-lg mb-4">
            <i>Mr. Arun Dhungana Sir,</i>
          </p>
          <p className="text-lg mb-4">
            Wishing you a day filled with happiness and a year filled with joy.
            Happy birthday!
          </p>
          <p className="text-lg mb-4">
            Best regards,
            <br />
            <b> IT Team</b>
          </p>

          <div className=" flex justify-center">
            <Confetti
              active={isClicked}
              config={{ spread: 180, elementCount: 200 }}
            />
          </div>
          {/* {isClicked && (
            <>
              <motion.Image
                src="/balloon.gif"
                alt="Balloon"
                className="absolute"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: -300, opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
              <motion.img
                src="/cake.gif"
                alt="Cake"
                className="absolute"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: -200, opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
            </>
          )} */}
        </div>
      </motion.button>
    </motion.div>
  );
};

export default Homepage;
