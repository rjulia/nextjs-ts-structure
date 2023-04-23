import { createContext, useContext } from "react";
import { State, initialCounterState } from "../products-reducer";

export type ProductContent = {
  state: State;
  dispatch: React.Dispatch<any>;
};
export const ProductsContext = createContext<ProductContent>({
  state: initialCounterState, // set a default value
  dispatch: () => null,
});
export const useProducts = () => useContext(ProductsContext);
