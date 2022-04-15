import james from "../../assets/images/james.jpg";
import "./Instructor.css";

const Instructor = () => {
  return (
    <section className="Instructor">
      <h1>Notre Formateur</h1>
      <div className="flex-row">
        <img src={james} alt="James Fontaine" className="james" />
        <div className="infos">
          <h3>FONTAINE JAMES</h3>
          <span>
            Gérant de JAMES FORMATION et Formateur en habilitation électrique,
            <br />
            AIPR et autorisation de conduite de chariot élévateur 1-3-5 (R489) et gerbeur (R485).
          </span>
          <button>Télécharger le CV</button>
        </div>
      </div>
    </section>
  );
};

export default Instructor;
