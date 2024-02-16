import { useState } from "react";
import Hamburger from "../Hamburger/Hamburger";
import MenuMobile from "../Menu-Mobile/MenuMobile";
import MenuFull from "../Menu-Full/MenuFull";
import MobName from "../Mob-Name/MobName";

const Header = ({ animateOn }) => {
  const [openMobMenu, setOpenMobMenu] = useState(false);
  const [isHamOpen, setIsHamOpen] = useState(false);
  const menuArray = ["/", "projects", "about"];

  const openMenu = () => {
    setOpenMobMenu(!openMobMenu);
    setIsHamOpen(!isHamOpen);
  };

  const handleMobMenuClick = () => {
    setIsHamOpen(false);
    setOpenMobMenu(false);
  };

  const handlePageMenuClick = (e) => {};

  return (
    <section className="header-section">
      <MobName />
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
