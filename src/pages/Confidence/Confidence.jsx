import { useEffect, useState } from "react";
import Circle from "../../components/Circle/Circle";
import BottomWaves from "../../components/BottomWaves/BottomWaves";
import { findPercent } from "../../api/satisfactionApi";
import "./Confidence.css";

const Confidence = () => {
  const [percent, setPercent] = useState([]);

  useEffect(() => {
    findPercent().then((data) => {
      setPercent(data);
    });
  }, []);

  return (
    <>
      <div className="Confidence">
        <h2>James Formation en quelques chiffres :</h2>
        <ul>
          {percent.map((p) => (
            <li key={p.id} title={`Sur ${p.student} étudiants`}>
              <Circle value={p.rating} />
              <span>{p.title}</span>
            </li>
          ))}
        </ul>
      </div>
      <BottomWaves color="var(--primary)" />
    </>
  );
};

export default Confidence;
