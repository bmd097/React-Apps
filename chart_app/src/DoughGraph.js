import React from "react";
import { Doughnut } from "react-chartjs-2";

function DoughGraph(props) {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Sales for 2020 (M)",
        data: [3, 2, 2, 1, 5],
        backgroundColor: [
          "rgba(255,206,86,0.5)",
          "rgba(152,006,86,0.5)",
          "rgba(155,206,86,0.5)",
          "rgba(055,106,86,0.5)",
          "rgba(100,106,86,0.5)"
        ],
      }
    ]
  };
  const options = {
    title: {
      display: true,
      text: "Doughnut Chart"
    }
  };
  return <Doughnut data={data} options={options} />;
}

export default DoughGraph;
