import Option from "./Option";
import Social from "./Social";
import linkedin from "../assets/linkedin (1).png"
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
      <Social 
        linIcon={linkedin}
        socHeight="50px"
        socName="Social Media"
        
      />
    </div>
  );
};

export default Menu;
