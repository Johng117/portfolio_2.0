import { React, useEffect } from "react";

const Name = ({ animateOn }) => {
  const under = "_";
  const nameRole = {
    firstName: "John ",
    secondName: "Gorman: ",
    roleFirst: "Junior",
    roleSecond: "Developer",
  };

  useEffect(() => {
    animateOn.current = 1;
    console.log(animateOn);
  }, []);

  return (
    <div className="name-role-container">
      {animateOn.current === 0 && (
        <>
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
        </>
      )}
      {animateOn.current !== 0 && (
        <div className="static-content">
          <h1 className="static-name">John Gorman:</h1>
          <h1 className="static-role">Junior Developer</h1>
        </div>
      )}
    </div>
  );
};

export default Name;
