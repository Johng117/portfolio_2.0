import { useState } from "react";
import DeskTopCardSmall from "./DesktopCardSmall";
import DeskTopCardLarge from "./DesktopCardLarge";
import Data from "./ProjectData";

const DesktopCards = () => {
  const [cards, setCards] = useState([true, false, false, false]);
  const [cardIndex, setCardIndex] = useState(0);
  const [largeCard, setLargeCard] = useState(0);

  const handleActivate = (e) => {
    e.preventDefault();
    console.log(e.target.id);
    const editedBoxes = cards.map((_, i) =>
      i === Number(e.target.id) ? true : false
    );
    setCards([...editedBoxes]);
    setCardIndex(Number(e.target.id) + 1);
    setLargeCard(Number(e.target.id) + 1);
    
  };

  // const setLargeCard = (e) => {};

  return (
    <section>
      <div className="desktop-card-container">
        <div className="small-cards-container">
          {cards.map((_, index, arr) => {
            return (
              <DeskTopCardSmall
                cardData={Data[index+1]}
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
            <DeskTopCardLarge cardData={Data[largeCard]}/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesktopCards;
