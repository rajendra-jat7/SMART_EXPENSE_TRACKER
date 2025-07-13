import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const ExpenseChart = ({ expenses }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    if (chartInstance.current) chartInstance.current.destroy();

    const grouped = expenses.reduce((acc, cur) => {
      acc[cur.category] = (acc[cur.category] || 0) + cur.amount;
      return acc;
    }, {});

    chartInstance.current = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: Object.keys(grouped),
        datasets: [
          {
            label: 'Spending',
            data: Object.values(grouped),
            backgroundColor: ['#22d3ee', '#facc15', '#f472b6', '#34d399'],
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: false },
        },
      },
    });
  }, [expenses]);

  return (
    <div className='mb-6'>
      <canvas ref={chartRef} className='w-full max-w-2xl mx-auto' />
    </div>
  );
};

export default ExpenseChart;
