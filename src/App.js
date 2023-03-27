import { useState, useRef } from "react";
import Start from "./components/Start/Start";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer.js";
import "materialize-css/dist/css/materialize.min.css";

function App() {
  const [sectionName, setSectionName] = useState("start");
  const sectionRefs = useRef({})
  console.log(sectionName);

  


  return (
    <div className="App">
      <Start sectionRefs={sectionRefs} />
      <Projects sectionRefs={sectionRefs} />
      <Footer sectionRefs = {sectionRefs} />
    </div>
  );
}

export default App;
