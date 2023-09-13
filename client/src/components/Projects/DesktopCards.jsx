import { useState } from "react";

const DesktopCards = () => {
  const [boxes, setBoxes] = useState([true, false, false, false]);
  console.log(boxes);
  const [card, setCard] = useState("item_1");

  const handleActivate = (e) => {
    e.preventDefault();
    const clearBoxes = boxes.map((item) => (item = false));
    clearBoxes[e.target.id] = true;
    setBoxes([...clearBoxes]);

    // setCard(e.target.id);
    console.log(e.target.className);
  };

  const setLargeCard = (e) => {};

  return (
    <section>
      <div className="desktop-card-container">
        <div className="small-cards-container">
          {boxes.map((_, i, arr) => {
            return (
              <div
                key={i}
                id={i}
                onClick={handleActivate}
                className={arr[i] ? "active" : "inactive"}
              >
                john
              </div>
            );
          })}
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
