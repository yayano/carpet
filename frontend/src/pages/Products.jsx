import { useEffect } from "react";
import { useProductsContext } from "../hooks/useProductsContext";
import AddProductForm from "../component/addProductForm";
import "./products.css";
const Products = () => {
  const { products, dispatch } = useProductsContext();
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://clean-carpet.onrender.com");
      const json = await response.json();
      if (response.ok) {
        dispatch({ type: "SET_PRODUCTS", payload: json });
      }
    };
    fetchProducts();
  }, [dispatch]);
  return (
    <div className="products-container">
      <div className="col-md-3">
        {products &&
          products.map((product) => (
            <div key={product._id} className="wsk-cp-product">
              <div className="wsk-cp-img">
                <img
                  src={product.image}
                  alt="Product"
                  className="img-responsive"
                />
              </div>
              <div className="wsk-cp-text">
                <div className="category">
                  <span>{product.name}</span>
                </div>
                <div className="title-product">
                  <h3> {product.brand} </h3>
                </div>
                <div className="description-prod">
                  <p>{product.type}</p>
                </div>
                <div className="card-footer">
                  <div className="wcf-left">
                    {" "}
                    <span className="price">{product.price}</span>{" "}
                  </div>
                  <div className="wcf-right">
                    {" "}
                    <span className="buy-btn">
                      {product.rating + "🥇"}
                    </span>{" "}
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
export default Products;
