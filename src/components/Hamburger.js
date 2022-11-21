import { useState } from "react";

const Hamburger = () => {
  const [menuOpen, setMenuOpen] = useState(true);
  // a function to change the state of hamburger icon when clicked.
  function handleMenuClick() {
    console.log("click", "john");
    setMenuOpen(!menuOpen);
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
