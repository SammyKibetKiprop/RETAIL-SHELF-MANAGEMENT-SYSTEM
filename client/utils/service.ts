import { AuthState, Product, Shelf } from "@/utils/interfaces";

const PLACEHOLDER_PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Product 1",
    description: "Description of Product 1",
    price: 100,
    shelf: "1",
    image_url: "https://source.unsplash.com/random/1",
    stock: 20,
    weight: 33.2,
  },
  {
    id: "2",
    name: "Product 2",
    description: "Description of Product 2",
    price: 200,
    shelf: "2",
    image_url: "https://source.unsplash.com/random/2",
    stock: 20,
    weight: 33.2,
  },
  {
    id: "3",
    name: "Product 3",
    description: "Description of Product 3",
    price: 300,
    shelf: "3",
    image_url: "https://source.unsplash.com/random/3",
    stock: 20,
    weight: 33.2,
  },
];

const PLACEHOLDER_SHELVES: Shelf[] = [
  {
    name: "Shelf 1",
    id: "123",
    description: "Some description",
    weight_capacity: 20.5,
  },
  {
    name: "Shelf 2",
    id: "456",
    description: "Some description",
    weight_capacity: 20.5,
  },
  {
    name: "Shelf 3",
    id: "789",
    description: "Some description",
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
const baseUrl = "http://127.0.0.1:8000/apis";

// get all shelves: path: app\(home)\shelf\page.tsx
export const getAllShelves = async () => {
  try {
    const response = await fetch(`${baseUrl}/shelves`);

    const shelves = await response.json();
    return shelves;
  } catch (error) {
    console.error("Error:", error);
  }
  return PLACEHOLDER_SHELVES;
};

// get a shelf: path: app\(home)\shelf\[id]\page.tsx
export const getShelf = async (shelfId: string) => {
  // fetch a shelf
  try {
    const response = await fetch(`${baseUrl}/shelves/${shelfId}`);

    const shelf = await response.json();

    return shelf;
  } catch (error) {
    console.error("Error:", error);
  }

  return PLACEHOLDER_SHELVES[0];
};

// add a new shelf: path: app\(home)\shelf\new\page.tsx
export const addShelfHandler = async (newShelfData: Shelf) => {
  // add a new shelf
  try {
    const response = await fetch(`${baseUrl}/shelves/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newShelfData),
    });

    const shelf = await response.json();
    return shelf;
  } catch (error) {
    console.error("Error:", error);
  }
  console.log(newShelfData);
};

// update a shelf: path: app\(home)\shelf\page.tsx
export const updateShelfHandler = async (updatedShelfData: Shelf) => {
  // update a shelf
  console.log(updatedShelfData);
};

// delete a shelf: path: app\(home)\shelf\page.tsx
export const deleteShelfHandler = async (shelfId: string) => {
  try {
    const response = await fetch(`${baseUrl}/shelves/${shelfId}`, {
      method: "DELETE",
    });
    const shelf = await response.json();
    return shelf;
  } catch (error) {
    console.error("Error:", error);
  }
};

// ====== PRODUCT ========

// get all products: path: app\(home)\product\page.tsx
export const getAllProducts = async () => {
  // fetch all products
  try {
    const response = await fetch(`${baseUrl}/products`);

    const products = await response.json();
    return products;
  } catch (error) {
    console.error("Error:", error);
  }
  return PLACEHOLDER_PRODUCTS;
};

// get a product: path: app\(home)\product\[id]\page.tsx
export const getProduct = async (productId: string) => {
  // fetch a product
  try {
    const response = await fetch(`${baseUrl}/products/${productId}`);

    const product = await response.json();
    return product;
  } catch (error) {
    console.error("Error:", error);
  }

  return PLACEHOLDER_PRODUCTS[0];
};

// add a new product: path: app\(home)\product\new\page.tsx
export const addProductHandler = async (newProductData: Product) => {
  const formData = {
    name: newProductData.name,
    description: newProductData.description,
    price: newProductData.price,
    image_url: newProductData.image_url,
    stock: newProductData.stock,
    weight: newProductData.weight,
    shelf_id: parseInt(newProductData.shelf),
  };
  try {
    const response = await fetch(`${baseUrl}/products/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const product = await response.json();
    return product;
  } catch (error) {
    console.log(newProductData);
    console.error("Error:", error);
  }
};

// update a product: path: app\(home)\product\page.tsx
export const updateProductHandler = async (updatedProductData: Product) => {
  console.log(updatedProductData);
  // update a product
  const formData = {
    name: updatedProductData.name,
    description: updatedProductData.description,
    price: updatedProductData.price,
    image_url: updatedProductData.image_url,
    stock: updatedProductData.stock,
    weight: updatedProductData.weight,
    shelf_id: parseInt(updatedProductData.shelf),
  };
  try {
    const response = await fetch(`${baseUrl}/products/${updatedProductData.id}/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const product = await response.json();
    return product;
  } catch (error) {
    console.error("Error:", error);
  }

};

// delete a product: path: app\(home)\product\page.tsx
export const deleteProductHandler = async (productId: string) => {
  try {
    const response = await fetch(`${baseUrl}/products/${productId}`, {
      method: "DELETE",
    });
    const product = await response.json();
    return product;
  } catch (error) {
    console.error("Error:", error);
  }
  console.log(`Product ${productId} deleted...`);
};

// ====== SALES ========

// getSalesPerShift: path: app\(home)\shelf\page.tsx
export const getSalesPerShift = async () => {
  // fetch sales per shift
  const salesPerShift = {
    shift: ["Morning", "Afternoon", "Evening"],
    sales: [12, 19, 3],
  };

  return salesPerShift;
};
