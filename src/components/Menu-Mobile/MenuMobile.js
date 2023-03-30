import MenuItem from "./MenuItem";

const MenuMobile = ( { menuArray, handleMenuClick }) => {
  
  console.log("MenuMobile")

  return (
    <section className="menu-mobile-open">
      {menuArray.map((_, index) => {
        return (
          <MenuItem
            key={index}
            item={menuArray[index]}
            className={menuArray[index]}
            handleMenuClick={handleMenuClick}
          />
        );
      })}
    </section>
  );
};

export default MenuMobile;
