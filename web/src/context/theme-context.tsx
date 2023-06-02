"use client";
import React, { createContext, useState } from "react";

interface ThemeContextType {
  theme: boolean;
  setTheme: React.Dispatch<React.SetStateAction<boolean>>;
}

interface ThemeProps {
  children: React.ReactNode;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: false,
  setTheme: () => {},
});

export const ThemeProvider: React.FC<ThemeProps> = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    if (typeof localStorage !== "undefined") {
      return (
        localStorage.getItem("theme") === "dark" ||
        (!localStorage.getItem("theme") &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      );
    } else {
      return false;
    }
  });

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
