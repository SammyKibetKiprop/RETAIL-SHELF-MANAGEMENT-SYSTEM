import { SalesPerShift } from '@/utils/interfaces';
import { getSalesPerShift } from '@/utils/service';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';

Chart.register(ArcElement, Tooltip, Legend);

const SalesPerShift = () => {
  const [salesPerShift, setSalesPerShift] = useState<SalesPerShift>({
    shift: [],
    sales: [],
  });

  useEffect(() => {
    getSalesPerShift().then((data: SalesPerShift) => {
      setSalesPerShift(data);
    });
  }, []);

  const data = {
    labels: salesPerShift.shift,
    datasets: [
      {
        label: '# of Votes',
        data: salesPerShift.sales,
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        borderColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        borderWidth: 1,
      },
    ],
    responsive: false,
  };

  return (
    <div className='shadow-lg p-6 w-screen max-w-[30rem]'>
      <Pie data={data} className='w-full' />
    </div>
  );
};

export default SalesPerShift;
