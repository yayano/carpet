import { Link } from "react-router-dom";
import { useState } from "react";
import Humberger from "../../images/navbar.svg";
import Cancel from "../../images/cancel.svg";
import "./navBar.css";
const NavBar = () => {
  const [showNav, setShowNav] = useState(false);
  const toggleNavBar = () => {
    setShowNav(!showNav);
  };
  const navLinks = [
    {
      id: "/",
      title: "Home",
    },
    {
      id: "/products",
      title: "Products",
    },
    {
      id: "/about",
      title: "About",
    },

    {
      id: "/contact",
      title: "Contact us",
    },
    {
      id: "/demo",
      title: "Demo",
    },
  ];
  return (
    <div className="nav-bar">
      <nav className="menu ">
        <div className="items-wrapper">
          <div className="burger " onClick={toggleNavBar}>
            <img src={showNav ? Cancel : Humberger} />
          </div>
          {navLinks.map((nav, index) => (
            <div key={nav.id} className={`${!showNav && "items"}`}>
              {nav.id == "/" && <i className="fa fa-home"></i>}
              <Link to={nav.id}>{nav.title}</Link>
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
};
export default NavBar;
