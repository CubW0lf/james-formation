import { useState, useContext } from "react";
import { GrClose } from "react-icons/gr";
import { IoMailUnreadSharp } from "react-icons/io5";
import { subscribe } from "../../api/newsLetterApi.js";
import { uxContext } from "../../contexts/uxContext.js";
import "./PopUp.css";

const PopUp = () => {
  const [toggle, setToggle] = useState(true);
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");

  const { handleFlash, flash, flashType } = useContext(uxContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.match(/^\S+@\S+\.\S+$/) && fullName !== "") {
      subscribe(email, fullName);
      handleFlash("success", "Votre adresse à bien été ajouté à la newsletter", 3000);
      setEmail("");
      setFullName("");
    } else {
      handleFlash("error", "Votre email ne correspond pas et/ou votre nom n'est pas indiqué.", 3000);
    }
  };

  return (
    <div className={`PopUp ${toggle ? "active" : "hidden"}`}>
      {flash !== "" && <div className={`flash ${flashType !== "" ? flashType : ""}`}>{flash}</div>}
      <div className="wrapper">
        <IoMailUnreadSharp className={`show ${toggle ? "hidden" : "active"}`} onClick={() => setToggle(!toggle)} />
        <div className="container">
          <div className="close-btn" onClick={() => setToggle(!toggle)}>
            <GrClose />
          </div>
          <h3>Newsletter</h3>
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
              <span>Email</span>
            </div>
            <div className="input-container">
              <input type="text" required value={fullName} onChange={(e) => setFullName(e.target.value)} />
              <span>Nom Complet</span>
            </div>
            <button>Inscription</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
