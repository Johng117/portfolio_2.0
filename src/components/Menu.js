import Option from "./Option";
import Social from "./Social";
import adjustable from "../assets/adjustable-wrench (1).png";
import bio from "../assets/biography.png"

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
      <Option
        optIcon={bio}
        optAlt="icon to represent biographical information"
        optHeight="150px"
        optClass="bio"
        optName="About/Contact"
      />
      <Social />
    </div>
  );
};

export default Menu;
