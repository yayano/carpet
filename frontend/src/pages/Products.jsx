import { useEffect } from "react";
import { useProductsContext } from "../hooks/useProductsContext";
const Products = () => {
  const { products, dispatch } = useProductsContext();
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("http://localhost:5000/products");
      const json = await response.json();
      if (response.ok) {
        dispatch({ type: "SET_PRODUCTS", payload: json });
      }
    };
    fetchProducts();
  }, [dispatch]);
  return (
    <div>
      {products &&
        products.map((product) => (
          <div key={product._id}>
            <p>{product.name}</p>
          </div>
        ))}
    </div>
  );
};
export default Products;
