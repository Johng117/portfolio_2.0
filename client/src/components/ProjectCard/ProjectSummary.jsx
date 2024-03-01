import LYME from "../../assets/Lyme.svg";

const ProjectSummary = ({ handleCardStatus }) => {
  return (
    <section className="summary">
      <div className="project-pic">
        <img src={LYME} height={150}></img>
      </div>
      <div className="project-brief">
      <div></div>
        <button className="button" onClick={(e) => handleCardStatus(e)}>
          More Info
        </button>
      </div>
      <div className="project-link">
        <a href="https://commons.wikimedia.org/wiki/File:LYME_software_bundle.svg">
          LYME
        </a>
      </div>
    </section>
  );
};

export default ProjectSummary;
