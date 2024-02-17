import { useNavigate } from "react-router-dom";

const MenuFull = ({ menuArray }) => {
  const navigate = useNavigate();

  const handleNavigate = (str) => {
    navigate(str);
  };

  return (
    <section className="page-menu-container">
      <ul className="menu-list">
        {menuArray.map((item, index) => {
          return (
            <li key={index}>
              <div
                onClick={() => {
                  handleNavigate(item);
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
