import { PaletteMode, ThemeOptions } from "@mui/material";
import { purple } from "@mui/material/colors";

export const createAppTheme = (mode: PaletteMode): ThemeOptions => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
        }
      : {
          // palette values for dark mode
        }),
  },
  senme: {
    customColor1: purple[500],
  },
});

declare module "@mui/material/styles" {
  interface Theme {
    senme: {
      customColor1: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    senme?: {
      customColor1?: string;
    };
  }
}
