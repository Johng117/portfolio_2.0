const Name = () => {
  const under = "_";
  const nameRole = { name: "John Gorman: ", role: "Junior Developer" };

  return (
    <div className="name-role-container">
      <span className="under">{under}</span>
      <div className="name">
        {nameRole.name.split("").map((letter, index) => {
          let style = { "animationDelay": 2.0 + index / 20 + "s" };
          return (
            <span style={style} key={index} className="letter">
              {letter}
            </span>
          );
        })}
      </div>
      <div className="role">
        {nameRole.role.split("").map((letter, index) => {
          let style = { "animationDelay": 2.5 + index / 20 + "s" };
          return (
            <span style={style} key={index} className="letter">
              {letter}
            </span>
          );
        })}
      </div>
    </div>
  );
};
{
  /* {nameRole.name.split("").map((letter, index) => {
          let style = { "animationDelay": 2.0 + index / 20 + "s" };
          return letter === " " ? (
            <span className="space"> </span>
          ) : (
            <span
              className="letter"
              style={style}
              key={index}
              aria-hidden="true"
            >
              {letter}
            </span>
          );
        })} */
}
{
  /* <div className="role">
        {nameRole.role.split("").map((letter, index) => {
          let style = { "animationDelay": 2.5 + index / 20 + "s" };
          return letter === " " ? (
            <span className="space"> </span>
          ) : (
            <span
              className="letter"
              style={style}
              key={index}
              aria-hidden="true"
            >
              {letter}
            </span>
          );
        })}
      </div> */
}

export default Name;
