import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

// const [chartData, setChartData] = useState(null);  // データ用の状態を初期化

// useEffect(() => {
//   axios.get('/api/chart-data')
//     // .then(response => response.json())
//     .then(data => setChartData(data))  // 取得したデータを状態に保存
//     .catch(error => console.error('Error fetching data:', error));  // エラーハンドリング
// }, []);

export const data = {
  labels: ['Thing 1', 'Thing 2', 'Thing 3', 'Thing 4', 'Thing 5', 'Thing 6', 'Thing 7'],
  datasets: [
    {
      label: '# of Votes',
      data: [2, 9, 3, 5, 2, 3],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1,
    },
  ],
};


export default function MoodRaderChart() {
  if (data == null) {
      return <div>Loading...</div>;
    }
  return <Radar data={data} />;
}
