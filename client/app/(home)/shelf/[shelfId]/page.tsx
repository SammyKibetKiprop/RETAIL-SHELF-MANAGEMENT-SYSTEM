'use client';

import React, { useState, useEffect } from 'react';
import { useDisclosure } from '@nextui-org/react';
import { useParams, useRouter } from 'next/navigation';

import { Shelf } from '@/utils/interfaces';
import { deleteShelfHandler, getShelf } from '@/utils/service';
import ShelfEditModal from '@/components/shelf/ShelfEditModal';

const ShelfDetail = () => {
  const [shelf, setShelf] = useState<Shelf | null>(null);
  const {
    isOpen: isModalOpen,
    onOpen: onModalOpen,
    onOpenChange: onModalOpenChange,
  } = useDisclosure();
  const { shelfId } = useParams();
  const router = useRouter();

  useEffect(() => {
    if (!shelfId) return;

    getShelf(shelfId as string).then((data: Shelf) => {
      setShelf(data);
    });
  }, [shelfId]);

  if (!shelf) return <div>Loading...</div>;

  return (
    <>
      <div className='flex flex-col gap-5 items-start justify-start w-full min-w-[15rem]'>
        <h3 className='font-bold tracking-wide text-xl capitalize mb-10'>
          Shelf Detail
        </h3>

        <div className='p-6 shadow-md grid gap-6 w-full max-w-[35rem]'>
          <h3 className='font-semibold tracking-wide text-xl capitalize mb-4'>
            {shelf.name}
          </h3>
          <div className='flex justify-between items-center'>
            <p
              className='text-gray-500 text-[1.1rem] leading-6'
              style={{ fontWeight: 500 }}
            >
              Serial Number: {shelf.serialNumber}
            </p>
          </div>

          <div className='flex gap-4 justify-end mt-6'>
            <button
              className='text-white bg-slate-700 px-4 py-2 rounded-md text-sm w-20 hover:bg-slate-600'
              onClick={onModalOpen}
            >
              Edit
            </button>
            <button
              className='text-white bg-red-600 px-4 py-2 rounded-md text-sm w-20 hover:bg-red-500'
              onClick={() => {
                deleteShelfHandler(shelf.id);
                router.push('/shelf');
              }}
            >
              Delete
            </button>
          </div>
        </div>
      </div>

      <ShelfEditModal
        shelf={shelf}
        isModalOpen={isModalOpen}
        onModalOpenChange={onModalOpenChange}
      />
    </>
  );
};

export default ShelfDetail;
