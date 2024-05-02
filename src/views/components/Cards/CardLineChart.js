import React, { useEffect } from "react";
import { Chart, LineController, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';

Chart.register(LineController, LineElement, PointElement, CategoryScale, LinearScale);

export default function CardLineChart() {
  useEffect(() => {
    const config = {
      type: 'line',
      data: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
          {
            label: 'New Members',
            backgroundColor: '#10B981', // TailwindCSS Green-500
            borderColor: '#10B981',
            data: [65, 78, 66, 44, 56, 67, 75],
            fill: false,
          },
          {
            label: 'Class Attendance',
            fill: false,
            backgroundColor: '#3B82F6', // TailwindCSS Blue-500
            borderColor: '#3B82F6',
            data: [40, 68, 86, 74, 56, 60, 87],
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        title: {
          display: true,
          text: 'Monthly Fitness Tracking',
          fontColor: '#1F2937' // TailwindCSS Gray-800
        },
        legend: {
          labels: {
            fontColor: '#374151' // TailwindCSS Gray-700
          },
          align: 'end',
          position: 'bottom',
        },
        tooltips: {
          mode: 'index',
          intersect: false,
        },
        hover: {
          mode: 'nearest',
          intersect: true,
        },
        scales: {
          x: {
            ticks: {
              fontColor: 'rgba(55, 65, 81, 0.7)', // TailwindCSS Gray-700 with opacity
            },
            display: true,
            title: {
              display: false,
              text: 'Month',
              fontColor: '#374151',
            },
            grid: {
              display: false,
              drawBorder: false,
            },
          },
          y: {
            ticks: {
              fontColor: 'rgba(55, 65, 81, 0.7)',
            },
            display: true,
            title: {
              display: false,
              text: 'Value',
              fontColor: '#374151',
            },
            grid: {
              drawBorder: false,
              color: 'rgba(209, 213, 219, 0.3)', // TailwindCSS Gray-300 with opacity
            },
          },
        },
      },
    };
    const ctx = document.getElementById('line-chart').getContext('2d');
    const myLineChart = new Chart(ctx, config);

    return () => myLineChart.destroy();
  }, []);

  return (
    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white h-[400px]">
      <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
        <div className="flex flex-wrap items-center">
          <div className="relative w-full max-w-full flex-grow flex-1">
            <h6 className="uppercase text-blueGray-100 mb-1 text-xs font-semibold">
              Overview
            </h6>
            <h2 className="text-xl font-semibold text-gray-800">Monthly Fitness Trends</h2>
          </div>
        </div>
      </div>
      <div className="p-4 flex-auto">
        {/* Chart */}
        <div className="relative h-[300px]">
          <canvas id="line-chart"></canvas>
        </div>
      </div>
    </div>
  );
}
