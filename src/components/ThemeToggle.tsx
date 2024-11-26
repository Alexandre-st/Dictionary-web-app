import { useTheme } from '../contexts/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>{theme === 'light' ? 'Dark 🌞' : ' Light 🌜'}</button>
  );
}
