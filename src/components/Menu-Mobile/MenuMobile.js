import MenuItem from "./MenuItem";

const MenuMobile = ({ openMobileMenu, sectionName }) => {
  const menuArray = ["Start", "Projects", "Footer"];

  const handleSectionName = (e) => {
    openMobileMenu();
    sectionName(e);
  };

  return (
    <div className="menu-mobile-open">
      {menuArray.map((_, index) => {
        return (
          <MenuItem
            key={index}
            item={menuArray[index]}
            handleSectionName={handleSectionName}
            className={menuArray[index]}
          />
        );
      })}
    </div>
  );
};

export default MenuMobile;
