import React, { useState, useEffect, useContext } from "react";
import Potfolio1 from "../assets/startup.png";
import reactIcon from "../assets/logo-react.svg";
import tailwindIcon from "../assets/logo-tailwind.svg";
import typescriptIcon from "../assets/logo-typescript.svg";
import { ThemeContext } from "@/theme-context";
import Image from "next/image";

export const Work = ({ ...props }) => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div className="flex relative items-start justify-start gap-32 w-full max-lg:flex-col max-lg:justify-center max-lg:items-center max-lg:gap-8">
      <a className="block max-w-[650px]">
        <Image alt="" className="w-full object-cover" src={Potfolio1} />
      </a>
      <div className="relative z-10 w-max text-left mb-4 flex flex-col space-y-4 flex-1 max-sm:mx-4">
        <span className="text-white text-left text-3xl">{props.title}</span>
        <div className="flex gap-4">
          <div className="bg-blue-600/20 p-2 rounded-md w-max">
            <Image src={reactIcon} width={22} alt="" title="React" />
          </div>
          <div className="bg-blue-600/20 p-2 rounded-md w-max">
            <Image src={tailwindIcon} width={22} alt="" title="TailwindCSS" />
          </div>
          <div className="bg-blue-600/20 p-2 rounded-md w-max">
            <Image src={typescriptIcon} width={22} alt="" title="Typescript" />
          </div>
        </div>
        <span className="text-slate-400 max-lg:w-96">{props.description}</span>
        <div className="flex gap-2 items-center">
          <a href={props.github_url} target="_blank" className="text-white">
            <button className="block bg-blue-600 hover:bg-blue-500 px-6 py-4 rounded-md">
              Ver Código
            </button>
          </a>
          <a href={props.link} target="_blank" className="text-blue-400 hover:text-blue-300">
            <button className="px-6 py-4 rounded-md">Ver Online</button>
          </a>
        </div>
      </div>
    </div>
  );
};