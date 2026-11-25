

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h3>
            MAXWELL<span>WORLDTECH</span>
          </h3>
          <p>
            Building modern digital experiences through
            thoughtful design and frontend development.
          </p>
        </div>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} A. A. Skitto Maxwell.
          All rights reserved.
        </p>
        <p>Designed & Developed by Maxwell WorldTech.</p>
      </div>
    </footer>
  );
}

export default Footer;
