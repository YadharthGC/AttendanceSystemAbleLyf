import { Chart } from "chart.js/auto";
import React, { useEffect, useRef } from "react";

export default function BarGraph() {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    try {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      const myChartRef = chartRef.current.getContext("2d");

      chartInstance.current = new Chart(myChartRef, {
        type: "bar",
        data: {
          labels: ["October", "November", "December", "January", "February"],
          datasets: [
            {
              label: "Boys",
              data: [50, 40, 50, 60, 10],
              backgroundColor: "blue",
            },
            {
              label: "Girls",
              data: [20, 10, 2, 40, 5],
              backgroundColor: "red",
            },
            // {
            //   label: "OnLeave",
            //   data: [5, 7, 10, 30, 1],
            //   backgroundColor: "yellow",
            // },
          ],
        },
        options: {
          scales: {
            x: {
              grid: {
                display: false,
              },
            },
          },
        },
      });
      return () => {
        if (chartInstance.current) {
          chartInstance.current.destroy();
        }
      };
    } catch (err) {
      console.log(err);
    }
  }, []);

  return <canvas ref={chartRef} style={{ width: "100%" }}></canvas>;
}
