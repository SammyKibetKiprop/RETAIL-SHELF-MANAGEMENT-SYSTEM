'use client';
import { useEffect, useState } from 'react';
import { useDisclosure } from '@nextui-org/react';

import ProductEditModal from '@/components/product/ProductEditModal';
import ProductsTable from '@/components/product/ProductsTable';
import { Product } from '@/utils/interfaces';
import { getAllProducts } from '@/utils/service';

const Product = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const {
    isOpen: isModalOpen,
    onOpen: onModalOpen,
    onOpenChange: onModalOpenChange,
  } = useDisclosure();

  useEffect(() => {
    getAllProducts().then((data: Product[]) => {
      setProducts(data);
    });
  }, []);

  return (
    <>
      <div className=' justify-between items-center gap-10 w-full'>
        <h3 className='font-bold tracking-wide text-xl capitalize mb-10'>
          Products
        </h3>

        <div className='flex flex-col justify-between items-start gap-10 col-start-1 col-span-1 md:col-span-2 row-start-1 row-span-1'>
          <ProductsTable products={products} />
          <button
            className='bg-slate-700 hover:bg-slate-600 px-8 py-3 rounded-md text-white self-end text-sm'
            onClick={onModalOpen}
          >
            Add Product
          </button>
        </div>
      </div>

      <ProductEditModal
        product={null}
        isModalOpen={isModalOpen}
        onModalOpenChange={onModalOpenChange}
      />
    </>
  );
};

export default Product;
