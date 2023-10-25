"use client";

import image from "next/image";
import styles from "./themeToggle.module.css";
import { ThemeContext } from "@/context/ThemeContext";
import { useContext } from "react";

const ThemeToggle = () => {

    const {toggle, theme} = useContext(ThemeContext)

    console.log(theme)

    return(
        <div className={style.container} onClick={toggle} style = { theme === "dark" ? { backgroundColor : "white" } : { backgroundColor : "#0f172a" } }
        ></div> )

    return (
        <div className={styles.container} onClick={toggle}>
            <image src="moon.png" alt="" width={14} height={14}/>
            <div className={styles.ball}style={theme === "dark" ? {left:1,background:"#0f172a"} : {right:1,background:"white"}}></div>
            <image src="sun.png" alt="" width={14} height={14}/>
        </div>
    );
};

export default ThemeToggle;