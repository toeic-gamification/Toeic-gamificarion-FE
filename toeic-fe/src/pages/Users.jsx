import React from "react";
import { Typography, Paper, Box } from "@mui/material";

const Users = () => {
  return (
    <div style={{ marginLeft: 250, padding: 20 }}>
      <Typography variant="h4" gutterBottom>
        Users Management
      </Typography>
      <Paper elevation={3} style={{ padding: 20 }}>
        <Typography variant="h6">List of users</Typography>
        <Box mt={2}>
          <Typography>No users yet!</Typography>
        </Box>
      </Paper>
    </div>
  );
};

export default Users;
