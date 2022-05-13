import { useEffect, useState } from "react";
import { findLegal } from "../../api/legalApi.js";
import TopWaves from "../../components/TopWaves/TopWaves";
import BottomWaves from "../../components/BottomWaves/BottomWaves";
import "./Legal.css";

const Legal = () => {
  const [text, setText] = useState([]);

  useEffect(() => {
    findLegal(1).then((data) => setText(data.text));
  }, []);

  return (
    <section className="Legal">
      <h1>Mentions Légales</h1>
      <TopWaves color="var(--primary)" />
      <p className="text" dangerouslySetInnerHTML={{ __html: text }}></p>
      <BottomWaves color="var(--primary)" />
    </section>
  );
};

export default Legal;
