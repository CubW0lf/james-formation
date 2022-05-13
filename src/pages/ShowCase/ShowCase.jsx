import { useState, useEffect } from "react";
import assets from "../../api/assets.js";
import BottomWaves from "../../components/BottomWaves/BottomWaves";
import TopWaves from "../../components/TopWaves/TopWaves";
import { findCompanies } from "../../api/companyApi.js";
import { findReviews } from "../../api/reviewsApi.js";
import Stars from "../../components/Stars/Stars.jsx";
import "./ShowCase.css";

const ShowCase = () => {
  const [companies, setCompanies] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    findCompanies().then((data) => {
      setCompanies(data);
    });
    findReviews().then((data) => {
      setReviews(data);
    });
  }, []);

  return (
    <>
      <div className="ShowCase">
        <TopWaves color="var(--primary)" />
        <h2>Il nous font confiance</h2>

        <div className="container">
          <ul className="companies">
            {companies.map((c) => (
              <li key={c.id}>
                <img src={`${assets}${c.logo}`} className="logo" alt={`${c.name}`} />
              </li>
            ))}
          </ul>
          <ul className="reviews">
            {reviews.map((r) => (
              <li key={r.id}>
                <p className="name">{r.fullname}</p>
                <span dangerouslySetInnerHTML={{ __html: r.comment }}></span>
                <span className="stars">
                  <Stars number={r.rating} />
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <BottomWaves color="var(--primary)" />
    </>
  );
};

export default ShowCase;
