import { AppBar, Toolbar, Typography } from "@mui/material";

export const Header = () => (
  <AppBar
    position="fixed"
    sx={{ width: `calc(100% - ${250}px)`, ml: `${250}px` }}
    style={{
      height: "65px",
      background: "#ebebeb",
    }}
  >
    <Toolbar
      style={{
        display: "flex",
        alignItems: "center",
        height: "100%",
      }}
    >
      <Typography variant="h6" noWrap component="div" color="#333">
        App Bar
      </Typography>
    </Toolbar>
  </AppBar>
);
