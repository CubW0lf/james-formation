import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import { uxContext } from "./contexts/uxContext";
import Footer from "./components/Footer/Footer";
import About from "./pages/About/About";
import Catalog from "./pages/Catalog/Catalog";
import Contact from "./pages/Contact/Contact";
import Legal from "./pages/Legal/Legal";
import SingleCourse from "./pages/SingleCourse/SingleCourse";
import "./App.css";

function App() {
  const [flashType, setFlashType] = useState("");
  const [flash, setFlash] = useState("");

  const deleteFlash = () => {
    setFlash("");
    setFlashType("");
  };

  const handleFlash = (type, text, duration) => {
    setFlashType(type);
    setFlash(text);
    setTimeout(deleteFlash, duration);
  };

  return (
    <uxContext.Provider value={{ flash, flashType, handleFlash }}>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/presentations" element={<About />} />
          <Route path="/formations" element={<Catalog />} />
          <Route path="/formations/:id" element={<SingleCourse />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/legal" element={<Legal />} />
        </Routes>
        <Footer />
      </div>
    </uxContext.Provider>
  );
}

export default App;
