import { useState } from "react";
import Nav from "../Nav/Nav";
import MenuMobile from "../Menu-Mobile/MenuMobile";

const Start = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHamOpen, setIsHamOpen] = useState(false);
  const [menuValue, setMenuValue] = useState("start");

  const openMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsHamOpen(!isHamOpen);
  };

 const sectionName = (e) => {
    console.log(e.target.className);
 }

 const pageScroll = () => {
   
 }

  return (
    <div className="start-section">
      <Nav openMobileMenu={openMobileMenu} isHamOpen={isHamOpen} />
      {isMenuOpen && <MenuMobile openMobileMenu={openMobileMenu} sectionName={sectionName}/>}
    </div>
  );
};

export default Start;
