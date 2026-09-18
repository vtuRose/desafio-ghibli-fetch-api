import { useTheme } from "../hooks/useTheme";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className="fixed top-4 right-4 z-50 bg-text-primary text-background px-3 py-2 rounded-full hover:opacity-70 transition-opacity">
      {theme === "dark" ? "☀️" : "🌙"}
    </button>
  );
}
