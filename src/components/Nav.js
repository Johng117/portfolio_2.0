import Hamburger from "./Hamburger";
import Name from "./Name/Name"

const Nav = () => {
    return (
      <div className="title-menu">
        <div className="name-container">
          <Name />
        </div>
        <div className="hamburger-container">
          <Hamburger />
        </div>
      </div>
    );
}
 
export default Nav;