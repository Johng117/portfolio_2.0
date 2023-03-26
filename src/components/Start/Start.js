import { useState } from "react";
import Nav from "../Nav/Nav";
import MenuMobile from "../Menu-Mobile/MenuMobile";

const Start = () => {
  const [mobMenuOpen, setMobMenuOpen] = useState(false);

  const openMobileMenu = () => {
    setMobMenuOpen(!mobMenuOpen);
  };

  return (
    <div className="start-section">
      <Nav openMobileMenu={openMobileMenu} />
      {mobMenuOpen && <MenuMobile />}
    </div>
  );
};

export default Start;
