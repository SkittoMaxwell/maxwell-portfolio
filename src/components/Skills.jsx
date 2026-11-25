

function Skills() {
  const skills = [
    {
      category: "Frontend Development",
      technologies: ["HTML5", "CSS3", "JavaScript", "React"]
    },
    {
      category: "CMS & E-commerce",
      technologies: ["WordPress", "Shopify"]
    }
  ];

  return (
    <section className="skills" id="skills">
      <div className="skills-container">

        <div className="skills-heading">
          <p className="section-label">MY EXPERTISE</p>
          <h2>Skills & Technologies</h2>
          <p>
            Technologies and tools I use to build
            functional and engaging digital experiences.
          </p>
        </div>

        <div className="skills-grid">

          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              <span className="skill-number">
                0{index + 1}
              </span>

              <h3>{skill.category}</h3>

              <div className="skill-tags">
                {skill.technologies.map((technology) => (
                  <span key={technology}>
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Skills;
