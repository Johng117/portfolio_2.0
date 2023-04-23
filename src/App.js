import { useState } from "react";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About"
import Footer from "./components/Footer/Footer.js";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
// import "materialize-css/dist/css/materialize.min.css";

function App() {
  const [sectionName, setSectionName] = useState({section: "main"});

  console.log("App");

  const handleMenuValue = (value) => {
    console.log(value);
    setSectionName({ section: value });
  };

  return (
    <section className="App">
      <Header handleMenuValue={handleMenuValue} />
      { sectionName.section==="main" && <Main />}
      { sectionName.section==="projects" && <Projects />}
      { sectionName.section==="about" && <About />} 
      <Footer />
    </section>
  );
}

export default App;
