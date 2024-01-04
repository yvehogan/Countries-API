import React from "react";
import { IoMoonOutline } from "react-icons/io5";
import { useTheme } from "next-themes";

const Button = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <button
      onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}
      className="flex gap-2 items-center"
    >
      <IoMoonOutline /> dark mode
    </button>
  );
};

export default Button;
