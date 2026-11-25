import { useState } from "react";

import Navbar from "./components/Navbar";
import "./App.css";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
  return localStorage.getItem("portfolio-theme") === "dark";
});

function toggleTheme() {
    setDarkMode((previousMode) => {
      const newMode = !previousMode;

      localStorage.setItem(
        "portfolio-theme",
        newMode ? "dark" : "light"
      );

      return newMode;
    });
  }
  return (
    <div className={darkMode ? "app dark-mode" : "app"}>
      <Navbar
        darkMode={darkMode}
        onToggleTheme={toggleTheme}
      />
      <main>
        <section className="hero" id="home">

          <div className="hero-content">

            <p className="hero-intro">
              HELLO, I'M
            </p>

            <h1>
              A. A. SKITTO
              <span> MAXWELL.</span>
            </h1>

            <h2>
              Frontend Developer & Web Designer
            </h2>

            <p className="hero-description">
              I build modern, responsive and user-friendly
              websites that combine thoughtful design
              with functional experiences.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="btn-primary">
                View My Projects
              </a>

              <a href="#contact" className="btn-secondary">
                Let's Talk
              </a>
            </div>

            <div className="hero-tech">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>React</span>
            </div>

          </div>

        </section>
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
