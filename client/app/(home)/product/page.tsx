'use client';

import ProductsTable from '@/components/product/ProductsTable';

const products = [
  {
    productId: '1',
    productName: 'Product 1',
    productDescription: 'Description of Product 1',
    productPrice: 100,
    shelfId: '1',
    image: 'https://via.placeholder.com/150',
  },
  {
    productId: '2',
    productName: 'Product 2',
    productDescription: 'Description of Product 2',
    productPrice: 200,
    shelfId: '2',
    image: 'https://via.placeholder.com/150',
  },
  {
    productId: '3',
    productName: 'Product 3',
    productDescription: 'Description of Product 3',
    productPrice: 300,
    shelfId: '3',
    image: 'https://via.placeholder.com/150',
  },
  {
    productId: '4',
    productName: 'Product 4',
    productDescription: 'Description of Product 4',
    productPrice: 400,
    shelfId: '4',
    image: 'https://via.placeholder.com/150',
  },
  {
    productId: '5',
    productName: 'Product 5',
    productDescription: 'Description of Product 5',
    productPrice: 500,
    shelfId: '5',
    image: 'https://via.placeholder.com/150',
  },
];

const Product = () => {
  return (
    <div className='grid gap-5 items-start justify-start'>
      <h3 className='font-bold tracking-wide text-xl capitalize mb-10'>
        Products
      </h3>

      <ProductsTable products={products} />
    </div>
  );
};

export default Product;
