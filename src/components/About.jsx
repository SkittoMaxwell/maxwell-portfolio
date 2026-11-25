
function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">

        <div className="about-heading">
          <p className="section-label">GET TO KNOW ME</p>
          <h2>About Me</h2>
        </div>

        <div className="about-content">

          {/* PROFILE IMAGE */}
          <div className="about-image">
            <img
              src="/images/profile.jpg"
              alt="A. A. Skitto Maxwell"
            />
          </div>

          {/* BIOGRAPHY AND HIGHLIGHTS */}
          <div className="about-details">

            <div className="about-text">
              <h3>
                Turning ideas into meaningful
                digital experiences.
              </h3>

              <p>
                I'm A. A. Skitto Maxwell, a frontend
                developer passionate about building
                modern, responsive and accessible
                web experiences.
              </p>

              <p>
                I enjoy transforming ideas and designs
                into functional websites using modern
                frontend technologies. My focus is on
                writing clean code, creating intuitive
                interfaces and delivering meaningful
                digital experiences.
              </p>

              <p>
                I'm continuously learning, improving
                my technical abilities and exploring
                better ways to solve problems through
                technology.
              </p>
            </div>

            <div className="about-highlights">

              <div className="highlight-card">
                <h4>01</h4>
                <h3>Clean Development</h3>
                <p>Writing organized and maintainable code.</p>
              </div>

              <div className="highlight-card">
                <h4>02</h4>
                <h3>Responsive Design</h3>
                <p>Creating experiences across different screen sizes.</p>
              </div>

              <div className="highlight-card">
                <h4>03</h4>
                <h3>Continuous Growth</h3>
                <p>Learning new technologies and improving development skills.</p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;
