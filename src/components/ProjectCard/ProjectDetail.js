
const ProjectDetail = ( { handleCardStatus } ) => {
    
  return (
      <section className="detail">
        <div className="cover-info" id="detail">
          <button className="detail-button" onClick={(e)=>handleCardStatus(e) } id="summary">Button!</button>
        </div>
      </section>
    );
}
 
export default ProjectDetail;