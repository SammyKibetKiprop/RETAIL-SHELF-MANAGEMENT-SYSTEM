import MainCard from './Card';

import shelfImage from '../../public/images/shelf.png';
import salesImage from '../../public/images/sales.png';
import productImage from '../../public/images/product.png';

const cardItems = [
  {
    id: 1,
    title: 'Shelves',
    color: 'zinc', // 700,400
    href: '/shelf',
    image: shelfImage,
  },
  {
    id: 2,
    title: 'Sales',
    color: 'amber', // 600,100
    href: '/sales',
    image: salesImage,
  },
  {
    id: 3,
    title: 'Product Type',
    color: 'sky', // 600,100
    href: '/product',
    image: productImage,
  },
];

const Dashboard = () => {
  return (
    <div className='grid gap-8 grid-cols-1 sm:grid-cols-2 w-[85vw] px-2 sm:px-2 mx-auto md:mx-0 sm:w-full md:max-w-screen-sm'>
      {cardItems.map((item, index) => (
        <MainCard key={index} item={item} />
      ))}
    </div>
  );
};

export default Dashboard;
