import { useContext } from "react";
import { ThemeContext, ThemeContextProps } from "../context/ThemeContext";

export default function useTheme(): ThemeContextProps {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be inside an RCProvider');
  }

  return context;
}