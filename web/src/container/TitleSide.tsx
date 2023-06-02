import { ThemeContext } from "@/context/theme-context";
import React, { useContext } from "react";

export function TitleSide() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className="flex flex-col gap-6 justify-start">
      <h1
        className={`${
          theme == false ? "text-white" : "text-zinc-800"
        } text-4xl font-bold`}
      >
        Vamos nos conectar!
      </h1>
      <p
        className={`${
          theme == false ? "text-slate-400" : "text-zinc-800"
        } max-w-[500px]`}
      >
        Ficarei muito feliz em saber de você! Se você tem alguma dúvida,
        sugestão, proposta de trabalho ou simplesmente deseja dizer olá,
        sinta-se à vontade para entrar em contato. Estou sempre aberto a novas
        oportunidades
      </p>
    </div>
  );
}
