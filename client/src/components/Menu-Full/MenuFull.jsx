
const MenuFull = ({ menuArray, handlePageMenuClick }) => {
  
  return (
    <section className="page-menu-container">
      <ul className="menu-list">
        {menuArray.map((item, index) => {
          return (
            <li key={index}>
              <div
                onClick={() => {
                  handlePageMenuClick(item);
                }}
                className="full-menu-item"
              >
                {item === "/" ? "home" : item}
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default MenuFull;
