import { Link } from "react-router-dom";

const MenuFull = ({ menuArray, handlePageMenuClick }) => {
  return (
    <section className="page-menu-container">
      <ul>
        {menuArray.map((item, index) => {
          return (
            <li>
              <Link to={item}>
                <button>{item === "/" ? "home" : item}</button>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default MenuFull;
