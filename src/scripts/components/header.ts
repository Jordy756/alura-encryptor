const initHeader = () => {
    const htmlRootElement = document.documentElement as HTMLHtmlElement;
    const toggleThemeButton = document.getElementById("toggle-theme-btn") as HTMLButtonElement;

    const handleToggle = () => {
        htmlRootElement.classList.toggle("light");

        const isDark = !htmlRootElement.classList.contains("light");

        localStorage.setItem("theme", isDark ? "dark" : "light");
    };

    toggleThemeButton.addEventListener("click", handleToggle);
};

export default initHeader;
