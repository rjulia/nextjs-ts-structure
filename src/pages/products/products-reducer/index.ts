export const enum ActionProducts {
  SET_FILTER = "SET_FILTER",
  SET_PRODUCTS = "SET_PRODUCTS",
  SET_SELECTED_PRODUCT = "SET_SELECTED_PRODUCT",
}

export type Action = {
  type: ActionProducts;
  payload: any;
};

export type State = {
  filter: string;
  products: any[];
  selectedProduct: {} | null;
};
export const initialCounterState: State = {
  filter: "",
  products: [],
  selectedProduct: null,
};

export const stateProductsReducer = (state: State, action: Action) => {
  const { type, payload } = action;
  switch (type) {
    case ActionProducts.SET_FILTER:
      return {
        ...state,
        filter: action.payload,
      };
    case ActionProducts.SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case ActionProducts.SET_SELECTED_PRODUCT:
      return {
        ...state,
        selectedProducts: action.payload,
      };
    default:
      throw new Error();
  }
};
