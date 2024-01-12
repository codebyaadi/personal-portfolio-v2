"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

import Logo from "@/components/mircro-ui/logo";
import HamburgerIcon from "@/components/mircro-ui/hamburger";
import { navlinks, socialLinks } from "@/config/links";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hamAnimation, setHamAnimation] = useState<"open" | "closed" | "moving">("closed");

  const pathname = usePathname();

  const handleHamClick = () => {
    setHamAnimation("moving");
    setMenuOpen(!menuOpen);
    setTimeout(() => {
      setHamAnimation(hamAnimation === "closed" ? "open" : "closed");
    }, 200);
  };

  const handleNavLinkClick = () => {
    setMenuOpen(false);
    setHamAnimation("closed");
  };

  return (
    <nav className="bg-nav flex justify-center sticky top-0 left-0 z-20 w-full h-16 md:h-20 border-b border-white/15">
      <div className="w-full flex justify-between items-center px-8 md:px-28 py-2 md:py-4">
        <div id="logo">
          <Logo />
        </div>
        <button onClick={handleHamClick}>
          <HamburgerIcon animation={hamAnimation} />
        </button>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="bg-charcoalblue fixed top-0 right-0 -z-10 w-full h-screen  md:w-1/2 lg:w-1/3"
            initial={{ x: "100%", borderRadius: "100%" }}
            animate={{ x: 0, borderRadius: 0 }}
            exit={{ x: "100%", borderRadius: "100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <div className="flex flex-col justify-between items-center md:items-start ml-0 md:mx-20 mt-28">
              {navlinks.map((link, index) => (
                <Link
                  key={index}
                  id={link.id.toString()}
                  href={link.href}
                  onClick={handleNavLinkClick}
                  className="font-unbounded font-light text-4xl py-4"
                >
                  <motion.span
                    initial={{ x: "100%", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                      duration: 0.5,
                      ease: "easeInOut",
                      delay: link.id * 0.2,
                    }}
                    whileHover={{ letterSpacing: 4}}
                    className={`${pathname === link.href ? "bg-linear-gradient bg-clip-text text-transparent" : "text-white"} inline-block`}
                  >
                    {link.title}
                  </motion.span>
                </Link>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="flex flex-wrap gap-1 font-unbounded text-[10px] text-white/30 border-t border-white/10 mt-10 pt-1"
              >
                {socialLinks.map((link, index) => (
                  <Link key={index} className="hover:bg-linear-gradient hover:bg-clip-text hover:text-transparent" id={link.id.toString()} href={link.url} target="_blank">
                    {link.name}
                  </Link>
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;