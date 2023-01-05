import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { msalInstance } from "../../shared/auth/msal";
import { USE_MSAL } from "../../shared/constant";
import { useAppSettingContext } from "../../shared/context/AppSettingContext";
import { useAppSelector } from "../../shared/store/hooks";
import { selectUser } from "../../user/user.slice";

export const HeadNav = () => {
  const { t } = useTranslation();
  const user = useAppSelector(selectUser);

  const { language, toggleLanguage, themeMode, toggleThemeMode } =
    useAppSettingContext();

  const handleClickName = () => {
    if (USE_MSAL) {
      msalInstance.logoutRedirect();
    }
  }

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
        <Typography sx={{ cursor: "pointer" }} onClick={handleClickName}>{user.name}</Typography>
      </Box>
    </Box>
  );
};
