import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

Chart.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['Morning', 'Afternoon', 'Evening'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      borderColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      borderWidth: 1,
    },
  ],
  responsive: false,
};

const SalesPerShift = () => {
  return (
    <div className='col-start-1 col-span-2 lg:col-start-3 row-start-2 lg:row-start-1 shadow-lg p-6 w-[20rem]'>
      <Pie data={data} className='w-full' />
    </div>
  );
};

export default SalesPerShift;
