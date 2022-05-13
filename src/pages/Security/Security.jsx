import { useState, useEffect } from "react";
import { AiOutlineWarning } from "react-icons/ai";
import { GoLightBulb } from "react-icons/go";
import { BsPersonCheckFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import TopWaves from "../../components/TopWaves/TopWaves";
import security from "../../assets/images/security.jpg";
import zap from "../../assets/images/courant.png";
import "./Security.css";
import { findPhrases } from "../../api/catchPhraseApi";

const Security = () => {
  const [phrases, setPhrases] = useState([]);

  useEffect(() => {
    findPhrases().then((data) => {
      setPhrases(data);
    });
  }, []);

  return (
    <section className="Security">
      <img src={security} alt="" className="work not-mobile" />
      <div className="top">
        <h1>
          Votre <span>Sécurité</span>
          <br />
          au coeur de nos <span>priorités</span>
        </h1>
        <p>Centre de formation axé sur la prévention dans le milieu professionel.</p>
        <Link to="/formations">
          <button>Voir Le Catalogue</button>
        </Link>
      </div>
      <div className="bottom">
        <div className="title">
          <h2>Former, informer, expliquer...</h2>
          <img src={zap} alt="" className="zap" />
        </div>
        <TopWaves color="var(--dark)" />
        <ul>
          <li>
            <AiOutlineWarning />
            {phrases.prevent}
          </li>
          <li>
            <GoLightBulb />
            {phrases.consciousness}
          </li>
          <li>
            <BsPersonCheckFill />
            {phrases.proof}
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Security;
