const initTheme = () => {
  const htmlRootElement = document.documentElement;

  const theme = (() => {
    const localStorageTheme = localStorage?.getItem("theme") ?? "";

    if (["dark", "light"].includes(localStorageTheme)) return localStorageTheme;
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) return "dark";

    return "light";
  })();

  htmlRootElement.classList.toggle("dark", theme === "dark");

  window.localStorage.setItem("theme", theme);
};

initTheme();
