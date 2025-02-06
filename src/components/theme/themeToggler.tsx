"use client";
import { changeTheme } from "@/redux/slice/systemSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import React from "react";

const ThemeToggler: React.FC = () => {
  const theme = useAppSelector((state) => state.system.theme);

  const dispatch = useAppDispatch();
  const ToggleTheme = () => {
    dispatch(changeTheme(theme === "dark" ? "light" : "dark"));
  };

  return (
    <div onClick={ToggleTheme} className="themeToggle">
      {theme === "light" ? (
        <i className="fa-sharp-duotone fa-solid fa-moon"></i>
      ) : (
        <i className="fa-sharp-duotone fa-solid fa-sun-bright"></i>
      )}
    </div>
  );
};

export default ThemeToggler;
