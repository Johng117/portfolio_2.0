import { renderToStaticMarkup } from "react-dom/server";
import TechPattern from "../../assets/TechPattern.jsx";

const Home = () => {
  const svgString = encodeURIComponent(renderToStaticMarkup(<TechPattern />));
  return (
    <section
      className="home-section"
      style={{
        backgroundImage: `url("data:image/svg+xml,${svgString}")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="intro-name">
        <h5>writing</h5>
      </div>
      <div className="picture-social">
        <h5>picture and social</h5>
      </div>
    </section>
  );
};

export default Home;
