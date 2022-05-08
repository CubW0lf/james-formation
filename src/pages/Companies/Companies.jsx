import BottomWaves from "../../components/BottomWaves/BottomWaves";
import TopWaves from "../../components/TopWaves/TopWaves";
import "./Companies.css";

const Companies = () => {
  return (
    <>
      <div className="Companies">
        <TopWaves color="var(--primary)" />
        <h3>Il Nous Font confiance</h3>
        <ul>
          <li>Entreprise 1</li>
          <li>Entreprise 2</li>
          <li>Entreprise 3</li>
          <li>Entreprise 4</li>
        </ul>
      </div>
      <BottomWaves color="var(--primary)" />
    </>
  );
};

export default Companies;
