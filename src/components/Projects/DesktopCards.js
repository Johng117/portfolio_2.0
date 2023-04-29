import { useState } from "react";

const DesktopCards = () => {
  const [shadow, setShadow] = useState({
    item_1: false,
    item_2: false,
    item_3: false,
    item_4: false,
  });

  const handleShadow = (e) => {
    // e.preventDefault();
    for(const key in shadow) {
        shadow[key]=false;
    }
    setShadow({...shadow, [e.target.id]: true})
  };
  return (
    <section>
      <div className="desktop-card-container">
        <div className="small-cards-container">
          <div
            className={shadow.item_1 ? "item_1" : "john"}
            id="item_1"
            onClick={(e) => handleShadow(e)}
          ></div>
          <div
            className={shadow.item_2 ? "item_2" : "john"}
            id="item_2"
            onClick={(e) => handleShadow(e)}
          ></div>
          <div
            className={shadow.item_3 ? "item_3" : "john"}
            id="item_3"
            onClick={(e) => handleShadow(e)}
          ></div>
          <div
            className={shadow.item_4 ? "item_4" : "john"}
            id="item_4"
            onClick={(e) => handleShadow(e)}
          ></div>
        </div>
        <div className="big-card-container"></div>
      </div>
    </section>
  );
};

export default DesktopCards;
