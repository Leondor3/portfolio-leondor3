import React, { useState, useEffect, useContext } from "react";
import Potfolio1 from "../assets/portfolio-img1.png";
import reactIcon from "../assets/logo-react.svg";
import tailwindIcon from "../assets/logo-tailwind.svg";
import typescriptIcon from "../assets/logo-typescript.svg";
import { ThemeContext } from "@/theme-context";
import Image from "next/image";

export const Work = ({ ...props }) => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div className="flex relative items-start justify-start gap-32 w-full max-lg:flex-col max-lg:justify-center max-lg:items-center max-lg:gap-8">
      <a className="cursor-pointer block max-w-[650px]">
        <Image alt="" className="w-full object-cover" src={Potfolio1} />
      </a>
      <div className="relative z-10 w-max text-left mb-4 flex flex-col space-y-4 flex-1 max-sm:mx-4">
        <span className="text-white text-left text-3xl">{props.title}</span>
        <div className="flex gap-4">
          <div className="bg-blue-600/20 p-2 rounded-md w-max">
            <Image src={reactIcon} width={22} alt="" />
          </div>
          <div className="bg-blue-600/20 p-2 rounded-md w-max">
            <Image src={tailwindIcon} width={22} alt="" />
          </div>
          <div className="bg-blue-600/20 p-2 rounded-md w-max">
            <Image src={typescriptIcon} width={22} alt="" />
          </div>
        </div>
        <span className="text-slate-400 max-lg:w-96">{props.description}</span>
        <div className="flex gap-2 items-center">
          <button className="block bg-blue-600 px-6 py-4 rounded-md">
            <span className="text-white">Ver Código</span>
          </button>
          <button className="bg-bg-dark-secundary  px-6 py-4  rounded-md">
            <span className="text-orange-600">Ver Código</span>
          </button>
        </div>
      </div>
    </div>
  );
};
