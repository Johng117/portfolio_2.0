const About = () => {
  return (
    <section className="about-section">
      <div className="about-heading-container">
        <h3>About</h3>
      </div>
      <div className="text-form-container">
        <div></div>
        <div className="form-container">
          <form className="about-form">
            <div>
              <label htmlFor="name" className="name-label">
                Name:
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="input-name"
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
                />
              </label>
            </div>
            <div className="message-container">
              <label htmlFor="message" className="message-label">
                Message:
                <textarea
                  name="message-content"
                  className="message"
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
