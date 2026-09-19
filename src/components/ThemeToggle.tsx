import { useTheme } from "../hooks/useTheme";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button onClick={toggleTheme} aria-label="Toggle theme" className="relative w-16 h-8 rounded-full bg-background border border-border transition-colors">
      <span className={`absolute top-0.5 left-0.5 w-6 h-6 rounded-full bg-toggle flex items-center justify-center text-xs transition-transform duration-300 ${isDark ? "translate-x-8" : "translate-x-0"}`}>{isDark ? "🌙" : "☀️"}</span>
    </button>
  );
}
