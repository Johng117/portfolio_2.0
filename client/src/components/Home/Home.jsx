import Name from "../Name/Name";

const Home = ({ animateOn }) => {
  return (
    <section className="home-section">
      <Name animateOn={animateOn} />
      <div className="socials">
        <a href="https://www.linkedin.com/in/john-gorman-a81069152/">
          {/* <img></img> */}
        </a>
      </div>
    </section>
  );
};

export default Home;
