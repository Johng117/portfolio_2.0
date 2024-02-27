import MobCards from "../Projects/MobCards";
import DesktopCards from "./DesktopCards";

const Projects = () => {
  return (
    <section className="projects-section">
      <h3>Projects</h3>
      
      <div className="mob-cards">
        <MobCards />
      </div>
      {/* <div className="desktop-cards">
        <DesktopCards />
      </div> */}
    </section>
  );
};

export default Projects;
