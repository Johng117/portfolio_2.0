const Social = ({ linIcon, socHeight, socName, optClass }) => {
  return (
    <div className={optClass}>
      <a href="https://www.linkedin.com/in/john-gorman-a81069152/" target="_blank" rel="">
        <img src={linIcon} height={socHeight} />
      </a>
      <img />
      <p>{socName}</p>
    </div>
  );
};

export default Social;
