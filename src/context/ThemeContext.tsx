import React, { ReactNode, useContext, useState } from "react";
import { ColorType, colors as defaultColors } from "../styles/colors";

type ThemeType = 'dark' | 'light';
type ThemeColors = {
  [key in ThemeType]: ColorType
}

export interface ThemeContextProps {
  theme: ThemeType;
  colors: ThemeColors;
  setTheme: (theme: ThemeType) => void;
  setColors: (colors: { [key in ThemeType]?: ColorType }) => void;
}

export const ThemeContext = React.createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider: React.FC<{ children?: ReactNode }> = (props) => {
  const [theme, setTheme] = useState<ThemeType>('light');
  const [colors, setColors] = useState<ThemeColors>({ dark: defaultColors, light: defaultColors });

  const value: ThemeContextProps = {
    colors,
    theme,
    setColors: changeColors,
    setTheme
  }

  function changeColors(colors: { [key in ThemeType]?: ColorType }) {
    setColors((currentValue) => ({
      dark: {
        ...currentValue.dark,
        ...colors.dark
      },
      light: {
        ...currentValue.light,
        ...colors.light
      }
    }))
  }

  return (
    <ThemeContext.Provider value={value}>
      {props.children}
    </ThemeContext.Provider>
  )
}

export function getThemeColors(): ColorType {
  const context = useContext(ThemeContext);

  if (!context) {
    return defaultColors;
  }

  return context.colors[context.theme];
}