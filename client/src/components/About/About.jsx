import { useState } from "react";

const About = () => {
  const [inputs, setInputs] = useState({ name: "", email: "", message: "" });

  //  errors of inputted data
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  // thanks message on submission
  // const [thanks, setThanks] = useState(false);

  // managing error response of post request
  // const [showError, setShowError] = useState(false);

  const handleInputs = (e) => {
    e.preventDefault();
    setInputs({ ...inputs, [e.target.id]: e.target.value });
  };

  // a function to reset values
  const resetValues = () => {
    setInputs({ name: "", email: "", message: "" });
  };

  // a function to validate name input
  const validName = (name) => {
    return name.length > 2 && name.length < 30 ? true : false;
  };
  // a function to validate email input
  const validEmail = (email) => {
    return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
      email
    );
  };
  // a function to validate inputted message
  const validMessage = (message) => {
    return message.length >= 10 ? true : false;
  };

  // a function to check that all inputs are valid and render errors should there be an invalid input
  const validateAll = () => {
    validName(inputs.name) ? setNameError(false) : setNameError(true);
    validEmail(inputs.email) ? setEmailError(false) : setEmailError(true);
    validMessage(inputs.message)
      ? setMessageError(false)
      : setMessageError(true);
    return (
      validName(inputs.name) &&
      validEmail(inputs.email) &&
      validMessage(inputs.message)
    );
  };

  const sendMessage = async (message) => {
    try {
      const body = message;
      const headers = { "Content-Type": "application/json" };
      const response = await fetch("http://localhost:3001/messages/", {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body),
      });
      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(inputs);
    let valid = validateAll();
    if (valid) {
      sendMessage(inputs);
      resetValues();
    }
  };

  return (
    <section className="about-section">
      <div className="about-heading-container">
        <h3>About</h3>
      </div>
      <div className="text-form-container">
        <div></div>
        <div className="form-container">
          <form className="about-form" onSubmit={handleSubmit}>
            <div className="form-name">
              <label htmlFor="name" className="name-label">
                Name:
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="input-name"
                  onChange={(e) => handleInputs(e)}
                  value={inputs.name}
                />
              </label>
            </div>
            <div className="name-error">
              {nameError && <h5>Error: Name to short.</h5>}
            </div>
            <div className="form-email">
              <label htmlFor="name" className="email-label">
                E-mail:
                <input
                  type="text"
                  id="email"
                  name="email"
                  className="input-email"
                  onChange={(e) => handleInputs(e)}
                  value={inputs.email}
                />
              </label>
            </div>
            <div className="email-error">
              {emailError && <h5>Error: Invalid email.</h5>}
            </div>
            <div className="message-container">
              <label htmlFor="message" className="message-label">
                Message:
                <textarea
                  name="message-content"
                  className="message"
                  id="message"
                  onChange={(e) => handleInputs(e)}
                  value={inputs.message}
                />
              </label>
              <br />
            </div>
            <div className="message-error">
              {messageError && <h5>Error: Message to short.</h5>}
            </div>
            <button>Send</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default About;
