import "./Instructor.css";
import assets from "../../api/assets.js";

const Instructor = ({ name, image, bio }) => {
  return (
    <div className="Instructor">
      <img src={`${assets}${image}`} alt="James Fontaine" className="james" />
      <div className="infos">
        <h3>{name}</h3>
        <span dangerouslySetInnerHTML={{ __html: bio }}></span>
      </div>
    </div>
  );
};

export default Instructor;
