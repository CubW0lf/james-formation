import dd from "../../assets/images/dd.jpg";
import qualiopi from "../../assets/images/qualiopi.jpg";
import { RiLinkedinFill, RiYoutubeFill, RiTimeLine, RiMailLine } from "react-icons/ri";
import { FaPhoneAlt } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
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
          <span>
            <RiTimeLine />
            Lundi au Samedi de 8h30 à 16h30
          </span>
          <span>
            <FaPhoneAlt />
          </span>
          <span>
            <RiMailLine />
          </span>
        </div>
      </div>
      <div className="bottom">
        <span>© 2022 JAMES FORMATION</span>
        <span>Mentions Légales</span>
        <span>Site : COTTALORDA Vincent</span>
        <span>Design : Shannon Burg</span>
      </div>
    </footer>
  );
};

export default Footer;
