import React from "react";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import MailIcon from "@mui/icons-material/Mail";
import { useNavigate } from "react-router-dom";

const LeftSidebar = () => {
  const navigate = useNavigate();
  return (
    <Drawer
      style={{ height: "100%" }}
      sx={{
        width: 250,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 250,
          boxSizing: "border-box",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar>
        <div style={{ height: "65px" }}>
          <img
            alt="logo"
            src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </Toolbar>
      <Divider />
      <List>
        {["Home", "Inbox"].map((text, index) => (
          <ListItem
            key={text}
            disablePadding
            onClick={
              index === 0 ? () => navigate("/") : () => navigate("/about")
            }
          >
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <HomeIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Drawer>
  );
};

export default LeftSidebar;
