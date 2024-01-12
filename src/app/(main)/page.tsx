"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { socialLinks } from "@/config/links";

export default function Home() {
  return (
    <main className="no-scrollbar flex flex-col justify-start items-start px-8 md:px-44 py-8 md:py-16 text-white/80 font-prompt font-normal tracking-wide">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-sm md:text-base tracking-tight mb-3"
      >
        Hello! I&apos;m <span className="font-medium">Aditya</span>, a passionate web designer and developer with a two-year journey in crafting digital experiences. I always had an interest in technology and the internet. Creating an innovative product is my specialty. I specialize in the MERN stack—MongoDB, Express.js, React, and Node.js—enabling me to create robust and dynamic web applications that seamlessly blend functionality and aesthetics.
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="text-sm md:text-base tracking-tight mb-3"
      >
        Feel free to explore my portfolio and reach out if you have any questions or exciting opportunities to discuss. Let&apos;s build something amazing together!
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
          delay: 1,
        }}
        className="flex flex-wrap gap-1 font-unbounded text-[10px] pt-1"
      >
        {socialLinks.map((link, index) => (
          <div key={index} className="px-3 py-2 rounded-sm bg-charcoalblue">
            <Link className="hover:bg-linear-gradient hover:bg-clip-text hover:text-transparent" id={link.id.toString()} href={link.url} target="_blank">
              {link.name}
            </Link>
          </div>
        ))}
      </motion.div>
    </main>
  );
}
