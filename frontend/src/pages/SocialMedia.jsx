import { Link } from "react-router-dom";
const SocialMedia = () => {
  return (
    <div className="social-media">
      <ul>
        <li>
          <Link
            to={{ pathname: "http://facebook.com/yayacfc.yaya" }}
            target="_blank"
          >
            <i className="fab fa-facebook" aria-hidden="true"></i>
          </Link>
        </li>
        <li>
          <Link
            to={{
              pathname:
                "https://www.youtube.com/channel/UCZmCRaZJnLcSFX5_w1noM6A",
            }}
            target="_blank"
          >
            <i className="fab fa-youtube" aria-hidden="true"></i>
          </Link>
        </li>
        <li>
          <Link to={{ pathname: "http://github.com/yayano" }} target="_blank">
            <i className="fab fa-github" aria-hidden="true"></i>
          </Link>
        </li>
        <li>
          <Link
            to={{
              pathname:
                "https://www.linkedin.com/in/boussetta-yahia-060557171/",
            }}
            target="_blank"
          >
            <i className="fab fa-linkedin" aria-hidden="true"></i>
          </Link>
        </li>
        <li>
          <Link
            to={{ pathname: "https://www.instagram.com/yaya_13_yaya/" }}
            target="_blank"
          >
            <i className="fab fa-instagram" aria-hidden="true"></i>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SocialMedia;
