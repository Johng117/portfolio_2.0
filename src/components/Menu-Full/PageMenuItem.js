
const PageMenuItem = ( { item, itemName, handlePageMenuClick }) => {
    return ( 
        <div className="page-menu-item">
            <h2 className={itemName} onClick={handlePageMenuClick}>{ item }</h2>
        </div>
     );
}
 
export default PageMenuItem;