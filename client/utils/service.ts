import { AuthState, Product, Shelf } from '@/utils/interfaces';

const PLACEHOLDER_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Product 1',
    description: 'Description of Product 1',
    price: 100,
    shelf: '1',
    image_url: 'https://source.unsplash.com/random/1',
    stock: 20,
    weight: 33.2,
  },
  {
    id: '2',
    name: 'Product 2',
    description: 'Description of Product 2',
    price: 200,
    shelf: '2',
    image_url: 'https://source.unsplash.com/random/2',
    stock: 20,
    weight: 33.2,
  },
  {
    id: '3',
    name: 'Product 3',
    description: 'Description of Product 3',
    price: 300,
    shelf: '3',
    image_url: 'https://source.unsplash.com/random/3',
    stock: 20,
    weight: 33.2,
  },
];

const PLACEHOLDER_SHELVES: Shelf[] = [
  {
    name: 'Shelf 1',
    id: '123',
    description: 'Some description',
    weight_capacity: 20.5,
  },
  {
    name: 'Shelf 2',
    id: '456',
    description: 'Some description',
    weight_capacity: 20.5,
  },
  {
    name: 'Shelf 3',
    id: '789',
    description: 'Some description',
    weight_capacity: 20.5,
  },
];

// ====== AUTHENTICATION ========

// send a login/signup request: path: app\(security)\auth\page.tsx
export const userAuthHandler = async (authState: AuthState) => {
  const { username, password, isLogin } = authState;
  console.log({ username, password, isLogin });

  // do the necessary depending on whether it is login or signup
  return;
};

// logout user
export const userLogoutHandler = async () => {
  // logout user
  return;
};

// ====== SHELF ========

// get all shelves: path: app\(home)\shelf\page.tsx
export const getAllShelves = async () => {
  // fetch all shelves

  return PLACEHOLDER_SHELVES;
};

// get a shelf: path: app\(home)\shelf\[id]\page.tsx
export const getShelf = async (shelfId: string) => {
  // fetch a shelf

  return PLACEHOLDER_SHELVES[0];
};

// add a new shelf: path: app\(home)\shelf\new\page.tsx
export const addShelfHandler = async (newShelfData: Shelf) => {
  console.log(newShelfData);
};

// update a shelf: path: app\(home)\shelf\page.tsx
export const updateShelfHandler = async (updatedShelfData: Shelf) => {
  // update a shelf
  console.log(updatedShelfData);
};

// delete a shelf: path: app\(home)\shelf\page.tsx
export const deleteShelfHandler = async (shelfId: string) => {
  console.log(`Shelf ${shelfId} deleted...`);
};

// ====== PRODUCT ========

// get all products: path: app\(home)\product\page.tsx
export const getAllProducts = async () => {
  // fetch all products

  return PLACEHOLDER_PRODUCTS;
};

// get a product: path: app\(home)\product\[id]\page.tsx
export const getProduct = async (productId: string) => {
  // fetch a product

  return PLACEHOLDER_PRODUCTS[0];
};

// add a new product: path: app\(home)\product\new\page.tsx
export const addProductHandler = async (newProductData: Product) => {
  console.log(newProductData);
};

// update a product: path: app\(home)\product\page.tsx
export const updateProductHandler = async (
  updatedProductData: Product
) => {
  // update a product
  console.log(updatedProductData);
};

// delete a product: path: app\(home)\product\page.tsx
export const deleteProductHandler = async (productId: string) => {
  console.log(`Product ${productId} deleted...`);
};

// ====== SALES ========

// getSalesPerShift: path: app\(home)\shelf\page.tsx
export const getSalesPerShift = async () => {
  // fetch sales per shift
  const salesPerShift = {
    shift: ['Morning', 'Afternoon', 'Evening'],
    sales: [12, 19, 3],
  };

  return salesPerShift;
};
