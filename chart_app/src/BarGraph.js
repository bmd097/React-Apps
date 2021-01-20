import React from "react";
import { Bar } from "react-chartjs-2";

function BarGraph(props) {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Sales for 2020 (M)",
        data: [3, 2, 2, 1, 5],
        borderColor: [
          "rgba(255,206,86,0.4)",
          "rgba(255,206,86,0.4)",
          "rgba(255,206,86,0.4)",
          "rgba(255,206,86,0.4)",
          "rgba(255,206,86,0.4)",
        ],
        backgroundColor: [
          "rgba(255,206,86,0.2)",
          "rgba(255,206,86,0.2)",
          "rgba(255,206,86,0.2)",
          "rgba(255,206,86,0.2)",
          "rgba(255,206,86,0.2)",
        ],
      },
      {
        label: "Sales for 2021 (M)",
        data: [1, 6, 5, 4, 3],
        borderColor: [
          "rgba(157,475,86,0.4)",
          "rgba(157,475,86,0.4)",
          "rgba(157,475,86,0.4)",
          "rgba(157,475,86,0.4)",
          "rgba(157,475,86,0.4)",
        ],
        backgroundColor: [
          "rgba(157,475,86,0.2)",
          "rgba(157,475,86,0.2)",
          "rgba(157,475,86,0.2)",
          "rgba(157,475,86,0.2)",
          "rgba(157,475,86,0.2)",
        ],
      },
    ],
  };
  const options = {
    title: {
      display: true,
      text: "Bar Chart",
    },
    scales: {
      yAxes: [
        {
          ticks: {
            min: 0,
            max: 7,
            stepSize: 1,
          },
        },
      ],
    },
  };
  return <Bar data={data} options={options} />;
}

export default BarGraph;
