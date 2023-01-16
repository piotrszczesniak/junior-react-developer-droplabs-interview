export type ProductType = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

export type CartType = Pick<ProductType, 'id' | 'title' | 'price'>;

export type UserType = {
  email: string;
  password: string;
};

export type AuthenticationType = {
  isAuthenticated: boolean;
  user: UserType | null;
  authenticate: (data: UserType) => void;
  logout: () => void;
};

export type CartContextType = {
  cartItems: CartType[];
  setCartItems: (data: CartType[]) => void;
  addItemToCart: (data: CartType) => void;
};
