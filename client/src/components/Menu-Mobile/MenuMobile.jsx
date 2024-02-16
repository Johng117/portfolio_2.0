import { motion } from "framer-motion";

const MenuMobile = ({ menuArray, handleMobMenuClick }) => {
  const itemState = {
    initial: { y: 0, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section className="menu-mobile-open">
      <ul>
        {menuArray.map((_, index) => {
          return (
            <motion.li
              className="mobile-menu-item"
              variants={itemState}
              animate="animate"
              initial="initial"
              transition={{ delay: 0.1 * index, ease: "linear" }}
              key={index}
            >
              <h5 className={menuArray[index]} onClick={handleMobMenuClick}>
                {menuArray[index] === "/" ? "home" : menuArray[index]}
              </h5>
            </motion.li>
          );
        })}
      </ul>
    </section>
  );
};

export default MenuMobile;
