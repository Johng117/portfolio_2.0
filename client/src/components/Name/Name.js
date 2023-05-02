const Name = () => {
  const under = "_";
  const nameRole = {
    firstName: "John ",
    secondName: "Gorman: ",
    roleFirst: "Junior",
    roleSecond: "Developer",
  };

  return (
    <div className="name-role-container">
      <span className="under">{under}</span>
      <div className="name">
        {nameRole.firstName.split("").map((letter, index) => {
          let style = { "animationDelay": 2.0 + index / 20 + "s" };
          return (
            <span style={style} key={index} className="letter">
              {letter}
            </span>
          );
        })}
      </div>
      <div className="name">
        {nameRole.secondName.split("").map((letter, index) => {
          let style = { "animationDelay": 2.2 + index / 20 + "s" };
          return (
            <span style={style} key={index} className="letter">
              {letter}
            </span>
          );
        })}
      </div>
      <div className="role">
        {nameRole.roleFirst.split("").map((letter, index) => {
          let style = { "animationDelay": 2.5 + index / 20 + "s" };
          return (
            <span style={style} key={index} className="letter-role">
              {letter}
            </span>
          );
        })}
      </div>
      <div className="role">
        {nameRole.roleSecond.split("").map((letter, index) => {
          let style = { "animationDelay": 2.7 + index / 20 + "s" };
          return (
            <span style={style} key={index} className="letter-role">
              {letter}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Name;
