"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import BackText from "@/../../public/assets/images/aditya.png";

export default function Home() {
  return (
    <main className="flex flex-col justify-start items-start px-8 md:px-48 py-8 md:py-24 text-white/80 font-normal tracking-wide">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="font-prompt font-normal text-sm md:text-base tracking-tight mb-3"
      >
        Hello! I'm <span className="font-medium">Aditya</span>, a passionate web designer and developer with a two-year journey in crafting digital experiences. I always had an interest in technology and the internet. Creating an innovative product is my specialty. I specialize in the MERN stack—MongoDB, Express.js, React, and Node.js—enabling me to create robust and dynamic web applications that seamlessly blend functionality and aesthetics.
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="font-prompt font-normal text-sm md:text-base tracking-tight mb-3"
      >
        Feel free to explore my portfolio and reach out if you have any questions or exciting opportunities to discuss. Let's build something amazing together!
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className='absolute top-1/2 right-0 transform -translate-y-1/2'
      >
        <Image src={BackText} alt='aditya-back' height={256} />
      </motion.div>
    </main>
  );
}
