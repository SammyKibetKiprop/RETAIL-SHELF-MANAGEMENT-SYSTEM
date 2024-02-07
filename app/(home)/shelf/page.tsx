'use client';
import SalesPerShift from '@/components/shelf/SalesPerShift';
import ShelfDataTable from '@/components/shelf/ShelfDataTable';
import { Card } from '@mui/material';

const tags = ['Total Products', 'Products Sold', 'Sales'];

const Shelf = () => {
  return (
    <div className='flex flex-col gap-14 lg:gap-24 content-between items-center'>
      <div className='flex gap-10 sm:mx-auto w-full justify-between items-center'>
        {tags.map((tag, index) => (
          <Card key={index} className='p-4 w-28 h-16 md:w-40 md:h-24 lg:w-60 lg:h-28 rounded-md shadow-lg grid place-items-center text-sm flex-1'>{tag}</Card>
        ))}
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between items-center gap-10 w-full'>
        <ShelfDataTable />
        <SalesPerShift />
      </div>
    </div>
  );
};

export default Shelf;
