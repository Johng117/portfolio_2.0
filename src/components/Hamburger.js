const Hamburger = ({ openMobileMenu, isHamOpen }) => {
  
  // a function to change the state of hamburger icon when clicked.
  function handleHamClick() {
    openMobileMenu();
  }

  return (
    <div className="hamburger-btn">
      <a
        role="button"
        className={isHamOpen ? "hamburger-icon-open" : "hamburger-icon-closed"}
        onClick={handleHamClick}
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
