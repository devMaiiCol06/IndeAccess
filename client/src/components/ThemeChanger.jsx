import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import styles from "../modules/comps/ThemeChanger.module.css";

export default function ThemeChanger() {
    const [theme, setTheme] = useState("lightMode");

    useEffect(() => {
        const selectedTheme = localStorage.getItem("selectedTheme");
        if (selectedTheme) {
            setTheme(selectedTheme);
            document.body.classList.add(selectedTheme);
        } else {
            document.body.classList.add("lightMode");
        }
    }, []);

    const changeTheme = () => {
        const newTheme = theme === "lightMode" ? "darkMode" : "lightMode";
        document.body.classList.remove(theme);
        document.body.classList.add(newTheme);
        setTheme(newTheme);
        localStorage.setItem("selectedTheme", newTheme);
    }

    return (
        <div onClick={changeTheme} className={styles.themeButton}>
            {theme === "lightMode" ? <Sun color="var(--textColorPrimary)" size={16} /> : <Moon color="var(--textColorPrimary)" size={16} />}
        </div>
    );
}