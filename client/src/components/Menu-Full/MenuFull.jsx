
import PageMenuItem from "./PageMenuItem";

const MenuFull = ( { menuArray, handlePageMenuClick }) => {
    return ( 
        <section className="page-menu-container">
            {menuArray.map((item,index)=> {
                return (
                  <PageMenuItem
                    key={index}
                    item={item}
                    itemName={menuArray[index]}
                    handlePageMenuClick={handlePageMenuClick}
                  />
                );
            })}
        </section>
     );
}
 
export default MenuFull;