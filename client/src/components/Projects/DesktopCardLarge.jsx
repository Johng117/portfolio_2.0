function DeskTopCardLarge({ cardData }) {

  return (
    <div>
      <img
        src={cardData.image}
        height={200}
        width={200}
        alt={cardData.alt}
      ></img>
    </div>
  );
}

export default DeskTopCardLarge;
