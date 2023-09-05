import { useState, useRef } from "react";
import Projects from "./components/Projects/Projects.jsx";
import About from "./components/About/About.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Header from "./components/Header/Header.jsx";
import Home from "./components/Home/Home.jsx";
import NotFound from "./components/NotFound/NotFound.jsx";
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
      <Header />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home animateOn={animateOn} />} />
          <Route path="projects" element={<Projects />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <Footer />
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
