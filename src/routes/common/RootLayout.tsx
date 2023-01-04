import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { HeadNav } from "./HeadNav";
import { SideBarNav } from "./SideBarNav";

const headNavHeight = 50;
const borderWidth = 1;

export const RootLayout = () => {
  return (
    <Box
      sx={{
        height: "100vh",
      }}
    >
      <Box
        sx={{
          height: headNavHeight,
          color: "text.primary",
          borderBottom: borderWidth,
          borderColor: "primary.dark",
        }}
      >
        <HeadNav />
      </Box>
      <Box
        sx={{
          display: "flex",
          height: `calc(100vh - ${headNavHeight + borderWidth}px)`,
        }}
      >
        <SideBarNav />
        <Box
          sx={{
            flexGrow: 1,
            height: "100%",
            bgcolor: "background.paper",
            color: "text.primary",
            overflow: "hidden",
            "&:hover": {
              overflow: "auto",
            },
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </Box >
  );
};
