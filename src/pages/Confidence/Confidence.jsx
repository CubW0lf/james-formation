import Circle from "../../components/Circle/Circle";
import "./Confidence.css";

const Confidence = () => {
  return (
    <div className="Confidence">
      <h2>James Formation en quelques chiffres :</h2>
      <ul>
        <li>
          <Circle value="98" />
          <span>De stagiaires satisfaits de la formation</span>
        </li>
        <li>
          <Circle value="100" />
          <span>De Taux de Réussite</span>
        </li>
        <li>
          <Circle value="100" />
          <span>De Stagiaires satisfait du formateur</span>
        </li>
        <li>
          <Circle value="100" />
          <span>De Stagiaires satisfaits de l'accueil</span>
        </li>
      </ul>
    </div>
  );
};

export default Confidence;
