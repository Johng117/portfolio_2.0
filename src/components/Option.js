const Option = ({ optIcon, optAlt, optHeight, optClass, optName }) => {
  return (
    <div className="option">
      <img src={optIcon} alt={optAlt} height={optHeight} className={optClass} />
      <h5>{optName}</h5>
    </div>
  );
};

export default Option;
