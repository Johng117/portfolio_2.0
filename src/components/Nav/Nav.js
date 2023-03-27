import Hamburger from "../Hamburger";
import Name from "../Name/Name";

const Nav = ({ openMobileMenu, isHamOpen }) => {
  return (
    <div className="title-menu">
      <div className="name-container">
        <Name />
      </div>
      <div className="hamburger-container">
        <Hamburger openMobileMenu={openMobileMenu} isHamOpen={isHamOpen}/>
      </div>
    </div>
  );
};

export default Nav;
