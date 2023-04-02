import { useState } from "react";
import Name from "../Name/Name";
import Hamburger from "../Hamburger/Hamburger";
import MenuMobile from "../Menu-Mobile/MenuMobile";
import MenuFull from "../Menu-Full/MenuFull";

const Header = ({ handleMenuValue }) => {
  const [openMobMenu, setOpenMobMenu] = useState(false);
  const [isHamOpen, setIsHamOpen] = useState(false);
  const menuArray = ["main", "projects", "footer"];

  const openMenu = () => {
    setOpenMobMenu(!openMobMenu);
    setIsHamOpen(!isHamOpen);
  };

  const handleMobMenuClick = (e) => {
    setIsHamOpen(false);
    setOpenMobMenu(false);
    handleMenuValue(e.target.className);
  };

  const handlePageMenuClick = (e) => {
    handleMenuValue(e.target.className);
  };

  console.log("header");

  return (
    <section className="header-section">
      <Name />
      <MenuFull
        menuArray={menuArray}
        handlePageMenuClick={handlePageMenuClick}
      />
      <Hamburger openMenu={openMenu} isHamOpen={isHamOpen} />
      {openMobMenu && (
        <MenuMobile
          menuArray={menuArray}
          handleMobMenuClick={handleMobMenuClick}
        />
      )}
    </section>
  );
};

export default Header;
