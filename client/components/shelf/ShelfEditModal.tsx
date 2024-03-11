import { useEffect, useState } from 'react';

import { Shelf } from '@/utils/interfaces';
import { addShelfHandler, updateShelfHandler } from '@/utils/service';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
} from '@nextui-org/react';

interface ShelfEditModalProps {
  shelf: Shelf | null;
  isModalOpen: boolean;
  onModalOpenChange: (isOpen: boolean) => void;
}

const ShelfEditModal = ({
  shelf,
  isModalOpen,
  onModalOpenChange,
}: ShelfEditModalProps) => {
  const newShelf: Shelf = {
    name: '',
    id: Date.now().toString(),
    description: '',
    weight_capacity: 0,
  };

  const [shelfData, setShelfData] = useState<Shelf>(
    shelf ?? newShelf
  );

  const saveShelfHandler = async (onClose: () => void) => {
    shelf
      ? await updateShelfHandler(shelfData)
      : await addShelfHandler(shelfData);
    onClose();
  };

  return (
    <Modal
      isOpen={isModalOpen}
      onOpenChange={onModalOpenChange}
      placement='top-center'
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className='flex flex-col gap-1'>
              {shelf ? 'Edit' : 'New'} Shelf
            </ModalHeader>
            <ModalBody>
              <Input
                autoFocus
                label='Shelf name'
                placeholder='Enter shelf name'
                variant='bordered'
                value={shelfData.name}
                onChange={(e) =>
                  setShelfData({
                    ...shelfData,
                    name: e.target.value,
                  })
                }
              />
              <Input
                label='Description'
                placeholder='Enter description'
                variant='bordered'
                value={shelfData.description}
                onChange={(e) =>
                  setShelfData({
                    ...shelfData,
                    description: e.target.value,
                  })
                }
              />
              <Input
                label='Weight Capacity'
                placeholder='Enter weight capacity'
                variant='bordered'
                type='number'
                value={shelfData.weight_capacity.toString()}
                onChange={(e) =>
                  setShelfData({
                    ...shelfData,
                    weight_capacity: +e.target.value,
                  })
                }
              />
            </ModalBody>
            <ModalFooter>
              <button
                className='text-white bg-slate-700 px-4 py-2 rounded-md text-sm w-20 hover:bg-slate-600'
                onClick={onClose}
              >
                Cancel
              </button>
              <button
                className='text-white bg-blue-500 px-4 py-2 rounded-md text-sm w-20 hover:bg-blue-400'
                onClick={() => saveShelfHandler(onClose)}
              >
                Save
              </button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default ShelfEditModal;
