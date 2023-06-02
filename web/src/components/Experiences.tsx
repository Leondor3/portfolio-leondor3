"use client";

import react, { useState, useEffect, useContext } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ComplementaryCourses from "@/container/ComplementaryCourses";
import Jobs from "@/container/Jobs";
import { ThemeContext } from "@/context/theme-context";
import SectionTitle from "@/common/TitleSide";

export function SectionExperience() {
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
    <motion.div className="positive pb-40 sm:px-6 max-sm:px-6" id="experiences">
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
        <div className="text-left relative pt-20 space-y-4">
          <SectionTitle
            title="Minha jornada como desenvolvedor Front End: Aprendizados e conquistas"
            section="Jornada até aqui"
          />
        </div>
        <div className="grid grid-cols-2 mt-12 gap-16 h-full max-sm:grid-cols-1 max-lg:grid-cols-1">
          <ComplementaryCourses />
          <Jobs />
        </div>
      </motion.div>
    </motion.div>
  );
}
