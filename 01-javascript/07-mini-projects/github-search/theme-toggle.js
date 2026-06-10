const themeToggle = document.querySelector("#theme-toggle");
const root = document.documentElement;

const getSavedTheme = () => localStorage.getItem("github-search-theme");

const setTheme = (theme) => {
  root.dataset.theme = theme;
  themeToggle.textContent = theme === "dark" ? "Light" : "Dark";
  themeToggle.setAttribute(
    "aria-label",
    theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
  );
};

setTheme(getSavedTheme() || "dark");

themeToggle.addEventListener("click", () => {
  const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";

  setTheme(nextTheme);
  localStorage.setItem("github-search-theme", nextTheme);
});
