import { useState } from "react";
import { GrClose } from "react-icons/gr";
import { MdOutlineUnsubscribe } from "react-icons/md";
import "./PopUp.css";

const PopUp = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <div className={`PopUp ${toggle ? "active" : "hidden"}`}>
      <div className="wrapper">
        <MdOutlineUnsubscribe className={`show ${toggle ? "hidden" : "active"}`} onClick={() => setToggle(!toggle)} />
        <div className="container">
          <div className="close-btn" onClick={() => setToggle(!toggle)}>
            <GrClose />
          </div>
          <h3>Newsletter</h3>
          <form>
            <div className="input-container">
              <input type="email" required />
              <span>Email</span>
            </div>
            <div className="input-container">
              <input type="text" required />
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
