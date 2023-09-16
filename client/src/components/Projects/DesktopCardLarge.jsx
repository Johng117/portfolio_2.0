function DeskTopCardLarge({ cardData }) {
  console.log(cardData.image);
  return (
    <div>
      <img src={cardData.image} height={200} width={200}></img>
    </div>
  );
}

export default DeskTopCardLarge;
