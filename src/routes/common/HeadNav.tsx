import { Box, Typography } from "@mui/material";
import { useAppSettingContext } from "../../shared/context/AppSettingContext";

export const HeadNav = () => {
  const { language, toggleLanguage, themeMode, toggleThemeMode } = useAppSettingContext();

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
          {language === "en" ? "Viet Nam" : "English"}
        </Typography>
        <Typography sx={{ cursor: "pointer" }} onClick={toggleThemeMode}>
          {themeMode === "light" ? "Dark mode" : "Light mode"}
        </Typography>
        <Typography>Avatar</Typography>
      </Box>
    </Box>
  );
};
