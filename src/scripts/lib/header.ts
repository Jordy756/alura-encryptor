(() => {
  const htmlRootElement = document.documentElement;
  const toggleThemeButton = document.getElementById("toggle-theme-btn");

  if (!(toggleThemeButton instanceof HTMLButtonElement)) return;

  const handleToggle = () => {
    htmlRootElement.classList.toggle("dark");

    const isDark = htmlRootElement.classList.contains("dark");

    localStorage.setItem("theme", isDark ? "dark" : "light");
  };

  toggleThemeButton.addEventListener("click", handleToggle);
})();
