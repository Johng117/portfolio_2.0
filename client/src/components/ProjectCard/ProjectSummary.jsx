import info from "../../assets/info.png";

const ProjectSummary = ( { handleCardStatus } ) => {
  return (
    <section className="summary">
      <div className="project-pic"></div>
      <div className="project-brief">
        <button className="info-button">
          <img src={info} className="info-logo" onClick={(e)=>handleCardStatus(e)} id="detail" alt="information 'i' logo"></img>
        </button>
      </div>
      <div className="project-link"></div>
    </section>
  );
};

export default ProjectSummary;
