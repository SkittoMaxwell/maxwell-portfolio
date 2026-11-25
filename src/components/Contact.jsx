

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <div className="contact-heading">
          <p className="section-label">GET IN TOUCH</p>
          <h2>Let's Work Together</h2>
          <p>
            Have a project in mind or an opportunity to discuss?
            I'd love to hear from you.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's start a conversation.</h3>
            <p>
              I'm open to remote opportunities, collaborations
              and interesting frontend development projects.
            </p>

            <div className="contact-item">
              <span>Email</span>
              <a href="mailto:maxwellworldtech@gmail.com">
                maxwellworldtech@gmail.com
              </a>
            </div>

            <div className="contact-item">
              <span>Location</span>
              <p>Ekiti State, Nigeria</p>
            </div>
          </div>

          <div className="contact-action">
            <h3>Have an idea?</h3>
            <p>Send me an email and let's discuss how we can bring it to life.</p>
            <a
              href="mailto:maxwellworldtech@gmail.com"
              className="btn-primary"
            >
              Send Me an Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
