import { Box, Grid } from "@mui/material";
import React, { useEffect } from "react";
import Groups2OutlinedIcon from "@mui/icons-material/Groups2Outlined";
import BeenhereOutlinedIcon from "@mui/icons-material/BeenhereOutlined";
import MaleOutlinedIcon from "@mui/icons-material/MaleOutlined";
import FemaleOutlinedIcon from "@mui/icons-material/FemaleOutlined";
import CoPresentOutlinedIcon from "@mui/icons-material/CoPresentOutlined";
import CancelPresentationOutlinedIcon from "@mui/icons-material/CancelPresentationOutlined";
import CrisisAlertOutlinedIcon from "@mui/icons-material/CrisisAlertOutlined";
import "./SimpleDetails.css";

export default function SimpleDetails() {
  useEffect(() => {
    try {
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <>
      {/* <Grid container xs={12} id="simpleDetailsGrid">
        <Grid item xs={2} className="iconGrid">
          <p className="iconSpace grpIconSpace">
            <Groups2OutlinedIcon id="grpIcon" />
          </p>
          <div className="iconText">Total</div>
          <div className="iconCount grpIconCount">4000</div>
        </Grid>
        <Grid item xs={2} className="iconGrid">
          <p className="iconSpace checkedIconSpace">
            <BeenhereOutlinedIcon id="checkedIcon" />
          </p>
          <div className="iconText">CheckedIn</div>
          <div className="iconCount checkedIconCount">9000</div>
        </Grid>
        <Grid item xs={2} className="iconGrid">
          <p className="iconSpace notCheckedIconSpace">
            <CancelPresentationOutlinedIcon id="notCheckedIcon" />
          </p>
          <div className="iconText">Not CheckedIn</div>
          <div className="iconCount notCheckedIconCount">5000</div>
        </Grid>
        <Grid item xs={2} className="iconGrid">
          <p className="iconSpace absentIconSpace">
            <CrisisAlertOutlinedIcon id="absentIcon" />
          </p>
          <div className="iconText">Absent</div>
          <div className="iconCount absentIconCount">5600</div>
        </Grid>
        <Grid item xs={2} className="iconGrid">
          <p className="iconSpace onLeaveIconSpace">
            <CoPresentOutlinedIcon id="onLeaveIcon" />
          </p>
          <div className="iconText">OnLeave</div>
          <div className="iconCount onLeaveIconCount">6388</div>
        </Grid>
      </Grid> */}
      <Grid
        container
        columnSpacing={2}
        sx={{
          padding: "8px",
        }}
      >
        <Grid item md={2}>
          <Box
            sx={{
              backgroundColor: "white",
              paddingTop: "16px",
              borderRadius: "25px",
            }}
          >
            <div className="iconSpace grpIconSpace">
              <Groups2OutlinedIcon id="grpIcon" />
            </div>
            <div className="iconText">Total</div>
            <div className="iconCount grpIconCount">4000</div>
          </Box>
        </Grid>
        <Grid item md={2}>
          <Box
            sx={{
              backgroundColor: "white",
              paddingTop: "16px",
              borderRadius: "25px",
            }}
          >
            <div className="iconSpace checkedIconSpace">
              <BeenhereOutlinedIcon id="checkedIcon" />
            </div>
            <div className="iconText">CheckedIn</div>
            <div className="iconCount checkedIconCount">9000</div>
          </Box>
        </Grid>
        <Grid item md={2}>
          <Box
            sx={{
              backgroundColor: "white",
              paddingTop: "16px",
              borderRadius: "25px",
            }}
          >
            <div className="iconSpace notCheckedIconSpace">
              <CancelPresentationOutlinedIcon id="notCheckedIcon" />
            </div>
            <div className="iconText">Not CheckedIn</div>
            <div className="iconCount notCheckedIconCount">5000</div>
          </Box>
        </Grid>
        <Grid item md={2}>
          <Box
            sx={{
              backgroundColor: "white",
              paddingTop: "16px",
              borderRadius: "25px",
            }}
          >
            <div className="iconSpace absentIconSpace">
              <CrisisAlertOutlinedIcon id="absentIcon" />
            </div>
            <div className="iconText">Absent</div>
            <div className="iconCount absentIconCount">5600</div>
          </Box>
        </Grid>
        <Grid item md={2}>
          <Box
            sx={{
              backgroundColor: "white",
              paddingTop: "16px",
              borderRadius: "25px",
            }}
          >
            <div className="iconSpace onLeaveIconSpace">
              <CoPresentOutlinedIcon id="onLeaveIcon" />
            </div>
            <div className="iconText">OnLeave</div>
            <div className="iconCount onLeaveIconCount">6388</div>
          </Box>
        </Grid>
        <Grid item md={2}>
          <Box
            sx={{
              backgroundColor: "white",
              paddingTop: "16px",
              borderRadius: "25px",
            }}
          >
            <div className="iconSpace grpIconSpace">
              <Groups2OutlinedIcon id="grpIcon" />
            </div>
            <div className="iconText">Total</div>
            <div className="iconCount grpIconCount">4000</div>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
