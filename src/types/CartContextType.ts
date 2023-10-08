import { IProduct } from "./product";

export interface CartContextType {
  cart: IProduct[];
  addToCart: (product: IProduct) => void;
  removeFromCart: (productId: number) => void;
  handleQuantityChange: (productId: number, change: number) => void;
  setOpenCart: React.Dispatch<React.SetStateAction<boolean>>;
  openCart: boolean;
}
