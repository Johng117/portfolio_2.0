import Hamburger from "../Hamburger";
import Name from "../Name/Name";

const Nav = ({ openMobileMenu }) => {
  return (
    <div className="title-menu">
      <div className="name-container">
        <Name />
      </div>
      <div className="hamburger-container">
        <Hamburger openMobileMenu={openMobileMenu} />
      </div>
    </div>
  );
};

export default Nav;
