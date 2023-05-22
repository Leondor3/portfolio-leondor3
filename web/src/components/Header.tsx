"use client"

import react, { useState, useContext } from "react";
import Link from "next/link";
import { List } from "@phosphor-icons/react";
import { ThemeContext } from "@/theme-context";
import { ChangeTheme } from "./ChangeTheme";

export function Header() {
  
  const { theme, setTheme } = useContext(ThemeContext);
  const [isBurguer, setIsBurger] = useState(false);

  const handleThemeChange = () => {
    setTheme(!theme);
    localStorage.setItem("theme", !theme ? "dark" : "light");
  };

  return (
    <div className="positive flex justify-between py-4 items-center max-lg:px-4">
      <div className="">
        <span className="font-bold bg-text-gradient text-transparent bg-clip-text">
          Leondor3
        </span>
      </div>
      <button
        className="absolute top-3 right-4 md:hidden"
        onClick={() => setIsBurger(!isBurguer)}
      >
        <List size={32} color="#1178FF" />
      </button>
      {isBurguer && (
        <nav
          className={`flex flex-col justify-start items-end absolute right-0 top-12 w-full h-2/3 z-20 ${
            theme == false ? "bg-bg-dark-secundary" : "bg-zinc-200"
          }`}
        >
          {[
            ["Home", "/dashboard"],
            ["About", "/team"],
            ["Skills", "/projects"],
            ["Experience", "/reports"],
            ["Works", "/reports"],
            ["Contact", "/reports"],
          ].map(([title, url]) => (
            <Link
              key={title}
              href={url}
              className={`w-full text-end rounded-none px-3 py-4 ${
                theme == false ? "text-light" : "text-dark"
              } font-medium hover:bg-blue-600`}
            >
              {title}
            </Link>
          ))}
        </nav>
      )}
      <nav className="flex sm:justify-center space-x-4 max-[768px]:hidden">
        {[
          ["Principal", "#home"],
          ["Sobre", "#about"],
          ["Técnologias", "#technology"],
          ["Experiências", "#experiences"],
          ["Trabalhos", "#works"],
          ["Contato", "#contact"],
        ].map(([title, url]) => (
          <Link
            key={url}
            href={url}
            onClick={(e) => {
              e.preventDefault();
              const element = document.querySelector(url);
              element!.scrollIntoView({ behavior: "smooth" });
            }}
            className={`px-3 py-2 hover:text-blue-400 transition ${
              theme == false ? "text-light" : "text-dark"
            }`}
          >
            {title}
          </Link>
        ))}
      </nav>
      <ChangeTheme />
    </div>
  );
}
