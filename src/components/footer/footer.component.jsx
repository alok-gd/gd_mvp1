import "./footer.styles.css";
import { FaDiscord } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitch } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { ReactComponent as Logo } from "../../assets/logo.svg";
export default function Footer() {
  return (
    <div className="footer">
      <hr />
      <p className="follow">Follow us on</p>
      <div className="icons-div">
        <FaDiscord className="icons" />
        <FaInstagramSquare className="icons" />
        <BsTwitter className="icons" />
        <FaTwitch className="icons" />
        <FaYoutube className="icons" />
      </div>
      <div className="gd-foot-div">
        <div>
          <Logo className="gd-foot-logo" />
        </div>
        <div className="gd-foot-text text-all-page">
          We create a reliable, regulated and effortless gaming ecosystem where
          gamers can compete, network and get rewarded to further enhance their
          gaming experience.
        </div>
      </div>
    </div>
  );
}
