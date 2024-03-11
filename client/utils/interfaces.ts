export interface AuthState {
  username: string;
  password: string;
  isLogin: boolean;
}

export interface Shelf {
  name: string;
  id: string;
  description: string;
  weight_capacity: number;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  weight: number;
  shelf: string;
  image_url: string;
}

export interface SalesPerShift {
  shift: string[];
  sales: number[];
}
