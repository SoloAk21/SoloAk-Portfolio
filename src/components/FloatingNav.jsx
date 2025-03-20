// src/FloatingNav.js
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import classNames from "classnames";

const FloatingNav = ({ navItems, className }) => {
  const { scrollYProgress } = useScroll();

  // Set true for the initial state so that the navbar is visible in the hero section
  const [visible, setVisible] = useState(true);

  const handleScroll = (link) => {
    const section = document.querySelector(link);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current - scrollYProgress.getPrevious();

      if (scrollYProgress.get() < 0.05) {
        // Also set true for the initial state
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={classNames(
          "flex max-w-[360px]  fixed z-[5000] top-2 inset-x-0 mx-auto shadow-sm px-10 py-4 rounded-sm border border-black  items-center justify-between  ",
          className
        )}
        style={{
          backdropFilter: "blur(16px) saturate(180%)",
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          borderRadius: "12px",
          border: "0.5px solid rgba(0, 0, 0, 0.1)",
        }}
      >
        {navItems.map((item, index) => (
          <button
            key={index}
            className="hover:text-gray-600 transition-all"
            onClick={() => handleScroll(item.link)}
          >
            {item.name}
          </button>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};

export default FloatingNav;
