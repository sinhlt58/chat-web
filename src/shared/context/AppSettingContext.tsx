import { createTheme, PaletteMode, ThemeProvider } from "@mui/material";
import { createContext, useContext, useMemo, useState } from "react";
import { createAppTheme } from "../theme/index";

export interface AppSettingState {
  themeMode: PaletteMode;
  setThemeMode: (v: PaletteMode) => void;
  language: string;
  setLanguage: (v: string) => void;
  toggleThemeMode: () => void;
}

export const AppSettingContext = createContext({} as AppSettingState);

export const useAppSettingContext = () => useContext(AppSettingContext);

interface Props {
  children: React.ReactNode | React.ReactNode[];
}
export const AppSettingProvider = ({ children }: Props) => {
  const [themeMode, setThemeMode] = useState<PaletteMode>(() => {
    const savedThemeMode = localStorage.getItem("themeMode");
    return (savedThemeMode ? savedThemeMode : "light") as PaletteMode;
  });
  const [language, setLanguage] = useState("en");

  const theme = useMemo(() => {
    return createTheme(createAppTheme(themeMode));
  }, [themeMode]);

  const toggleThemeMode = () => {
    const newMode = themeMode === "light" ? "dark" : "light";
    setThemeMode(newMode);
    localStorage.setItem("themeMode", newMode);
  }

  const value: AppSettingState = {
    themeMode,
    setThemeMode,
    language,
    setLanguage,
    toggleThemeMode,
  };

  return (
    <AppSettingContext.Provider value={value}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </AppSettingContext.Provider>
  );
};
