import { useState, useEffect } from "react";

const UseDarkMode = () => {
    const [theme, setTheme] = useState(localStorage.theme);
    const colorTheme = theme === "dark" ? "light" : "dark";

    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove(colorTheme);
        root.classList.add(theme);
        // sauvegarder le thème dans le localStorage
        try {
            localStorage.setItem("theme", theme);
        } catch (e) {
            console.log(e);
        }
    }, [theme, colorTheme]);

    return [colorTheme, setTheme];
};

export default UseDarkMode;
