import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";

export const SideBarNav = () => {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 1,
        overflow: "hidden",
        height: "100%",
        backgroundColor: "blue",
        "&:hover": {
          overflowY: "auto",
        },
        bgcolor: "background.paper",
        color: "text.primary",
        borderRight: 1,
        borderColor: "primary.dark"
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1,
          p: 1,
        }}
      >
        <Box>{t("app:sideBar.conversations")}</Box>
        <Box>{t("app:sideBar.profile")}</Box>
      </Box>

    </Box>
  );
};
