import { useEffect, useState } from "react";
import { findInfos } from "../../api/infosApi.js";
import { GrClose } from "react-icons/gr";
import { BsFillInfoCircleFill } from "react-icons/bs";
import "./Progress.css";

const Progress = () => {
  const [toggle, setToggle] = useState(true);
  const [infos, setInfos] = useState([]);

  useEffect(() => {
    findInfos(1).then((data) => setInfos(data));
  }, []);

  console.log(infos);
  return (
    <div className={`Progress ${toggle ? "active" : "hidden"}`}>
      <div className="wrapper">
        <BsFillInfoCircleFill className={`show ${toggle ? "hidden" : "active"}`} onClick={() => setToggle(!toggle)} />
        <div className="close-btn" onClick={() => setToggle(!toggle)}>
          <GrClose />
        </div>
        <div className="container">
          <p>
            Site en Construction.
            <br />
            Pour toute question merci de nous contacter par mail à l'adresse suivante :
          </p>
          <p>{infos.email}</p>
        </div>
      </div>
    </div>
  );
};

export default Progress;
