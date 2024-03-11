'use client';

import React, { useState, useEffect } from 'react';
import { useDisclosure } from '@nextui-org/react';
import { useParams, useRouter } from 'next/navigation';

import { Product } from '@/utils/interfaces';
import { deleteProductHandler, getProduct } from '@/utils/service';
import ProductEditModal from '@/components/product/ProductEditModal';

const ProductDetail = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const {
    isOpen: isModalOpen,
    onOpen: onModalOpen,
    onOpenChange: onModalOpenChange,
  } = useDisclosure();
  const { productId } = useParams();
  const router = useRouter();

  useEffect(() => {
    if (!productId) return;

    getProduct(productId as string).then((data: Product) => {
      setProduct(data);
    });
  }, [productId]);

  if (!product) return <div>Loading...</div>;

  return (
    <>
      <div className='flex flex-col gap-5 items-start justify-start w-full min-w-[15rem]'>
        <h3 className='font-bold tracking-wide text-xl capitalize mb-10'>
          Product Detail
        </h3>

        <div className='p-6 shadow-md grid gap-6 w-full max-w-[35rem]'>
          <h3 className='font-semibold tracking-wide text-xl capitalize mb-4'>
            {product.name}
          </h3>
          <p className='text-gray-500 text-[1.1rem] leading-6'>
            {product.description}
          </p>
          <div className='flex justify-between items-center'>
            <p className='text-[1.1rem] leading-6 font-semibold text-green-600'>
              ${product.price}
            </p>
            <p
              className='text-gray-500 text-[1.1rem] leading-6'
              style={{ fontWeight: 500 }}
            >
              Shelf {product.shelfId}
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
              className='text-white bg-red-500 px-4 py-2 rounded-md text-sm w-20 hover:bg-red-400'
              onClick={() => {
                deleteProductHandler(product.id);
                router.push('/product');
              }}
            >
              Delete
            </button>
          </div>
        </div>
      </div>

      <ProductEditModal
        product={product}
        isModalOpen={isModalOpen}
        onModalOpenChange={onModalOpenChange}
      />
    </>
  );
};

export default ProductDetail;
