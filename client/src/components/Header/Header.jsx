import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import Hamburger from "../Hamburger/Hamburger";
import MenuMobile from "../Menu-Mobile/MenuMobile";
import MenuFull from "../Menu-Full/MenuFull";

const Header = () => {
  const [openMobMenu, setOpenMobMenu] = useState(false);
  const [isHamOpen, setIsHamOpen] = useState(false);
  const menuArray = ["/", "projects", "about"];

  const openMenu = () => {
    setOpenMobMenu(!openMobMenu);
    setIsHamOpen(!isHamOpen);
  };

  const handleMobMenuClick = (e) => {
    setIsHamOpen(false);
    setOpenMobMenu(false);
  };

  const handlePageMenuClick = (e) => {};

  return (
    <section className="header-section">
      <Logo />
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
