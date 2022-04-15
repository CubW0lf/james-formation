import { useEffect, useState } from "react";
import { findAbout } from "../../api/aboutApi";
import "./About.css";

const About = () => {
  const [text, setText] = useState([]);

  useEffect(() => {
    findAbout(1).then((data) => setText(data.text));
  }, []);

  return (
    <section className="About">
      <h1>Présentation</h1>
      <p dangerouslySetInnerHTML={{ __html: text }}></p>
    </section>
  );
};

export default About;
