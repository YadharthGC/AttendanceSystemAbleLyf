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
      <Grid container spacing={2} alignItems={"stretch"}>
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

      {/* <Grid
        container
        spacing={2}
        alignItems={"stretch"}
        sx={{ marginTop: "1%" }}
      >
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
            }}
          >
            <div>Exceptions</div>
            <Exceptions />
          </Box>
        </Grid>
      </Grid> */}
      {/* <Grid container xs={12} id="dashBoardGridA">
        <Grid item xs={3} id="doughnutGrid">
          <h5 style={{ marginLeft: "10%" }}>Statistics</h5>
          <MuiDoughnut />
        </Grid>
        <Grid item xs={8} id="dashBoardSimpleDetails">
          <h5>Attendance</h5>
          <SimpleDetails />
        </Grid>
      </Grid>
      <Grid container xs={12} id="dashBoardGridB">
        <Grid item xs={4} id="barGraphGrid">
          <h5>Attendance Source</h5>
          <BarGraph />
        </Grid>
        <Grid item xs={4} id="linearChartGrid">
          <h5>Availability</h5>
          <LinearChart />
        </Grid>
        <Grid item xs={3} id="ExceptionContainer">
          <h5>Exceptions</h5>
          <Exceptions sx={{ width: "100%" }} />
        </Grid>
      </Grid> */}
    </>
  );
}
