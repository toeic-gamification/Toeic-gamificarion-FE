import React from "react";
import { Grid, Paper, Typography, Box } from "@mui/material";
import { Chart } from "react-google-charts";

// Đổi tên Dashboard thành DashboardPage để tránh xung đột với component
const DashboardPage = () => {
  return (
    <div style={{ marginLeft: 250, padding: 20 }}>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} style={{ padding: 20 }}>
            <Typography variant="h6">Total Users</Typography>
            <Typography variant="h4">1000</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} style={{ padding: 20 }}>
            <Typography variant="h6">Completed Lessons</Typography>
            <Typography variant="h4">12000</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} style={{ padding: 20 }}>
            <Typography variant="h6">Active Challenges</Typography>
            <Typography variant="h4">5</Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* Biểu đồ */}
      <Box mt={4}>
        <Typography variant="h6">User Growth Over Time</Typography>
        <Chart
          chartType="LineChart"
          width="100%"
          height="400px"
          data={[
            ["Month", "Users"],
            ["Jan", 300],
            ["Feb", 400],
            ["Mar", 500],
            ["Apr", 600],
            ["May", 700],
            ["Jun", 800],
          ]}
        />
      </Box>
    </div>
  );
};

export default DashboardPage;
