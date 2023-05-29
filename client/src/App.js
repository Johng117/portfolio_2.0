import { useState, useRef } from "react";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About"
import Footer from "./components/Footer/Footer.js";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import { Routes, Route, Outlet, Link } from "react-router-dom";

function App() {
  const [sectionName, setSectionName] = useState({section: "home"});
  const animateOn = useRef(0);

  const handleMenuValue = (value) => {
    setSectionName({ section: value });
  };

  return (
    <section className="App">
      <Header handleMenuValue={handleMenuValue} />
      { sectionName.section==="home" && <Home animateOn={animateOn}/>}
      { sectionName.section==="projects" && <Projects />}
      { sectionName.section==="about" && <About />} 
      <Footer />
    </section>
  );
}

export default App;
