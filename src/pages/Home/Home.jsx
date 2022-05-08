import PopUp from "../../components/PopUp/PopUp";
import Companies from "../Companies/Companies";
import Confidence from "../Confidence/Confidence";
import Instructor from "../Instructor/Instructor";
import Latest from "../Latest/Latest";
import Security from "../Security/Security";
import "./Home.css";

const Home = () => {
  return (
    <div className="Home">
      <Latest />
      <Companies />
      <Security />
      <Confidence />
      <Instructor />
      <PopUp />
    </div>
  );
};

export default Home;
