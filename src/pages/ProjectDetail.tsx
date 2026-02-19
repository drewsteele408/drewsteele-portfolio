import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';
import './ProjectDetail.css';

export function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === Number(id));

  if (!project) {
    return (
      <div className="project-detail">
        <div className="error-message">
          <h2>Project not found</h2>
          <Link to="/projects">Back to Projects</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="project-detail">
      <Link to="/projects" className="back-link">
        ← Back to Projects
      </Link>

      <div className="detail-header">
        <h1>{project.title}</h1>
        <p className="detail-description">{project.description}</p>
      </div>

      {/* Problem & Solution */}
      <section className="detail-section">
        <h2>Problem → Solution</h2>
        <div className="problem-solution">
          <div className="problem">
            <h3>Problem</h3>
            <p>{project.problem}</p>
          </div>
          <div className="solution">
            <h3>Solution</h3>
            <p>{project.solution}</p>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="detail-section">
        <h2>Key Features</h2>
        <ul className="features-list">
          {project.keyFeatures.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </section>

      {/* Stack & Architecture */}
      <section className="detail-section">
        <h2>Stack & Architecture</h2>
        <div className="stack-content">
          <div className="stack-list">
            <h3>Technologies</h3>
            <div className="tech-stack">
              {project.stack.map((tech) => (
                <span key={tech} className="tech-badge">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="architecture">
            <h3>Architecture Overview</h3>
            <p>{project.architecture}</p>
          </div>
        </div>
      </section>




      {/* Links */}
      <section className="detail-section">
        <h2>Links & Resources</h2>
        <div className="project-links">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="link-button primary"
          >
            → View Live Demo
          </a>
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="link-button secondary"
          >
            → View GitHub Repository
          </a>
        </div>
      </section>
    </div>
  );
}
