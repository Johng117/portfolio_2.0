const Option = ({ optIcon, optAlt, optHeight, optClass, optName }) => {
  return (
    <div className="option">
      <img src={optIcon} alt={optAlt} height={optHeight} className={optClass} />
      <p>{optName}</p>
    </div>
  );
};

export default Option;
