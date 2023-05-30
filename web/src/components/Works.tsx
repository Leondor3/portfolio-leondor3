import React, { useContext } from "react";
import { ThemeContext } from "@/theme-context";
import { Work } from "@/container/Work";
import { MockupWorks } from "@/mockupWorks";

interface PortfolioItem {
  id: number;
  title: string;
}

const titleSection =
  "Experiências Web: Mostrando Minhas Habilidades de Desenvolvimento";
const description =
  "Meus sites são modernos, atraentes e responsivos, e utilizam as mais recentes tecnologias, como HTML5, CSS3 e React, bem como frameworks como TailwindCSS.";

export function Works() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className="text-center" id="works">
      <div className="max-lg:mx-5">
        <span className="text-blue-400">Portfolio</span>
        <h1
          className={`text-4xl font-bold ${
            theme == false ? "text-light" : "text-dark"
          }`}
        >
          {titleSection}
        </h1>
      </div>
      <div className="py-16 flex flex-1">
        {MockupWorks.works?.map((work, index) => (
          <div key={index} className="bg-bg-dark-secundary w-full rounded-md p-8 ">
            <Work {...work} />
          </div>
        ))}
      </div>
    </div>
  );
}
