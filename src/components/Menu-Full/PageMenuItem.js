
const PageMenuItem = ( { item, itemName, handlePageMenuClick }) => {
    return ( 
        <div className="page-menu-item">
            <h5 className={itemName} onClick={handlePageMenuClick}>{ item }</h5>
        </div>
     );
}
 
export default PageMenuItem;