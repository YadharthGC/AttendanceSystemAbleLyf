import { Box, Grid } from "@mui/material";
import React from "react";
import "./Exception.css";

export default function Exceptions() {
  return (
    <>
      <div className="exceptionContainer">
        <div className="ExceptionItem">
          <Box>
            <div>Early Going</div>
            <p>5000</p>
          </Box>
        </div>
        <div className="ExceptionItem">
          <Box>
            <div>Late Coming</div>
            <p>5000</p>
          </Box>
        </div>
      </div>
      <div className="exceptionContainer">
        <div className="ExceptionItem">
          <Box>
            <div>Regularize Request</div>
            <p>5000</p>
          </Box>
        </div>
        <div className="ExceptionItem">
          <Box>
            <div>Leave Request</div>
            <p>5000</p>
          </Box>
        </div>
      </div>
    </>
  );
}
