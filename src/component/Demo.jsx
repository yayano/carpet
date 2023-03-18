import { useState } from "react";
import CarpetNumber from "./CarpetNumber";
const Demo = () => {
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [price, setPrice] = useState("");
  const [delay, setDelay] = useState("");
  const [generate, setGenerate] = useState(false);
  const [visible, setVisible] = useState(true);
  const handleSubmit = (e) => {
    e.preventDefault();
    setGenerate(true);
    const size = width * height;
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
    const user = { name, email, phone, price };
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
            price : <span>{price}</span> da
          </p>
          <p>
            delay : <span>{delay}</span> day
          </p>
          <div className="butt">
            <button onClick={handleOrder}>order</button>
            <button onClick={handleClick}>cancel</button>
          </div>
        </div>
      )}
      <form onSubmit={handleSubmit}>
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
            type="text"
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

        {visible && <CarpetNumber visible={visible} />}
        <button>Generate</button>
      </form>
    </div>
  );
};
export default Demo;
