import { Box } from "@mui/material";

export const SideBarNav = () => {
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
        <Box>Conversations</Box>
        <Box>Profile</Box>
      </Box>

    </Box>
  );
};
