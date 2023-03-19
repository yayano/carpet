import footer from "../../images/footer-bg.svg";
const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <h2>contact</h2>
        <div className="email">
          <i className="fa fa-envelope"></i>
          <a href="/email">boussetta13yahia@gmail.com</a>
        </div>
        <div className="phone">
          <i className="fa fa-phone"></i>
          <a href="/email">+213 540 596016</a>
        </div>
      </div>
      <div className="dev-name">BOUSSETTA YAHIA</div>
      <div className="created-with">
        <span>Copyright</span>
        <b>©</b>
        <span>2022-2023</span>
        <span>Boussetta Yahia</span>
        <span className="love">
          Created with
          <i className="fa fa-heart"></i>
        </span>
      </div>
    </div>
  );
};

export default Footer;
