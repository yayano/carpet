import { useState } from "react";
const Demo = () => {
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [quantity, setQuantity] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [price, setPrice] = useState("");
  const [delay, setDelay] = useState("");
  const [generate, setGenerate] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setGenerate(true);
    setDelay(2);
    setPrice(2000);
  };
  const handleClick = () => {
    setGenerate(false);
    setDelay(0);
    setPrice(0);
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
          quantity : <span>{quantity}</span> Carpets
        </p>
        <p>
          largeur : <span>{width}</span> cm
        </p>
        <p>
          hauteur : <span>{height}</span> cm
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
            <button onClick={handleClick}>order</button>
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
            type="Number"
            value={quantity}
            placeholder="Quantity"
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>
        <div className="input-container">
          <input
            type="Number"
            value={width}
            placeholder="Largeur"
            onChange={(e) => setWidth(e.target.value)}
          />
        </div>
        <div className="input-container">
          <input
            type="Number"
            value={height}
            placeholder="Hauteur"
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
        <button>Generate</button>
      </form>
    </div>
  );
};
export default Demo;
