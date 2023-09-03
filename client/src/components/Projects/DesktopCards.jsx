import { useState } from "react";

const DesktopCards = () => {
  const [shadow, setShadow] = useState({
    item_1: true,
    item_2: false,
    item_3: false,
    item_4: false,
  });
  const [card, setCard] = useState("item_1");

  const handleShadow = (e) => {
    // e.preventDefault();
    for (const key in shadow) {
      shadow[key] = false;
    }
    setShadow({ ...shadow, [e.target.id]: true });
    setCard(e.target.id)
  };

  const setLargeCard = (e) => {

  }

  return (
    <section>
      <div className="desktop-card-container">
        <div className="small-cards-container">
          <div
            className={shadow.item_1 ? "item_1_shadow" : "item_1"}
            id="item_1"
            onClick={(e) => handleShadow(e)}
          ></div>
          <div
            className={shadow.item_2 ? "item_2_shadow" : "item_2"}
            id="item_2"
            onClick={(e) => handleShadow(e)}
          ></div>
          <div
            className={shadow.item_3 ? "item_3_shadow" : "item_3"}
            id="item_3"
            onClick={(e) => handleShadow(e)}
          ></div>
          <div
            className={shadow.item_4 ? "item_4_shadow" : "item_4"}
            id="item_4"
            onClick={(e) => handleShadow(e)}
          ></div>
        </div>
        <div className="big-card-container">
          <div>
            <h5>{card}</h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesktopCards;
