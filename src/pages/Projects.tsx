import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import './Projects.css';

export function Projects() {
  return (
    <div className="projects-page">
      <div className="projects-header">
        <h1>My Projects</h1>
        <p>Full-stack applications showcasing my development expertise</p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="card-content">
              <h3>{project.title}</h3>
              <p className="card-description">{project.description}</p>
              
              <div className="card-stack">
                <span className="stack-label">Stack:</span>
                <div className="stack-tags">
                  {project.stack.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="card-links">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-link live-link"
                >
                  Live Demo
                </a>
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-link repo-link"
                >
                  GitHub Repo
                </a>
              </div>

              <Link
                to={`/project/${project.id}`}
                className="card-link details-link"
              >
                View Details →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
