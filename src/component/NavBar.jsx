const NavBar = () => {
  return (
    <div className="nav-bar">
      <nav className="menu">
        <div>
          <i className="fa fa-home"></i>
          <a href="/">Home</a>
        </div>

        <a href="/about">About us</a>

        <a href="/services">Services</a>

        <a href="/contact">Contact us</a>
        <a href="/demo">Simulator</a>
        <a href="/demo">Sitemap</a>

        {/*<a>
          <i className="fa fa-facebook" style={{ color: "blue" }}></i>
          <i className="fa fa-instagram" style={{ color: "grey" }}></i>
          <i className="fa fa-youtube" style={{ color: "red" }}></i>
        </a>*/}
      </nav>
    </div>
  );
};
export default NavBar;
