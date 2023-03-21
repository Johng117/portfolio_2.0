const Name = () => {
    const under = "_";
    const nameRole = {
        name: "John Gorman: ",
        role: "Junior Developer"
    }

    return (
      <div className="name-role-container">
        <div className="name">
          <span className="under">{under}</span>
          {nameRole.name.split("").map((letter, index) => {
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
          })}
        </div>
        <div className="role">
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
        </div>
      </div>
    );
}
 
export default Name;