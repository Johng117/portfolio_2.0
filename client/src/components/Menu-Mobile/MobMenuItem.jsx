
const MobMenuItem = ( { item, className, handleMobMenuClick }) => {
    return ( 
        <div className="mobile-menu-item">
            <h5 className={className} onClick={handleMobMenuClick}>{ item }</h5>
        </div>
     );
}
 
export default MobMenuItem;