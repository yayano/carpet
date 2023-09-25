import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const changeRoute = () => {
    const path = "./demo";
    navigate(path);
  };
  return (
    <div className="home">
      <div className="home-grid">
        <div className="home-container">
          <p className="title">
            Welcome to
            <br />
            the Carpet Cleaner's Website,
            <br />
            We Wash All Carpets{" "}
          </p>
          <p>
            try your carpet in our house in a virtual dimonstration,
            <br />
            go to the new simulator technology{" "}
          </p>
          <button className="button-86" role="button" onClick={changeRoute}>
            Try Demo
          </button>
        </div>
        <div className="slider"></div>
      </div>
    </div>
  );
};
export default Home;
