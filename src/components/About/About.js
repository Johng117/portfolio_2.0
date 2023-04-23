const About = () => {
  return (
    <section className="about-section">
      <h3>About</h3>
      <form className="about-form">
        <div>
          <label htmlFor="name" className="name-label">
            Name:
            <input type="text" id="name" name="name" className="input-name" />
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
            Message Me:
            <textarea name="message-content" className="message" rows={10} cols={40}/>
          </label>
          <br />
        </div>
      </form>
    </section>
  );
};

export default About;
