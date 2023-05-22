import { ThemeContext } from "@/theme-context";
import React, { useContext } from "react";

interface InputProps {
  placeholder: string;
  register: any;
}

export default function Input({ placeholder, register }: InputProps) {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <input
      className={`${
        theme == false ? "bg-[#1c1f27]" : "bg-zinc-200"
      } p-2 rounded-lg mt-2 focus:border-zinc-700 focus:border outline-none placeholder:text-zinc-500`}
      placeholder={placeholder}
      {...register}
    />
  );
}
