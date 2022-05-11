import { AiOutlineWarning } from "react-icons/ai";
import { GoLightBulb } from "react-icons/go";
import { BsPersonCheckFill } from "react-icons/bs";
import security from "../../assets/images/security.jpg";
import "./Security.css";
import { Link } from "react-router-dom";
import TopWaves from "../../components/TopWaves/TopWaves";

const Security = () => {
  return (
    <section className="Security">
      <img src={security} alt="" className="work" />
      <div className="top">
        <h1>
          Votre <span>Sécurité</span>
          <br />
          au coeur de nos <span>priorités</span>.
        </h1>
        <p>Centre de formation axé sur la prévention dans le milieu professionel.</p>
        <Link to="/formations">
          <button>Voir Le Catalogue</button>
        </Link>
      </div>
      <div className="bottom">
        <TopWaves color="var(--dark)" />
        <h2>Former, informer, expliquer...</h2>
        <ul>
          <li>
            <AiOutlineWarning />
            prévenir les risques dans le milieu professionel
          </li>
          <li>
            <GoLightBulb />
            faire prendre conscience de l'importance de se protéger car les accidents sont vite arrivés
          </li>
          <li>
            <BsPersonCheckFill />
            une méthode simple et efficace qui a déjà fait ses preuves
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Security;
