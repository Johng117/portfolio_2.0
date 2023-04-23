const About = () => {
  return (
    <section className="about-section">
      <h3>About</h3>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" className="input-name" size="10" />
      </form>
    </section>
  );
};

export default About;
