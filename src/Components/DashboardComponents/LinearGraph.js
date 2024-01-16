import React, { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";

export default function LinearChart() {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    try {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      const myChartRef = chartRef.current.getContext("2d");

      chartInstance.current = new Chart(myChartRef, {
        type: "line",
        data: {
          labels: ["ClassRoom", "Canteen", "PlayGround", "Library", "Lab"],
          datasets: [
            {
              label: "Boys",
              data: [50, 40, 50, 60, 10],
              backgroundColor: "blue",
            },
            {
              label: "Girls",
              data: [20, 10, 20, 40, 5],
              backgroundColor: "red",
            },
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
