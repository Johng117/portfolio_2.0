
const MenuItem = ( { item, className, handleMenuClick }) => {
    return ( 
        <div className="mobile-menu-item">
            <h5 className={className} onClick={handleMenuClick}>{ item }</h5>
        </div>
     );
}
 
export default MenuItem;