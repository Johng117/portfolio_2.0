function DeskTopCardSmall({ handleActivate, isActive, index, image }) {
  return (
    <div
      className={isActive ? "active" : "inactive"}
      onClick={handleActivate}
      id={index}
    >
      <img src={image} height={100}/>
    </div>
  );
}

export default DeskTopCardSmall;
