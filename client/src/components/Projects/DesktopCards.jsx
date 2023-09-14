import { useState } from "react";
import DeskTopCardSmall from "./DesktopCardSmall";
import Data from "./ProjectData";

const DesktopCards = () => {
  const [boxes, setBoxes] = useState([true, false, false, false]);
  const [card, setCard] = useState(0);

  const handleActivate = (e) => {
    e.preventDefault();
    console.log(e.target.id);
    const editedBoxes = boxes.map((_, i) =>
      i === Number(e.target.id) ? true : false
    );
    setBoxes([...editedBoxes]);
    setCard(Number(e.target.id) + 1);
  };

  const setLargeCard = (e) => {};

  return (
    <section>
      <div className="desktop-card-container">
        <div className="small-cards-container">
          {boxes.map((_, index, arr) => {
            return (
              <DeskTopCardSmall
                image={Data[index+1].image}
                key={index}
                index={index}
                handleActivate={handleActivate}
                isActive={arr[index]}
              />
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
