import "./Footer.scss";
import logo from "../assets/images/LOGOFOOTER.png";

function Footer() {
  return (
    <footer>
      <img src={logo} alt="LogoFooter" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
