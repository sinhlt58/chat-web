import { Box } from "@mui/material";

export const SideBarNav = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        width: 70,
        height: "100%",
        backgroundColor: "blue",
        "&:hover": {
          overflowY: "auto",
        },
      }}
    >
      <Box>LOGO</Box>
      <Box>Conver</Box>
      <Box>Profile</Box>
      <Box>LOGO</Box>
      <Box>Conver</Box>
      <Box>Profile</Box>
      <Box>LOGO</Box>
      <Box>Conver</Box>
      <Box>Profile</Box>
      <Box>LOGO</Box>
      <Box>Conver</Box>
      <Box>Profile</Box>
      <Box>LOGO</Box>
      <Box>Conver</Box>
      <Box>Profile</Box>
    </Box>
  );
};
