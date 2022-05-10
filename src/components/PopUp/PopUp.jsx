import { useState } from "react";
import { GrClose } from "react-icons/gr";
import { MdOutlineUnsubscribe } from "react-icons/md";
import { subscribe } from "../../api/newsLetterApi.js";
import "./PopUp.css";

const PopUp = () => {
  const [toggle, setToggle] = useState(true);
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    subscribe(email, fullName);
  };

  return (
    <div className={`PopUp ${toggle ? "active" : "hidden"}`}>
      <div className="wrapper">
        <MdOutlineUnsubscribe className={`show ${toggle ? "hidden" : "active"}`} onClick={() => setToggle(!toggle)} />
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
