
const MenuItem = ( { item, handleSectionName, className }) => {
    return ( 
        <div className="mobile-menu-item">
            <h5 className={className} onClick={handleSectionName}>{ item }</h5>
        </div>
     );
}
 
export default MenuItem;