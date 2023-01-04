import { createTheme, PaletteMode, ThemeProvider } from "@mui/material";
import { createContext, useContext, useMemo, useState } from "react";
import { LOCAL_STORAGE_LANGUAGE, LOCAL_STORAGE_THEME_MODE } from "../constant";
import { createAppTheme } from "../theme/index";

export interface AppSettingState {
  themeMode: PaletteMode;
  setThemeMode: (v: PaletteMode) => void;
  language: string;
  setLanguage: (v: string) => void;
  toggleThemeMode: () => void;
  toggleLanguage: () => void;
}

export const AppSettingContext = createContext({} as AppSettingState);

export const useAppSettingContext = () => useContext(AppSettingContext);

interface Props {
  children: React.ReactNode | React.ReactNode[];
}
export const AppSettingProvider = ({ children }: Props) => {
  const [themeMode, setThemeMode] = useState<PaletteMode>(() => {
    const savedThemeMode = localStorage.getItem(LOCAL_STORAGE_THEME_MODE);
    return (savedThemeMode ? savedThemeMode : "light") as PaletteMode;
  });
  const [language, setLanguage] = useState(() => {
    const savedLang = localStorage.getItem(LOCAL_STORAGE_LANGUAGE);
    return savedLang ? savedLang : "en";
  });

  const theme = useMemo(() => {
    return createTheme(createAppTheme(themeMode));
  }, [themeMode]);

  const toggleThemeMode = () => {
    const newMode = themeMode === "light" ? "dark" : "light";
    setThemeMode(newMode);
    localStorage.setItem(LOCAL_STORAGE_THEME_MODE, newMode);
  }

  const toggleLanguage = () => {
    const newLang = language === "en" ? "vi" : "en";
    setLanguage(newLang);
    localStorage.setItem(LOCAL_STORAGE_LANGUAGE, newLang);
  }

  const value: AppSettingState = {
    themeMode,
    setThemeMode,
    language,
    setLanguage,
    toggleThemeMode,
    toggleLanguage,
  };

  return (
    <AppSettingContext.Provider value={value}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </AppSettingContext.Provider>
  );
};
