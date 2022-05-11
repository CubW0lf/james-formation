import { useState, useEffect, useContext } from "react";
import { getAllCourses } from "../../api/courseApi.js";
import { contact } from "../../api/messageApi.js";
import { findInfos } from "../../api/infosApi.js";
import { MdMail, MdLocationOn, MdSmartphone } from "react-icons/md";
import { RiLinkedinFill, RiYoutubeFill } from "react-icons/ri";
import { uxContext } from "../../contexts/uxContext.js";
import { toPhoneNumber } from "../../utils/utils.js";
import "./Contact.css";

const Contact = () => {
  const [error, setError] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [number, setNumber] = useState(1);
  const [course, setCourse] = useState("");
  const [message, setMessage] = useState("");
  const [courses, setCourses] = useState([]);
  const [infos, setInfos] = useState([]);

  const { flash, flashType, handleFlash } = useContext(uxContext);

  useEffect(() => {
    getAllCourses().then((data) => {
      setCourses(data);
    });
  }, []);

  useEffect(() => {
    findInfos(1).then((data) => {
      setInfos(data);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    setError([]);

    if (firstName === "") {
      error.push("Le Prénom ne doit pas être vide");
    }
    if (lastName === "") {
      error.push("Le nom de famille ne doit pas être vide");
    }
    if (!email.match(/^\S+@\S+\.\S+$/)) {
      error.push("L'email ne correspond pas");
    }
    if (!phone.match(/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im)) {
      error.push("Le téléphone ne correspond pas");
    }
    if (company === "") {
      error.push("Vous devez renseigner votre entreprise");
    }
    if (course === "") {
      error.push("Vous devez renseigner le cours qui vous interresse");
    }
    if (message === "") {
      error.push("Vous devez écrire un message");
    }

    if (error.length === 0) {
      contact({
        first_name: firstName,
        last_name: lastName,
        email: email,
        phone: phone,
        company: company,
        student_nb: number,
        course: course,
        message: message,
      });
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setCompany("");
      setNumber(1);
      setCourse("");
      setMessage("");
      handleFlash("success", "Votre Message à bien été envoyé", 3000);
    } else {
      const text = error.join(", ");
      handleFlash("error", text, 5000);
    }
  };

  return (
    <section className="Contact">
      <h1>Contact</h1>
      <div className="container">
        <div className="form">
          <form onSubmit={handleSubmit}>
            <h3>Formulaire de Contact :</h3>
            <div className="input-flex-container">
              <div className="input-container">
                <input type="text" required value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                <span>Prénom</span>
              </div>
              <div className="input-container">
                <input type="text" required value={lastName} onChange={(e) => setLastName(e.target.value)} />
                <span>Nom de Famille</span>
              </div>
            </div>
            <div className="input-flex-container">
              <div className="input-container">
                <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                <span>Email</span>
              </div>
              <div className="input-container">
                <input type="phone" required value={phone} onChange={(e) => setPhone(e.target.value)} />
                <span>Téléphone</span>
              </div>
            </div>
            <div className="input-flex-container">
              <div className="input-container">
                <input type="text" required value={company} onChange={(e) => setCompany(e.target.value)} />
                <span>Entreprise</span>
              </div>
              <div className="input-container">
                <input type="number" required value={number} onChange={(e) => setNumber(e.target.value)} />
                <span>Nombre de Personne</span>
              </div>
            </div>
            <select name="course" id="course-select" onChange={(e) => setCourse(e.target.value)}>
              <option value="">Formation désirée</option>
              {courses.map((c) => (
                <option key={c.id} value={c.name}>
                  {c.name}
                </option>
              ))}
            </select>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Votre Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button type="submit">Envoyer</button>
          </form>
        </div>
        <div className="infos">
          <h2>Infos</h2>
          <p>
            <MdLocationOn />
            {infos.length !== 0 && `${infos.number} ${infos.street}`}
            <br />
            {`${infos.cp} ${infos.city}`}
          </p>
          <p>
            <MdMail />
            {infos.length !== 0 && (
              <a href={`mailto:${infos.email}`} className="mail">
                {infos.email}
              </a>
            )}
          </p>
          <p>
            <MdSmartphone />
            {infos.length !== 0 && (
              <a href={`tel:${infos.phone}`} className="phone">
                {toPhoneNumber(infos.phone)}
              </a>
            )}
          </p>
          <h3>Nos Réseaux</h3>
          <ul className="social">
            <li>
              <a href={infos.linkedin} target="_blank">
                <RiLinkedinFill />
              </a>
            </li>
            <li>
              <a href={infos.Youtube} target="_blank">
                <RiYoutubeFill />
              </a>
            </li>
          </ul>
        </div>
      </div>
      {flash !== "" && <div className={`flash ${flashType !== "" ? flashType : ""}`}>{flash}</div>}
    </section>
  );
};

export default Contact;
