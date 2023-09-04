import { useState, useRef } from "react";
import Projects from "./components/Projects/Projects.jsx";
import About from "./components/About/About.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Header from "./components/Header/Header.jsx";
import Home from "./components/Home/Home.jsx";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";

function App() {
  const animateOn = useRef(0);

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home animateOn={animateOn} />} />
            <Route path="projects" element={<Projects />} />
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

function Layout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default App;
