import { useState } from "react";

const DesktopCards = () => {
  const [boxes, setBoxes] = useState([true, false, false, false]);
  const [card, setCard] = useState(0);

  const handleActivate = (e) => {
    e.preventDefault();
    // const clearBoxes = boxes.map((item) => (item = false));
    // clearBoxes[e.target.id] = true;
    // setBoxes([...clearBoxes]);
    const editedBoxes = boxes.map((_, i) =>
      i === Number(e.target.id) ? true : false
    );
    setBoxes([...editedBoxes]);
    setCard(Number(e.target.id)+1);
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
                <h1>{i + 1}</h1>
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
