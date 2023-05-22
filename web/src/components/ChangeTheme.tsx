"use client";

import { ThemeContext } from "@/theme-context";
import { MoonStars, Sun } from "@phosphor-icons/react";
import { useContext } from "react";

export function ChangeTheme() {
  const { theme, setTheme } = useContext(ThemeContext);

  function handleThemeChange (){
    setTheme(!theme);
    localStorage.setItem("theme", !theme ? "dark" : "light");
  };

  return (
    <button
      onClick={() => handleThemeChange()}
      className="max-[768px]:absolute max-[768px]:right-16"
    >
      {theme == false ? (
        <MoonStars
          className="bg-bg-dark-secundary"
          style={{
            borderRadius: "8px",
            padding: "4px",
          }}
          size={32}
          color="#1178FF"
        />
      ) : (
        <Sun
          style={{
            background: "#e3e3e5",
            borderRadius: "8px",
            padding: "4px",
          }}
          size={32}
          color="#1178FF"
        />
      )}
    </button>
  );
}
