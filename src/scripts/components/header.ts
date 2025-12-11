const initHeader = () => {
    const htmlRootElement = document.documentElement as HTMLHtmlElement;
    const toggleThemeButton = document.getElementById("toggle-theme-btn") as HTMLButtonElement;

    const theme = (() => {
        const localStorageTheme = localStorage?.getItem("theme") ?? "";

        if (["dark", "light"].includes(localStorageTheme)) return localStorageTheme;
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) return "dark";

        return "light";
    })();

    if (theme === "light") htmlRootElement.classList.add("light");

    window.localStorage.setItem("theme", theme);

    const handleToggle = () => {
        htmlRootElement.classList.toggle("light");

        const isDark = !htmlRootElement.classList.contains("light");

        localStorage.setItem("theme", isDark ? "dark" : "light");
    };

    toggleThemeButton.addEventListener("click", handleToggle);
};

export default initHeader;
