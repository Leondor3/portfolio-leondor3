import React, { useContext } from "react";
import { Work } from "@/container/Work";
import { ThemeContext } from "@/context/theme-context";
import { MockupWorks } from "@/data/mockupWorks";
import SectionTitle from "@/common/SectionTitle";

export default function Works() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className="relative py-16 text-center md:py-20 lg:py-28" id="works">
      <div className="container">
        <div className="max-lg:mx-5">
          <SectionTitle
            title="Experiências Web: Mostrando Minhas Habilidades de Desenvolvimento"
            section="Portfolio"
            center
          />
        </div>
        <div className="mx-6 flex flex-1 py-16 flex-col gap-12">
          {MockupWorks.works?.map((work, index) => (
            <div
              key={index}
              className={`${
                theme == false ? "bg-bg-dark-secundary" : "bg-white"
              } w-full rounded-md p-8 shadow-lg backdrop-blur-sm`}
            >
              <Work {...work} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
