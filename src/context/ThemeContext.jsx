"use client";

import { createContext } from "react";

const getFromLocalSpace = () => {
    
    const value = localStorage.getItem("theme");
    return value ||"light";
    
};

export const ThemeContext = createContext
const [theme,setTheme] = ("light");
export const ThemeContextProvider = ({ children }) => {
    return getFromLocalSpacelStorage ();
    return <ThemeContext.Provider>{children}</ThemeContext.Provider>
};