import { createContext, useReducer } from "react";

export const ProductContext = createContext();
export const ProductsReducer = (state, action) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return {
        products: action.payload,
      };
    case "CREATE_WORKOUT":
      return {
        products: [action.payload, ...state.products],
      };
    default:
      return state;
  }
};
export const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ProductsReducer, {
    products: null,
  });
  return (
    <ProductContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};
