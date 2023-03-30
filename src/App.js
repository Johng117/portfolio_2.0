import { useState, useEffect, useRef } from "react";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer.js";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import "materialize-css/dist/css/materialize.min.css";

function App() {
  const [sectionName, setSectionName] = useState({section: "main"});

  console.log("App");
  const setScroll = () => {
    return sectionName.section === "main"
      ? window.scrollTo({ top: 0, behavior: "auto" })
      : sectionName.section === "projects"
      ? window.scrollTo({ top: 600, behavior: "smooth" })
      : sectionName.section === "footer"
      ? window.scrollTo({ top: 900, behavior: "smooth" })
      : null;
  };

  useEffect(() => {
    setScroll();
  }, [sectionName]);

  const handleMenuValue = (value) => {
    console.log(value);
    setSectionName({ section: value });
  };

  return (
    <section className="App">
      <Header handleMenuValue={handleMenuValue} />
      <Main />
      <Projects />
      <Footer />
    </section>
  );
}

export default App;
