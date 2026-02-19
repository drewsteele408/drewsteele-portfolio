import './Contact.css';

export function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>Get In Touch</h1>
        <p>I'd love to hear from you. Feel free to reach out through any of these channels.</p>
      </div>

      <div className="contact-links">
        <a
          href="mailto:drew@example.com"
          className="contact-link email-link"
        >
          <span className="contact-icon"></span>
          <div className="contact-info">
            <h3>Email</h3>
            <p>drew@example.com</p>
          </div>
          <span className="contact-arrow">→</span>
        </a>

        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link linkedin-link"
        >
          <span className="contact-icon"></span>
          <div className="contact-info">
            <h3>LinkedIn</h3>
            <p>Connect with me on LinkedIn</p>
          </div>
          <span className="contact-arrow">→</span>
        </a>

        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link github-link"
        >
          <span className="contact-icon"></span>
          <div className="contact-info">
            <h3>GitHub</h3>
            <p>Check out my code and projects</p>
          </div>
          <span className="contact-arrow">→</span>
        </a>
      </div>
    </div>
  );
}
