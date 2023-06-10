"use client";

import React, { useEffect, useState, useContext } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import logoReact from "./../assets/logo-react.svg";
import logoJavascript from "../assets/logo-javascript.svg";
import logoHtml from "../assets/logo-html.svg";
import logoTailwind from "../assets/logo-tailwind.svg";
import logoStyled from "../assets/logo-styled.svg";
import logoBootstrap from "../assets/logo-bootstrap.svg";
import logoTypescript from "../assets/logo-typescript.svg";
import logoNext from "../assets/logo-next.svg";
import logoRadix from "../assets/logo-radix.svg";
import logoCSS from "../assets/logo-css.svg";
import logoCypress from "../assets/logo-cypress.svg";
import logoSass from "../assets/logo-sass.svg";
import Image from "next/image";
import { ThemeContext } from "@/context/theme-context";
import SectionTitle from "@/common/SectionTitle";

interface TechnologyProps {
  key: number;
  link: any;
  title: string;
}

export default function Technology() {
  const controls = useAnimation();
  const { ref, inView, entry } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const technology: TechnologyProps[] = [
    {
      key: 1,
      title: "React",
      link: logoReact,
    },
    {
      key: 2,
      title: "Javascript",
      link: logoJavascript,
    },
    {
      title: "HTML",
      key: 3,
      link: logoHtml,
    },
    {
      key: 4,
      title: "CSS",
      link: logoCSS,
    },
    {
      key: 10,
      title: "Typescript",
      link: logoTypescript,
    },
    {
      key: 5,
      title: "TailwindCSS",
      link: logoTailwind,
    },
    {
      key: 6,
      title: "Bootstrap",
      link: logoBootstrap,
    },
    {
      key: 7,
      title: "Styled Components",
      link: logoStyled,
    },
    {
      key: 8,
      title: "NextJS",
      link: logoNext,
    },
    {
      key: 9,
      title: "Cypress",
      link: logoCypress,
    },

    {
      title: "Radix UI",
      key: 11,
      link: logoRadix,
    },
    {
      title: "Sass",
      key: 12,
      link: logoSass,
    },
  ];
  return (
    <>
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={controls}
        variants={{
          visible: { opacity: 1, x: 0 },
          hidden: { opacity: 0, x: -100 },
        }}
        transition={{ duration: 1, delay: 0.5 }}
        className="relative mx-auto py-16 md:py-20 lg:py-28"
        id="technology"
      >
        <div className="absolute -left-96 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-[#2563eb] opacity-20 blur-full" />
        <div className="container">
          <div className="gap-2 text-center max-lg:mx-5">
            <SectionTitle
              title="Habilidades em Desenvolvimento Web"
              section="Habilidades"
              center
            />
            <p
              className={`${
                theme == false ? "text-slate-400" : "text-zinc-800"
              } mt-4`}
            >
              Conheça as Linguagens, Tecnologias e Ferramentas que Domino
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="mx-auto mt-8 grid w-[46rem] grid-flow-row grid-cols-6 place-items-center gap-6 max-lg:mx-5 max-lg:grid-cols-3 max-lg:gap-16 max-sm:w-max max-sm:grid-cols-3 max-sm:gap-8">
              {technology.map((item) => {
                return (
                  <div
                    key={item.title}
                    className={`flex h-16 w-16 items-center justify-center rounded-md p-2
              ${theme ? "bg-slate-400" : "bg-bg-dark-secundary"}
            `}
                  >
                    <Image
                      width={40}
                      src={item.link}
                      title={item.title}
                      alt=""
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
