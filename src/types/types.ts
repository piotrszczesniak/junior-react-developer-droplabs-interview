// export type ProductsType = {
//   id: number;
//   title: string;
//   price: number;
//   description: string;
//   image: string;
//   rating: {
//     rate: string;
//     count: number;
//   };
// };

export type ProductType = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: string;
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
