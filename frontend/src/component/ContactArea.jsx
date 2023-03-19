const ContactArea = () => {
  return (
    <section className="contact-area">
      <div className="container">
        <div className="row">
          <div className="email">
            <i className="fa fa-envelope"></i>
            <a href="/email">boussetta13yahia@gmail.com</a>
          </div>
          <div className="phone">
            <i className="fa fa-phone"></i>
            <a href="/email">+213 540 596016</a>
          </div>
          <div className="mobile">
            <i className="fa fa-mobile"></i>
            <a href="/email">+213 540 596016</a>
          </div>
          <div className="whatsup">
            <i className="fa fa-whatsapp"></i>
            <a href="/email">+213 540 596016</a>
          </div>
          <div className="social-media">
            <a href="/facebook">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="/instagram">
              <i className="fa fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactArea;
