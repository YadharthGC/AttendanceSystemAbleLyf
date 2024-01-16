import { PieChart } from "@mui/x-charts/PieChart";
import { useDrawingArea } from "@mui/x-charts/hooks";
import { styled } from "@mui/material/styles";
import React from "react";

export default function MuiDoughnut() {
  const data = [
    { value: 1000, label: "Present" },
    { value: 500, label: "Absent" },
    { value: 100, label: "onLeave" },
  ];

  const size = {
    width: 500,
    height: 200,
  };

  const StyledText = styled("text")(({ theme }) => ({
    fill: theme.palette.text.primary,
    textAnchor: "middle",
    dominantBaseline: "central",
    fontSize: 20,
  }));

  function PieCenterLabel({ children }) {
    const { width, height, left, top } = useDrawingArea();
    return (
      <StyledText x={left + width / 2} y={top + height / 2}>
        {children}
      </StyledText>
    );
  }

  return (
    <PieChart
      sx={
        {
          // padding: "13px",
          // paddingTop: "0px",
          // paddingLeft: "0px",
          // width: "100%",
          // height: "100%",
        }
      }
      series={[{ data, innerRadius: 80, outerRadius: 100 }]}
      {...size}
    >
      <PieCenterLabel>Total Students</PieCenterLabel>
    </PieChart>
  );
}
