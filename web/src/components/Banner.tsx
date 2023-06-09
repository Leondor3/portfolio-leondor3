"use client";
import react, { useContext } from "react";
import Typewriter, { TypewriterClass } from "typewriter-effect";
import { FilePdf, GithubLogo } from "@phosphor-icons/react";
import { Button } from "@/common/Button";
import { ThemeContext } from "@/context/theme-context";

const name: string = "Leandro";
const description: string =
  "Fico feliz em vê-lo (a) por aqui. Espero que aproveite o conteúdo e que eu possa te ajudar de alguma forma.";

type TypewriterProps = {
  onInit?: (typewriter: TypewriterClass) => void;
  options?: {
    strings: string[];
    autoStart?: boolean;
    loop?: boolean;
    delay?: number;
  };
};

export default function Banner() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div
      className="positive h-screen py-16 md:py-20 lg:py-28 flex items-center justify-center sm:px-4"
      id="#home"
    >
      <div className="flex items-center flex-col gap-2">
        <div className="flex items-center">
          <span className="text-blue-400 leading-relaxed">Hello Word</span>
        </div>
        <div className="text-center">
          <h2
            className={`text-4xl max-md:text-3xl font-bold text-white pb-2 ${
              theme == false ? "text-light" : "text-dark"
            }`}
          >
            Olá, eu sou {name}
          </h2>
          <h1
            className={`text-5xl font-bold text-light pb-4 flex gap-2 max-md:text-3xl max-md:flex-col ${
              theme == false ? "text-light" : "text-dark"
            }`}
          >
            Front-end
            <Typewriter
              options={{
                strings: ["Developer", "Web"],
                autoStart: true,
                loop: true,
                delay: 50,
              }}
            />
          </h1>
          <p
            className={`w-[30rem] mx-0 my-auto max-md:w-full max-md:px-4 ${
              theme == false ? "text-light" : "text-dark"
            }`}
          >
            {description}
          </p>
          <div className="flex gap-4 items-center justify-center pt-4 max-sm:flex-col max-sm:mx-5">
            <Button isHighlight={true}>
              <FilePdf size={24} weight="fill" color="#fff" />
              <span className={`text-white`}>Curriculo</span>
            </Button>
            <Button>
              <GithubLogo
                size={24}
                weight="fill"
                color={`${theme == false ? "#ffffff" : "#1178FF"}`}
              />
              GitHub
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
