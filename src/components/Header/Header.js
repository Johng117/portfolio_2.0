import { useState } from "react";
import Name from "../Name/Name";
import Hamburger from "../Hamburger/Hamburger";
import MenuMobile from "../Menu-Mobile/MenuMobile";

const Header = ( { handleMenuValue } ) => {
  const [openMobMenu, setOpenMobMenu] = useState(false);
  const [isHamOpen, setIsHamOpen] = useState(false);
  const menuArray = ["main", "projects", "footer"];

  const openMenu = () => {
    setOpenMobMenu(!openMobMenu);
    setIsHamOpen(!isHamOpen);
  };

  const handleMenuClick = (e) => {
    setIsHamOpen(false);
    setOpenMobMenu(false);
    handleMenuValue(e.target.className)
  };

  console.log("header");

  return (
    <section className="header-section">
      <Name />
      <Hamburger openMenu={openMenu} isHamOpen={isHamOpen} />
      {openMobMenu && (
        <MenuMobile menuArray={menuArray} handleMenuClick={handleMenuClick} />
      )}
    </section>
  );
};

export default Header;
