import { useThemeStore } from '../themes/useThemeStore';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <button onClick={toggleTheme} className="p-2">
      {theme === 'dark' ? '🌙' : '☀️'}
    </button>
  );
}