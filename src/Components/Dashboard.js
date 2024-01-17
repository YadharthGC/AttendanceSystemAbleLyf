import React, { useEffect } from "react";
import BarGraph from "./DashboardComponents/BarGraph";
import LinearChart from "./DashboardComponents/LinearGraph";
import Doughnut from "./DashboardComponents/Doughnut";
import SimpleDetails from "./DashboardComponents/SimpleDetails";
import { Box, Grid } from "@mui/material";
import "./DashBoard.css";
import MuiDoughnut from "./DashboardComponents/MuiDoughnut";
import Exceptions from "./DashboardComponents/Exceptions";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Padding } from "@mui/icons-material";

export default function Dashboard() {
  useEffect(() => {
    try {
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <>
      <div className="cardTitle">
        <div className="cardName">Dashboard</div>
        <div className="cardAccount">
          <AccountCircleOutlinedIcon />
        </div>
      </div>
      <Grid
        container
        spacing={2}
        rowSpacing={4}
        alignItems={"stretch"}
        sx={{ marginTop: "10px" }}
      >
        <Grid item md={3} sx={{ height: "100%", width: "100%" }}>
          <Box
            sx={{
              padding: "10px",
              backgroundColor: "#F4F6FA",
              borderRadius: "20px",
            }}
          >
            <div>Statistics</div>
            <Doughnut />
          </Box>
        </Grid>
        <Grid item md={9} sx={{ height: "100%", width: "100%" }}>
          <Box
            sx={{
              padding: "10px",
              backgroundColor: "#F4F6FA",
              borderRadius: "20px",
            }}
          >
            <div>Attendance</div>
            <SimpleDetails />
          </Box>
        </Grid>
        <Grid item md={4}>
          <Box
            sx={{
              padding: "10px",
              backgroundColor: "#F4F6FA",
              borderRadius: "20px",
            }}
          >
            <div>Attendance Source</div>
            <BarGraph />
          </Box>
        </Grid>
        <Grid item md={4}>
          <Box
            sx={{
              padding: "10px",
              backgroundColor: "#F4F6FA",
              borderRadius: "20px",
            }}
          >
            <div>Availability</div>
            <LinearChart />
          </Box>
        </Grid>
        <Grid item md={4}>
          <Box
            sx={{
              padding: "10px",
              backgroundColor: "#F4F6FA",
              borderRadius: "20px",
              width: "100%",
              height: "100%",
            }}
          >
            <div>Exceptions</div>
            <Exceptions />
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
