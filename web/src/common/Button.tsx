"use client";

import { ThemeContext } from "@/context/theme-context";
import { useContext, useEffect, useState } from "react";

interface ButtonProps {
  onClickFunction?: () => void;
  children: any;
  isHighlight?: boolean;
  disabled?: boolean;
}

export function Button({
  children,
  onClickFunction,
  isHighlight,
  disabled,
}: ButtonProps) {
  const { theme } = useContext(ThemeContext);
  const [isDisabled, setIsDisabled] = useState("");

  const itemsCenter = `flex items-center justify-center`;

  const disabledStyles = `!bg-zinc-800 outline-none pointer pointer-events-none border-none`;

  useEffect(() => {
    setIsDisabled(disabled ? `${disabledStyles}` : "");
  }, [disabled, disabledStyles]);

  return (
    <button
      className={`${
        isHighlight ? "bg-blue-600" : "bg-transparent"
      } border-blue-600 border rounded-md py-4 px-8 ${
        theme == false && !isHighlight == true ? "text-white" : "text-blue-600"
      } ${itemsCenter} gap-2 max-sm:w-full ${isDisabled}`}
      onClick={onClickFunction}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
