export type StoreItem = {
  id: number;
  name: string;
  price: number;
};

export type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};
export type State = {
  items: StoreItem[];
  cart: CartItem[];
};

export type Button = HTMLButtonElement;
