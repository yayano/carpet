import { useState } from "react";
import { useForm } from "react-hook-form";
import { PDFViewer } from "@react-pdf/renderer";
import Pdf from "./PDFDocument";
const Demo = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [price, setPrice] = useState("");
  const [delay, setDelay] = useState("");
  const [generate, setGenerate] = useState(false);
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [size, setSize] = useState("");
  const [background, setBackground] = useState(false);
  const [isPdf, setIsPdf] = useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const onSubmit = () => {
    if (errors.email) {
    }
    setGenerate(true);
    setSize(width * height);
    switch (true) {
      case size <= 1:
        setPrice(500);
        setDelay(1);
        break;
      case 1 < size && size <= 2:
        setPrice(1000);
        setDelay(1);
        break;
      case 2 < size:
        setPrice(500 * size);
        setDelay(size / 3);
        break;
    }
  };
  const handleClick = () => {
    setGenerate(false);
    setDelay(0);
    setPrice(0);
  };
  const handleOrder = () => {
    setIsPdf(true);
  };
  return (
    <div className="demo">
      <div className="demo-card">
        <p>
          Name : <span>{name}</span>{" "}
        </p>
        <p>
          Email : <span>{email}</span>{" "}
        </p>
        <p>
          phone : <span>{phone}</span>
        </p>
        <p>
          addresse : <span>{address}</span>
        </p>
      </div>
      {generate && (
        <div className="generate-price">
          <p>
            size : <span>{size}</span> m²
          </p>
          <p>
            price : <span>{price}</span> da
          </p>
          <p>
            delay : <span>{delay}</span> day
          </p>
          <div className="butt">
            <button onClick={handleOrder}>invoice</button>
            <button onClick={handleClick}>cancel</button>
          </div>
        </div>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="input-container">
          <input
            type="text"
            value={name}
            placeholder="name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="input-container">
          <input
            type="email"
            {...register("email", {
              required: "Required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "invalid email address",
              },
            })}
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-container">
          <input
            type="text"
            value={phone}
            placeholder="phone"
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="input-container">
          <input
            type="text"
            value={address}
            placeholder="Addresse"
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="input-field">
          <h2>Carpet</h2>
          <input
            type="Number"
            name="width"
            placeholder="width in meters"
            value={width}
            onChange={(e) => setWidth(e.target.value)}
          />
          <input
            type="Number"
            name="height"
            placeholder="height in meters"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
        <button>Generate</button>
      </form>
      {generate && (
        <PDFViewer>
          <Pdf name="name" />
        </PDFViewer>
      )}
    </div>
  );
};
export default Demo;
