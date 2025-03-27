import React from "react";
import { List, ListItem, ListItemText, Divider } from "@mui/material";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div style={{ width: 250, backgroundColor: "#f4f4f4", height: "100vh" }}>
      <List>
        <ListItem button component={Link} to="/dashboard">
          <ListItemText primary="Dashboard" />
        </ListItem>

        <Divider />
        <ListItem button component={Link} to="/users">
          <ListItemText primary="Users" />
        </ListItem>
        <ListItem button component={Link} to="/courses">
          <ListItemText primary="Courses" />
        </ListItem>
      </List>
    </div>
  );
};

export default Sidebar;
