import { useState, useEffect } from "react";
import { getAllCourses } from "../../api/courseApi.js";
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
      <form>
        <div className="input-container">
          <input type="text" placeholder="Prénom" />
          <input type="text" placeholder="Nom de Famille" />
        </div>
        <div className="input-container">
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Téléphone" />
        </div>
        <div className="input-container">
          <input type="text" placeholder="Entreprise" />
          <input type="number" placeholder="Nombre de Personne" />
        </div>
        <select name="pets" id="pet-select">
          <option value="">Formation désirée</option>
          {courses.map((c) => (
            <option value={c.name}>{c.name}</option>
          ))}
        </select>
        <textarea name="" id="" cols="30" rows="10" placeholder="Votre Message"></textarea>
        <button type="submit">Envoyer</button>
      </form>
    </section>
  );
};

export default Contact;
