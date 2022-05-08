import Circle from "../../components/Circle/Circle";
import { useInView } from "react-intersection-observer";
import "./Confidence.css";
import BottomWaves from "../../components/BottomWaves/BottomWaves";

const Confidence = () => {
  const { ref, inView } = useInView();
  return (
    <>
      <div className="Confidence" ref={ref}>
        <h2>James Formation en quelques chiffres :</h2>
        <ul>
          <li className={`${inView ? "active" : ""}`}>
            <Circle value="98" />
            <span>De stagiaires satisfaits de la formation</span>
          </li>
          <li className={`${inView ? "active" : ""}`}>
            <Circle value="100" />
            <span>De Taux de Réussite</span>
          </li>
          <li className={`${inView ? "active" : ""}`}>
            <Circle value="100" />
            <span>De Stagiaires satisfait du formateur</span>
          </li>
          <li className={`${inView ? "active" : ""}`}>
            <Circle value="100" />
            <span>De Stagiaires satisfaits de l'accueil</span>
          </li>
        </ul>
      </div>
      <BottomWaves color="var(--primary)" />
    </>
  );
};

export default Confidence;
