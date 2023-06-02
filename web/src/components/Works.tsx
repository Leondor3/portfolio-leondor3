import React, { useContext } from "react";
import { Work } from "@/container/Work";
import { ThemeContext } from "@/context/theme-context";
import { MockupWorks } from "@/data/mockupWorks";
import SectionTitle from "@/common/TitleSide";

export function Works() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className="text-center" id="works">
      <div className="max-lg:mx-5">
        <SectionTitle
          title="Experiências Web: Mostrando Minhas Habilidades de Desenvolvimento"
          section="Portfolio"
          center
        />
      </div>
      <div className="py-16 flex flex-1 mx-6">
        {MockupWorks.works?.map((work, index) => (
          <div
            key={index}
            className={`${
              theme == false ? "bg-bg-dark-secundary" : "bg-white"
            } shadow-lg backdrop-blur-sm w-full rounded-md p-8`}
          >
            <Work {...work} />
          </div>
        ))}
      </div>
    </div>
  );
}
