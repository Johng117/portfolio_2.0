import Hamburger from "./Hamburger";

const Nav = () => {
    return (
      <div className="title-menu">
        <div className="name-container">
          John Gorman<span className="colon">:</span>
          <br />
          Junior Developer
        </div>
        <div className="hamburger-container">
          <Hamburger />
        </div>
      </div>
    );
}
 
export default Nav;