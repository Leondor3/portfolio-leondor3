import SectionTitle from "@/common/SectionTitle";
import { ThemeContext } from "@/context/theme-context";
import React, { useContext } from "react";

export default function TitleSide() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className="flex flex-col justify-start gap-6">
      <SectionTitle title="Vamos nos conectar" section="Contato" center/>
    </div>
  );
}
