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
      className="positive flex h-screen items-center justify-center py-16 sm:px-4 md:py-20 lg:py-28 max-sm:h-max max-sm:py-32"
      id="#home"
    >
      <div className="flex flex-col items-center gap-2">
        <div className="flex items-center">
          <span className="leading-relaxed text-blue-400">Hello Word</span>
        </div>
        <div className="text-center">
          <h2
            className={`pb-2 text-4xl font-bold text-white max-md:text-3xl ${
              theme == false ? "text-light" : "text-dark"
            }`}
          >
            Olá, eu sou {name}
          </h2>
          <h1
            className={`text-light flex gap-2 pb-4 text-5xl font-bold max-md:flex-col max-md:text-3xl ${
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
            className={`mx-0 my-auto w-[30rem] max-md:w-full max-md:px-4 ${
              theme == false ? "text-light" : "text-dark"
            }`}
          >
            {description}
          </p>
          <div className="flex items-center justify-center gap-4 pt-4 max-sm:mx-5 max-sm:flex-col">
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
