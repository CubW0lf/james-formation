import { useState, useEffect } from "react";
import dd from "../../assets/images/dd.jpg";
import qualiopi from "../../assets/images/qualiopi.jpg";
import { RiLinkedinFill, RiYoutubeFill, RiTimeLine, RiMailLine } from "react-icons/ri";
import { FaPhoneAlt } from "react-icons/fa";
import { findInfos } from "../../api/infosApi.js";
import { toPhoneNumber } from "../../utils/utils";
import "./Footer.css";

const Footer = () => {
  const [infos, setInfos] = useState([]);

  useEffect(() => {
    findInfos(1).then((data) => {
      setInfos(data);
    });
  }, []);

  return (
    <footer className="Footer">
      <div className="top">
        <div className="certification">
          <img src={dd} alt="" />
          <img src={qualiopi} alt="" />
        </div>
        <div className="siret">
          <span>SIRET 89873719200010</span>
          <span>CODE APE/NAF 8559A</span>
          <span>
            N° 84380786638 déclaré auprès du préfet
            <br />
            de la région Auvergne-Rhône-Alpes
          </span>
        </div>
        <div className="infos">
          <span className="schedule">
            <RiTimeLine />
            Lundi au Samedi de 8h30 à 16h30
          </span>
          <span className="phone">
            <FaPhoneAlt /> {infos.length !== 0 && toPhoneNumber(infos.phone)}
          </span>
          <span className="mail">
            <RiMailLine /> {infos.length !== 0 && infos.email}
          </span>
          <div className="socials">
            <ul>
              <li>
                <RiLinkedinFill />
              </li>
              <li>
                <RiYoutubeFill />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bottom">
        <span>© 2022 JAMES FORMATION</span>
        <span>Mentions Légales</span>
      </div>
    </footer>
  );
};

export default Footer;
