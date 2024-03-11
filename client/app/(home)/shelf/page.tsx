'use client';

import { useEffect, useState } from 'react';
import { useDisclosure } from '@nextui-org/react';

import ShelfDataTable from '@/components/shelf/ShelfDataTable';
import { Shelf } from '@/utils/interfaces';
import { getAllShelves } from '@/utils/service';
import { Card } from '@mui/material';
import ShelfEditModal from '@/components/shelf/ShelfEditModal';

const tags = ['Total Products', 'Products Sold', 'Sales'];

const Shelf = () => {
  const [shelfData, setShelfData] = useState<Shelf[]>([]);
  const {
    isOpen: isModalOpen,
    onOpen: onModalOpen,
    onOpenChange: onModalOpenChange,
  } = useDisclosure();

  useEffect(() => {
    getAllShelves().then((data: Shelf[]) => {
      setShelfData(data);
    });
  }, []);

  return (
    <>
      <div className='flex flex-col gap-14 lg:gap-24 content-between items-center'>
        <div className='flex gap-10 sm:mx-auto w-full justify-between items-center'>
          {tags.map((tag, index) => (
            <Card
              key={index}
              className='p-4 w-28 h-16 md:w-40 md:h-24 lg:w-60 lg:h-28 rounded-md shadow-lg grid place-items-center text-sm flex-1'
            >
              {tag}
            </Card>
          ))}
        </div>

        <div className=' justify-between items-center gap-10 w-full'>
          <div className='flex flex-col justify-between items-start gap-10 col-start-1 col-span-1 md:col-span-2 row-start-1 row-span-1'>
            <ShelfDataTable shelves={shelfData} />
            <button
              className='bg-slate-700 hover:bg-slate-600 px-8 py-3 rounded-md text-white self-end text-sm'
              onClick={onModalOpen}
            >
              Add Shelf
            </button>
          </div>
        </div>
      </div>

      <ShelfEditModal
        shelf={null}
        isModalOpen={isModalOpen}
        onModalOpenChange={onModalOpenChange}
      />
    </>
  );
};

export default Shelf;
