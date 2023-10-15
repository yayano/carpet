import { ProductContext } from "../context/ProductContext";
import { useContext } from "react";

export const useProductsContext = () => {
  const context = useContext(ProductContext);

  if (!context) {
    throw Error("useProductsContext must be in productsContextProvider");
  }

  return context;
};
