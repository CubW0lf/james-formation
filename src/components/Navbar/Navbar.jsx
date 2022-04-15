import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.jpg";
import { FaPhoneAlt, FaPaperPlane } from "react-icons/fa";
import { BsInfoCircle } from "react-icons/bs";
import { IoSchoolSharp } from "react-icons/io5";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="Navbar">
      <ul className="flex-row">
        <Link to="/">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
        <li>
          <Link to="/presentations">
            <BsInfoCircle className="mobile" />
            <span className="not-mobile">Présentation</span>
          </Link>
        </li>
        <li>
          <Link to="/formations">
            <IoSchoolSharp className="mobile" />
            <span className="not-mobile">Catalogue</span>
          </Link>
        </li>
        <li>
          <Link to="/contact">
            <FaPaperPlane className="mobile" />
            <span className="not-mobile">Contact</span>
          </Link>
        </li>
      </ul>
      <a href="tel:0768589840" className="phone">
        <FaPhoneAlt />
        <span className="not-mobile">07 68 58 98 40</span>
      </a>
    </nav>
  );
};

export default Navbar;
