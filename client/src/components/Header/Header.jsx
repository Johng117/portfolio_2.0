import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Hamburger from "../Hamburger/Hamburger";
import MenuMobile from "../Menu-Mobile/MenuMobile";
import MenuFull from "../Menu-Full/MenuFull";
import MobName from "../Mob-Name/MobName";

const Header = ({ animateOn }) => {
  const [openMobMenu, setOpenMobMenu] = useState(false);
  const [isHamOpen, setIsHamOpen] = useState(false);
  const menuArray = ["/", "projects", "contact"];
  const navigate = useNavigate();

  const openMenu = () => {
    setOpenMobMenu(!openMobMenu);
    setIsHamOpen(!isHamOpen);
  };

  const handleMobMenuClick = (str) => {
    console.log("mobile", str)
    setIsHamOpen(false);
    setOpenMobMenu(false);
    navigate(str)
  };

  const handlePageMenuClick = (str) => {
    console.log("full", str)
    navigate(str)
  };

  return (
    <section className="header-section">
      <MobName/>
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
