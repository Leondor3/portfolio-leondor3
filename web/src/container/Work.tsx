import React, { useState, useEffect, useContext } from "react";
import Potfolio1 from "../assets/startup.png";
import reactIcon from "../assets/logo-react.svg";
import tailwindIcon from "../assets/logo-tailwind.svg";
import typescriptIcon from "../assets/logo-typescript.svg";
import Image from "next/image";
import { ThemeContext } from "@/context/theme-context";

export const Work = ({ ...props }) => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div className="relative flex w-full items-start justify-start gap-32 max-xl:flex-col max-xl:justify-center max-xl:gap-8 max-lg:items-start max-lg:px-4">
      <a className="w-[650px] max-xl:w-full max-xl:flex-1">
        <Image alt="" className="w-full object-cover" src={Potfolio1} />
      </a>
      <div className="mb-4 flex w-full flex-1 flex-col space-y-4 text-left">
        <span
          className={`${
            theme == false ? "text-white" : "text-zinc-900"
          } text-left text-3xl max-sm:text-2xl`}
        >
          {props.title}
        </span>
        <div className="flex gap-4">
          <div className="w-max rounded-md bg-blue-600/20 p-2">
            <Image src={reactIcon} width={22} alt="" title="React" />
          </div>
          <div className="w-max rounded-md bg-blue-600/20 p-2">
            <Image src={tailwindIcon} width={22} alt="" title="TailwindCSS" />
          </div>
          <div className="w-max rounded-md bg-blue-600/20 p-2">
            <Image src={typescriptIcon} width={22} alt="" title="Typescript" />
          </div>
        </div>
        <p className="text-slate-400 w-96 max-lg:w-auto">
          {props.description}
        </p>
        <div className="flex items-center gap-2 max-sm:flex-col">
          <a
            href={props.github_url}
            target="_blank"
            className="text-white max-sm:w-full"
          >
            <button className="block rounded-md bg-blue-600 px-6 py-4 hover:bg-blue-500 max-sm:w-full">
              Ver Código
            </button>
          </a>
          <a
            href={props.link}
            target="_blank"
            className="text-blue-400 hover:text-blue-300 max-sm:w-full"
          >
            <button className="rounded-md px-6 py-4 max-sm:w-full">
              Ver Online
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};
