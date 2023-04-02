import MobMenuItem from "./MobMenuItem";

const MenuMobile = ( { menuArray, handleMobMenuClick }) => {
  
  console.log("MenuMobile")

  return (
    <section className="menu-mobile-open">
      {menuArray.map((_, index) => {
        return (
          <MobMenuItem
            key={index}
            item={menuArray[index]}
            className={menuArray[index]}
            handleMobMenuClick={handleMobMenuClick}
          />
        );
      })}
    </section>
  );
};

export default MenuMobile;
