import "./TrendChart.css";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
);

function TrendChart({ trend }) {
  if (!trend) return null;

  const years = Object.keys(trend);

  const counts = Object.values(trend);

  const data = {
    labels: years,
    datasets: [
      {
        label: "Research Papers",
        data: counts,
        backgroundColor: "#3B82F6",
        borderRadius: 8,
      },
    ],
  };

  const options = {
    responsive: true,

    plugins: {
      legend: {
        labels: {
          color: "white",
        },
      },
    },

    scales: {
      x: {
        ticks: {
          color: "white",
        },

        grid: {
          color: "#374151",
        },
      },

      y: {
        ticks: {
          color: "white",
        },

        grid: {
          color: "#374151",
        },
      },
    },
  };

  return (
    <div className="trend-card">

      <h2>📈 Research Trends</h2>

      <Bar
        data={data}
        options={options}
      />

    </div>
  );
}

export default TrendChart;