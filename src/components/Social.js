const Social = ({ linIcon, socHeight, socName }) => {
  return (
    <div className="social">
      <a href="https://www.linkedin.com/in/john-gorman-a81069152/" target="_blank" rel="">
        <img src={linIcon} height={socHeight} />
      </a>
      <img />
      <h5>{socName}</h5>
    </div>
  );
};

export default Social;
