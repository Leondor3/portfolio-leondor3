"use client";

import react, { useState, useEffect, useContext } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ComplementaryCourses from "@/container/ComplementaryCourses";
import Jobs from "@/container/Jobs";
import { ThemeContext } from "@/context/theme-context";
import SectionTitle from "@/common/SectionTitle";

export default function SectionExperience() {
  const { theme, setTheme } = useContext(ThemeContext);
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2, // set threshold to 50%
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <motion.div
      className="positive py-16 max-sm:px-6 sm:px-6 md:py-20 lg:py-28"
      id="experiences"
    >
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: -100 },
          }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="relative space-y-4 pt-20 text-left">
            <SectionTitle
              title="Minha jornada como desenvolvedor Front End: Aprendizados e conquistas"
              section="Jornada até aqui"
            />
          </div>
          <div className="mt-12 grid h-full grid-cols-2 gap-16 max-lg:grid-cols-1 max-sm:grid-cols-1">
            <ComplementaryCourses />
            <Jobs />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
