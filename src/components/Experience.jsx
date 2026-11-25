

function Experience() {
  const experiences = [
    {
      period: "2025 – 2026",
      role: "Web Designer",
      company: "Sabinos",
      description:
        "Designed and developed websites with attention to layout, visual presentation and user experience."
    },
    {
      period: "2022 – 2023",
      role: "Supervisor / Inventory Officer",
      company: "Friendly Top, Ibadan",
      description:
        "Supervised daily operations and supported inventory tracking and stock management."
    },
    {
      period: "2021 – 2022",
      role: "Computer Operator",
      company: "LADAF, Home of Science, Ibadan",
      description:
        "Handled document typing, data entry, letterhead design and online registrations."
    }
  ];

  return (
    <section className="experience" id="experience">
      <div className="experience-container">
        <div className="experience-heading">
          <p className="section-label">MY PROFESSIONAL JOURNEY</p>
          <h2>Work Experience</h2>
        </div>

        <div className="experience-list">
          {experiences.map((item, index) => (
            <article className="experience-card" key={index}>
              <p className="experience-period">{item.period}</p>
              <div>
                <h3>{item.role}</h3>
                <h4>{item.company}</h4>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
