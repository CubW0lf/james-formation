import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.jpg";
import { FaPhoneAlt, FaPaperPlane } from "react-icons/fa";
import { BsInfoCircle } from "react-icons/bs";
import { IoSchoolSharp } from "react-icons/io5";
import { findInfos } from "../../api/infosApi.js";
import { toPhoneNumber } from "../../utils/utils";
import dd from "../../assets/images/dd.jpg";
import qualiopi from "../../assets/images/qualiopi.jpg";
import "./Navbar.css";

const Navbar = () => {
  const [infos, setInfos] = useState([]);

  useEffect(() => {
    findInfos(1).then((data) => {
      setInfos(data);
    });
  }, []);
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
      <div className="certification">
        <img src={dd} alt="" />
        <img src={qualiopi} alt="" />
      </div>
      <a href="tel:0768589840" className="phone">
        <FaPhoneAlt />
        <span className="not-mobile">{infos.length !== 0 && toPhoneNumber(infos.phone)}</span>
      </a>
    </nav>
  );
};

export default Navbar;
