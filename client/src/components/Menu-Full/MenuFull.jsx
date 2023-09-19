import { Link } from "react-router-dom";

const MenuFull = ({ menuArray }) => {
  return (
    <section className="page-menu-container">
      <ul className="menu-list" >
        {menuArray.map((item, index) => {
          return (
            <li key={index}>
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
