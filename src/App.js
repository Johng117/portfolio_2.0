import { useState } from "react";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About"
import Footer from "./components/Footer/Footer.js";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";

function App() {
  const [sectionName, setSectionName] = useState({section: "home"});

  console.log("App");

  const handleMenuValue = (value) => {
    console.log(value);
    setSectionName({ section: value });
  };

  return (
    <section className="App">
      <Header handleMenuValue={handleMenuValue} />
      { sectionName.section==="home" && <Home />}
      { sectionName.section==="projects" && <Projects />}
      { sectionName.section==="about" && <About />} 
      <Footer />
    </section>
  );
}

export default App;
