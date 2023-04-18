
import info from "../../assets/info.png";

const MobProjectCard = () => {
    return (
      <section class="mobile-card">
        <div class="project-pic"></div>
        <div class="project-brief">
          <button class="info-button">
            <img src={info} class="info-logo"></img>
          </button>
        </div>
        <div class="project-link"></div>
        <div class="cover-info"></div>
      </section>
    );
}
 
export default MobProjectCard;