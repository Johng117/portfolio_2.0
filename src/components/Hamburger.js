import { useState } from "react";

const Hamburger = ( { openMobileMenu }) => {
  const [menuOpen, setMenuOpen] = useState(true);

  // a function to change the state of hamburger icon when clicked.
  function handleMenuClick() {
    setMenuOpen(!menuOpen);
    openMobileMenu()
  }

  return (
    <div className="hamburger-btn">
      <a
        role="button"
        className={menuOpen ? "hamburger-icon-closed" : "hamburger-icon-open"}
        onClick={handleMenuClick}
        href="\#"
      >
        <span></span>
        <span></span>
        <span></span>
      </a>
    </div>
  );
};

export default Hamburger;
