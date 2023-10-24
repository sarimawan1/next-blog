
import image from "next/image";
import styles from "./themeToggle.module.css";
import { ThemeContext } from "@/context/ThemeContext";

const ThemeToggle = () => {

    const {theme} = useContexr(ThemeContext)



    return (
        <div className={styles.container}>
            <image src="moon.png" alt="" width={14} height={14}/>
            <div className={styles.ball}></div>
            <image src="sun.png" alt="" width={14} height={14}/>
        </div>
    );
};

export default ThemeToggle;