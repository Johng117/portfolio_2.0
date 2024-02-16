const Hamburger = ({ openMenu, isHamOpen }) => {
  // a function to change the state of hamburger icon when clicked.
  function handleHamClick(e) {
    e.preventDefault()
    openMenu();
  }

  return (
    <div className="hamburger-container">
      <div className="hamburger-btn">
        <a
          role="button"
          className={
            isHamOpen ? "hamburger-icon-open" : "hamburger-icon-closed"
          }
          onClick={handleHamClick}
          href="\#"
        >
          <span></span>
          <span></span>
          <span></span>
        </a>
      </div>
    </div>
  );
};

export default Hamburger;
