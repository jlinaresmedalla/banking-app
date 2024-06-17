'use client';

import { Doughnut } from 'react-chartjs-2';
import { ArcElement, Chart, Legend, Tooltip } from 'chart.js';

Chart.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ accounts }: DoughnutChartProps) => {
  const accouunNames = accounts.map((account) => account.name);
  const balances = accounts.map((account) => account.currentBalance);

  const data = {
    datasets: [
      {
        label: 'Banks',
        data: balances,
        backgroundColor: ['#0747b6', '#2265d8', '#2f91fa'],
      },
    ],
    labels: accouunNames,
  };

  return (
    <Doughnut data={data} options={{ cutout: '60%', plugins: { legend: { display: false } } }} />
  );
};

export default DoughnutChart;
