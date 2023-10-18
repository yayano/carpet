import { useState } from "react";
import { useProductsContext } from "../hooks/useProductsContext";
import "./addProductForm.css";

const AddProductForm = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [brand, setBrand] = useState("");
  const [type, setType] = useState("");
  const [warranty, setWarranty] = useState("");
  const [rating, setRating] = useState("");
  const [image, setImage] = useState("");
  const [preview, setPreview] = useState();
  const { dispatch } = useProductsContext();
  const [error, setError] = useState(null);
  const [emptyFiels, setEmptyFields] = useState([]);
  const handleClick = async (e) => {
    e.preventDefault();
    const product = { name, price, brand, type, warranty, rating, image };
    const response = await fetch("http://localhost:5000/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
    const json = await response.json();
    console.log(product);
    if (!response.ok) {
      setError(json.error);
      setEmptyFields(json.emptyFiels);
    }
    if (response.ok) {
      setError(null);
      setEmptyFields([]);
      setName("");
      setBrand("");
      setPrice("");
      setType("");
      setWarranty("");
      setRating("");
      setImage("");
      dispatch({ type: "CREATE_PRODUCT", payload: json });
    }
  };
  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };
  const handleFileUpload = async (e) => {
    const file = e.target.files[0];

    const base64 = await convertToBase64(file);
    setImage(base64);
    setPreview(file);
    console.log(preview);
  };
  return (
    <div className="wrapper">
      <div className="inner">
        <form action="">
          <h3>Products Form</h3>
          <div className="form-group">
            <input
              type="text"
              placeholder="Name"
              className="form-control"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="Text"
              placeholder="Brand"
              className="form-control"
              name="brand"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
            />
          </div>
          <div className="form-wrapper">
            <input
              type="text"
              placeholder="Type"
              className="form-control"
              name="type"
              value={type}
              onChange={(e) => setType(e.target.value)}
            />
          </div>
          <div className="form-wrapper">
            <input
              type="text"
              placeholder="warranty"
              className="form-control"
              name="warranty"
              value={warranty}
              onChange={(e) => setWarranty(e.target.value)}
            />
          </div>

          <div className="form-wrapper">
            <input
              type="Number"
              placeholder="Price"
              className="form-control"
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="form-wrapper">
            <input
              type="Number"
              placeholder="Rating"
              className="form-control"
              name="rating"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            />
          </div>
          <div className="form-wrapper">
            <input
              type="file"
              label="Image"
              className="form-control"
              name="image"
              accept=".jpeg,.png,.jpg"
              onChange={(e) => handleFileUpload(e)}
            />
            <img
              style={{ width: "300px", height: "200px" }}
              src={`${image}`}
              onChange={(e) => setPreview(e.target.parent)}
            />
          </div>
          <button onClick={(e) => handleClick(e)}>Register</button>
          {error && <div className="error">{error}</div>}
        </form>
      </div>
    </div>
  );
};

export default AddProductForm;
