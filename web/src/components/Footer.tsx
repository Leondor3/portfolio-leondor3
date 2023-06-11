"use client";

import { useContext } from "react";
import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react";
import { ThemeContext } from "@/context/theme-context";

export default function Footer() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <>
      <hr className="border border-zinc-800" />
      <footer
        className={`${theme == false ? "bg-[zinc-900]" : "bg-white"
          } w-full text-center flex itens-center justify-center py-4 `}
      >
        <div className="container">
          <div className="flex w-full justify-between max-lg:px-4">
            <div>
              <span className="font-bold bg-text-gradient text-transparent bg-clip-text">
                Leondor3
              </span>
            </div>
            <div className="flex gap-4">
              <a href="https://github.com/Leondor3" target="_blank" rel="noopener noreferrer">
                <GithubLogo
                  size={24}
                  weight="fill"
                  color={`${theme == false ? "#ffffff" : "#1178FF"}`}
                />
              </a>
              <a href="https://www.linkedin.com/in/leandro-de-araujo/" target="_blank" rel="noopener noreferrer">
                <LinkedinLogo
                  size={24}
                  weight="fill"
                  color={`${theme == false ? "#ffffff" : "#1178FF"}`}
                />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
