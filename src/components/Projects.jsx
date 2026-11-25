

function Projects() {
  const projects = [
    {
      number: "01",
      name: "Maxwell WorldTech",
      category: "Business Website",
      description:
        "A professional business website designed to present services, communicate brand identity and connect with potential clients.",
      technologies: ["HTML", "CSS", "JavaScript"]
    },
    {
      number: "02",
      name: "Bible Knowledge Hub",
      category: "Educational Web Application",
      description:
        "An interactive Bible examination platform designed to help users study Scripture through chapter-based quizzes and assessments.",
      technologies: ["HTML", "CSS", "JavaScript"]
    },
    {
      number: "03",
      name: "Solar & Inverter Website",
      category: "Corporate Website",
      description:
        "A modern business website designed to showcase solar energy solutions, company services and completed projects.",
      technologies: ["HTML", "CSS", "JavaScript"]
    }
  ];

  return (
    <section className="projects" id="projects">
      <div className="projects-container">

        <div className="projects-heading">
          <p className="section-label">MY RECENT WORK</p>
          <h2>Featured Projects</h2>
          <p>
            A selection of projects that demonstrate
            my development skills and creativity.
          </p>
        </div>

        <div className="projects-grid">

          {projects.map((project) => (
            <article className="project-card" key={project.number}>

              <div className="project-preview">
                <span>{project.number}</span>
              </div>

              <div className="project-details">
                <p className="project-category">
                  {project.category}
                </p>

                <h3>{project.name}</h3>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="project-tech">
                  {project.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                <a href="#contact" className="project-link">
                  Discuss a similar project →
                </a>
              </div>

            </article>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Projects;
