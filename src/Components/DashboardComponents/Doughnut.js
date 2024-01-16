import React, { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";

export default function Doughnut() {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    try {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      const myChartRef = chartRef.current.getContext("2d");

      const doughnutLabel = {
        id: "doughtnutLabel",
        beforeDatasetsDraw(chart, args, pluginOptions) {
          const { ctx } = chart;
          ctx.save();
          const xCoor = chart.getDatasetMeta(0).data[0].x;
          const yCoor = chart.getDatasetMeta(0).data[0].y;
          ctx.font = "bolder 30px";
          ctx.fillStyle = "black";
          ctx.textAlign = "center";
          ctx.fillText(`TotalStudents 4000`, xCoor, yCoor);
        },
      };
      chartInstance.current = new Chart(myChartRef, {
        type: "doughnut",
        data: {
          labels: ["Present", "Absent", "OnLeave"],
          datasets: [
            {
              label: "My First Dataset",
              data: [300, 50, 100],
              backgroundColor: ["blue", "red", "yellow"],
              hoverOffset: 4,
              borderWidth: 0,
            },
          ],
        },
        options: {
          aspectRatio: 2,
          cutoutPercentage: 70, // Adjust the cutoutPercentage to control the size of the "hole"
          maintainAspectRatio: true, // Prevent the chart from maintaining the aspect ratio
          responsive: true,
          plugins: {
            legend: {
              position: "right",
            },
          },
          // options: {
          //   radius: "70%",
          //   cutout: "50%",
          //   borderRadius: 3,
          //   responsive: true,
          //   layout: {
          //     padding: 0,
          //   },
          //   //   plugins: {
          //   //     legend: {
          //   //       position: "right",
          //   //     },
          //   //   },
          // },
          // plugins: [doughnutLabel],
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

  return (
    <div class="chart-container" style={{ width: "100%", height: "100%" }}>
      <canvas ref={chartRef}></canvas>
    </div>
  );
}
