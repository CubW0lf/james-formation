import { useState, useEffect } from "react";
import { getAllCourses } from "../../api/courseApi.js";
import { GrLocation, GrMailOption } from "react-icons/gr";
import { BsTelephoneFill } from "react-icons/bs";
import { RiLinkedinFill, RiYoutubeFill } from "react-icons/ri";
import "./Contact.css";

const Contact = () => {
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [email, setEmail] = useState("");
  // const [phone, setPhone] = useState("");
  // const [company, setCompany] = useState("");
  // const [number, setNumber] = useState(1);
  // const [course, setCourse] = useState("");
  // const [message, setMessage] = useState("");
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getAllCourses().then((data) => {
      setCourses(data);
    });
  }, []);

  return (
    <section className="Contact">
      <h1>Contact</h1>
      <div className="container">
        <div className="form">
          <form>
            <h3>Formulaire de Contact :</h3>
            <div className="input-flex-container">
              <div className="input-container">
                <input type="text" required />
                <span>Prénom</span>
              </div>
              <div className="input-container">
                <input type="text" required />
                <span>Nom de Famille</span>
              </div>
            </div>
            <div className="input-flex-container">
              <div className="input-container">
                <input type="text" required />
                <span>Email</span>
              </div>
              <div className="input-container">
                <input type="text" required />
                <span>Téléphone</span>
              </div>
            </div>
            <div className="input-flex-container">
              <div className="input-container">
                <input type="text" required />
                <span>Entreprise</span>
              </div>
              <div className="input-container">
                <input type="number" required />
                <span>Nombre de Personne</span>
              </div>
            </div>
            <select name="pets" id="pet-select">
              <option value="">Formation désirée</option>
              {courses.map((c) => (
                <option key={c.id} value={c.name}>
                  {c.name}
                </option>
              ))}
            </select>
            <textarea name="" id="" cols="30" rows="10" placeholder="Votre Message"></textarea>
            <button type="submit">Envoyer</button>
          </form>
        </div>
        <div className="infos">
          <h2>Infos</h2>
          <p>
            <GrLocation />
            Adresse
          </p>
          <p>
            <GrMailOption />
            mail
          </p>
          <p>
            <BsTelephoneFill /> 07 68 58 98 40
          </p>
          <ul>
            <li>
              <RiLinkedinFill />
            </li>
            <li>
              <RiYoutubeFill />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;
