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
        optHeight="100px"
        optClass="adjustable"
        optName="Projects"
      />
      <Option
        optIcon={bio}
        optAlt="icon to represent biographical information"
        optHeight="100px"
        optClass="bio"
        optName="About/Contact"
      />
      <Social 
        linIcon={linkedin}
        socHeight="40px"
        socName="Social Media"
        optClass="social"
        
      />
    </div>
  );
};

export default Menu;
