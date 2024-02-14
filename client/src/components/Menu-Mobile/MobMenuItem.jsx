
const MobMenuItem = ( { item, className, handleMobMenuClick }) => {
    return (
      <li className="mobile-menu-item">
        <h5 className={className} onClick={handleMobMenuClick}>
          {item === "/" ? "home" : item}
        </h5>
      </li>
    );
}
 
export default MobMenuItem;