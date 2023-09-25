import aspirateur from "../img/aspirateur.jpg";
import img5 from "../img/img5.jpg";
import img2 from "../img/img2.jpg";
import img3 from "../img/img3.jpg";
import img4 from "../img/img4.jpg";
const About = () => {
  return (
    <div className="about">
      <h1>About us</h1>
      <div className="container">
        <div className="card_0">
          <img src={aspirateur} alt="aspirateur" />
          <p>
            Since we began we had one goal in mind: To offer complete
            satisfaction to each client through our deep cleaning methods. Our
            business is based on the principles of quality work, honest pricing,
            and unprecedented customer service.
          </p>
        </div>
        <div className="card_1">
          <p>
            We believe a cleaner life is a better life! This is why we have
            helped countless people throughout the Los Angeles County with a
            variety of cleaning services. If you need something cleaned or
            restored, we will quickly and efficiently take care of it. From
            carpets to tiles, we are experts in this industry.
          </p>
          <img src={img5} alt="aspirateur" style={{ width: "50%" }} />
        </div>
        <div className="card_2">
          <img src={img2} alt="aspirateur" />
          <p>
            From upholstery to tile and grout cleaning, we can help. We offer
            several different cleaning work, such as stripping, waxing, hardwood
            cleaning, move-in and move-out cleaning, among many more. We work
            with a variety of materials, like granite, quartz, concrete, marble,
            and more! We can apply sealers that will help protect it from
            calcium build up and hard water stains.
          </p>
        </div>
        <div className="card_3">
          <p>
            If you need your upholstery cleaned, we are your best bet! We will
            vacuum your furniture first, treat the fabric to release body oils,
            steam it, dry clean it, deodorize and sanitize it, and everything
            else it needs. From grout to tile cleaning, we can get the job done
            better than anyone in town!
          </p>
          <img src={img3} alt="aspirateur" />
        </div>
      </div>
    </div>
  );
};
export default About;
