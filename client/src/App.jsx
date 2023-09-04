import { useState, useRef } from "react";
// import Projects from "./components/Projects/Projects.jsx";
import Projects from "./components/Projects/Projects.jsx";
import About from "./components/About/About.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Header from "./components/Header/Header.jsx";
import Home from "./components/Home/Home.jsx";
import { Routes, Route, Link, Outlet } from "react-router-dom";

function App() {
  const animateOn = useRef(0);


  return (
    <>
      {/* <Header handleMenuValue={handleMenuValue} /> */}
      <main role="">
        <section className="App">
          <Routes>
            {/* {sectionName.section === "home" && <Home animateOn={animateOn} />}
            {sectionName.section === "projects" && <Projects />}
            {sectionName.section === "about" && <About />} */}
            <Route path="/" element={<Layout />} />
            <Route index element={<Home animateOn={animateOn} />} />
            <Route path="projects" element={<Projects />} />
            <Route path="about" element={<About />} />
          </Routes>
        </section>
      </main>
      <Footer />
    </>
  );
}

function Layout() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/projects"}>Projects</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  );
}

export default App;
