import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useAppSettingContext } from "../../shared/context/AppSettingContext";

export const HeadNav = () => {
  const { t } = useTranslation();

  const { language, toggleLanguage, themeMode, toggleThemeMode } =
    useAppSettingContext();

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        paddingX: 2,
        height: "100%",
        bgcolor: "background.paper",
        color: "text.primary",
      }}
    >
      <Typography>LOGO</Typography>
      <Box flexGrow={1}></Box>
      <Box display="flex" gap={2}>
        <Typography sx={{ cursor: "pointer" }} onClick={toggleLanguage}>
          {language === "en" ? t("app:textLangVi") : t("app:textLangEn")}
        </Typography>
        <Typography sx={{ cursor: "pointer" }} onClick={toggleThemeMode}>
          {themeMode === "dark"
            ? t("app:textThemeModeLight")
            : t("app:textThemeModeDark")}
        </Typography>
        <Typography>Avatar</Typography>
      </Box>
    </Box>
  );
};
