import './Contact.css';

export default function Contact() {
  return (
    <>
      <section id="contact" className="contact-section">
        <div className="section-header" style={{ textAlign: 'left' }}>
          <div className="section-tag">Get In Touch</div>
          <h2 className="section-title">Contact</h2>
        </div>

        <div className="contact-glow">
          <div className="contact-emoji">👋</div>
          <h3 className="contact-heading">
            Let's <span>Work Together</span>
          </h3>
          <p className="contact-sub">
            I'm open to exciting projects, collaborations, and opportunities.
            Feel free to reach out — I'll get back to you promptly.
          </p>

          <div className="contact-links">
            <a className="contact-link" href="mailto:nzoom1768123@gmail.com">
              <span className="link-icon">✉️</span>
              nzoom1768123@gmail.com
            </a>
            <a className="contact-link" href="tel:+919964090263">
              <span className="link-icon">📞</span>
              +91 99640 90263
            </a>
            <a
              className="contact-link"
              href="https://github.com/vetrimaarann"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="link-icon">🐙</span>
              github.com/vetrimaarann
            </a>
          </div>

          <a className="btn-primary" href="mailto:nzoom1768123@gmail.com">
            Send a Message →
          </a>
        </div>
      </section>

      <footer>
        <p>© 2026 <span>Sunder G</span> · Built with React + Vite</p>
      </footer>
    </>
  );
}
