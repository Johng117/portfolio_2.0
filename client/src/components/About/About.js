import { useState } from "react";

const About = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleInputs = (e) => {
    e.preventDefault();
    e.target.id === "name"
      ? setName(e.target.value)
      : e.target.id === "email"
      ? setEmail(e.target.value)
      : setMessage(e.target.value);
  };

  const handleSubmit = (e)=> {

  }
  
  return (
    <section className="about-section">
      <div className="about-heading-container">
        <h3>About</h3>
      </div>
      <div className="text-form-container">
        <div></div>
        <div className="form-container">
          <form className="about-form" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="name-label">
                Name:
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="input-name"
                  onChange={(e) => handleInputs(e)}
                  value={name}
                />
              </label>
            </div>
            <div>
              <label htmlFor="name" className="email-label">
                E-mail:
                <input
                  type="text"
                  id="email"
                  name="email"
                  className="input-email"
                  onChange={(e) => handleInputs(e)}
                  value={email}
                />
              </label>
            </div>
            <div className="message-container">
              <label htmlFor="message" className="message-label">
                Message:
                <textarea
                  name="message-content"
                  className="message"
                  id="message"
                  onChange={(e) => handleInputs(e)}
                  value={message}
                />
              </label>
              <br />
            </div>
            <button>Send</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default About;
