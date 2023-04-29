// import { useRef } from "react";
// components
import MobCards from "../Projects/MobCards";
import DesktopCards from "./DesktopCards";

const Projects = () => {
  return (
    <section className="projects-section">
      <h3>Projects</h3>
      <div className="mob-cards">
        <MobCards />
      </div>
      <div>
        <DesktopCards />
      </div>
    </section>
  );
};

export default Projects;
