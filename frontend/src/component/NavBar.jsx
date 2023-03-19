import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="nav-bar">
      <nav className="menu">
        <div>
          <i className="fa fa-home"></i>
          <Link to="/">Home</Link>
        </div>

        <Link to="/about">About us</Link>

        <Link to="/contact">Contact us</Link>
        <Link to="/demo">Simulator</Link>
      </nav>
    </div>
  );
};
export default NavBar;
