import { Link } from 'react-router-dom';
import './Home.css';

export function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Drew Steele</h1>
          <p className="tagline">Full-Stack Web Development Portfolio</p>
          
          <div className="cta-buttons">
            <Link to="/projects" className="btn btn-primary">
              View Projects
            </Link>
            <a
              href="https://github.com/drewsteele408"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              GitHub
            </a>
    
            <Link to="/contact" className="btn btn-secondary">
              Contact
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
