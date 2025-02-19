import "./Footer.css";
import { TypeAnimation } from "react-type-animation";
import {
  FaFacebookF,
  FaTwitter,
  FaTiktok,
  FaInstagram,
  FaGoogle,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <h4>
        Our community | <span>Services</span> and <span>Production</span>
      </h4>
      <h5>That's right for services provider about purely water</h5>
      <h6>
        Our Benefit :{" "}
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed out once, initially
            "Purely Water",
            1000, // wait 1s before replacing "Mice" with "Hamsters"
            "Providing Energy",
            1000,
            "Take Care your Health",
            1000,
            "Footer your Face-Beauty",
            1000,
          ]}
          wrapper="span"
          speed={50}
          style={{
            fontSize: "15px",
            display: "inline-block",
            color: "#da1889",
            fontWeight: "bold",
          }}
          repeat={Infinity}
        />
      </h6>

      <div className="Footer_Social">
        <FaFacebookF className="FooterIcon" />
        <FaTwitter className="FooterIcon" />
        <FaTiktok className="FooterIcon" />
        <FaInstagram className="FooterIcon" />
        <FaGoogle className="FooterIcon" />
      </div>

      <p className="last">© 2025 COPIRIGHT. ALL RIGHTS RESERVED.</p>
    </div>
  );
};

export default Footer;
