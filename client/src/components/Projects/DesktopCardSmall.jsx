function DeskTopCardSmall({ handleActivate, isActive, index, cardData }) {
  return (
    <div
      className={isActive ? "active" : "inactive"}
      onClick={handleActivate}
      id={index}
    >
      <img src={cardData.image} height={100} alt={cardData.name} />
    </div>
  );
}

export default DeskTopCardSmall;
