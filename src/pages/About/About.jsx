import { useEffect, useState } from "react";
import { findAbout } from "../../api/aboutApi";
import TopWaves from "../../components/TopWaves/TopWaves";
import BottomWaves from "../../components/BottomWaves/BottomWaves";
import "./About.css";

const About = () => {
  const [text, setText] = useState([]);

  useEffect(() => {
    findAbout(1).then((data) => setText(data.text));
  }, []);

  return (
    <section className="About">
      <h1>Présentation</h1>
      <TopWaves color="var(--primary)" />
      <p className="text" dangerouslySetInnerHTML={{ __html: text }}></p>
      <BottomWaves color="var(--primary)" />
    </section>
  );
};

export default About;
