import { Box } from "@mui/material";

export const HeadNav = () => {
  return (
    <Box
      display="flex"
      paddingX={2}
      height="100%"
      style={{
        backgroundColor: "green",
      }}
      alignItems="center"
    >
      <Box>LOGO</Box>
      <Box flexGrow={1}></Box>
      <Box display="flex" gap={2}>
        <Box>Language</Box>
        <Box>Dark mode</Box>
        <Box>Avatar</Box>
      </Box>
    </Box>
  );
};
