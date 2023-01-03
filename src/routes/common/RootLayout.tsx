import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { HeadNav } from "./HeadNav";
import { SideBarNav } from "./SideBarNav";

const headNavHeight = "46px";

export const RootLayout = () => {
  return (
    <Box
      sx={{
        height: "100vh",
      }}
    >
      <Box height={headNavHeight}>
        <HeadNav />
      </Box>
      <Box
        sx={{
          display: "flex",
          height: `calc(100vh - ${headNavHeight})`,
        }}
      >
        <SideBarNav />
        <Box
          sx={{
            flexGrow: 1,
            height: "100%",
            bgcolor: "pink",
            overflow: "hidden",
            "&:hover": {
              overflow: "auto",
            },
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};
