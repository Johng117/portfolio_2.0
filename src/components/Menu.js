import Option from "./Option";
import adjustable from "../assets/adjustable-wrench (1).png";

const Menu = () => {
  return (
    <div className="menu">
      <Option
        optIcon={adjustable}
        optAlt="icon to represent work being done"
        optHeight="150px"
        optClass="adjustable"
        optName="Projects"
      />
      <Option />
      <Option />
    </div>
  );
};

export default Menu;
