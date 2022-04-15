import { AiOutlineWarning } from "react-icons/ai";
import { GoLightBulb } from "react-icons/go";
import { BsPersonCheckFill } from "react-icons/bs";
import security from "../../assets/images/security.jpg";
import "./Security.css";

const Security = () => {
  return (
    <section className="Security">
      <img src={security} alt="" className="work" />
      <div className="top">
        <h1>Votre Sécurité au coeur de nos priorités</h1>
        <span>Centre de formation axé sur la prévention dans le milieu professionel.</span>
        <button>Voir Le Catalogue</button>
      </div>
      <div className="bottom">
        <h3>Former, informer, expliquer...</h3>
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
